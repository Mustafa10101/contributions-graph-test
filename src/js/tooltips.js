function showTooltip(contributionCount, date, target) {
  if (contributionCount > 0) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    const formattedDate = date.toLocaleString("ru-RU", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    tooltip.innerHTML = `<p>${contributionCount} contributions</p><p class="tooltip-date" style="color: #7C7C7C;">${formattedDate}</p>`;
    document.body.appendChild(tooltip);
    const targetRect = target.getBoundingClientRect();
    const tooltipHeight = tooltip.offsetHeight;
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipTop =
      targetRect.top - tooltipHeight - TOOLTIP_OFFSET + window.scrollY;
    const tooltipLeft =
      targetRect.left - (tooltipWidth - targetRect.width) / 2 + window.scrollX;
    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;
    requestAnimationFrame(() => tooltip.classList.add("tooltip-visible"));
    target.addEventListener("mouseout", () => {
      tooltip.remove();
    });
  }
}

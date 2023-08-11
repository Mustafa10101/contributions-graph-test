function createCell(contributionCount, date) {
  const cell = document.createElement("div");
  cell.classList.add("contribution-cell");
  let cellClass = "";
  if (contributionCount === CONTRIBUTION_LEVELS[0]) {
    cellClass = "white";
  } else if (contributionCount < CONTRIBUTION_LEVELS[1]) {
    cellClass = "blue-1-9";
  } else if (contributionCount < CONTRIBUTION_LEVELS[2]) {
    cellClass = "blue-10-19";
  } else if (contributionCount < CONTRIBUTION_LEVELS[3]) {
    cellClass = "blue-20-29";
  } else {
    cellClass = "blue-30";
  }
  cell.classList.add(cellClass);
  cell.addEventListener("mouseover", () => {
    showTooltip(contributionCount, date, cell);
  });
  cell.addEventListener("mouseenter", () => {
    cell.classList.add("selected-cell");
  });
  cell.addEventListener("mouseleave", () => {
    cell.classList.remove("selected-cell");
  });
  return cell;
}

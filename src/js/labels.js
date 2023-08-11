function createLabels(containerSelector, labels) {
  const container = document.querySelector(containerSelector);
  labels.forEach((labelText) => {
    const label = document.createElement("div");
    label.classList.add("label");
    label.textContent = labelText;
    container.appendChild(label);
  });
}

function createDaysLabels() {
  createLabels(".days-labels", DAYS_LABELS);
}

function createMonthLabels() {
  const today = new Date();
  const currentMonthIndex = today.getMonth();
  let orderedMonths = [];
  for (let i = 0; i < 12; i++) {
    const monthIndex = (currentMonthIndex - i + 12) % 12;
    orderedMonths.push(MONTHS[monthIndex]);
  }
  orderedMonths.reverse();
  createLabels(".month-labels", orderedMonths);
}

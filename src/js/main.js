async function createContributionGraphWithTooltips() {
  const graphContainer = document.getElementById("graph");
  createMonthLabels();
  createDaysLabels();

  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - DAYS_IN_WEEK * WEEKS_IN_YEAR);

  const contributionData = await fetchContributionData();

  for (let j = 0; j < DAYS_IN_WEEK; j++) {
    const weekStart = new Date(startDate);
    weekStart.setDate(weekStart.getDate() - (weekStart.getDay() - 1) + j);

    for (let i = 0; i < WEEKS_IN_YEAR; i++) {
      const currentDate = new Date(weekStart);
      currentDate.setDate(currentDate.getDate() + i * DAYS_IN_WEEK);

      const dateString = currentDate.toISOString().slice(0, 10);
      const contributionCount = contributionData[dateString] || 0;

      const cell = createCell(contributionCount, currentDate);
      graphContainer.appendChild(cell);
    }
  }
}

createContributionGraphWithTooltips();

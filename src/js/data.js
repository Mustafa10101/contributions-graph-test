async function fetchContributionData() {
  const response = await fetch(CONTRIBUTION_URL);
  const data = await response.json();
  return data;
}

export function getTopPositionsByWins(positionData) {
  if (!positionData || typeof positionData !== "object") return [];

  const entries = Object.entries(positionData).map(([position, stats]) => ({
    position,
    wins: stats.wins,
    losses: stats.losses,
  }));

  // Sort by wins
  entries.sort((a, b) => b.wins - a.wins);

  // Return top 4 positions
  return entries.slice(0, 4);
}

export function getTopExperience(obj, n = 4) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1]) // Sort descending by value
    .slice(0, n) // Take top n
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
}

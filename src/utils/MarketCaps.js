export const marketCapHandler = (marketCap) => {
  if (marketCap > 1000000000000) {
    return `${(Math.floor(marketCap) / 1000000000000).toFixed(4)} T`;
  }
  if (marketCap > 1000000000) {
    return `${(Math.floor(marketCap) / 1000000000).toFixed(4)} B`;
  }
  if (marketCap > 1000000) {
    return `${(Math.floor(marketCap) / 1000000).toFixed(4)} M`;
  }
  if (marketCap > 1000) {
    return `${(Math.floor(marketCap) / 1000).toFixed(4)} K`;
  } else {
    return marketCap;
  }
};

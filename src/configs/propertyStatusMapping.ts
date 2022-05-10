const mapping: Record<string, { color: string; text: string }> = {
  occupied: {
    color: "blue",
    text: "Occupied",
  },
  free: {
    color: "green",
    text: "Free",
  },
  requested: {
    color: "dark",
    text: "Requested",
  },
  maintenance: {
    color: "orange",
    text: "Maintenance",
  },
};

export default mapping;

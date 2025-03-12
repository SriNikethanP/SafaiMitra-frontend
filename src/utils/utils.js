export const getCoordinates = async (address) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
    );
    const data = await response.json();
    if (data.length === 0) return null;

    return {
      lat: parseFloat(data[0].lat),
      long: parseFloat(data[0].lon),
    };
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};

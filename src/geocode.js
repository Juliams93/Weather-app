// geocode.js
// Devuelve {lat, lon} para una ciudad usando Nominatim (OpenStreetMap)
export async function geocodeCity(city) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'WeatherApp/1.0 (your@email.com)',
      'Accept-Language': 'es'
    }
  });
  if (!res.ok) throw new Error('No se pudo geocodificar la ciudad');
  const data = await res.json();
  if (!data.length) throw new Error('Ciudad no encontrada');
  return {
    lat: data[0].lat,
    lon: data[0].lon,
    display_name: data[0].display_name
  };
}

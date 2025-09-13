// weatherApi.js
// API met.no: https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=...&lon=...
// No requiere API key

export async function fetchWeatherMetNo(lat, lon) {
  const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'WeatherApp/1.0 (your@email.com)',
      'Accept': 'application/json'
    }
  });
  if (!res.ok) throw new Error('No se pudo obtener el clima');
  return res.json();
}


import { WiDaySunny, WiNightClear, WiCloud, WiRain, WiThunderstorm, WiSnow, WiFog, WiUmbrella, WiThermometer } from 'react-icons/wi';

// Recomendaciones interactivas según el clima con iconos
function getWeatherAdvice(symbol, details, lang) {
  if (!symbol || !details) return null;
  const base = symbol.replace(/_(day|night)$/, '');
  const temp = details.air_temperature;
  const rain = base.includes('rain') || base.includes('sleet');
  const snow = base.includes('snow');
  const thunder = base.includes('thunder');
  const fog = base.includes('fog') || base.includes('mist');
  const uv = details.ultraviolet_index_clear_sky;
  if (rain && thunder) return { icon: <WiUmbrella className="inline-block animate-bounce text-blue-500" size={28} />, text: lang === 'es' ? '¡Lleva paraguas y cuidado con tormentas eléctricas!' : 'Take an umbrella and beware of thunderstorms!' };
  if (rain) return { icon: <WiUmbrella className="inline-block animate-bounce text-blue-500" size={28} />, text: lang === 'es' ? 'No olvides el paraguas.' : 'Don’t forget your umbrella.' };
  if (snow) return { icon: <WiSnow className="inline-block animate-bounce text-cyan-400" size={28} />, text: lang === 'es' ? 'Abrígate bien, puede nevar.' : 'Dress warmly, it might snow.' };
  if (temp <= 5) return { icon: <WiThermometer className="inline-block animate-pulse text-blue-400" size={28} />, text: lang === 'es' ? 'Hace frío, usa abrigo.' : 'It’s cold, wear a coat.' };
  if (temp >= 30) return { icon: <WiThermometer className="inline-block animate-pulse text-yellow-400" size={28} />, text: lang === 'es' ? 'Hace mucho calor, mantente hidratado.' : 'It’s hot, stay hydrated.' };
  if (uv && uv >= 6) return { icon: <WiDaySunny className="inline-block animate-pulse text-yellow-400" size={28} />, text: lang === 'es' ? 'Usa protección solar.' : 'Use sunscreen.' };
  if (fog) return { icon: <WiFog className="inline-block animate-pulse text-gray-400" size={28} />, text: lang === 'es' ? 'Precaución: niebla.' : 'Caution: foggy.' };
  if (base.includes('clearsky') && temp >= 20) return { icon: <WiDaySunny className="inline-block animate-bounce text-yellow-300" size={28} />, text: lang === 'es' ? 'Día perfecto para salir.' : 'Perfect day to go out!' };
  return null;
}
// Traducción de códigos de clima met.no
const weatherTranslations = {
  clearsky: { es: 'Despejado', en: 'Clear sky' },
  cloudy: { es: 'Nublado', en: 'Cloudy' },
  fair: { es: 'Poco nuboso', en: 'Fair' },
  fog: { es: 'Niebla', en: 'Fog' },
  heavyrain: { es: 'Lluvia fuerte', en: 'Heavy rain' },
  heavyrainandthunder: { es: 'Lluvia fuerte y tormenta', en: 'Heavy rain and thunder' },
  heavyrainshowers: { es: 'Chubascos fuertes', en: 'Heavy rain showers' },
  heavyrainshowersandthunder: { es: 'Chubascos fuertes y tormenta', en: 'Heavy rain showers and thunder' },
  heavysleet: { es: 'Aguanieve fuerte', en: 'Heavy sleet' },
  heavysleetandthunder: { es: 'Aguanieve fuerte y tormenta', en: 'Heavy sleet and thunder' },
  heavysleetshowers: { es: 'Chubascos de aguanieve fuerte', en: 'Heavy sleet showers' },
  heavysleetshowersandthunder: { es: 'Chubascos de aguanieve fuerte y tormenta', en: 'Heavy sleet showers and thunder' },
  heavysnow: { es: 'Nieve fuerte', en: 'Heavy snow' },
  heavysnowandthunder: { es: 'Nieve fuerte y tormenta', en: 'Heavy snow and thunder' },
  heavysnowshowers: { es: 'Chubascos de nieve fuerte', en: 'Heavy snow showers' },
  heavysnowshowersandthunder: { es: 'Chubascos de nieve fuerte y tormenta', en: 'Heavy snow showers and thunder' },
  lightrain: { es: 'Lluvia ligera', en: 'Light rain' },
  lightrainandthunder: { es: 'Lluvia ligera y tormenta', en: 'Light rain and thunder' },
  lightrainshowers: { es: 'Chubascos ligeros', en: 'Light rain showers' },
  lightrainshowersandthunder: { es: 'Chubascos ligeros y tormenta', en: 'Light rain showers and thunder' },
  lightsleet: { es: 'Aguanieve ligera', en: 'Light sleet' },
  lightsleetandthunder: { es: 'Aguanieve ligera y tormenta', en: 'Light sleet and thunder' },
  lightsleetshowers: { es: 'Chubascos de aguanieve ligera', en: 'Light sleet showers' },
  lightsnow: { es: 'Nieve ligera', en: 'Light snow' },
  lightsnowandthunder: { es: 'Nieve ligera y tormenta', en: 'Light snow and thunder' },
  lightsnowshowers: { es: 'Chubascos de nieve ligera', en: 'Light snow showers' },
  lightssleetshowersandthunder: { es: 'Chubascos de aguanieve ligera y tormenta', en: 'Light sleet showers and thunder' },
  lightssnowshowersandthunder: { es: 'Chubascos de nieve ligera y tormenta', en: 'Light snow showers and thunder' },
  partlycloudy: { es: 'Parcialmente nublado', en: 'Partly cloudy' },
  rain: { es: 'Lluvia', en: 'Rain' },
  rainandthunder: { es: 'Lluvia y tormenta', en: 'Rain and thunder' },
  rainshowers: { es: 'Chubascos', en: 'Rain showers' },
  rainshowersandthunder: { es: 'Chubascos y tormenta', en: 'Rain showers and thunder' },
  sleet: { es: 'Aguanieve', en: 'Sleet' },
  sleetandthunder: { es: 'Aguanieve y tormenta', en: 'Sleet and thunder' },
  sleetshowers: { es: 'Chubascos de aguanieve', en: 'Sleet showers' },
  sleetshowersandthunder: { es: 'Chubascos de aguanieve y tormenta', en: 'Sleet showers and thunder' },
  snow: { es: 'Nieve', en: 'Snow' },
  snowandthunder: { es: 'Nieve y tormenta', en: 'Snow and thunder' },
  snowshowers: { es: 'Chubascos de nieve', en: 'Snow showers' },
  snowshowersandthunder: { es: 'Chubascos de nieve y tormenta', en: 'Snow showers and thunder' },
};

import { useState, useEffect } from 'react';
import WeatherChart from './WeatherChart';
// import Globe from './Globe';
import { fetchWeatherMetNo } from './weatherApi';
import { geocodeCity } from './geocode';
// (Eliminado import duplicado de react-icons/wi)
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
function getWeatherIcon(main, isNight) {
  if (!main) return <WiDaySunny size={48} />;
  if (main === 'Clear') return isNight ? <WiNightClear size={48} /> : <WiDaySunny size={48} />;
  if (main === 'Clouds') return <WiCloud size={48} />;
  if (main === 'Rain' || main === 'Drizzle') return <WiRain size={48} />;
  if (main === 'Thunderstorm') return <WiThunderstorm size={48} />;
  if (main === 'Snow') return <WiSnow size={48} />;
  if (main === 'Fog' || main === 'Mist' || main === 'Haze') return <WiFog size={48} />;
  return <WiDaySunny size={48} />;
}


function getBgGradient(main, isNight) {
  // Gradientes suaves con azul, verde y amarillo predominantes
  if (!main) return 'linear-gradient(135deg, #a7e9f7 0%, #fdf6b2 100%)'; // Suave azul-amarillo
  if (main === 'Clear') {
    return isNight
      ? 'linear-gradient(135deg, #23395d 0%, #6dd5ed 100%)' // Noche despejada, azul profundo a azul claro
      : 'linear-gradient(135deg, #fdf6b2 0%, #fbbf24 60%, #a7e9f7 100%)'; // Día soleado, amarillo suave a azul claro
  }
  if (main === 'Clouds') {
    return isNight
      ? 'linear-gradient(135deg, #23395d 0%, #a7e9f7 100%)' // Nubes de noche, azul profundo a azul claro
      : 'linear-gradient(135deg, #e0e7ef 0%, #a7e9f7 60%, #b2f7ef 100%)'; // Nubes día, gris claro a azul y verde agua
  }
  if (main === 'Rain' || main === 'Drizzle') {
    return isNight
      ? 'linear-gradient(135deg, #23395d 0%, #6dd5ed 60%, #b2f7ef 100%)' // Lluvia noche, azul profundo a verde agua
      : 'linear-gradient(135deg, #6dd5ed 0%, #b2f7ef 60%, #fdf6b2 100%)'; // Lluvia día, azul celeste a verde agua y amarillo suave
  }
  if (main === 'Thunderstorm') {
    return isNight
      ? 'linear-gradient(135deg, #23395d 0%, #6dd5ed 60%, #fbbf24 100%)' // Tormenta noche, azul profundo, celeste y amarillo
      : 'linear-gradient(135deg, #6dd5ed 0%, #fbbf24 60%, #b2f7ef 100%)'; // Tormenta día, celeste, amarillo y verde agua
  }
  if (main === 'Snow') {
    return isNight
      ? 'linear-gradient(135deg, #a7e9f7 0%, #e0e7ef 100%)' // Nieve noche, azul claro y gris
      : 'linear-gradient(135deg, #fff 0%, #a7e9f7 60%, #b2f7ef 100%)'; // Nieve día, blanco, azul y verde agua
  }
  if (main === 'Fog' || main === 'Mist' || main === 'Haze') {
    return isNight
      ? 'linear-gradient(135deg, #23395d 0%, #e0e7ef 100%)' // Niebla noche, azul profundo y gris
      : 'linear-gradient(135deg, #e0e7ef 0%, #a7e9f7 100%)'; // Niebla día, gris y azul claro
  }
  return 'linear-gradient(135deg, #a7e9f7 0%, #fdf6b2 100%)'; // Fallback: azul-amarillo suave
}


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lang, setLang] = useState('es');

  // Geolocalización automática al cargar usando met.no
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          console.log('[GEO] Ubicación obtenida:', latitude, longitude);
          setLoading(true);
          setError('');
          try {
            const data = await fetchWeatherMetNo(latitude, longitude);
            setWeather({ ...data, lat: latitude, lon: longitude });
            setCity('');
            // Previsión horaria (primeras 6 horas)
            const times = data.properties.timeseries.slice(0, 6);
            setHourly(times.map(item => item.data.instant.details.air_temperature));
            setLabels(times.map(item => new Date(item.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })));
          } catch (e) {
            console.error('[GEO/API] Error:', e);
            setError(lang === 'es' ? 'No se pudo obtener tu ubicación.' : 'Could not get your location.');
          } finally {
            setLoading(false);
          }
        },
        (geoError) => {
          console.error('[GEO] Error de geolocalización:', geoError);
          setError(lang === 'es' ? 'Permiso de ubicación denegado.' : 'Location permission denied.');
        }
      );
    } else {
      console.error('[GEO] Geolocalización no soportada');
    }
  }, [lang]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      console.log('[BUSQUEDA] Ciudad:', city, 'Lang:', lang);
      // 1. Geocodificar ciudad
      const geo = await geocodeCity(city);
      // 2. Obtener clima con met.no
      const data = await fetchWeatherMetNo(geo.lat, geo.lon);
      setWeather({ ...data, city: geo.display_name, lat: geo.lat, lon: geo.lon });
      // Previsión horaria (primeras 6 horas)
      const times = data.properties.timeseries.slice(0, 6);
      setHourly(times.map(item => item.data.instant.details.air_temperature));
      setLabels(times.map(item => new Date(item.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })));
    } catch (err) {
      console.error('[BUSQUEDA] Error:', err);
      setError(lang === 'es' ? 'No se pudo obtener el clima.' : 'Could not get weather.');
      setWeather(null);
      setHourly([]);
      setLabels([]);
    } finally {
      setLoading(false);
    }
  };

  // Determinar el tipo de clima principal y si es de noche (aprox)
  let mainWeather = null;
  let isNight = false;
  let symbol = '';
  if (weather?.properties) {
    symbol = weather.properties.timeseries[0]?.data?.next_1_hours?.summary?.symbol_code || '';
    if (symbol.includes('clearsky')) mainWeather = 'Clear';
    else if (symbol.includes('cloudy')) mainWeather = 'Clouds';
    else if (symbol.includes('rain')) mainWeather = 'Rain';
    else if (symbol.includes('thunder')) mainWeather = 'Thunderstorm';
    else if (symbol.includes('snow')) mainWeather = 'Snow';
    else if (symbol.includes('fog') || symbol.includes('mist')) mainWeather = 'Fog';
    isNight = symbol.includes('_night');
  }
  const bgGradient = getBgGradient(mainWeather, isNight);

  // Traducción del símbolo de clima
  function getWeatherDescription(symbol) {
    if (!symbol) return '';
    const base = symbol.replace(/_(day|night)$/, '');
    return weatherTranslations[base]?.[lang] || base;
  }

  // Fondo animado según el clima
  function AnimatedWeatherBg() {
    if (mainWeather === 'Clouds') {
      // Nubes animadas realistas (detrás del contenido)
      return (
        <svg style={{position:'fixed',zIndex:-1,top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'none'}} viewBox="0 0 1440 600">
          <g>
            {/* Nube grande y orgánica */}
            <g opacity="0.7">
              <ellipse cx="300" cy="140" rx="90" ry="32" fill="#e0e7ef">
                <animate attributeName="cx" values="300;1200;300" dur="28s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="370" cy="150" rx="40" ry="18" fill="#e0e7ef">
                <animate attributeName="cx" values="370;1270;370" dur="28s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="250" cy="150" rx="30" ry="14" fill="#e0e7ef">
                <animate attributeName="cx" values="250;1150;250" dur="28s" repeatCount="indefinite" />
              </ellipse>
            </g>
            {/* Nube azulada */}
            <g opacity="0.5">
              <ellipse cx="900" cy="200" rx="70" ry="24" fill="#a7e9f7">
                <animate attributeName="cx" values="900;200;900" dur="32s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="970" cy="210" rx="30" ry="12" fill="#a7e9f7">
                <animate attributeName="cx" values="970;270;970" dur="32s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="850" cy="210" rx="20" ry="10" fill="#a7e9f7">
                <animate attributeName="cx" values="850;150;850" dur="32s" repeatCount="indefinite" />
              </ellipse>
            </g>
            {/* Nube pequeña y brillante */}
            <g opacity="0.6">
              <ellipse cx="600" cy="80" rx="40" ry="14" fill="#b2f7ef">
                <animate attributeName="cx" values="600;1000;600" dur="18s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="640" cy="90" rx="18" ry="8" fill="#b2f7ef">
                <animate attributeName="cx" values="640;1040;640" dur="18s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="570" cy="90" rx="12" ry="6" fill="#b2f7ef">
                <animate attributeName="cx" values="570;970;570" dur="18s" repeatCount="indefinite" />
              </ellipse>
            </g>
            {/* Nubes de fondo difusas */}
            <g opacity="0.18">
              <ellipse cx="200" cy="300" rx="120" ry="32" fill="#e0e7ef">
                <animate attributeName="cx" values="200;1240;200" dur="38s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="1100" cy="400" rx="100" ry="28" fill="#a7e9f7">
                <animate attributeName="cx" values="1100;100;1100" dur="40s" repeatCount="indefinite" />
              </ellipse>
            </g>
          </g>
        </svg>
      );
    }
    if (mainWeather === 'Clear') {
      // Sol animado (detrás del contenido)
      return (
        <svg style={{position:'fixed',zIndex:-1,top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'none'}} viewBox="0 0 1440 600">
          <g>
            <circle cx="1200" cy="120" r="60" fill="#fbbf24">
              <animate attributeName="r" values="60;80;60" dur="4s" repeatCount="indefinite" />
            </circle>
            {/* Rayos */}
            {[...Array(8)].map((_,i)=>(
              <rect key={i} x={1200-6} y={40} width={12} height={32} fill="#fbbf24" opacity="0.5"
                transform={`rotate(${i*45} 1200 120)`}>
                <animate attributeName="height" values="32;48;32" dur="4s" repeatCount="indefinite" begin={`${i*0.2}s`}/>
              </rect>
            ))}
          </g>
        </svg>
      );
    }
    if (mainWeather === 'Rain') {
      // Lluvia animada (detrás del contenido)
      return (
        <svg style={{position:'fixed',zIndex:-1,top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'none'}} viewBox="0 0 1440 600">
          <g>
            {[...Array(18)].map((_,i)=>(
              <rect key={i} x={80+i*70} y={100+(i%3)*40} width={4} height={32} rx={2} fill="#38bdf8" opacity="0.5">
                <animate attributeName="y" values={`100;500;100`} dur={`${2+Math.random()*1.5}s`} repeatCount="indefinite" begin={`${i*0.15}s`}/>
              </rect>
            ))}
          </g>
        </svg>
      );
    }
    if (mainWeather === 'Thunderstorm') {
      // Tormenta: nubes + rayos (detrás del contenido)
      return (
        <svg style={{position:'fixed',zIndex:-1,top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'none'}} viewBox="0 0 1440 600">
          <g>
            <ellipse cx="600" cy="120" rx="120" ry="40" fill="#e0e7ef" opacity="0.7">
              <animate attributeName="cx" values="600;1200;600" dur="14s" repeatCount="indefinite" />
            </ellipse>
            <polygon points="900,200 920,260 910,260 930,320 890,250 900,250" fill="#fbbf24" opacity="0.8">
              <animate attributeName="points" values="900,200 920,260 910,260 930,320 890,250 900,250;900,220 930,280 910,270 940,340 890,250 900,220;900,200 920,260 910,260 930,320 890,250 900,200" dur="2s" repeatCount="indefinite" />
            </polygon>
          </g>
        </svg>
      );
    }
    if (mainWeather === 'Snow') {
      // Nieve animada (detrás del contenido)
      return (
        <svg style={{position:'fixed',zIndex:-1,top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'none'}} viewBox="0 0 1440 600">
          <g>
            {[...Array(18)].map((_,i)=>(
              <circle key={i} cx={100+i*70} cy={80+(i%3)*40} r={6} fill="#fff" opacity="0.7">
                <animate attributeName="cy" values={`80;520;80`} dur={`${3+Math.random()*2}s`} repeatCount="indefinite" begin={`${i*0.18}s`}/>
              </circle>
            ))}
          </g>
        </svg>
      );
    }
    if (mainWeather === 'Fog') {
      // Niebla animada (detrás del contenido)
      return (
        <svg style={{position:'fixed',zIndex:-1,top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'none'}} viewBox="0 0 1440 600">
          <g>
            {[...Array(5)].map((_,i)=>(
              <ellipse key={i} cx={200+i*250} cy={200+Math.sin(i)*40} rx={180} ry={32} fill="#e0e7ef" opacity="0.18">
                <animate attributeName="cx" values={`${200+i*250};${-200+i*250};${200+i*250}`} dur="18s" repeatCount="indefinite" />
              </ellipse>
            ))}
          </g>
        </svg>
      );
    }
    return null;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-colors p-1"
      style={{ background: bgGradient, position: 'relative', zIndex: 1 }}
    >
      <AnimatedWeatherBg />
  {/* Círculo de íconos animados alrededor del título */}
  <div className="relative flex items-center justify-center mb-2" style={{ width: 160, height: 160 }}>
        {/* Sol */}
        <motion.div
          className="absolute"
          style={{ top: 0, left: '50%', transform: 'translate(-50%, 0)' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <WiDaySunny size={40} color="#fbbf24" />
        </motion.div>
        {/* Nube */}
        <motion.div
          className="absolute"
          style={{ top: 30, right: 10 }}
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <WiCloud size={36} color="#a1a1aa" />
        </motion.div>
        {/* Lluvia */}
        <motion.div
          className="absolute"
          style={{ right: 0, top: '50%', transform: 'translate(0, -50%)' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          <WiRain size={36} color="#38bdf8" />
        </motion.div>
        {/* Nieve */}
        <motion.div
          className="absolute"
          style={{ bottom: 30, right: 10 }}
          animate={{ x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.1, ease: 'easeInOut' }}
        >
          <WiSnow size={36} color="#fff" />
        </motion.div>
        {/* Tormenta */}
        <motion.div
          className="absolute"
          style={{ bottom: 0, left: '50%', transform: 'translate(-50%, 0)' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.3, ease: 'easeInOut' }}
        >
          <WiThunderstorm size={36} color="#ef4444" />
        </motion.div>
        {/* Niebla */}
        <motion.div
          className="absolute"
          style={{ bottom: 30, left: 10 }}
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <WiFog size={36} color="#64748b" />
        </motion.div>
        {/* Luna */}
        <motion.div
          className="absolute"
          style={{ left: 0, top: '50%', transform: 'translate(0, -50%)' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          <WiNightClear size={36} color="#0ea5e9" />
        </motion.div>
        {/* Título centrado */}
        <motion.h1
          className="text-4xl font-extrabold text-white drop-shadow-lg z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          Weather App
        </motion.h1>
      </div>
  <div className="flex gap-1 mb-2">
        <button
          onClick={() => setLang('es')}
          className={`btn-lang ${lang === 'es' ? 'btn-lang-active' : ''}`}
        >
          ES
        </button>
        <button
          onClick={() => setLang('en')}
          className={`btn-lang ${lang === 'en' ? 'btn-lang-active' : ''}`}
        >
          EN
        </button>
      </div>
  <form onSubmit={handleSubmit} className="flex gap-1 mb-4" style={{ marginTop: '0.5rem' }}>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder={lang === 'es' ? 'Introduce una ciudad...' : 'Enter a city...'}
          className="px-4 py-2 rounded border-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent bg-white/80 text-primary font-semibold shadow"
          style={{ marginRight: '0.5rem', borderRadius: '0.5rem' }}
        />
        <motion.button
          type="submit"
          className={`btn-search ${loading ? 'btn-search-loading' : ''}`}
          disabled={loading}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          {loading ? (lang === 'es' ? 'Buscando...' : 'Searching...') : (lang === 'es' ? 'Buscar' : 'Search')}
        </motion.button>
      </form>
      {error && (
  <div className="mb-2 text-danger font-bold bg-white/80 px-3 py-2 rounded shadow animate-pulse">
          {error}
          <div className="mt-2 text-xs text-gray-500">
            {lang === 'es'
              ? 'Verifica tu conexión, la clave de API o los permisos de ubicación.'
              : 'Check your connection, API key or location permissions.'}
          </div>
        </div>
      )}
      <AnimatePresence>
        {weather && weather.properties && (
          <motion.div
            key={weather.city || `${weather.lat},${weather.lon}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            //whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(251,191,36,0.25)' }}
            className="max-w-lg mx-auto bg-white/90 dark:bg-gray-800/90 rounded-2xl p-4 px-4 md:px-12 shadow-xl border-2 border-accent mb-4 transition-all duration-300"
            style={{ padding: '1rem', borderRadius: '1rem', marginTop: '1rem' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div className="flex flex-col items-center gap-2 md:gap-4">
                {/* Globo animado con punto de ubicación */}
                {/* Globo terráqueo animado decorativo */}
                <div className="flex items-center justify-center w-full mb-2">
                  <svg width="90" height="90" viewBox="0 0 100 100" style={{ display: 'block', filter: 'drop-shadow(0 2px 8px #1e3a8a22)' }}>
                    <defs>
                      <radialGradient id="ocean" cx="50%" cy="50%" r="80%">
                        <stop offset="0%" stopColor="#a7e9f7"/>
                        <stop offset="100%" stopColor="#1e3a8a"/>
                      </radialGradient>
                      <clipPath id="circleClip">
                        <circle cx="50" cy="50" r="45"/>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#circleClip)">
                      <circle cx="50" cy="50" r="45" fill="url(#ocean)"/>
                      {/* Continentes animados */}
                      <g>
                        <path d="M30,45 Q40,30 70,35 Q80,50 60,60 Q45,65 35,55 Q30,50 30,45 Z" fill="#b6e2a1">
                          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite" />
                        </path>
                        <ellipse cx="70" cy="65" rx="9" ry="4" fill="#b6e2a1">
                          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse cx="40" cy="75" rx="5" ry="2.5" fill="#b6e2a1">
                          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite" />
                        </ellipse>
                      </g>
                    </g>
                  </svg>
                </div>
                {getWeatherIcon(mainWeather, isNight)}
                <div>
                  <h2 className="text-2xl font-bold text-primary">{weather.city ? weather.city.split(',')[0] : `${weather.lat}, ${weather.lon}`}</h2>
                  <div className="text-lg text-accent font-semibold">{getWeatherDescription(symbol)}</div>
                  <div className="text-8xl font-extrabold text-secondary drop-shadow-lg" style={{ lineHeight: 0.95, letterSpacing: '-0.04em' }}>
                    {weather.properties.timeseries[0].data.instant.details.air_temperature}°C
                  </div>
                  <div className="text-sm text-gray-600">
                    {lang === 'es' ? 'Sensación' : 'Feels like'}: {weather.properties.timeseries[0].data.instant.details.air_temperature}°C
                  </div>
                  {/* Recomendación interactiva */}
                  {(() => {
                    const advice = getWeatherAdvice(symbol, weather.properties.timeseries[0].data.instant.details, lang);
                    // Color según clima principal
                    let adviceColor = 'text-primary';
                    if (mainWeather === 'Rain') adviceColor = 'text-blue-600';
                    else if (mainWeather === 'Thunderstorm') adviceColor = 'text-yellow-700';
                    else if (mainWeather === 'Snow') adviceColor = 'text-cyan-600';
                    else if (mainWeather === 'Clear') adviceColor = 'text-yellow-500';
                    else if (mainWeather === 'Clouds') adviceColor = 'text-gray-600';
                    else if (mainWeather === 'Fog') adviceColor = 'text-gray-400';
                    return (
                      <div className={`mt-2 text-base font-semibold flex items-center gap-2 animate-pulse ${adviceColor}`}>
                        {advice?.icon}
                        <span>{advice?.text || ''}</span>
                      </div>
                    );
                  })()}
                </div>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                {Object.entries(weather.properties.timeseries[0].data.instant.details).map(([key, value]) => (
                  <div className="text-info" key={key}>
                    {(() => {
                      // Traducción de campos
                      const fields = {
                        air_pressure_at_sea_level: { es: 'Presión', en: 'Pressure' },
                        air_temperature: { es: 'Temperatura', en: 'Temperature' },
                        relative_humidity: { es: 'Humedad', en: 'Humidity' },
                        wind_speed: { es: 'Viento', en: 'Wind' },
                        wind_from_direction: { es: 'Dirección viento', en: 'Wind direction' },
                        cloud_area_fraction: { es: 'Nubosidad', en: 'Cloudiness' },
                        dew_point_temperature: { es: 'Punto de rocío', en: 'Dew point' },
                        fog_area_fraction: { es: 'Área de niebla', en: 'Fog area' },
                        ultraviolet_index_clear_sky: { es: 'Índice UV', en: 'UV index' },
                        precipitation_amount: { es: 'Precipitación', en: 'Precipitation' },
                        // Otros campos posibles...
                      };
                      const label = fields[key]?.[lang] || key;
                      return `${label}: ${value}`;
                    })()}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {hourly.length > 0 && (
          <motion.div
            key={labels.join('-')}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className=" max-w-lg mx-auto bg-white/90 dark:bg-gray-800/90 rounded-2xl p-4 px-4 md:px-12 shadow-xl border-2 border-primary"
            style={{ padding: '1rem', borderRadius: '1rem', marginTop: '1rem' }}
          >
            <WeatherChart data={hourly} labels={labels} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

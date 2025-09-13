import React from 'react';
import worldMap from './assets/world-map.svg';



// Mapa estático: el punto se dibuja en la posición real sobre el mapa
function Globe({ lat, lon, city, size = 120 }) {
  // viewBox 0 0 200 100, imagen de mapa mundial
  // x: lon -180 a 180 => 0 a 200
  // y: lat 90 a -90 => 0 a 100
  const x = ((lon + 180) / 360) * 200;
  const y = ((90 - lat) / 180) * 100;

  return (
    <div style={{ width: size * 2, height: size + 24, position: 'relative', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg
        viewBox="0 0 200 100"
        width={size * 2}
        height={size}
        style={{
          display: 'block',
          borderRadius: 18,
          boxShadow: '0 4px 24px 0 rgba(30,58,138,0.18)',
          background: 'linear-gradient(135deg, #e0e7ef 0%, #a7e9f7 100%)',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <defs>
          <filter id="globeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#1e3a8a" floodOpacity="0.18" />
          </filter>
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Sombra animada debajo del mapa */}
        <ellipse cx="100" cy="98" rx="60" ry="7" fill="#1e3a8a" opacity="0.10">
          <animate attributeName="rx" values="60;70;60" dur="2.5s" repeatCount="indefinite" />
        </ellipse>
        {/* Mapa mundial */}
        <g style={{ filter: 'url(#globeShadow)' }}>
          <image href={worldMap} x="0" y="0" width="200" height="100" />
        </g>
        {/* Halo animado alrededor del punto */}
        <circle cx={x} cy={y} r="12" fill="url(#halo)" opacity="0.7">
          <animate attributeName="r" values="12;18;12" dur="1.2s" repeatCount="indefinite" />
        </circle>
        {/* Punto de ubicación animado */}
        <circle cx={x} cy={y} r="4" fill="#ef4444" stroke="#fff" strokeWidth="1.5">
          <animate attributeName="r" values="4;7;4" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </svg>
      {/* Nombre de la ciudad debajo del mapa */}
      {city && (
        <div style={{
          marginTop: 4,
          fontWeight: 700,
          color: '#1e3a8a',
          fontSize: 16,
          textShadow: '0 2px 8px #fff',
          letterSpacing: '0.01em',
          maxWidth: size * 2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {city.split(',')[0]}
        </div>
      )}
    </div>
  );
}

export default Globe;

// Detectar si está corriendo en Docker o localmente
const getBaseUrl = (): string => {
  // Para web (localhost)
  if (typeof window !== 'undefined' && window.location?.hostname === 'localhost') {
    return 'http://localhost:3000';
  }
  
  // Para Docker: usar nombre del servicio
  if (typeof process !== 'undefined' && process.env?.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }
  
  // Para dispositivos físicos/emuladores: usar la IP de la máquina
  return 'http://192.168.0.13:3000';
};

export const API_CONFIG = {
  BASE_URL: getBaseUrl(),
};

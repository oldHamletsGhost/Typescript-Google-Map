export const loadGoogleMaps = (): Promise<void> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=marker&map_ids=${process.env.MAP_ID}`;
    script.async = true;
    script.addEventListener('load', () => resolve());
    document.head.appendChild(script);
  });
};

export const getRefCoordinates = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    return {
      x: rect.x,
      y: rect.y + rect.height,
      width: rect.width,
    };
  }
}
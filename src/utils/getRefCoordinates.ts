export const getRefCoordinates = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    return {
      x: rect.x,
      y: rect.y ,
      width: rect.width,
      height: rect.height,
    } 
  }
  return {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }
}
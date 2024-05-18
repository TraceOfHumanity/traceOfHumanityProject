declare module 'baffle' {
  interface Baffle {
    start: () => Baffle;
    stop: () => Baffle;
    set: (options: { characters: string; speed: number }) => Baffle;
    text: (fn: (text: string) => string) => Baffle;
    reveal: (duration?: number, delay?: number) => Baffle;
  }

  function baffle(selector: string | Element | NodeList): Baffle;

  export default baffle;
}

interface Options {
  use: "session" | "local" | "local with param" | "session with param";
}

interface PMInterface {
  /**
   * Set an key to storage
   * @param key
   * @param value
   * @param defaultValue
   */
  setItem(key: string, value: string, defaultValue?: string): void;

  /**
   * Get an key from storage
   * @param key
   */
  getItem(key: string): string | null;
}

export { Options, PMInterface };

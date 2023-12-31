export class LocalStorageService {
  private storage: Storage = localStorage;

  public getItem<T>(key: string): T | null {
    const data: string | null = this.storage.getItem(key);

    if (data !== null) return JSON.parse(data).value as T;

    return null;
  }

  public setItem<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify({ value }));
  }

  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  public clear(): void {
    this.storage.clear();
  }
}

export const localStorageService = new LocalStorageService();

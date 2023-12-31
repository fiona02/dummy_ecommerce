import { LocalStorageService } from '@shared/services';

export class TokenStorageService extends LocalStorageService {
  private storageKey = 'access_token';

  getToken() {
    return this.getItem<string>(this.storageKey);
  }

  setToken(token: string) {
    this.setItem(this.storageKey, token);
  }

  removeToken() {
    this.removeItem(this.storageKey);
  }
}

export const tokenStorageService = new TokenStorageService();

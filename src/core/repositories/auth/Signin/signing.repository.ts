import { HttpService } from '@core/services/HttpService';

import type { SigninDto, SigninEntity } from '@core/repositories';

class SigningRepository extends HttpService {
  constructor() {
    super('auth');
  }

  signin = (dto: SigninDto) => {
    return this.post<SigninEntity>('login', dto);
  };
}

export const signinRepository = new SigningRepository();

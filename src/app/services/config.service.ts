import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  getIp():string{
    return 'https://63f085bd.ngrok.io/';
  }

}

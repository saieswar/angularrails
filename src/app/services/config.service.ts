import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  getIp():string{
    return 'https://0c0fc4f5.ngrok.io/';
  }

}

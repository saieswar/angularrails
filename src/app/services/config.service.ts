import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  getIp():string{
    return 'https://5cd381fd.ngrok.io/';
  }

}

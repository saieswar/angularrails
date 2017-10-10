import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  getIp():string{
    return 'http://172.16.19.246:3001/';
  }

}

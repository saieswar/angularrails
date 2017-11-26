import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  getIp():string{
    return 'http://localhost:3000/';
  }

}

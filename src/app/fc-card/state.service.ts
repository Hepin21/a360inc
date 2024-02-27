import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  state=['AK','AL','AR','AZ','CA'];
  // getInfo()
  selectState():string[]{
    return this.state
  }
  constructor() { }
}

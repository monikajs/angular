import { Injectable } from '@angular/core';
import {Data} from '../register/register.component';
// import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DemoAppService {

  constructor() {

   }
      setUsers(data:Data[]) {
    
        localStorage.setItem("username",JSON.stringify(data));
      // console.log('set');
    }
    getUsers() {
      console.log('get');
    }
}

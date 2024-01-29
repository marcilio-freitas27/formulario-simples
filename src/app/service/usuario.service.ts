import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get('api/users');
  }

  getUserListById(id: number){
    return this.http.get('api/users/' + id);
  }

  getUserListByName(name: string){
    return this.http.get('api/users?nome=' + name)
  }

  insertUser(novo: any){
    return this.http.post('api/users', novo);
  }

  deleteUserById(id: number){
    return this.http.delete('api/users/' + id );
  }

  updateUser(id: number, novo: any){
    return this.http.put('api/users/' + id, novo);
  }

}

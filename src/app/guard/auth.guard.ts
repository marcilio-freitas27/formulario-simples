import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  usuario: any;
  constructor(private router: Router){
    this.usuario = localStorage.getItem('formularioSimplesAutenticacao');
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.usuario === 'Marcilio'){
      return true
    }
    this.router.navigate(["/login"]);
    return false;
  }

}

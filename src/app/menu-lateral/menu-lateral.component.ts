import {Component,OnInit} from '@angular/core';
import {faBars,faDashboard,faList12,faPlus,faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  faPlus = faPlus;
  faDashboard = faDashboard;
  faBars = faBars;
  faList12 = faList12;
  faUser = faUser;
  constructor() { }

  ngOnInit(): void {
    
  }

}

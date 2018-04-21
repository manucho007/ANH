import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
  this.auth.signOut();
};
}

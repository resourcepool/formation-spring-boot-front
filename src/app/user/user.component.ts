import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [new User(1, 'Pierre', 'X', 'pierrex@epf.fr', 20),
                  new User(2, 'Paul', 'Y', 'pauly@epf.fr', 30)];
  }

}

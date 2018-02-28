import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() {
  	this.user = this.defaultUser;
  }

  user: string;
  defaultUser: string = 'User';

  resetUserName() {
    this.user = 'User';
  }

    ngOnInit() {
  }

}

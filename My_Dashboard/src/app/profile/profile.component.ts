import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;

  constructor() {}

  ngOnInit() {
    user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'I am a software engineer.'
    };
  }
  console() {
    console.log(this.user);
  }
  

}

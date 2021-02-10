import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private cookieValue: string | undefined;

  constructor(private router: Router, private cookieService: CookieService){}

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  dataLogin = [
    {
      username: 'test123',
      password: 'test123'
    },
    {
      username: 'admin@gmail.com',
      password: '123456789'
    }
  ];

  isCheckLogin = false;

  ngOnInit(): void {
    this.cookieService.set( 'Cookie-Name', 'Cookie-Value' );
    this.cookieValue = this.cookieService.get('Cookie-Name');
  }

  onLogin(): void {
    console.log(this.profileForm.controls.username.value, this.profileForm.controls.password.value);

    this.isCheckLogin = this.dataLogin.findIndex(item => item.username === this.profileForm.controls.username.value
                                                    && item.password === this.profileForm.controls.password.value) > -1;

    console.log(this.isCheckLogin);

    if (this.isCheckLogin){
      console.log('Login Success');
      this.router.navigate(['/detail']);
    }
    else{
      console.log('Wrong username or password');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit() {
    // this.profileForm=this.fb.group({
    //   email:['', [Validators.required]],
    //   password: ['', [Validators.required,Validators.minLength(6)]]
    // })
  }

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  dataLogin = [
    {
      "username":"test123",
      "password":"test123"
    },
    {
      "username":"admin@gmail.com",
      "password":"123456789"
    }
  ];

  isCheckLogin:boolean = false;

  onLogin(){
    // this.dataLogin.filter(item=>{
    //   if(item.email==this.profileForm.value['email'] && item.password==this.profileForm.value['password']){
    //       this.isCheckLogin = true;
    //   }
    // });

    console.log(this.profileForm.controls.username.value, this.profileForm.controls.password.value)

    this.isCheckLogin =  this.dataLogin.findIndex(item => item.username==this.profileForm.controls.username.value 
                                                    && item.password==this.profileForm.controls.password.value) > -1;

    // this.dataLogin.findIndex(item => {
    //   if (item.email==this.profileForm.controls.email.value && item.password==this.profileForm.controls.password.value)
    //   {
    //     this.isCheckLogin = true;
    //   }
    // })

    console.log(this.isCheckLogin);

    if(this.isCheckLogin){
      console.log("Login Success");
      this.router.navigate(['/detail']);
    }
    else{
      console.log("Wrong username or password")
    }
  }

}

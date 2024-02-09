import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup
  isSubmit:boolean = false

  constructor(
    private _fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this._fb.group({
      username:["", Validators.required],
      password:["", Validators.required]
    })
  }

  submitLoginiForm(){
    this.isSubmit = true;
    if(this.loginForm.valid){
      
      console.log("form got validate with this detials", this.loginForm.value)
      this.router.navigate(['/dashboard']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    ) { }

  ngOnInit() {
    this.user = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(){
    console.log('login');
    const formData = this.user.getRawValue();
    console.log(formData);
    const searchUser = this.storageService.searchUser(formData);
    console.log(searchUser);
    if(searchUser){
      this.router.navigate(['/home'],  { replaceUrl: true });
    }
  }

  onRegister(){
    console.log('registrarse');
    this.router.navigate(['/register'],  { replaceUrl: true });

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { LocalNotificationsService } from '../../services/local-notifications.service';
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
    private localNotificationsService: LocalNotificationsService,
    private platform: Platform,
    public toastController: ToastController,
    ) { }

  ngOnInit() {
    this.user = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(){
    const formData = this.user.getRawValue();
    const searchUser = this.storageService.searchUser(formData);
    if(searchUser){
      this.router.navigate(['/home'],  { replaceUrl: true });
      this.openMessage('Login', 'Bienvenido');
    } else {
      this.openMessage('Login', 'Usuario y/o Contrasena Incorrectos');
    }
  }

  onRegister(){
    this.router.navigate(['/register'],  { replaceUrl: true });
  }

  async presentToast(msn: string) {
    const toast = await this.toastController.create({
      message: msn,
      duration: 2000
    });
    toast.present();
  }

  openMessage(title: string, text: string){
    if(this.platform.is('capacitor')){
      this.localNotificationsService.showLocalNotification(
        title,
        text,
        new Date()
      );
    } else {
      this.presentToast(text);
    }
  }

}

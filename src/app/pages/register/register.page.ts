import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { RegisterService } from './register.service';
// import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { LocalNotifications} from '@capacitor/local-notifications';
import { LocalNotificationsService } from '../../services/local-notifications.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private registerService: RegisterService,
    private storageService: StorageService,
    // private localNotifications: LocalNotifications,
    private localNotificationsService: LocalNotificationsService,
    private platform: Platform,
    public toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.fillDataDummy();
  }

  async onRegister(){
    const formData = this.registerForm.getRawValue();
    formData.registrationDate =  new Date()
    const register = await this.storageService.saveUser(formData);
    if(register){
      if(this.platform.is('capacitor')){
        this.localNotificationsService.showLocalNotification(
          'Registro',
          'Se registro exitosamente',
          new Date()
        );
      } else {
        this.presentToast('Registrado Correctamente');
      }
      this.router.navigate(['/login'],  { replaceUrl: true });
    }
  }

  fillDataDummy(){
    this.registerService.dataDummy().subscribe({
      next: async (res) => {
        this.registerForm.patchValue({
          name: `${res.results[0].name.title} ${res.results[0].name.first} ${res.results[0].name.last}`,
          email: res.results[0].email,
          username: res.results[0].login.username,
        });

      },
      error: err => console.log(err)
    });
  }

  async presentToast(msn: string) {
    const toast = await this.toastController.create({
      message: msn,
      duration: 2000
    });
    toast.present();
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
// import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
// import { LocalNotifications} from '@capacitor/local-notifications';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, /*LocalNotifications*/],
  bootstrap: [AppComponent],
})
export class AppModule {}

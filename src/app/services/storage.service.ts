import { Injectable } from '@angular/core';
import { Storage  } from '@ionic/storage-angular';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { LoginUser, Result } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private _localUsers: LoginUser[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;

    this.loadUsers();
  }

  async loadUsers(){
    try {
      // eslint-disable-next-line no-underscore-dangle
      const users = await this._storage.get('users');
      // eslint-disable-next-line no-underscore-dangle
      this._localUsers = users || [];
    } catch (error) {

    }
  }

  async saveUser(user: LoginUser){
    // eslint-disable-next-line no-underscore-dangle
    const exists = this._localUsers.find(localUser => localUser.username === user.username);
    if(exists){
      return false;
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._localUsers = [user, ...this._localUsers];
    }
    // eslint-disable-next-line no-underscore-dangle
    this._storage.set('users', this._localUsers );
    return true;
  }

  searchUser(user: LoginUser){
    // eslint-disable-next-line no-underscore-dangle
    return !!this._localUsers.find(localUser => (localUser.email === user.email && localUser.password === user.password));
  }
}

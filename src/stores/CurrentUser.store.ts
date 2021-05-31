import UserModel from '../models/User.model';
import {action, makeObservable, observable} from "mobx"

export class CurrentUserStoreImpl {
  currentUser: UserModel = new UserModel(0, '');

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      updateCurrentUserAge: action,
      updateCurrentUserName: action,
    });
  }

  updateCurrentUserAge(age: number) {
    this.currentUser = new UserModel(age, this.currentUser.name);
  }

  updateCurrentUserName(name: string) {
    this.currentUser = new UserModel(this.currentUser.age, name);
  }
}

export const CurrentUserStore = new CurrentUserStoreImpl()

import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserI } from '../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<UserI>;


  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,

  ) {
    //this.checkUserState();
  }

  

  async resentPassword(email: string): Promise<void> {
    try {
      return this.afAuth.auth.sendPasswordResetEmail(email)
    } catch (error) {
      console.error('Error --> ', error);
    }
  }
  async register(email: string, password: string): Promise<UserI> {
    try {
      const { user } = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.error('Error --> ', error);
    }
  }
  async login(email: string, password: string): Promise<UserI> {
    try {
      const { user } = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.error('Error --> ', error);
    }
  }
  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.afAuth.auth.currentUser).sendEmailVerification();
    } catch (error) {
      console.error('Error --> ', error);
    }
  }

  User1:any;
  isEmailVerified(user: UserI): boolean {
    return user.emailVerified === true ? true : false;
  }
  async logout(): Promise<void> {
    try {
      await this.afAuth.auth.signOut();
    } catch (error) {
      console.error('Error --> ', error);
    }
  }

  private updateUserData(user: UserI) {
    const userRef: AngularFirestoreDocument<UserI> = this.afStore.doc(`users/${user.uid}`);

    const data: UserI = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName
    };
    window.localStorage.setItem('user',JSON.stringify(data));
    return userRef.set(data, { merge: true });
  }
}

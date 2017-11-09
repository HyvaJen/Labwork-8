import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// importing TabsPage here
import { TabsPage } from '../tabs/tabs';
//NEW importing firebase
import firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  // click will send to next page - TabsPage
  nextPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
// This is new for the facebook
  login(){
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
      }).catch(function(error) {
        alert(JSON.stringify(error))
      });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

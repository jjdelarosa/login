import Vue from 'vue'

import firebase from 'firebase/app'
import 'firebase/firebase-auth'

import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: 'AIzaSyDKr3WRNDvcpEPRTGO_RGpl3Bh4WppiUMw',
  authDomain: 'loginpage-a25f4.firebaseapp.com',
  databaseURL: 'https://loginpage-a25f4.firebaseio.com',
  projectId: 'loginpage-a25f4',
  storageBucket: 'loginpage-a25f4.appspot.com',
  messagingSenderId: '945713729728',
  appId: '1:945713729728:web:67ecd6994bd8eefcf31d25'
}

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui
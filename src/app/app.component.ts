import { Component } from '@angular/core';
import { Store,select } from "@ngrx/store";

import {LoginState} from "./app.state";
import { User } from "./app.model";

import * as actions from './app.actions'
import { Observable } from 'rxjs';
import * as LoginSelector from './app.selector'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  user$: Observable<string>
  mail$: Observable<string>
  

  constructor(private store: Store<LoginState>){
    this.user$ = store.pipe(select(LoginSelector.selectusernameCore))
    this.mail$ = store.pipe(select(LoginSelector.selectmailCore))
  }

  login(){
    var user:  User={username:"Francisca", mail:"Abatto"}
    console.log("login")
    this.store.dispatch(actions.SucessLogin({user}))
  }
  ///user$= this.store.pipe(select(state=>state.username))
  ngOnInit() {
   // console.log(this.user$)
  }
}

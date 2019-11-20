import { Component } from '@angular/core';
import { Store,select } from "@ngrx/store";

import {LoginState} from "./app.state";
import { User } from "./app.model";

import * as actions from './app.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(private store: Store<LoginState>){}

  
  user$= this.store.pipe(select(state=>state.username))
  ngOnInit() {
    console.log(this.user$)
  }
}

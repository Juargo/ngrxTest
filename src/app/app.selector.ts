import { createFeatureSelector, createSelector } from '@ngrx/store';
import {LoginState} from './app.state'

export const selectLoginState = createFeatureSelector('users')
export const selectusernameCore = createSelector(selectLoginState,(state:LoginState)=>state.username)
export const selectmailCore = createSelector(selectLoginState,(state:LoginState)=>state.mail)
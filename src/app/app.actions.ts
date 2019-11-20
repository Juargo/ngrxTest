import {createAction,props} from  '@ngrx/store'
import {User} from './app.model'
export const SucessLogin = createAction("[Login] SucessLogin",props<{user: User}>())
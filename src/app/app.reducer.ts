import {createReducer,on} from  '@ngrx/store'
import {User} from './app.model'
import {SucessLogin} from './app.actions'

const InitialLogin: User={username:"Fran",mail:"Hermosa"}

export const LoginReducer = createReducer(InitialLogin,
    on(SucessLogin,(state,action)=>{
       return{...state,action}
    }))


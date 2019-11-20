import {createReducer,on,Action} from  '@ngrx/store'
import {User} from './app.model'
import {SucessLogin} from './app.actions'
import {LoginState} from './app.state'

const InitialLoginState: User={username:"Fran",mail:"Hermosa"}

const LoginReducer = createReducer(InitialLoginState,
    on(SucessLogin,(state,{user})=>({username:user.username,mail:user.mail}))
)

export function createLoginReducer (state:LoginState,action:Action ){
   return LoginReducer(state,action)
}

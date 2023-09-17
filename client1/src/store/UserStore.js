import {makeAutoObservable} from "mobx";
export  default  class UserStore{
    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        return this._isAuth = bool

    }
    setIsUser(user){
        return this._isAuth = user

    }
    get isAuth(){
        return this._isAuth
    }

    get isUser(){
        return this._isAuth
    }

}
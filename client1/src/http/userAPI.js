import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export  const  registrtion = async (email, password) =>{
   const  {data} = await $host.post('api/user/registration', {email, password, role:'ADMIN'})
    return jwtDecode(data.token)
}

export  const  login = async (email, password) =>{
    const  {data} = await $host.post('api/user/login', {email, password})
    return jwtDecode(data.token)
}

export  const  check = async () =>{
    const  {data} = await $host.post('api/user/registration', )
    return jwtDecode(data.token)
}
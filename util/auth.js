import axios from "axios";

const API_KEY = 'AIzaSyAeJuDv6YksPZ_njlaZ4_rRW43DgDe71c8';
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

export function createUser(email, password){
    return authenticate('signUp',email,password);
}

export  function login(email,password){
    return authenticate('signInWithPassword',email,password);
}

export async function authenticate(mode, email, password){
    const url = `${BASE_URL}${mode}?key=${API_KEY}`;
    const body ={
        email: email,
        password: password,
        returnSecureToken: true
    }
    // try{
        const res = await axios.post(url,body);
        const token = res.data.idToken;
        return token;
    // }catch(err){
    //     return err;
    // }
}
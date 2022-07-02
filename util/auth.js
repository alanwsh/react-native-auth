import axios from "axios";

const API_KEY = 'AIzaSyAeJuDv6YksPZ_njlaZ4_rRW43DgDe71c8';
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

export async function createUser(email, password){
    await authenticate('signUp',email,password);
}

export async function login(email,password){
    await authenticate('signInWithPassword',email,password);
}

export async function authenticate(mode, email, password){
    const url = `${BASE_URL}${mode}?key=${API_KEY}`;
    console.log(url);
    const body ={
        email: email,
        password: password,
        returnSecureToken: true
    }
    try{
        const res = axios.post(url,body); 
        return res;
    }catch(err){
        return err;
    }
}
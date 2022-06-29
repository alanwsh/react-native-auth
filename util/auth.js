import axios from "axios";

const API_KEY = 'AIzaSyAeJuDv6YksPZ_njlaZ4_rRW43DgDe71c8';
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

function getRequestUrl(mode){
    return `${BASE_URL}${mode}?key=${API_KEY}`;
}

export async function createUser(email, password){
    const res = axios.post(getRequestUrl('signUp'), {
        email: email,
        password: password,
        returnSecureToken: true
    });
}

export async function authenticate(mode, email, password){

}
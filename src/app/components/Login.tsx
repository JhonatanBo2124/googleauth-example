import { GoogleLogin, GoogleCredentialResponse } from '@react-oauth/google'
import decodeJWT from '../utils/decodeJWT';
import { useState } from 'react';

interface info {
    name: string,
    email: string,
    picture: string
}

export default function Login() {

    let [ info, setInfo ] = useState<info | null>()

    const handleSuccess = (GoogleCredentialResponse: GoogleCredentialResponse) => {
        console.log(GoogleCredentialResponse);
        if(GoogleCredentialResponse.credential){
            const { payload } = decodeJWT(GoogleCredentialResponse.credential);
            const { name, email, picture } = payload
            console.log(payload);
            setInfo({ name, email, picture })
            console.log(info);
            
        }
        
    }
    const handleError = () => {
        console.log('hubo un error');
    }

    return(
        <>
        { !info ? <GoogleLogin useOneTap onError={handleError} onSuccess={handleSuccess} />
        : <div className='flex flex-col gap-5 items-center'>
            <img src={info.picture} alt="perfil" className='rounded-full' />
            <h1 className='text-2xl font-bold'>{info.name}</h1>
            <p>{info.email}</p>
            </div>}
        </>
    )
}
import { GoogleLogin, GoogleCredentialResponse } from '@react-oauth/google'
import decodeJWT from '../utils/decodeJWT';
export default function Login() {

    const handleSuccess = (GoogleCredentialResponse: GoogleCredentialResponse) => {
        console.log(GoogleCredentialResponse);
        if(GoogleCredentialResponse.credential){
            const { payload } = decodeJWT(GoogleCredentialResponse.credential);
            console.log(payload);
        }
        
    }
    const handleError = () => {
        console.log('hubo un error');
    }

    return(
        <GoogleLogin onError={handleError} onSuccess={handleSuccess} />
    )
}
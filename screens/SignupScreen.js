import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {

  const [isLoading, setLoading] = useState(false);

  async function signUpHandler({email, password}){
    setLoading(true);
    try{
      await createUser(email, password);
    }
    catch(err){
      Alert.alert('Authentication failed','Could not sign up the user');
    }
    setLoading(false);
  }

  if(isLoading){
    return <LoadingOverlay message="Creating user" />;
  }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;

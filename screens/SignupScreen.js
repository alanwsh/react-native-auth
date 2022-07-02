import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {

  const [isLoading, setLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  async function signUpHandler({email, password}){
    setLoading(true);
    try{
      const token = await createUser(email, password);
      authCtx.authenticate(token);
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

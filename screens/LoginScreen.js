import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';
function LoginScreen() {

  const [isLoading, setLoading] = useState(false);

  async function loginHandler({email, password}){
    setLoading(true);
    try{
      await login(email, password);
    }catch(err){
      Alert.alert('Authentication failed','Please check your credentials');
    }
    setLoading(false);
  }

  if(isLoading){
    return <LoadingOverlay message="Logging you in" />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;

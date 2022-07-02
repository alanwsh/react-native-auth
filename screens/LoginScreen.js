import AuthContent from '../components/Auth/AuthContent';
import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';
function LoginScreen() {

  const [isLoading, setLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}){
    setLoading(true);
    try{
      const token = await login(email, password);
      authCtx.authenticate(token);
    }catch(err){
      Alert.alert('Authentication failed','Please check your credentials');
      setLoading(false);
    }
  }

  if(isLoading){
    return <LoadingOverlay message="Logging you in" />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;

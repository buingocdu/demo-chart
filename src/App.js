import logo from './logo.svg';
import './App.css';
import MixedChart from './MixedChart';
import LoginGoogle from './LoginGoogle';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

function App() {
  return (
    <>
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
    <FacebookLogin
    appId="500238265711320"
    autoLoad={true}
    fields="name,email,picture"
    callback={credentialResponse => {
      console.log(credentialResponse);
    }}
    icon="fa-facebook"
  />
    </>
    
  );
}

export default App;

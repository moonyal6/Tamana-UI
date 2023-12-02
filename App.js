import {  StyleSheet } from 'react-native';
import SignInPage from './components/pages/sign-in';
import SignUpPage from './components/pages/sign-up';
import WelcomePage from './components/pages/welcome';
import SupervisorPage from './components/pages/supervisor';


export default function App() {
  return (
    /// Using components instead of navigation :)
    // <SignInPage/>
    // <WelcomePage/>
    // <SignUpPage/>
    <SupervisorPage/>
    
  );
}
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


const App = () => {
  return (
    <Router>
    <Header />
      <main className='py-3'>
        <Container>
          <Router path='/login' component={LoginScreen} />
          <Router path='/register' component={RegisterScreen}/>
          <Router path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;

import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationFormScreen from './screens/RegistrationFormScreen';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <RegistrationFormScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

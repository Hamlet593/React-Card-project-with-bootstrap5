import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar1 from './components/Navbar1';
import Carousel from './components/Carousel';
import Container from './components/Container';
import Collapse from './components/Collapse';
import { Flex } from './components/Flex';

function App() {
  return (
    <>
      <Navbar1 />
      <Carousel />
      <Container />
      <Collapse />
      <Flex />
    </>
  );
}

export default App;
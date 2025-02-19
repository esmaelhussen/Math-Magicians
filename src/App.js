import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Calculator from './components/Calculator';
import Home from './components/home';
import Quote from './components/quote';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="items-center flex justify-center min-h-[90vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";  
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import About from './About'
import Api from './Api'
import Make_Api from './Make_Api';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/api" element={<Api />} />
          <Route path="/make_api" element={<Make_Api />} />
      </Routes> 
      <Footer />
    </Router>



    </>
  );
}

export default App;

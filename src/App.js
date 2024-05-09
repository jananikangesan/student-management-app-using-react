import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>  
          <HeaderComponent/>

          <div className="container">
            <Routes>
              <Route path="/" Component={ListStudentComponent}></Route>
              <Route path="/student" Component={ListStudentComponent}></Route>
            </Routes>
          </div>

          <FooterComponent/>
      </Router>  
    </div>
    
  );
}

export default App;

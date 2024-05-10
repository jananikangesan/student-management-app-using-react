import './App.css';
import CreateStudentComponent from './components/CreateStudentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
import UpdateStudentComponent from './components/UpdateStudentComponent';

function App() {
  return (
    <div>
      <Router>  
          <HeaderComponent/>
          <div className="container">
            <Routes>
              <Route path="/" exact Component={ListStudentComponent}></Route>
              <Route path="/add-student" Component={CreateStudentComponent}></Route>
              <Route path="/update-student/:id" Component={UpdateStudentComponent}></Route>
            </Routes>
          </div>

          <FooterComponent/>
      </Router>  
    </div>
    
  );
}

export default App;

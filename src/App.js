import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
// import QRFetch from "./components/QRFetch";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

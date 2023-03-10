import { Provider } from "react-redux";
import appstore from "./redux/Store";
import ZuzApp from "./ZuzApp";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    /*
    <Provider store={appstore}>
      <Router>
        <div className={`App`}>
          <Routes>
            <Route path="/" element={<ZuzApp></ZuzApp>}/>
            <Route path="/chatpage" element={<h1>Hello</h1>}/>
          </Routes>      
        </div>
      </Router>
    </Provider>
  */
    <Provider store={appstore}>
      <ZuzApp></ZuzApp>
    </Provider>
    
  );
}
export default App;

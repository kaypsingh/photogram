import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from './Signup';
import Firstpage from './Firstpage';

class App extends React.Component {

  constructor(props) {
    super(props);


  }


  render() {
    return (

      <Router>

        <div className="back">

          <div className="white">


            <div className="login"><h1><i>Photogram</i></h1></div>
            <br></br>



            <div>
              <h4>Email:</h4>
              <input type="text" name="name"></input>
            </div>

            <div>
              <h4>Password:</h4>
              <input type="password" name="password"></input>
            </div>

            <br></br>
            <div className="but">
              <button type="button" className="btn btn-danger">Login</button>
            </div>

          </div>


          {/* <Link to="/login">Home</Link> */}
          <div className="signup">

            <p>New user ? <span><Link to="/Signup"><button type="button" className="btn btn-success">Sign up</button></Link></span></p>
          </div>

          <Link to="/Firstpage">Firstpage</Link>
          {/* <Route exact path="/" component={App} /> page not responding */}
          <Route path="/Signup" component={Signup} />
          <Route path="/Firstpage" component={Firstpage} />

          <Firstpage></Firstpage>

        </div>
      </Router>

    )
  }
}

export default App;

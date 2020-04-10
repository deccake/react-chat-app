import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, ToastPosition } from 'react-toastify';
import { toast } from 'materialize-css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          position={ToastPosition.BOTTOM_RIGHT}
        />
        <Switch>
          <Route 
            exact path="/" render={props => <Login showToast={this.showToast} {...props}/>}
          />
          <Route 
            exact path="/main" render={props => <Main showToast={this.showToast} {...props}/>}
          />
          <Route 
            exact path="/profile" render={props => <Profile showToast={this.showToast} {...props}/>}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

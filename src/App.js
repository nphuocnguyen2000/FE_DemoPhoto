import React from 'react';
import Notifications from 'react-notify-toast';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';

function App() {
  
  function  showContentMenu(routes){
    var result = null
    if(routes.length > 0){
      result = routes.map((route, index)=>{
        return(
            <Route key={index} path={route.path} exact={route.exact} component={route.main}/>  
          )
      })
    }
    return result
  } 

  return (
    <Router>   
     <Notifications/>
     <Header />
      <Switch>
        {showContentMenu(routes)}    
      </Switch>  
    </Router>   
  );
}

export default App;

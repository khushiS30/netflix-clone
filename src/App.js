import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from './features/userSlice'
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);  //it will give use the user
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {    //it helps in login
      if(userAuth) {
        dispatch(
        login({             // it will take all the login info push it in store
          uid: userAuth.uid,
          email: userAuth.email,

        })
        )
         console.log(userAuth)
      } else {
        dispatch(logout());  //if we logout it will set the juser to null

      }
    });
    return unsubscribe   ;    //it helps in cleanup 
    
  },[dispatch]);
  return (
    <>
    <div className="app">
    
     <Router>
       {!user ? (
         <LoginScreen /> 
       ) : (
        <Switch>
          <Route  path='/profile'>
            <ProfileScreen />
          </Route>
         <Route exact path='/'>
         <HomeScreen />
         </Route>
       </Switch>
        )}
       </Router>
    </div>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import {useAppContext} from "./context/providers/app.provider";
import AuthService from "./services/auth.service";
import {BrowserRouter} from "react-router-dom";
import AuthorizationService from "./services/authorization.service";
import MainContainer from "./containers/main.container";

function App() {
  const [appState,] = useAppContext()
  // If we have any alert, we will show it in all app levels

  return (
      <div>
        {appState.alerts && appState.alerts?.length > 0 && appState.alerts?.map((_a, i) => {
          return <div key={`app-alert-${i}`} className={`alert alert-${_a.variant}`}>{_a.message}</div>;
        })}
          {/* BrowserRouter will help on browsing via routes */}
          <BrowserRouter>
              {/* AUTH SERVICE WILL CHECK IF USER AUTHENTICATED */}
              <AuthService>
                  {/* AUTHORIZATION SERVICE WILL CHECK IF USER AUTHORIZED */}
                  <AuthorizationService>
                      <MainContainer />
                  </AuthorizationService>
              </AuthService>
          </BrowserRouter>
      </div>
  );
}

export default App;

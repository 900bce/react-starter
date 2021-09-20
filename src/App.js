import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SassColorVariables, UnsplashLightBox, HotelManagement } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/01">
          <SassColorVariables />
        </Route>
        <Route path="/02">
          <UnsplashLightBox />
        </Route>
        <Route path="/03">
          <HotelManagement />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

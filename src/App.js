import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  SassColorVariables,
  UnsplashLightBox,
  HotelManagement,
  Shopping,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/react-starter/01" component={SassColorVariables} />
        <Route path="/react-starter/02" component={UnsplashLightBox} />
        <Route path="/react-starter/03" component={HotelManagement} />
        <Route path="/react-starter/04" component={Shopping} />
        <Route path="/react-starter" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

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
        <Route path="/01" component={SassColorVariables} />
        <Route path="/02" component={UnsplashLightBox} />
        <Route path="/03" component={HotelManagement} />
        <Route path="/04" component={Shopping} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

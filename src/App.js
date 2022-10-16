import { Provider } from "react-redux"
import { store } from "./redux"
import Router from './config/router';

function App() {
  return (
      <Provider store={store}>
        <Router />
      </Provider>
  );
}

export default App;

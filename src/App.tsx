import "./App.css";
import CustomRouter from "./components/CustomRouter";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;

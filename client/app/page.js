import { Provider } from "react-redux";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import { store } from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <NavBar />
      <Body />
    </Provider>
  );
}

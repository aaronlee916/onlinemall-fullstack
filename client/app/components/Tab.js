import { useSelector } from "react-redux";
import { store } from "../store/store";
import Phone from "./Phone";

export default function Tab() {
  let currTab = useSelector((state)=>state.navigation.tabBar);
  switch (currTab) {
    case "Phone":
      return <Phone />;
      break;
    case "PC":
      return <PC />;
      break;
    case "Misc":
      return <Misc />;
      break;
    case "IoT":
      return <IoT />;
      break;
    case "Support":
      return <Support />;
      break;
  }
}

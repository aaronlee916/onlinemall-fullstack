import Body from "./components/Body";
import NavBar from "./components/NavBar";
import { Providers } from "./store/Providers";

export default function Home() {
  return (
   <Providers>
     <div>
      <NavBar />
      <Body />
    </div>
   </Providers>
  );
}

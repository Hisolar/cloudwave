import { useState } from "react";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Messages from "./Component/Messages";
import OurTeam from "./Component/OurTeam";
import Use from "./Component/Use";
import Recommendation from "./Component/Recommendation";
import Blog from "./Component/Blog";
import Digital from "./Component/Digital";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Messages />
      <OurTeam />
      <Use />
      <Recommendation />
      <Blog />
      <Digital />
      <Footer />
    </div>
  );
}

export default App;

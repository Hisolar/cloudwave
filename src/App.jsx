import { useState } from "react";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Messages from "./Component/Messages";
import OurTeam from "./Component/OurTeam";
import Use from "./Component/Use";
import Recommendation from "./Component/Recommendation";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Messages />
      <OurTeam />
      <Use />
      <Recommendation />
    </div>
  );
}

export default App;

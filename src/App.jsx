import { useState } from "react";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Messages from "./Component/Messages";
import OurTeam from "./Component/OurTeam";
import Use from "./Component/Use";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Messages />
      <OurTeam />
      <Use />
    </div>
  );
}

export default App;

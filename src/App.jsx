import { useState } from "react";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Messages from "./Component/Messages";
import OurTeam from "./Component/OurTeam";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Messages />
      <OurTeam />
    </div>
  );
}

export default App;

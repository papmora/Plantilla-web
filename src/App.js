import React from "react";
import "./App.css";

import Navigation from "./components/NavBar/Navigation";
import Image from "./components/Image/Image";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="App">
      <Navigation
        projectname="Project name"
        primero="Inicio"
        segundo="Boton 1"
        tercero="Boton 2"
        cuarto="Boton deshabilitado"
      />
      <Image
        source={require("./media/imagen.jpg")}
        detalle="Crack"
        width="400"
        height="400"
      />
      <Video
        title="video"
        width="650"
        height="400"
        source="https://www.youtube.com/embed/X5Wkp1gsNik"
      />
    </div>
  );
}

export default App;

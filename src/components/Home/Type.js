import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Разработчик",
          "Frontend разработчик",
          "Разрабочтки приложений",
          "Разработчик с открытым исходным кодом",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

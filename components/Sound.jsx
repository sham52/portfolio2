import React from "react";
import { useEffect, useState } from "react";
import Image from 'next';
import { BsSoundwave } from "react-icons/bs";

const Sound = () => {

    const [value,setValue] = useState(0);

    useEffect(() => {
        play();
    },[value]);


    const play = () => {
        new Audio().play();
    }

  return (
    <div>
      <Image/>
            <button onClick={() => setValue(value+1)}> Play</button>
    </div>
  );
};

export default Sound;

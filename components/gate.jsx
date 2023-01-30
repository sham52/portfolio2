import React from "react";
// const {generateCeasetCipher } = require('./ceaser.js');
// const rot13 = generateCeaserCipher(13,'abcdefghijklmnoprstuvwxyz'.split(''));
// const enchiperedMessage = rot13.enchiper('weareddiscoveredfleeatonce');
// const decihperedMessage = rot13.decipher(enchiperedMessage);
import { sentence } from "txtgen";
import { useState, useEffect } from "react";

const Sentence = sentence();


const Gate = () => {
  return (<></>
    // <div className="flex flex-col justify-items items-center gate py-10 m-4">
    //   <input type="text" />
    //   <p className="text-center">{Sentence}</p>
    // </div>
  );
};

export default Gate;

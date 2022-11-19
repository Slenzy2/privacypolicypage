import React from 'react';

import { logo } from '../assets';

export default function Logo() {
  return (
    <header className="flex gap-[12px] items-center">
      <img src={logo} alt="logo" />
      <span className="font-[900] text-[27px]">LoveMe</span>
    </header>
  );
}

import React from 'react';
import logo from '../assets/logo.webp';
import ToggleSwitch from './ToggleSwitch';

interface Props {
  DarkModeHandler: () => void;
}

const NavBar: React.FC<Props> = ({ DarkModeHandler }) => {
  return (
    <div className='flex items-center justify-between space-x-4'>
      <div className='flex items-center space-x-4'>
        <img src={logo} alt="Logo" className="w-16 h-16" />
        <span className="text-lg">NavBar</span>
      </div>
      <ToggleSwitch DarkModeHandler={DarkModeHandler} />
    </div>
  );
}

export default NavBar;

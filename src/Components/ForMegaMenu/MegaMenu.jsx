import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
     const [hovering, setHovering] = useState(null); 
     const [popoverLeft, setPopoverLeft] = useState(null); 
     const [popoverHeight, setPopoverHeight] = useState(null);
 
  return (
    <nav onMouseLeave={() => {
        setHovering(null);
      }}
      className="items-start self-center flex w-full max-w-full relative"
    >
      <ul className="flex gap-8 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li onMouseEnter={(event) => {
          setHovering(1);
          setPopoverLeft(event.currentTarget.offsetLeft);
        }}>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li onMouseEnter={(event) => {
          setHovering(2);
          setPopoverLeft(event.currentTarget.offsetLeft);
        }}>
          <Link className='uppercase font-light' to="/sale">SALE</Link>
        </li>
        <li onMouseEnter={(event) => {
          setHovering(3);
          setPopoverLeft(event.currentTarget.offsetLeft);
        }}>
          <Link className='uppercase font-light' to="/new-trending">New & Trending</Link>
        </li>
      </ul>

      {hovering && (
        <div style={{
          left: popoverLeft || 0,
        }} className="absolute top-6 pt-6 -ml-24 w-[600px] bg-white overflow-hidden border-2 border-[red] transform-gpu rounded shadow-lg transition-all duration-300">
        </div>
      )}
    </nav>
  );
};

export default MegaMenu;

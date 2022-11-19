import React from 'react';
import { useState } from 'react';
import { BiUpArrow } from 'react-icons/bi';
import '../styles/sections/ScrollTop.scss';


const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  window.onscroll = () => {
    document.documentElement.scrollTop > 300
      ? setVisible(true)
      : setVisible(false);
  };
  const goTop = () => {
     window.scrollTo(0, 0);
  }
  return (
    <>
      {visible && (
        <div className="arrowTop" onClick={goTop}>
          {<BiUpArrow />}
        </div>
      )}
    </>
  );
}

export default ScrollTop
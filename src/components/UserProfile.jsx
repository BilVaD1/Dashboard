import React, { useEffect, useRef } from 'react'
import ReactCSSTransitionGroup from 'react-transition-group';
import { useStateContext } from '../contexts/ContextProvider'

import avatar from '../data/myAvatar.jpg'

const UserProfile = () => {
  const { currentColor, isClicked, setIsClicked } = useStateContext();
  const ref = useRef();

  // Для закрытия окна по клику вне его
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(prev => ({ ...prev, chat: false, cart: false, notification: false, useProfile: false }));
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
  
  return (
        <div 
          ref={ref} 
          style={{ 'background-color': currentColor }}
          className='duration-1000 hover:drop-shadow-2xl absolute right-[50px] top-[100px] w-72 h-48 rounded-lg translate-y-6 z-10'
        >
          <div>
            <img className='rounded-full w-20 h-20 absolute right-[105px] top-[-50px]' src={avatar} alt="" />
          </div>
          <div className='flex flex-col ml-2'>
            <div className='mt-[50px] inline-grid grid-cols-2'>
              <p>Telephone:</p>
              <p className="relative group">
                <span className='text-sm text-white'>380630397426</span>
                <span className="duration-700 absolute -bottom-1 left-0 w-0 h-[2px] bg-green-300 transition-all group-hover:w-[100px]"></span>
              </p>
            </div>
            <div className='mt-[10px] inline-grid grid-cols-2'>
              <p>Email:</p>
              <p className="relative group">
                <span className='text-sm text-white'>bilvad1@gmail.com</span>
                <span className="duration-700 absolute -bottom-1 left-0 w-0 h-[2px] bg-green-300 transition-all group-hover:w-[130px]"></span>
              </p>
            </div>
            <div className='mt-[10px] inline-grid grid-cols-2'>
              <p>Location:</p>
              <p className="relative group">
                <span className='text-sm text-white'>Ukraine</span>
                <span className="duration-700 absolute -bottom-1 left-0 w-0 h-[2px] bg-green-300 transition-all group-hover:w-[60px]"></span>
              </p>
            </div>
          </div>
        </div>
  )
}

export default UserProfile
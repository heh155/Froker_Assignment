import React from 'react';
import './Footerp.css'

export default function Footerp() {
  return (
    <div>
      <div className="des">
        <div className='position-relative'>
          <img 
            src="/static/media/base.3f5339217a654a163327574449f303a4.svg" 
            alt="" 
            className='footersvg'
          />
          <div className='centered-text'>
            <span className='design'>© 2024 Arroz Technology. All rights reserved</span>
          </div>
        </div>
      </div>
      
      <div className="desa">
        <div className="position-relativem">
          <img 
            src="/static/media/basem.b8c2e8e8b7876dc95e6684116f30c69d.svg" 
            alt=""  
            className='footersvgm'
          />
          <div className='centered-textm'>
            <span className='designm'>© 2024 Arroz Technology. All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-columns'>
      <div className='column1'>
        <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg" alt="" />
      </div>
      <div className="child">
        <div className='column2'>
          <div className='contact11'>
            <h4>Quicklink</h4>
          </div>
          <div className="row">
            <span>
              <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="" className='arr' />
            </span>
            <a href="/" className='home'>Home</a>
          </div>
          <div className="row">
            <span>
              <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="" className='arr' />
            </span>
            <a href="/about-us" className='home'>About Us</a>
          </div>
          <div className="row">
            <span>
              <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="" className='arr' />
            </span>
            <a href="/privacy-policy" className='home'>Privacy Policy</a>
          </div>
          <div className="row">
            <span>
              <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="" className='arr'/>
            </span>
            <a href="/terms-and-conditions"> Terms & Conditions</a>
          </div>
        </div>
        <div className='column3'>
          <div className='contact1'>
            <h4>Contacts</h4>
          </div>
          <div className='address'>
            <span>
              <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Froker/@12.9556403,77.7202612,15z/data=!4m6!3m5!1s0x3bae13d152fd68ed:0x7427946171c830c1!8m2!3d12.9556403!4d77.7202612!16s%2Fg%2F11stskm2hv?entry=ttu">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" color="#F76F32" className="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(247, 111, 50)' }}>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </span>
            <span className='whitefield-bengaluru-560066'>
              Whitefield, Bengaluru, 560066
            </span>
          </div>
          <div className='maiil'>
            <span>
              <a href="mailto:Support@Froker.In">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#F76F32" className="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(247, 111, 50)' }}>
                  <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
                  <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
                </svg>
              </a>
            </span>
            <span className='whitefield-bengaluru-560066'>support@froker.in</span>
          </div>
          <div className='social-media'>
            <a href="https://twitter.com/FrokerSocial" target="_blank" rel="noreferrer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                color="#F76F32"
                className="som"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: 'rgb(247, 111, 50)' }}
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.654 77.065 33.265 24.394-4.548 47.39-13.77 67.758-26.078-8.025 24.812-24.812 45.55-46.753 58.923 21.503-2.373 42.12-8.263 61.163-16.697-14.254 21.271-32.195 39.621-52.775 54.425z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/froker.social/" target="_blank" rel="noreferrer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                color="#F76F32"
                className="som"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: 'rgb(247, 111, 50)' }}
              >
                <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1s51.5 115.1 115.1 115.1 115.1-51.5 115.1-115.1-51.5-115.1-115.1-115.1zM224.1 330c-57.1 0-103.1-46-103.1-103.1s46-103.1 103.1-103.1 103.1 46 103.1 103.1-46 103.1-103.1 103.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM224.1 335c-63.4 0-115.1-51.6-115.1-115.1s51.7-115.1 115.1-115.1 115.1 51.6 115.1 115.1-51.7 115.1-115.1 115.1zM400 432H48c-13.2 0-24-10.8-24-24V80c0-13.2 10.8-24 24-24h352c13.2 0 24 10.8 24 24v328c0 13.2-10.8 24-24 24z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/froker" target="_blank" rel="noreferrer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                color="#F76F32"
                className="som"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: 'rgb(247, 111, 50)' }}
              >
                <path d="M100.28 480H7.4V167.8h92.88V480zm-46.22-355.1c-29.45 0-53.33-24.02-53.33-53.88s23.88-53.88 53.33-53.88 53.33 24.02 53.33 53.88-23.88 53.88-53.33 53.88zM447.5 480h-92.88V330.6c0-35.9-12.78-60.4-44.83-60.4-24.4 0-39.36 16.37-45.7 32.2-2.36 5.7-2.9 13.5-2.9 21.3v156.3H132.8V167.8h89.95v36.8c13.77-21.05 38.5-50.1 93.5-50.1 68.5 0 119.3 44.2 119.3 139.4V480z"></path>
             </svg></a>
          </div>
        </div>
      </div>
      <div className='column4'>
        <div className='scan-to-download1'>
            <h4>Scan to Download</h4>
            <div>
            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009706/Frokerassets/froker-1-3-10_pb9yln.jpg" class="qr" alt="QR Code"/>
            </div>
        </div>
        {/* <div className="des">
            <div className='position-relative'>
                <img src="/static/media/base.3f5339217a654a163327574449f303a4.svg" alt="" className='footersvg'/>
                <div className='centered-text'>
                    <span className='design'>© 2024 Arroz Technology. All rights reserved</span>
                </div>
            </div>j
        </div> */}
        {/* <div className="desa">
            <div className="position-relativem">
                <img src="/static/media/basem.b8c2e8e8b7876dc95e6684116f30c69d.svg" alt=""  className='footersvgm'/>
                <div className='centered-textm'>
                    <span className='designm'>© 2024 Arroz Technology. All rights reserved</span>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
}

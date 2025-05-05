
import { socialImgs } from '../constants';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>

        <div className='socials flex gap-2'>
          {socialImgs.map((img, index) => (
            <a className='icon' target='_blank' href={img.url} key={img.url}>
              <img src={img.imgPath} alt={`social-${index}`} />
            </a>
          ))}
        </div>
        
        <div className='flex flex-col justify-center md:items-start items-center'>
          <p className='text-center md:text-end'> ©{new Date().getFullYear()}Seyfullah |   .All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

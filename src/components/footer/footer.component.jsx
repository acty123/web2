import React from 'react';
import './footer.styles.scss';
import {Link} from 'react-router-dom';
import facebook from '../../assets/F.png';
import twitter from '../../assets/T.png';
import linkedin from '../../assets/L.png';

const Footer = () => (
    <div>
        <div className='footer'>
                  <div className='information'>
                    <div><b>Cali</b> Cra. 67 #18-35 +57 (2) 1234567</div>
                    <div><b>2018 Aventi. Derechos reservados Aventi</b></div>
                  
                  </div>
                  
                  <div className='social-options'>
                      <Link className='s-option' to='/'>
                          <img src={facebook} alt='Facebook'></img>
                      </Link>
                      <Link className='s-option' to='/'>
                          <img src={twitter} alt='Twitter'></img>
                      </Link>
                      <Link className='s-option' to='/'>
                          <img src={linkedin} alt='LinkedIn'></img>
                      </Link>
                  </div>
              </div>
               
    </div>
);

export default Footer;
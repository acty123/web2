import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/A.png';
import facebook from '../../assets/F.png';
import twitter from '../../assets/T.png';
import linkedin from '../../assets/L.png';
import './header.styles.scss';

class Header extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        isExpanded: false
      };
    }
    handleToggle(e) {
      e.preventDefault();
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    }

    render() {
        const { isExpanded } = this.state;
    
        return (
          <div className='header'>
            <Link to='/'>
                <img src={logo} alt='Logo'></img>
            </Link>
            
              <i
                className="fa fa-bars"
                aria-hidden="true"
                onClick={e => this.handleToggle(e)}
              />
              <div className={`collapsed ${isExpanded ? "is-expanded" : ""} options`}>
                  <Link className='option' to='/'>
                      Quienes somos
                  </Link>
                  <Link className='option' to='/'>
                      Servicios
                  </Link>
                  <Link className='option' to='/'>
                      Casos de éxito
                  </Link>
                  <Link className='option' to='/'>
                      Recursos para tu negocio
                  </Link>
                  <Link className='option' to='/'>
                      Contáctenos
                  </Link>
                  
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
      }
}

export default Header;
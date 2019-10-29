import React from 'react';
import './Footer.css';
import Logo from '../../img/logo.png';

class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <footer className="container-fluid">
        <figure>
          <img className="logo-footer"  src={Logo} alt=""/>
        </figure>
        <p className="author">
          @ Сreated by 6 subgroups specifically for the TSS lesson
        </p>
        <div className="footer-content row justify-content-center">
          <div className="contacts col-xl-5">
              <h4>
                Contact
              </h4>
              <div className="phone">
                <p><i className="zmdi zmdi-smartphone-ring"></i>+380632882882</p>
                <p><i className="zmdi zmdi-smartphone-ring"></i>+380632882882</p>
                <a href="https://mail.google.com"><i className="zmdi zmdi-google-plus-box"></i>valerka@gmail.com</a>
              </div>
          </div>
          <div className="social-network col-xl-5">
            <h4>
              Social network
            </h4>
            <div className="social-network_content">
              <a href="#"><i className="zmdi zmdi-instagram"></i></a>
              <a href="#"><i className="zmdi zmdi-twitter"></i></a>
              <a href="#"><i className="zmdi zmdi-vk"></i></a>
              <a href="#"><i className="zmdi zmdi-facebook"></i></a>
              <a href="#"><i className="zmdi zmdi-skype"></i></a>
              <a href="#"><i className="zmdi zmdi-stackoverflow"></i></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;

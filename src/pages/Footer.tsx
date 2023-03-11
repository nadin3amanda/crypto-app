import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
          @nadin3amanda © 2023
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
              <li><Link to="https://github.com/nadin3amanda" className="github" target="_blank"><i className="fa fa-github" /></Link></li>
                <li><Link to="https://fb.me/nadineamandaortega" className="facebook" target="_blank"><i className="fa fa-facebook" /></Link></li>
                <li><Link to="https://twitter.com/nadin3amanda" className="twitter" target="_blank"><i className="fa fa-twitter" /></Link></li>
                <li><Link to="https://linikedin.com/in/nadine-amanda-ortega" className="linkedin" target="_blank"><i className='fa fa-linkedin' /></Link></li>   
              </ul>
            </div>
        </div>
      )
}

export default Footer;
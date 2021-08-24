import React from 'react';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footerContainer bdContainer bdGrid">
        <div className="footerContent">
          <h3 className="footerTitle">
            <p>GoShoes</p>
          </h3>
          <p className="footerDescription">
            Envie um presente e
            {' '}
            <br />
            {' '}
            proporcione alegria
          </p>
        </div>

        <div className="footerContent">
          <h3 className="footerTitle">Nossos Serviços</h3>
          <ul>
            <li><p className="footerLink">Orçamento</p></li>
            <li><p className="footerLink">Descontos</p></li>
            <li><p className="footerLink">Frete</p></li>
          </ul>
        </div>

        <div className="footerContent">
          <h3 className="footerTitle">Quem somos</h3>
          <ul>
            <li><p className="footerLink">Blog</p></li>
            <li><p className="footerLink">Sobre nós</p></li>
            <li><p className="footerLink">Nossa Missão</p></li>
          </ul>
        </div>

        <div className="footerContent">
          <h3 className="footerTitle">Social</h3>
          <SiFacebook className="footerSocial" />
          <SiTwitter className="footerSocial" />
          <SiInstagram className="footerSocial" />
        </div>
      </div>

      <p className="footerCopy">&#169; 2021 AdamBJr. All right reserved</p>
    </footer>
  );
}

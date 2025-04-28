import React from "react";
import "./Footer.css";
const Footer = ({
  logo,
  text,
  title,
  info,
  items,
  icon,
  SitePolicies,
  SitePoliciesicon,
  Copyright,
}) => {
  return (
    <footer>
   <div className="footerconter">
   <div className="logofooters">
        <div className="logotext">
          <div className="logofooter">
            <img src={logo} alt="logo" />
            <h2>{title}</h2>
          </div>
          <p>{text}</p>
        </div>
        <ul className="iconinfo">
          {" "}
          {info?.map((item, index) => {
            return (
              <li key={index}>
             <div className="iconfinfo"><a href={item?.link}>{item?.icon}</a></div> 
                <p>{item?.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
<ul className="infolist">
        {items?.map((item, index) => {
          return (
            <div key={index} className="list">
              <h2>{item?.title}</h2>
              
              <div className="nlist">
              {item?.links.map((link, i) => (
                <li key={i} className="linklist">
                  <a className="icpolic" href={link?.link}>{link?.content}</a>
                </li>
              ))}
              </div>
            </div>
          );
        })}
      </ul>

   </div>






{/*  */}
   
        <div className="footerBar"> 
          <div className="footerBarSitePolicies">
          <ul className="SitePolicies">
              {SitePolicies?.map((item, index) => {
                return (
                  <li key={index} className=""style={{
                    borderRight: index === 1 ? '2px solid black' : '',
                    borderLeft: index === 1 ? '2px solid black' : '',
                       paddingRight: '16px',
                       paddingLeft: '16px',
                  }}>
                    <a href={item?.link}>{item?.text}</a>
                  </li>
                );
              })}
            </ul>
            
            <ul className="Policies">
             {SitePoliciesicon?.map((item, index) => {
               return (
                 <li key={index}>
                   <a href={item?.link}>{item?.icon}</a>
                 </li>
               );
             })}
           </ul>

          </div>
        
      <div className="Copyright">
        <p>{Copyright}</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

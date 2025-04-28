import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import logo from "./../public/assets/img/shape-14.png";
import Footer from "./component/Footer/Footer";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import TopBanner from "./component/Top Banner/TopBanner";
import Hero from "./component/Hero/Hero";
import OurBenefits from "./component/OurBenefits/OurBenefits";
import Frequently from "./component/Frequently/Frequently ";

function App() {
  return (
    <>
   <TopBanner/>
      <NavBar
        logo={logo}
        text="Little Learners"
        items={[
          { link: "#home", content: "Home"  },
          { link: "#about Us", content: "About Us" },
          { link: "#academics", content: "Academics" },
          {link:  "#admissions" , content : "Admissions"} ,
           {link: "#student Life" , content : "Student Life"} , 
        ]}
        btn="Contact"
      />
      <Hero />
      <OurBenefits/>
      <Frequently/>
      <Footer logo={logo}
      title="Little Learners"
        text="We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        info={[
        {link:"#" ,content : "hello@littlelearners.com", icon:<FaEnvelope />},
        {link:"#" ,content : "+91 91813 23 2309", icon:<FaPhone />},
        {link:"#" ,content : "Somewhere in the World", icon:<FaMapMarkerAlt />}
      ]}
      items={[
        {title:"Home",
          links:[{ link: "#features", content: "Features" },
            { link: "#testimonials", content: "Our Testimonials" },
            { link: "#faq", content: "FAQ" }]


        },
        {title:"About Us",
          links:[{ link: "#Our Mission", content: "Our Mission" },
            { link: "#Our Vission", content: "Our Vission" },
            { link: "#Awards and Recognitions", content: "Awards and Recognitions"},
             { link: "#History", content: "History" },
             { link: "#Teachers", content: "Teachers" },
            ]
        },
        {title:"Academics",
          links:[ { link: "#Special Features", content: "Special Features" },
            { link: "#Gallery", content: "Gallery" },]
        },
        {title:"Contact Us",
          links:[ { link: "#Information", content: "Information" },
            { link: "#Map & Direction", content: "Map & Direction" },]
        },
      ]}
      SitePoliciesicon={[
        {link:"#",icon:<FaFacebook />},
        {link:"#",icon:<IoLogoTwitter />},
        {link:"#",icon:<FaLinkedin />}
      ]}
      SitePolicies={[{link:"#",text: "Terms of Service"},
        {link:"#",text:"Privacy Policy"},
        {link:"#",text:"Cookie Policy"}
      ]}
      Copyright=" Copyright © [2023] Little Learners Academy. All rights reserved."
       />
       {/* <CardPages/> */}
   
    </>
  );
}

export default App;

import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-sm md:text-md lg:text-2xl text-white text-center py-4 px-7 mt-0 lg:w-[100%] ">
      <div className="FooterLogo flex justify-center">
        <img
          src={Logo}
          className="w-[10%] h-[10%] flex text-center max-[375px]:w-[70px] max-[375px]:h-[30px] max-[425px]:w-[70px] max-[425px]:h-[30px] max-[768px]:w-[70px] max-[768px]:h-[30px]"
        />
      </div>
      <h6 className="FooterMobile">Mobile: +91 98985 91813 </h6>
      <h6 className="FooterEmail">Email: info@veri5dindia.com</h6>
      <h6 className="FooterAdress">
        Adress: 405, Sakar East, Tarsali Ring Road, Vadodara-09, Gujarat, India
      </h6>
      <p className="FooterPara">© 2024 Veri5D. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

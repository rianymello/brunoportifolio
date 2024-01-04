import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Bruno Silva
          </p>
          <p className="m-1 font-playfair text-md text-yellow">
            ©2023 By.
            <a className="m-1" target="_blank" href="https://github.com/rianymello">Riany</a>
            
            <a className="m-1" target="_blank" href="https://github.com/Cocakk">Pedro</a>
            
            <a className="m-1" target="_blank" href="https://github.com/Ecztassy">Diogo</a>
            
            <a href=""> Bruno </a>


          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

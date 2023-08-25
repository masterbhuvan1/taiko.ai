import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-400 py-6 md:py-10  relative">
      <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center gap-2 mb-4 md:mb-6">
          <li className="text-xs md:text-sm hover:text-pink cursor-pointer">
            Terms Of Use
          </li>
          <li className="text-xs md:text-sm hover:text-pink cursor-pointer">
            Privacy-Policy
          </li>
          <li className="text-xs md:text-sm hover:text-pink cursor-pointer">
            About
          </li>
          <li className="text-xs md:text-sm hover:text-pink cursor-pointer">
            Blog
          </li>
          <li className="text-xs md:text-sm hover:text-pink cursor-pointer">
            FAQ
          </li>
        </ul>

        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 text-white rounded-full bg-black flex items-center justify-center cursor-pointer transition-all ease-in duration-300 hover:shadow-lg hover:text-pink">
            <FaFacebookF />
          </div>
          <div className="w-8 h-8 text-white rounded-full bg-black flex items-center justify-center cursor-pointer transition-all ease-in duration-300 hover:shadow-lg hover:text-pink">
            <FaInstagram />
          </div>
          <div className="w-8 h-8 text-white rounded-full bg-black flex items-center justify-center cursor-pointer transition-all ease-in duration-300 hover:shadow-lg hover:text-pink">
            <FaTwitter />
          </div>
          <div className="w-8 h-8 text-white rounded-full bg-black flex items-center justify-center cursor-pointer transition-all ease-in duration-300 hover:shadow-lg hover:text-pink">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

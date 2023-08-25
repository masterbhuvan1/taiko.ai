import { useState, useEffect } from "react";
// import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [show, setShow] = useState("bg-black bg-opacity-40");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const controlNavBar = () => {
    //console.log(window.scrollY);
    if (window.scrollY > 250) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hidden -translate-y-60 ");
      } else {
        setShow(" bg-black");
      }
    } else {
      setShow("bg-black bg-opacity-40   text-black");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY]);
  // const openSearch = () => {
  //   setMobileMenu(false);
  // };
  const openMobileMenu = () => {
    setMobileMenu(true);
  };
  // const searchQueryHandler = (event) => {
  //   if (event.key === "Enter" && query.length > 0) {
  //     navigate(`/search/${query}`);
  //     setTimeout(() => {
  //       setShowSearch(false);
  //     }, 1000);
  //   }
  // };

  const navigationHandler = (type: string) => {
    if (type === "contact") {
      navigate("/contact");
    } else {
      navigate("/chartsandmap");
    }
    setMobileMenu(false);
  };
  return (
    <div>
      <header
        className={` bg-white w-screen   fixed top-0 left-0 flex${
          mobileMenu ? "-col bg-slate-900" : `-col ${show}`
        } items-center justify-around  z-20 `}
      >
        <div
          className={`${
            mobileMenu ? "" : "w-screen flex flex-row justify-between"
          }`}
        >
          <div
            className={`flex flex-row items-center justify-between max-md:w-screen `}
          >
            <img
              src="./Taiyo-logo.jpg"
              className=" w-60 ml-11 h-24 mx-11 max-md:mx-4 max-md:w-32 max-md:h-14 transition-all duration-500"
            />
            <div className=" md:hidden hover:cursor-pointer flex    text-black mr-16 space-x-9 top-0 flex-row items-start">
              {mobileMenu ? (
                <VscChromeClose onClick={() => setMobileMenu(false)} />
              ) : (
                <SlMenu onClick={openMobileMenu} />
              )}
            </div>
          </div>
          <ul
            className={` text-xl flex${
              mobileMenu
                ? "-col flex w-screen items-start ml-4 space-y-4"
                : "-row flex  items-center max-md:hidden space-x-4 mr-3 md:space-x-8 "
            }  `}
          >
            <li
              className="menuItem hover:cursor-pointer     text-black py-2 px-4 md:w-7/9"
              onClick={() => navigationHandler("contact")}
            >
              Contacts
            </li>
            <li
              className={`menuItem hover:cursor-pointer      text-black ${
                mobileMenu ? "px-4" : "px-4"
              } `}
              onClick={() => navigationHandler("chartsAndMap")}
            >
              Charts and Map
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

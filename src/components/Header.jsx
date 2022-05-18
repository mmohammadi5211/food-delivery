import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../assets/images/logo.png";
import Avatar from "../assets/images/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "../components/context/reducer";

const Header = () => {
  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      console.log(Response);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setMenu(!isMenu);
    }
  };

  const logout = () => {
    setMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <>
      <header className="fixed z-50 w-screen  py-3 px-4 md:py-6 md:px-16 bg-primary ">
        {/* desktop & tablet */}
        <div className="hidden md:flex  h-full items-center  justify-between">
          <Link to={"/"} className="flex items-center gap-2 ">
            <img src={Logo} alt="logo" className="w-8 object-cover" />
            <p className="text-headingColor text-xl font-bold">City</p>
          </Link>

          <div className="flex items-center gap-8">
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-8 "
            >
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
                Home
              </li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
                Menu
              </li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
                About Us
              </li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
                Service
              </li>
            </motion.ul>
            <div
              className="relative flex items-center justify-center"
              onClick={showCart}
            >
              <MdShoppingBasket className="text-textColor text-2xl " />
              {cartItems && cartItems.length > 0 && (
                <div className="absolute -right-2 -top-2 w-5 h-5  rounded-full bg-cartNumBg flex items-center justify-center">
                  <p className="text-xs text-white font-semibold">
                    {cartItems.length}
                  </p>
                </div>
              )}
            </div>
            <div className="relative">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user.photoURL : Avatar}
                alt="userprofile"
                className=" w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                onClick={login}
              />
              {isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className=" w-40 bg-gray-50 shadow-lg rounded-lg flex flex-col absolute top-12 right-0 "
                >
                  {user && user.email === "majid.mo20101@gmail.com" && (
                    <Link
                      to={"/createItem"}
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setMenu(false)}
                    >
                      New Item <MdAdd />
                    </Link>
                  )}
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={logout}
                  >
                    Logout <MdLogout />
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex  items-center justify-between md:hidden w-full h-full">
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl " />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -right-2 -top-2 w-5 h-5  rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  (cartItems.length)
                </p>
              </div>
            )}
          </div>
          <Link to={"/"} className="flex items-center gap-2 ">
            <img src={Logo} alt="logo" className="w-8 object-cover" />
            <p className="text-headingColor text-xl font-bold">City</p>
          </Link>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
              className=" w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className=" w-40 bg-gray-50 shadow-lg rounded-lg flex flex-col absolute top-12 right-0 "
              >
                {user && user.email === "majid.mo20101@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className=" px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <ul className="flex flex-col  ">
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 "
                    onClick={() => setMenu(false)}
                  >
                    Home
                  </li>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 "
                    onClick={() => setMenu(false)}
                  >
                    Menu
                  </li>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 "
                    onClick={() => setMenu(false)}
                  >
                    About Us
                  </li>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 "
                    onClick={() => setMenu(false)}
                  >
                    Service
                  </li>
                </ul>
                <p
                  className=" m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

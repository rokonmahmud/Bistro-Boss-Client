import { Link, NavLink } from "react-router-dom";
import cartIcon from "../../assets/images/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handaleLogout = ()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }


  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="uppercase text-white font-inter hover:text-[#EAB504]"
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className="uppercase text-white font-inter  hover:text-[#EAB504]"
        >
          contact us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/shop"}
          className="uppercase text-white font-inter  hover:text-[#EAB504]"
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/shop"}
          className="uppercase text-white font-inter hover:text-[#EAB504]"
        >
          our menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/shop"}
          className="uppercase text-white font-inter hover:text-[#EAB504]"
        >
          our shop
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed w-full   z-50">
      <div className="navbar py-2 bg-[#00000051]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000000c7] rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost uppercase text-white text-2xl">LOGO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
          <div className="relative">
            <img className="h-11 " src={cartIcon} alt="" />
            <div className="bg-[#D99934] rounded-full absolute top-5 right-[1px] px-2">
              0
            </div>
          </div>
        </div>
        <div className="navbar-end">

          {user? <Link onClick={handaleLogout} className="uppercase font-bold mr-4 text-[#E4A804]">Log out</Link>
          :
          <Link to={'/login'}  className="uppercase font-bold mr-4 text-[#E4A804]">Login</Link>
        }
          

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            {/* <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

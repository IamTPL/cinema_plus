import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { localUser } from '../../services/localStorage';

const Header = () => {
    var prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
        var currentScrollPos = window.pageYOffset;
        var navbar = document.querySelector('.navbar');
        if (prevScrollpos < currentScrollPos) {
            navbar.style.top = '0';
        } else {
            navbar.style.top = '-65px';
        }
        if (currentScrollPos <= 50) {
            navbar.style.top = '0';
        }
        prevScrollpos = currentScrollPos;
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let userInfo = useSelector((state) => state.userReducer.userLogin);
    const handleLogout = () => {
        localUser.remove();
        window.location.href = '/';
    };

    const renderNavbar = () => {
        if (userInfo) {
            return (
                <div className="flex items-center">
                    <button className="text-zinc-300 text-lg md:text-base sm:text-sm font-medium p-2 sm:p-0 duration-300 hover:text-white">
                        {userInfo.hoTen}
                    </button>
                    <span className="mx-5 md:mx-1 text-orange-700">|</span>
                    <button
                        onClick={handleLogout}
                        className="text-zinc-500 text-lg md:text-base sm:text-sm font-medium p-2 sm:p-0 duration-300 hover:text-zinc-100"
                    >
                        Logout
                    </button>
                </div>
            );
        } else {
            return (
                <div className="flex items-center">
                    <NavLink to="/login">
                        <button className="text-zinc-500 text-lg md:text-base sm:text-sm font-medium p-2 sm:p-0 duration-300 hover:text-white">
                            Login
                        </button>
                    </NavLink>
                    <span
                        className="mx-5 md:mx-1 text-orange-700"
                        style={{ userSelect: 'none' }}
                    >
                        |
                    </span>
                    <NavLink to="/sign_up">
                        <button className="text-zinc-500 text-lg md:text-base sm:text-sm font-medium p-2 sm:p-0 duration-300 hover:text-white">
                            Resgister
                        </button>
                    </NavLink>
                </div>
            );
        }
    };
    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-[rgb(15,15,15,0.95)] shadow-sm shadow-zinc-800">
            <div className="px-20 lg:px-10 md:px-5 sm:px-1 mx-auto navbar duration-300 h-16 flex justify-between items-center">
                <NavLink
                    to="/"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <span
                        className="hover:opacity-80 duration-300"
                        style={{ userSelect: 'none' }}
                    >
                        <i className="fa-solid fa-masks-theater text-white text-3xl sm:text-xl mr-3 sm:mr-1"></i>
                        <span className="text-2xl sm:text-base font-extrabold text-orange-700">
                            Cinema.
                            <span className=" text-3xl sm:text-base text-zinc-100 font-black">
                                Plus
                            </span>
                        </span>
                    </span>
                </NavLink>
                {renderNavbar()}
            </div>
        </div>
    );
};

export default Header;

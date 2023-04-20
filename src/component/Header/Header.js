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
                    <button className="text-zinc-300 text-lg font-medium p-2 duration-300 hover:text-white">
                        {userInfo.hoTen}
                    </button>
                    <span className="mx-5 text-orange-700">|</span>
                    <button
                        onClick={handleLogout}
                        className="text-zinc-500 text-lg font-medium p-2 duration-300 hover:text-zinc-100"
                    >
                        Logout
                    </button>
                </div>
            );
        } else {
            return (
                <div className="flex items-center">
                    <NavLink to="/login">
                        <button className="text-zinc-500 text-lg font-medium p-2 duration-300 hover:text-white">
                            Login
                        </button>
                    </NavLink>
                    <span
                        className="mx-5 text-orange-700"
                        style={{ userSelect: 'none' }}
                    >
                        |
                    </span>
                    <button className="text-zinc-500 text-lg font-medium p-2 duration-300 hover:text-white">
                        Sign in
                    </button>
                </div>
            );
        }
    };
    return (
        <div>
            <div className="navbar duration-300 shadow-sm shadow-zinc-800 mx-auto h-16 flex justify-between items-center px-10 fixed top-0 left-0 w-full z-50 bg-[rgb(15,15,15,0.95)]">
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
                        <i className="fa-solid fa-masks-theater text-white text-3xl mr-3"></i>
                        <span className="text-2xl font-extrabold text-orange-700">
                            Cinema.
                            <span className=" text-3xl text-zinc-100 font-black">
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

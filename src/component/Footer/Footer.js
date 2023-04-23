import React from 'react';

const Footer = () => {
    return (
        <div className="px-20 lg:px-10 md:px-5 sm:px-1 mx-auto border-t-2 border-zinc-700">
            <div className="container mx-auto flex text-zinc-300 py-5 space-x-3">
                <div className="w-1/4">
                    <h3 className="font-bold mb-4 md:text-sm">TIX</h3>
                    <ul className="space-y-4">
                        <li className="text-sm sm:text-xs hover:text-zinc-300 cursor-pointer text-zinc-400">
                            FAQ
                        </li>
                        <li className="text-sm sm:text-xs hover:text-zinc-300 cursor-pointer text-zinc-400">
                            Brand Guidelines
                        </li>
                        <li className="text-sm sm:text-xs hover:text-zinc-300 cursor-pointer text-zinc-400">
                            Terms and Conditions
                        </li>
                        <li className="text-sm sm:text-xs hover:text-zinc-300 cursor-pointer text-zinc-400">
                            Conditions of Website Use
                        </li>
                        <li className="text-sm sm:text-xs hover:text-zinc-300 cursor-pointer text-zinc-400">
                            Privacy Policy
                        </li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h3 className="font-bold mb-4 md:text-sm">Resources</h3>
                    <ul className="space-y-4">
                        <li className="text-sm sm:text-xs hover:text-zinc-300 cursor-pointer text-zinc-400">
                            Instalation Manual
                        </li>
                        <li className="text-sm sm:text-xs hover:text-zinc-300 cursor-pointer text-zinc-400">
                            Release Note
                        </li>
                        <li className="text-sm sm:text-xs hover:text-zinc-300 cursor-pointer text-zinc-400">
                            Comminity Help
                        </li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h3 className="font-bold mb-4 md:text-sm">MOBILE APP</h3>
                    <ul className="flex space-x-5">
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://apps.apple.com/vn/app/tix-đặt-vé-nhanh-nhất/id615186197"
                            >
                                <i className="fa-brands fa-android text-3xl text-green-500 sm:text-lg"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://apps.apple.com/vn/app/tix-đặt-vé-nhanh-nhất/id615186197"
                            >
                                <i className="fa-brands fa-apple text-3xl text-zinc-400 sm:text-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h3 className="font-bold mb-4">SOCIAL</h3>
                    <ul className="flex space-x-5">
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://apps.apple.com/vn/app/tix-đặt-vé-nhanh-nhất/id615186197"
                            >
                                <i className="fa-brands fa-facebook text-3xl text-blue-600 sm:text-lg"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://apps.apple.com/vn/app/tix-đặt-vé-nhanh-nhất/id615186197"
                            >
                                <i className="fa-brands fa-linkedin text-3xl sm:text-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;

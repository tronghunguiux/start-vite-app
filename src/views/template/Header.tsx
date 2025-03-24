/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Head = () => {
    return (
        <>
            <header id="header" className="bg-black sticky top-0">
                <div className="container mx-auto px-2 py-2 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-white">
                MyShop
            </Link>

            {/* Navigation Links (hidden on small screens) */}
            <nav className="hidden md:flex space-x-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                        Home
                </Link>
                <Link href="/products" className="text-gray-600 hover:text-gray-900">
                        Products
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                        About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                        Contact
                </Link>
            </nav>

            {/* Hamburger Button (visible on small screens) */}
            <button
            className="md:hidden"
            // onClick={() => setIsDrawerOpen(true)}
            >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            </button>
        </div>

        {/* Drawer Navigation */}
                {/* <div className="w-full h-full px-2 flex items-center justify-center header_top">
                    <div className="flex item-center justify-center">
                        <button type="button" className="btn-open-browse-menu" aria-label="Open side menu">
                            <span className="symbol"></span>
                        </button>

                        <DrawerNavitionLeft isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
                        <Link href="/" className="top-bar__logo block">
                            <img width="121" height="23" 
                                src="https://global-fs.webike-cdn.net/jp_statics/mobile/css/webike_template/images/img-template/logo-sp.png" 
                                data-src="https://global-fs.webike-cdn.net/jp_statics/mobile/css/webike_template/images/img-template/logo-sp.png" alt="Logo" 
                                data-lazied="IMG"
                                className="defer-lazied defer-loaded" />
                        </Link>
                    </div>
                    <div className="flex-1 pl-2">
                        <button type="button" className="btn btn-icon d-flex align-items-center justify-content-center">
                            <i className="icon icon-bike_w"></i>
                        </button>
                        <button type="button" className="btn btn-icon d-flex align-items-center justify-content-center">
                            <i className="icon icon-bell-line"></i>
                            <span className="badge"></span>
                        </button>
                    </div>
                </div> */}
                {/* <DrawerNavitionLeft isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} /> */}
            </header>
        </>
    );
};

export default Head;

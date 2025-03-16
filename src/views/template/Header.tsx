/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Head = () => {
    return (
        <header id="header" className="h-10 bg-black sticky top-0">
            <div className="w-full h-full px-2 flex items-center justify-center header_top">
                <div className="flex item-center justify-center">
                    <button type="button" className="btn-open-browse-menu" aria-label="Open side menu">
                        <span className="symbol"></span>
                    </button>
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
            </div>
        </header>
    );
};

export default Head;

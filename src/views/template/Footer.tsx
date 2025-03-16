import Link from "next/link";
import InstallButton from "../components/InstallButton";
import Image from "next/image";


const Footer = () => {
    return (
        <>
            <footer id="footer" className="bg-[#2a313c]">
                <div className="container">
                    <InstallButton />
                </div>
                <div className="pt-2 flex flex-col justify-center item-center">
                    <a href="https://www.webike.tw" className="mx-auto d-inline-block line-height-xs" target="_top">
                        <Image src={'/assets/img-css/webike_logo_all_w_slogon.svg'} alt="「Webike-摩托台灣」" width={160} height={64}/>
                    </a>
                    <div className="pt-1 contact-information">
                        <p className="flex item-center justify-center text-sm ">
                            <span className="label font-size-sm text-white">營運公司：</span>
                            <span className="value font-size-sm text-white">
                                <Link href="http://www.everglory.asia/" title="榮芳興業有限公司" className="text-underline" target="_top">
                                    榮芳興業有限公司
                                </Link>
                            </span>
                        </p>
                        <p className="flex item-center justify-center text-sm ">
                            <span className="label font-size-sm text-white">地址：</span>
                            <span className="value font-size-sm text-white">
                                248 新北市五股區五工三路101號2樓
                            </span>
                        </p>
                        <p className="flex item-center justify-center text-sm ">
                            <span className="label font-size-sm text-white">電子信箱：</span>
                            <span className="value font-size-sm text-white">
                                <Link href="http://www.everglory.asia/" title="榮芳興業有限公司" className="text-underline" target="_top">
                                    service@webike.tw
                                </Link>
                            </span>
                        </p>
                        <p className="flex item-center justify-center text-sm ">
                            <span className="label font-size-sm text-white">電話：</span>
                            <span className="value font-size-sm text-white">
                                    02-22982020  
                                    (訂單、商品問題請使用 <Link href="http://www.everglory.asia/" title="榮芳興業有限公司" className="text-underline" target="_top">&quot;客服諮詢&quot;</Link>)
                            </span>
                        </p>
                        <p className="flex item-center justify-center text-sm ">
                            <span className="value font-size-sm text-white">
                                (辦公室地址，非實體店面，不提供商品購買服務)
                            </span>
                        </p>
                    </div>
                </div>
                <div className="pt-2 container">
                    <ul className="flex item-center flex-wrap">
                        <li className="w-1/2 p-2 text-white text-sm  text-center">
                            <Link href={'/'} className="flex item-center justify-center">
                                <span className="pr-1">關於我們</span>
                                <i className="icon"></i>
                            </Link>
                        </li>
                        <li className="w-1/2 p-2 text-white text-sm  text-center">
                            <Link href={'/'} className="flex item-center justify-center">
                                <span className="pr-1">摩托百貨</span>
                                <i className="icon"></i>
                            </Link>
                        </li>
                        <li className="w-1/2 p-2 text-white text-sm  text-center">
                            <Link href={'/'} className="flex item-center justify-center">
                                <span className="pr-1">服務說明</span>
                                <i className="icon"></i>
                            </Link>
                        </li>
                        <li className="w-1/2 p-2 text-white text-sm  text-center">
                            <Link href={'/'} className="flex item-center justify-center">
                                <span className="pr-1">摩托車市</span>
                                <i className="icon"></i>
                            </Link>
                        </li>
                        <li className="w-1/2 p-2 text-white text-sm  text-center">
                            <Link href={'/'} className="flex item-center justify-center">
                                <span className="pr-1">客服諮詢</span>
                                <i className="icon"></i>
                            </Link>
                        </li>
                        <li className="w-1/2 p-2 text-white text-sm  text-center">
                            <Link href={'/'} className="flex item-center justify-center">
                                <span className="pr-1">綜合媒體</span>
                                <i className="icon"></i>
                            </Link>
                        </li>
                        <li className="w-1/2 p-2 text-white text-sm  text-center">
                            <Link href={'/'} className="flex item-center justify-center">
                                <span className="pr-1">Webike20週年</span>
                                <i className="icon"></i>
                            </Link>
                        </li>
                    </ul>
                    <ul className="we-social d-flex aligns-item-center justify-content-space-between">
                        <li className="item_scocial">
                            <Link href={'/'}>
                                <i className="icon icon-social-fb"></i>
                            </Link>
                        </li>
                        <li className="item_scocial">
                            <Link href={'/'}>
                                <i className="icon icon-social-ins"></i>
                            </Link>
                        </li>
                        <li className="item_scocial">
                            <Link href={'/'}>
                                <i className="icon icon-social-pin"></i>
                            </Link>
                        </li>
                        <li className="item_scocial">
                            <Link href={'/'}>
                                <i className="icon icon-social-ytb"></i>
                            </Link>
                        </li>
                        <li className="item_scocial">
                            <Link href={'/'}>
                                <i className="icon icon-social-twi_w"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <p className="text-xs py-1 p-2 copyright text-center bg-black text-white">
                    Copyright © 2009 - 2025 Webike Japan All Rights Reserved.
                </p>
            </footer>
            <div className="h-10 bg-red-300 sticky bottom-0">

            </div>
        </>
    );
};

export default Footer;

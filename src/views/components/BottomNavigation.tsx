/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import PopupBox from './PopupBox';
import { useState } from 'react';

const BottomNavigation = () => {
    const router = useRouter();
    const currentPath = router.pathname;
    const navItems = [
        {
            path: '/', 
            label: '台灣', // home - 台灣
            icon: 'icon-home',
        },
        {
            path: '/garagesale', 
            label: '倉庫', // warehouse - 銷售
            icon: 'icon-warehouse',
        },
        {
            path: '/cart', 
            label: '大車', // Cart - 大車 || Shopping cart - 購物車
            icon: 'icon-cart',
        },
        {
            path: '/category', 
            label: '商品分類', // category - 類別 || type - 類型 || Product classification - 商品分類
            icon: 'icon-category',
        },
        {
            path: '/user_information', 
            label: '使用者', // user - 使用者 || information - 資訊 
            icon: 'icon-account',
        },
        // { path: '/menu', label: 'User' },
    ];
    const [isPopupOpen, setPopupOpen] = useState(false);
    const handleClosePopup = () => {
        setPopupOpen(false);
    };
    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const navPaths = navItems.map(item => item.path);
    if (!navPaths.includes(currentPath)) {
        return (
            <>
            </>
        );
    }


    return (
        <>
            <div id="bottom_navigation">
                <div className="container">
                    <div className="flex navigation-list py-[4px]">
                        {navItems.map((item) => (
                            <div
                                key={item.path}
                                className={`flex-1 w-1/8 px-05 text-center text-sm nav-link ${currentPath === item.path ? 'nav_actived' : ''}`}>
                                <button
                                    type="button"
                                    className="btn btn-icon none-bg"
                                    aria-label={item.label}
                                    onClick={() => router.push(item.path)} >
                                    <i className={`icon ${currentPath === item.path ? item.icon+'--fill' : item.icon}`}></i>
                                    <p className={`leading-[1.2] ${currentPath === item.path ? 'text-[#E61E25] font-bold' : 'text-[#27272A]'}  pt-[4px] label-nav`}>{item.label}</p>
                                </button>
                            </div>
                        ))}
                        <div className="flex-1 w-1/6 px-05 text-center text-sm nav-link ">
                            <button type="button" onClick={handleOpenPopup} className="btn btn-icon none-bg" aria-label="Menu">
                                <i className="icon icon-menu_line"></i>
                                <p className="leading-[1.2] text-[#27272A] pt-[4px] label-nav">分類</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <PopupBox state={isPopupOpen} onClose={handleClosePopup}>
                <div>

                </div>
            </PopupBox>
        </>
    );
};

export default BottomNavigation;
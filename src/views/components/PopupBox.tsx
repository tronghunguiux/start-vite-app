import React from "react";

interface PopupBoxProps {
    state: boolean;
    children?: React.ReactNode;
    onClose?: () => void;
}

const PopupBox: React.FC<PopupBoxProps> = ({state, children, onClose}) => {
    // if (!state) return null;
    return(
        <>
            <div className={`popup-box slide-left ${state?'open':''}`}>
                <div className="overlay" onClick={onClose}></div>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default PopupBox;
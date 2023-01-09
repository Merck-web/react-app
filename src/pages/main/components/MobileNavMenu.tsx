import React, {FC, useContext, useEffect} from 'react';
import Catalog from "~/pages/main/components/Catalog";
import {Context} from "~/App";

const MobileNavMenu: FC = () => {
    const [height, setHeight] = React.useState(null);
    const {openNav} = useContext(Context);
    useEffect(() => {
        const heightNav = document.querySelector('header .top');
        setHeight(heightNav.getBoundingClientRect().height)
    }, [])

    return (

        <div
            className={`transition-all min-[765px]:hidden ${openNav ? '' : 'hidden'} fixed top-[${height}px] left-0 w-full max-h-[calc(100vh_-_174px)] overflow-y-scroll bg-[#FAFAFA] pb-20 shadow-navShadow  `}
        >
            <div className={`px-[15px] py-[20px] `}>
                <Catalog type={'mobile'} />
                ssdfhf
            </div>
        </div>

    );
};
export default MobileNavMenu;

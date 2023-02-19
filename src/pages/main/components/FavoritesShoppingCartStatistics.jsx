import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faHeart, faSignal} from "@fortawesome/free-solid-svg-icons";

const FavoritesShoppingCartStatistics = () => {
    return (
        <div className={'fixed top-56 right-0'}>
            <div className={'busker p-5 bg-mainPink cursor-pointer rounded-tl-md border-b border-gray-300 relative'}>
                <FontAwesomeIcon
                    icon={faBasketShopping}
                    color={'white'}
                />
                <div
                    className={'counter absolute top-3.5 right-3 bg-white rounded-full w-3.5 h-3.5 flex justify-center items-center text-[10px] font-bold'}>
                    0
                </div>
            </div>
            <div className={'favorites p-5 bg-mainPink cursor-pointer border-b border-gray-300 relative'}>
                <FontAwesomeIcon
                    icon={faHeart}
                    color={'white'}
                />
                <div
                    className={'counter absolute top-3.5 right-3 bg-white rounded-full w-3.5 h-3.5 flex justify-center items-center text-[10px] font-bold'}>
                    0
                </div>
            </div>
            <div className={'statistics p-5 bg-mainPink cursor-pointer rounded-bl relative'}>
                <FontAwesomeIcon
                    icon={faSignal}
                    color={'white'}
                />
                <div
                    className={'counter absolute top-3.5 right-3 bg-white rounded-full w-3.5 h-3.5 flex justify-center items-center text-[10px] font-bold'}>
                    0
                </div>
            </div>
        </div>
    );
};

export default FavoritesShoppingCartStatistics;
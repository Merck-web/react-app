import React, {FC, useContext} from 'react';
import {Context} from "~/App";
import {motion, Variants} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import TextWithIcon from "~/components/TextWithIcon";

interface ICatalog {
    type: 'mobile' | 'desktop'
}

const Catalog: FC<ICatalog> = ({type}) => {
    const {openNav, setOpenNav} = useContext(Context);
    const [activeMenu, setActiveMenu] = React.useState(0);

    const catalogs = [
        {
            name: 'Каталог',
            catal: [
                {
                    name: 'Одежда и обувь',
                    link: 'qwe'
                },
                {
                    name: 'Инвентарь',
                    link: 'qwe'
                },
                {
                    name: 'Аксессуары',
                    link: 'qwe'
                },
                {
                    name: 'Футбол',
                    link: 'qwe'
                },
                {
                    name: 'Хоккей',
                    link: 'qwe'
                },
                {
                    name: 'Бег',
                    link: 'qwe'
                },
            ]
        },
        {
            name: 'Мужчинам',
            catal: [
                {
                    name: 'Одежда и обувь',
                    link: 'qwe'
                },
                {
                    name: 'Инвентарь',
                    link: 'qwe'
                },
                {
                    name: 'Аксессуары',
                    link: 'qwe'
                },
                {
                    name: 'Футбол',
                    link: 'qwe'
                },
                {
                    name: 'Хоккей',
                    link: 'qwe'
                },
                {
                    name: 'Бег',
                    link: 'qwe'
                },
            ]
        },
        {
            name: 'Женщинам',
            catal: [
                {
                    name: 'Одежда и обувь',
                    link: 'qwe'
                },
                {
                    name: 'Инвентарь',
                    link: 'qwe'
                },
                {
                    name: 'Аксессуары',
                    link: 'qwe'
                },
                {
                    name: 'Футбол',
                    link: 'qwe'
                },
                {
                    name: 'Хоккей',
                    link: 'qwe'
                },
                {
                    name: 'Бег',
                    link: 'qwe'
                },
            ]
        },
        {
            name: 'Детям',
            catal: [
                {
                    name: 'Одежда и обувь',
                    link: 'qwe'
                },
                {
                    name: 'Инвентарь',
                    link: 'qwe'
                },
                {
                    name: 'Аксессуары',
                    link: 'qwe'
                },
                {
                    name: 'Футбол',
                    link: 'qwe'
                },
                {
                    name: 'Хоккей',
                    link: 'qwe'
                },
                {
                    name: 'Бег',
                    link: 'qwe'
                },
            ]
        },
        {
            name: 'Футбол',
            catal: [
                {
                    name: 'Одежда и обувь',
                    link: 'qwe'
                },
                {
                    name: 'Инвентарь',
                    link: 'qwe'
                },
                {
                    name: 'Аксессуары',
                    link: 'qwe'
                },
                {
                    name: 'Футбол',
                    link: 'qwe'
                },
                {
                    name: 'Хоккей',
                    link: 'qwe'
                },
                {
                    name: 'Бег',
                    link: 'qwe'
                },
            ]
        },
        {
            name: 'Хоккей',
            catal: [
                {
                    name: 'Одежда и обувь',
                    link: 'qwe'
                },
                {
                    name: 'Инвентарь',
                    link: 'qwe'
                },
                {
                    name: 'Аксессуары',
                    link: 'qwe'
                },
                {
                    name: 'Футбол',
                    link: 'qwe'
                },
                {
                    name: 'Хоккей',
                    link: 'qwe'
                },
                {
                    name: 'Бег',
                    link: 'qwe'
                },
            ]
        },
        {
            name: 'Бокс',
            catal: [
                {
                    name: 'Одежда и обувь',
                    link: 'qwe'
                },
                {
                    name: 'Инвентарь',
                    link: 'qwe'
                },
                {
                    name: 'Аксессуары',
                    link: 'qwe'
                },
                {
                    name: 'Футбол',
                    link: 'qwe'
                },
                {
                    name: 'Хоккей',
                    link: 'qwe'
                },
                {
                    name: 'Бег',
                    link: 'qwe'
                },
            ]
        },
        {
            name: 'Борьба',
            catal: [
                {
                    name: 'Одежда и обувь',
                    link: 'qwe'
                },
                {
                    name: 'Инвентарь',
                    link: 'qwe'
                },
                {
                    name: 'Аксессуары',
                    link: 'qwe'
                },
                {
                    name: 'Футбол',
                    link: 'qwe'
                },
                {
                    name: 'Хоккей',
                    link: 'qwe'
                },
                {
                    name: 'Бег',
                    link: 'qwe'
                },
            ]
        },
        {
            name: 'Дзюдо',
            catal: [
                {
                    name: 'Одежда и обувь',
                    link: 'qwe'
                },
                {
                    name: 'Инвентарь',
                    link: 'qwe'
                },
                {
                    name: 'Аксессуары',
                    link: 'qwe'
                },
                {
                    name: 'Футбол',
                    link: 'qwe'
                },
                {
                    name: 'Хоккей',
                    link: 'qwe'
                },
                {
                    name: 'Бег',
                    link: 'qwe'
                },
            ]
        },
        {
            name: 'Настольный теннис'
        },
    ]

    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {type: "spring", stiffness: 300, damping: 24}
        },
        closed: {opacity: 0, y: 20, transition: {duration: 0.2}}
    };

    function targetOpenMenu(index) {
        setActiveMenu(index)
    }

    function redirectPage(link) {
        setOpenNav(false);
    }

    return (
        <>
            {
                type === 'mobile' ?
                    <motion.nav
                        initial={false}
                        animate={openNav ? "open" : "closed"}
                        className={`w-full`}
                    >
                        <motion.ul
                            variants={{
                                open: {
                                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                        delayChildren: 0.3,
                                        staggerChildren: 0.05
                                    }
                                },
                                closed: {
                                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3
                                    }
                                }
                            }}
                            style={{pointerEvents: openNav ? "auto" : "none"}}
                        >
                            {
                                catalogs.map((item, index) => {
                                    return (
                                        <motion.li
                                            key={item.name}
                                            variants={itemVariants}
                                            className='mb-[10px] '
                                        >
                                            <div onClick={() => targetOpenMenu(index)}>
                                                <div
                                                    className={` flex rounded px-[10px] py-[15px] items-center justify-between ${activeMenu === index ? 'bg-mainPink' : ''}`}>
                                                    <p className={`  text-[#222222] ${activeMenu === index ? 'text-neutral-50' : ''} uppercase font-semibold `}>{item.name}</p>
                                                    <FontAwesomeIcon
                                                        className={` ${activeMenu === index ? 'rotate-180' : 'rotate-0'}`}
                                                        icon={faChevronRight}
                                                        color={activeMenu === index ? '#fff' : '#000'}
                                                    />
                                                </div>
                                                {
                                                    activeMenu === index && catalogs[activeMenu].catal ?
                                                        catalogs[activeMenu].catal.map(item => {
                                                            return (
                                                                <div
                                                                    className='flex items-center justify-between px-[20px] my-[10px]'
                                                                    key={item.name}
                                                                    onClick={() => redirectPage(item.link)}
                                                                >
                                                                    <p className={`text-[#222222] uppercase font-semibold `}>{item.name}</p>
                                                                    <FontAwesomeIcon
                                                                        icon={faChevronRight}
                                                                    />
                                                                </div>
                                                            )
                                                        })
                                                        :
                                                        ''
                                                }
                                            </div>
                                        </motion.li>
                                    )
                                })
                            }
                        </motion.ul>
                    </motion.nav>
                    :
                    <div className={'border mt-2.5'}>
                        <div className={'main_container'}>
                            <div className={'flex items-center justify-start'}>
                                <ul className={'flex items-center justify-start pt-1.5 border-r'}>
                                    {
                                        catalogs.map((item, index) => {
                                            return (
                                                <li
                                                    key={item.name}
                                                    className='mb-[5px] mr-[25px] cursor-pointer'
                                                >
                                                    <div
                                                        className={`${activeMenu === index ? 'scale-125' : ''} transition-all`}
                                                        onClick={() => targetOpenMenu(index)}
                                                    >
                                                        <div
                                                            className={`
                                                        flex rounded items-center justify-between
                                                        2xl:px-[10px] 2xl:py-[15px] text-[16px]
                                                        xl:px-[9px] xl:py-[10px] text-[16px]
                                                        lg:px-[8px] lg:py-[9px] text-[15px]
                                                        md:px-[5px] md:py-[7px] text-[15px]
                                                        sm:px-[5px] sm:py-[5px] text-[14px]
                                                        ${activeMenu === index ? 'bg-mainPink px-3'
                                                                : ''
                                                            }
                                                        `}
                                                        >
                                                            <p className={`text-[#222222] ${activeMenu === index ? 'text-neutral-50' : ''} uppercase font-semibold `}>{item.name}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className={'ml-3 pb-1.5'}>
                                    <TextWithIcon
                                        before={'Sales'}
                                        text={'Скидки'}
                                        classes={['uppercase leading-[22px] text-[18px] text-mainPink font-bold cursor-pointer mt-1.5']}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

            }
        </>

    );
};

export default Catalog;

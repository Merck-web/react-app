import React, {FC, useEffect} from 'react';
import SelectDefault from "../../../components/SelectDefault";
import axios from "axios";
import TextWithIcon from "../../../components/TextWithIcon";
import {Link} from "react-router-dom";
import styles from '../elementscss/TopInfo.module.scss';
import BurgerButton from "../../../components/BurgerButton";


const TopInfo: FC = () => {
        const [city, setCity] = React.useState('Ваш город');

        const getUserPlace = async () => {
            const res = await axios.get('https://api.ipify.org?format=json', {})
            if (res.data.ip) {
                const data = await axios.get(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${res.data.ip}`, options);
                setCity(data.data.location.data.city)
            }
        }

        const SignIn = async () => {
            console.log('Авторизация')
        }


        useEffect(() => {
            getUserPlace().then();
        }, [])

        const options = {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + process.env.REACT_APP_DADATA_API_KEY
            }
        };


        const data = [
            {
                value: 'nt',
                label: 'Нижний Тагил',
            },
            {
                value: 'aramil',
                label: 'Арамиль',
            },
            {
                value: 'ekb',
                label: 'Екатеринбург',
            },
            {
                value: 'nevyansk',
                label: 'Невьянск',
            },
        ]

        const links = [
            {
                link: '/companies',
                name: 'Компания'
            },
            {
                link: '/brands',
                name: 'Бренды'
            },
            {
                link: '/contacts',
                name: 'Контакты'
            },
        ]


        return (
            <div className="bg-gray_white py-[10px]">
                <div className="main_container">

                    <div className={'flex items-center justify-between font-medium'}>
                        <div className={'left_nav flex justify-between items-center w-full max-w-[555px] '}>
                            <div className='cursor-pointer w-full max-w-[200px]'>
                                <SelectDefault
                                    data={data}
                                    before={"MapMarker"}
                                    text={city}
                                    tooltip={true}
                                />
                            </div>

                            <div className='whitespace-nowrap mx-2 transition ease-in-out duration-300 hover:opacity-75 max-[1024px]:hidden'>
                                <TextWithIcon
                                    before={'CircleTime'}
                                    text={'Пн – Пт: с 9:00 до 18:00'}
                                />
                            </div>

                            <div className={`mx-2 transition ease-in-out duration-300 hover:opacity-75 max-[1024px]:hidden`}>
                                <div className='cursor-pointer'>
                                    <TextWithIcon
                                        before={'ConvertMail'}
                                        text={'info@sportmoda.ru'}
                                        href={'info@sportmoda.ru'}
                                        mail={true}
                                    />
                                </div>
                            </div>
                        </div>


                        <div className={`right_nav flex items-center w-full max-w-[390px] max-[600px]:justify-end`}>

                            <div className={`${styles.links} max-[600px]:hidden`}>
                                <ul className={'flex items-center justify-between w-full max-w-[250]'}>
                                    {
                                        links.map((link, index) => {
                                            return (
                                                <li
                                                    className={'mx-2 text-[#222222] font-semibold ' +
                                                        'transition ease-in-out duration-300 hover:opacity-75'
                                                    }
                                                    key={index}>
                                                    <Link to={link.link}>
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>

                            <div className={'cursor-pointer transition ease-in-out duration-300 hover:opacity-75'}>
                                <TextWithIcon
                                    before={'PersonInCircle'}
                                    text={'Войти'}
                                    click={SignIn}
                                />
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        );
    }
;

export default TopInfo;

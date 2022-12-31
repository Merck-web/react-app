import React, {useRef} from 'react';
import styles from '../elementscss/Header.module.scss'
import {Link} from "react-router-dom";
import TextWithIcon from "../../../components/TextWithIcon";
import IconDefault from "../../../components/IconDefault";
import CustomizedInputs from "../../../components/CustomInput";
import ModalDefault from "../../../components/Modal";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TransitionDiv from "../../../components/TransitionDiv";



function Header() {
    const [targetSearch, setTargetSearch] = React.useState("");
    const [phoneCall, setPhoneCall] = React.useState("");
    const modal = useRef();

    const socials = [
        {
            name: "Whatsapp",
            link: '#'
        },
        {
            name: "Viber",
            link: '#'
        },
        {
            name: "Vk",
            link: '#'
        },
        {
            name: "Instagram",
            link: '#'
        }
    ];

    function deleteSearchTermValue() {
        setTargetSearch("")
    }

    function getSearchTermValue() {
        console.log(targetSearch)
    }

    function openModalCalling() {
        // @ts-ignore
        modal.current!.handleOpen()
    }

    return (
        <>
            <div className={'main_container'}>
                <div className={'top flex items-center justify-between mt-5'}>
                    <div>
                        <Link to={'/'}>
                            <div className={`${styles.logo} w-[242px] h-[52px] bg-cover`}/>
                        </Link>
                    </div>
                    <div className={'max-w-[750px] w-full'}>


                        <CustomizedInputs
                            variant={'outlined'}
                            backgroundColor={'#D2334D'}
                            setValue={setTargetSearch}
                            value={targetSearch}
                            clerable={true}
                            searchable={true}
                        />

                    </div>
                    <div>
                        <TextWithIcon
                            before={'PinkPhone'}
                            href={'88002345295'}
                            text={'8-800-2345-295'}
                            phone={true}
                            classes={["text-[#D2334D] font-bold text-[24px] cursor-pointer"]}
                        />
                        <span
                            className={`${styles.calling} text-[#D2334D] text-[12px] leading-[20px] font-semibold cursor-pointer`}
                            onClick={openModalCalling}
                        >
                            Заказать звонок
                        </span>
                    </div>
                    <div className={'socials_box'}>
                        <ul className={'flex items-center'}>
                            {
                                socials.map((social, index) => {
                                    return (
                                        <li className={'mx-1'} key={index}>
                                            <a href={social.link} target='_blank'>
                                                <IconDefault name={social.name}/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={'bottom'}>

                </div>
            </div>

            <ModalDefault
                // @ts-ignore
                ref={modal}
                width={500}
                shadow={12}
                modalName={'Введите ваш номер телефона'}
                colorTitle={'#D2334D'}
            >
                <>
                    <div className='p-2 my-3.5 max-w-[400px] w-full mx-auto'>
                        <CustomizedInputs
                            label={'Телефон'}
                            variant={'outlined'}
                            backgroundColor={'#D2334D'}
                            setValue={setPhoneCall}
                            value={phoneCall}
                            clerable={true}
                            mask={'+7 (999) 999-99-99'}
                        />
                    </div>
                    <div className={'flex justify-center p-2'}>
                        <TransitionDiv
                            typeAnimation={'scaleOpacity'}
                        >
                            <Button
                                variant="contained"
                                endIcon={<SendIcon/>}
                                size="large"
                                style={{
                                    borderRadius: 35,
                                    backgroundColor: "#D2334D",
                                    padding: "10px 20px",
                                    fontSize: "14px"
                                }}
                            >
                                Отправить заявку
                            </Button>
                        </TransitionDiv>
                    </div>
                </>
            </ModalDefault>
        </>
    );
}

export default Header;

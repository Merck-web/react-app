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
    const [nameCall, setNameCall] = React.useState("");
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
                    <div className={'max-w-[750px] w-full mx-2'}>


                        <CustomizedInputs
                            variant={'outlined'}
                            backgroundColor={'#FFFFFF'}
                            borderColorFocus={'#D2334D'}
                            borderColor={'#D2334D'}
                            textColor={'#ABABAB'}
                            iconColor={'#D2334D'}
                            borderRadius={4}
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
                modalName={'Заказать звонок'}
                formText={'uppercase'}
                colorTitle={'#333333'}
            >
                <>
                    <div className='p-2 my-2 max-w-[430px] w-full mx-auto'>
                        <CustomizedInputs
                            setValue={setNameCall}
                            value={nameCall}
                            colLabel={true}
                            label={'Ваше имя'}
                            variant={'outlined'}
                            backgroundColor={'#FAFAFA'}
                            borderColorFocus={'#2E65F3'}
                            borderColor={'#E0E2E7'}
                            textColor={'#6F727A'}
                            iconColor={'#D2334D'}
                            borderRadius={8}
                            clerable={true}
                            mask={'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
                        />
                    </div>
                    <div className='p-2 my-3.5 max-w-[430px] w-full mx-auto'>
                        <CustomizedInputs
                            setValue={setPhoneCall}
                            value={phoneCall}
                            colLabel={true}
                            label={'Телефон'}
                            variant={'outlined'}
                            backgroundColor={'#FAFAFA'}
                            borderColorFocus={'#2E65F3'}
                            borderColor={'#E0E2E7'}
                            textColor={'#6F727A'}
                            iconColor={'#D2334D'}
                            borderRadius={8}
                            clerable={true}
                            mask={'+7 (999) 999-99-99'}
                        />
                    </div>
                    <div className={'flex justify-between items-center px-10 py-2'}>
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
                                Отправить
                            </Button>
                        </TransitionDiv>
                        <TransitionDiv typeAnimation={'default'}>
                            <p className={'text-sm text-[#9CA1AD] max-w-[250px] w-full'}>Нажимая на кнопку вы соглашаетесь <br />с&ensp;
                                <a className={'text-[#EC3844] underline underline-offset-4'}
                                   href={'/'} target='_blank'>политикой конфиденциальности</a>
                            </p>
                        </TransitionDiv>
                    </div>
                </>
            </ModalDefault>
        </>
    );
}

export default Header;

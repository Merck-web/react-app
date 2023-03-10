import React, {useRef} from 'react';
import styles from '../elementscss/Header.module.scss'
import {Link} from "react-router-dom";
import TextWithIcon from "~/components/TextWithIcon";
import IconDefault from "~/components/IconDefault";
import CustomizedInputs from "~/components/CustomInput";
import ModalDefault from "~/components/Modal";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TransitionDiv from "~/components/TransitionDiv";
import BurgerButton from "~/components/BurgerButton";
import MobileNavMenu from "~/pages/main/components/MobileNavMenu";
import Catalog from "~/pages/main/components/Catalog";


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
        <header>
            <div className={'main_container'}>
                <div className={'top flex items-center justify-between mt-5 max-[765px]:flex-col'}>
                    <div className={'order-2'}>
                        <Link to={'/'}>
                            <div className={`${styles.logo} w-[242px] h-[52px] bg-cover`}/>
                        </Link>
                    </div>
                    <div className={'flex justify-center items-center w-full max-[765px]:my-3 order-3'}>

                        <div className={'min-[765px]:hidden flex justify-center items-center mx-2'}>
                            <BurgerButton/>
                        </div>

                        <div className={'max-w-[750px] max-[765px]:max-w-[400px] w-full mx-2'}>
                            <CustomizedInputs
                                variant={'outlined'}
                                placeholder={'??????????'}
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


                        <div className={'min-[765px]:hidden flex items-center justify-center w-[50px]'}>
                            <IconDefault name={'UserLogin'}/>
                        </div>

                    </div>
                    <div className={'max-w-[240px] w-full order-4 max-[765px]:order-2 max-[765px]:mt-5 '}>
                        <TextWithIcon
                            before={'PinkPhone'}
                            href={'88002345295'}
                            text={'8-800-2345-295'}
                            phone={true}
                            classes={
                                ["text-[#D2334D] font-bold 2xl:text-[24px] xl:text-lg lg:text-base sm:text-sm cursor-pointer"]
                            }
                        />
                        <span
                            className={`${styles.calling} text-[#D2334D] max-[765px]:hidden text-[12px] leading-[20px] font-semibold cursor-pointer`}
                            onClick={openModalCalling}
                        >
                            ???????????????? ????????????
                        </span>
                    </div>
                    <div className={'socials_box max-[765px]:hidden order-4'}>
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


            <div className={'max-[765px]:hidden'}>
                <Catalog type={'desktop'}/>
            </div>

            <MobileNavMenu/>


            <ModalDefault
                // @ts-ignore
                ref={modal}
                width={500}
                shadow={12}
                modalName={'???????????????? ????????????'}
                formText={'uppercase'}
                colorTitle={'#333333'}
            >
                <>
                    <div className='p-2 my-2 max-w-[430px] w-full mx-auto'>
                        <CustomizedInputs
                            setValue={setNameCall}
                            value={nameCall}
                            colLabel={true}
                            label={'???????? ??????'}
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
                            label={'??????????????'}
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
                                ??????????????????
                            </Button>
                        </TransitionDiv>
                        <TransitionDiv typeAnimation={'default'}>
                            <p className={'text-sm text-[#9CA1AD] max-w-[250px] w-full'}>?????????????? ???? ???????????? ????
                                ???????????????????????? <br/>??&ensp;
                                <a className={'text-[#EC3844] underline underline-offset-4'}
                                   href={'/'} target='_blank'>?????????????????? ????????????????????????????????????</a>
                            </p>
                        </TransitionDiv>
                    </div>
                </>
            </ModalDefault>
        </header>
    );
}

export default Header;

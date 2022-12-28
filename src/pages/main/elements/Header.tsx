import React from 'react';
import styles from '../elementscss/Header.module.scss'
import {Link} from "react-router-dom";
import TextWithIcon from "../../../components/TextWithIcon";
import IconDefault from "../../../components/IconDefault";
import {FormControl, InputAdornment, OutlinedInput, styled} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faSearch } from "@fortawesome/free-solid-svg-icons";



function Header({}) {
    const [targetSearch, setTargetSearch] = React.useState("");


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

    const StyledInput = styled(OutlinedInput)`
      & .Mui-focused,
      & .MuiOutlinedInput-input {
        border-color: #D2334D !important;
      }

      & .MuiOutlinedInput-notchedOutline {
        border-color: #D2334D !important;
      }
    `;

    function searchTerm(e) {
        console.log(e.target.value)
        e.preventDefault()
        e.stopPropagation()

        setTargetSearch(e.target.value)
    }

    function deleteSearchTermValue() {
        setTargetSearch("")
    }

    function getSearchTermValue() {
        console.log(targetSearch)
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

                        <FormControl className={`w-full ${styles.search_home}`} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <FontAwesomeIcon
                                            className={'mr-2 cursor-pointer'}
                                            icon={faDeleteLeft}
                                            color={'#D2334D'}
                                            onClick={deleteSearchTermValue}
                                        />
                                        <FontAwesomeIcon
                                            className={'mr-2 cursor-pointer'}
                                            icon={faSearch}
                                            color={'#D2334D'}
                                            onClick={getSearchTermValue}
                                        />
                                    </InputAdornment>
                                }
                                onChange={e => setTargetSearch(e.target.value)}
                                value={targetSearch}
                            />
                        </FormControl>

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
                            className={`${styles.calling} text-[#D2334D] text-[12px] leading-[20px] font-semibold cursor-pointer`}>Заказать звонок</span>
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

        </>
    );
}

export default Header;

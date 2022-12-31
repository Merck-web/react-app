import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {FormControl, InputAdornment} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDeleteLeft, faSearch} from "@fortawesome/free-solid-svg-icons";
import InputMask from 'react-input-mask';

type CustomizeInputsTypes = {
    variant?: "outlined" | "filled" | "standard",
    label?: string,
    backgroundColor: string,
    setValue: React.Dispatch<React.SetStateAction<any>>, newValue?: string,
    // setValue: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => void
    value: string,
    clerable?: boolean
    searchable?: boolean,
    mask?: string
}


const CustomizedInputs: React.FC<CustomizeInputsTypes> = ({
                                                              variant,
                                                              label,
                                                              backgroundColor,
                                                              setValue,
                                                              value,
                                                              clerable,
                                                              searchable,
                                                              mask
                                                          }) => {
    const nodeRef = React.useRef(null);

    function newValueSet(event) {
        const value = event.target.value;
        setValue(value);
    }

    function clearValue() {
        console.log("click")
        setValue("");
    }

    return (
        <Box
            component="form"
            noValidate

        >
            <FormControl className={'w-full'}>
                {
                    mask ?
                        <InputMask
                            mask={mask}
                            disabled={false}
                            maskChar=" "
                            value={value}
                            onChange={event => newValueSet(event)}
                        >
                            {() => (<TextField
                                label={label ? label : ''}
                                sx={{
                                    "& .Mui-focused": {
                                        borderColor: backgroundColor
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        borderColor: backgroundColor
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: backgroundColor
                                    },
                                    '& label.Mui-focused': {
                                        color: backgroundColor,
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderColor: backgroundColor,
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: backgroundColor,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: backgroundColor,
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: backgroundColor,
                                        },
                                    },
                                }}
                                variant={variant}
                                InputProps={
                                    {
                                        endAdornment:
                                            <InputAdornment position="end">
                                                {
                                                    clerable && <FontAwesomeIcon
                                                        className={'mr-2 cursor-pointer'}
                                                        icon={faDeleteLeft}
                                                        color={backgroundColor}
                                                        onClick={clearValue}
                                                    />
                                                }
                                                {
                                                    searchable && <FontAwesomeIcon
                                                        className={'mr-2 cursor-pointer'}
                                                        icon={faSearch}
                                                        color={backgroundColor}
                                                    />
                                                }

                                            </InputAdornment>
                                    }
                                }
                            />)}
                        </InputMask>
                        :
                        <TextField
                            label={label ? label : ''}
                            sx={{
                                "& .Mui-focused": {
                                    borderColor: backgroundColor
                                },
                                "& .MuiOutlinedInput-input": {
                                    borderColor: backgroundColor
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: backgroundColor
                                },
                                '& label.Mui-focused': {
                                    color: backgroundColor,
                                },
                                '& .MuiInput-underline:after': {
                                    borderColor: backgroundColor,
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: backgroundColor,
                                    },
                                    '&:hover fieldset': {
                                        borderColor: backgroundColor,
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: backgroundColor,
                                    },
                                },
                            }}
                            variant={variant}
                            value={value}
                            onChange={event => newValueSet(event)}
                            InputProps={
                                {
                                    endAdornment:
                                        <InputAdornment position="end">
                                            {
                                                clerable && <FontAwesomeIcon
                                                    className={'mr-2 cursor-pointer'}
                                                    icon={faDeleteLeft}
                                                    color={backgroundColor}
                                                    onClick={clearValue}
                                                />
                                            }
                                            {
                                                searchable && <FontAwesomeIcon
                                                    className={'mr-2 cursor-pointer'}
                                                    icon={faSearch}
                                                    color={backgroundColor}
                                                />
                                            }

                                        </InputAdornment>
                                }
                            }
                        />
                }

            </FormControl>
        </Box>
    );
}
export default CustomizedInputs;

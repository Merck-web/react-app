import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {FormControl, InputAdornment} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDeleteLeft, faSearch} from "@fortawesome/free-solid-svg-icons";
import InputMask from 'react-input-mask';
import TransitionDiv from "~/components/TransitionDiv";

type CustomizeInputsTypes = {
    variant?: "outlined" | "filled" | "standard",
    label?: string,
    backgroundColor: string,
    setValue: React.Dispatch<React.SetStateAction<any>>, newValue?: any,
    value: string,
    clerable?: boolean
    searchable?: boolean,
    mask?: string,
    borderRadius?: number,
    borderColorFocus?: string
    borderColor?: string,
    textColor?: string,
    colLabel?: boolean,
    iconColor?: string,
    placeholder?: string
}


const CustomizedInputs: React.FC<CustomizeInputsTypes> = ({
                                                              variant,
                                                              label,
                                                              backgroundColor,
                                                              setValue,
                                                              value,
                                                              clerable,
                                                              searchable,
                                                              mask,
                                                              borderRadius,
                                                              borderColorFocus,
                                                              borderColor,
                                                              textColor,
                                                              colLabel,
                                                              iconColor,
                                                              placeholder
                                                          }) => {
    function newValueSet(event) {
        const value = event.target.value;
        setValue(value);
    }

    function clearValue(val) {
        if (val) setValue("");
    }

    return (
        <Box
            component="form"
            noValidate

        >
            <FormControl className={'w-full'}>
                {
                    colLabel && label &&
                    <h1 className={`font-normal text-sm text-[${textColor}] mb-1`}>
                        {label}
                    </h1>
                }
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
                                label={(label && !colLabel) ? label : ''}
                                placeholder={placeholder}
                                sx={{
                                    "& .Mui-focused": {
                                        borderColor: backgroundColor
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        borderColor: backgroundColor,
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: backgroundColor
                                    },
                                    '& label.Mui-focused': {
                                        color: textColor,
                                    },
                                    '& label': {
                                        color: textColor,
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderColor: backgroundColor,
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: `${borderRadius}px`,
                                        backgroundColor: backgroundColor,
                                        border: `1px solid ${borderColor}`,
                                        color: textColor,
                                        '& fieldset': {
                                            borderColor: backgroundColor,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: backgroundColor,
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: borderColorFocus,
                                        },
                                    },
                                }}
                                variant={variant}
                                InputProps={
                                    {
                                        endAdornment:
                                            <InputAdornment position="end">
                                                {
                                                    clerable &&
                                                    <TransitionDiv fadeReverse={value.length} typeAnimation={'fade'}>
                                                        <FontAwesomeIcon
                                                            className={`mr-2 ${value.length && 'cursor-pointer'}`}
                                                            icon={faDeleteLeft}
                                                            color={iconColor}
                                                            onClick={() => clearValue(value.length)}
                                                        />
                                                    </TransitionDiv>

                                                }
                                                {
                                                    searchable &&
                                                    <TransitionDiv fadeReverse={value.length} typeAnimation={'fade'}>
                                                        <FontAwesomeIcon
                                                            className={`mr-2 ${value.length && 'cursor-pointer'}`}
                                                            icon={faSearch}
                                                            color={iconColor}
                                                        />
                                                    </TransitionDiv>
                                                }

                                            </InputAdornment>
                                    }
                                }
                            />)}
                        </InputMask>
                        :
                        <TextField
                            label={(label && !colLabel) ? label : ''}
                            placeholder={placeholder}
                            sx={{
                                "& .Mui-focused": {
                                    borderColor: backgroundColor
                                },
                                "& .MuiOutlinedInput-input": {
                                    borderColor: backgroundColor,
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: backgroundColor
                                },
                                '& label.Mui-focused': {
                                    color: textColor,
                                },
                                '& label': {
                                    color: textColor,
                                },
                                '& .MuiInput-underline:after': {
                                    borderColor: backgroundColor,
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: `${borderRadius}px`,
                                    backgroundColor: backgroundColor,
                                    border: `1px solid ${borderColor}`,
                                    color: textColor,
                                    '& fieldset': {
                                        borderColor: backgroundColor,
                                    },
                                    '&:hover fieldset': {
                                        borderColor: backgroundColor,
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: borderColorFocus,
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
                                                clerable &&
                                                <TransitionDiv fadeReverse={value.length} typeAnimation={'fade'}>
                                                    <FontAwesomeIcon
                                                        className={`mr-2 ${value.length && 'cursor-pointer'}`}
                                                        icon={faDeleteLeft}
                                                        color={iconColor}
                                                        onClick={() => clearValue(value.length)}
                                                    />
                                                </TransitionDiv>
                                            }
                                            {
                                                searchable &&
                                                <TransitionDiv fadeReverse={value.length} typeAnimation={'fade'}>
                                                    <FontAwesomeIcon
                                                        className={`mr-2 ${value.length && 'cursor-pointer'}`}
                                                        icon={faSearch}
                                                        color={iconColor}
                                                    />
                                                </TransitionDiv>
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

import React, {Dispatch, FC, SetStateAction, useMemo} from 'react';
import Box from '@mui/material/Box';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {FormControl, InputAdornment} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDeleteLeft, faSearch} from "@fortawesome/free-solid-svg-icons";
import {makeStyles} from "tss-react/mui";


type CustomizeInputsTypes = {
    variant?: "outlined" | "filled" | "standard",
    label?: string,
    backgroundColor: string,
    setValue: React.Dispatch<React.SetStateAction<any>>, newValue?: string,
    // setValue: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => void
    value: string
}


const CustomizedInputs: FC<CustomizeInputsTypes> = ({
                                                        variant,
                                                        label,
                                                        backgroundColor,
                                                        setValue,
                                                        value
                                                    }) => {

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
                            borderColor: backgroundColor,
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
                    style={{marginTop: 11}}
                    onChange={event => newValueSet(event)}
                    InputProps={
                        {
                            endAdornment: <InputAdornment position="end">
                                <FontAwesomeIcon
                                    className={'mr-2 cursor-pointer'}
                                    icon={faDeleteLeft}
                                    color={backgroundColor}
                                    onClick={clearValue}
                                />
                                <FontAwesomeIcon
                                    className={'mr-2 cursor-pointer'}
                                    icon={faSearch}
                                    color={backgroundColor}
                                />
                            </InputAdornment>
                        }
                    }
                />
            </FormControl>
        </Box>
    );
}
export default CustomizedInputs;

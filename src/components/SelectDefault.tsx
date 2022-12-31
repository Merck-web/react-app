import React, {FC} from 'react';
import IconDefault from "./IconDefault";
import {TextField, Tooltip} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';


type SelectDefaultTypes = {
    before?: string,
    text: string,
    after?: string,
    data: { value: string, label: string }[],
    tooltip?: Boolean | false
}

const SelectDefault: FC<SelectDefaultTypes> = (
    {
        before,
        text,
        after,
        data,
        tooltip
    }
) => {

    const [selectValue, setSelectValue] = React.useState('');

    function putNewLabel(val): void {
        setSelectValue(val.label || '');
    }


    return (
        <>
            {
                tooltip ?
                    <Tooltip
                        open
                        sx={{
                            backgroundColor: 'transparent',
                            '& .MuiTooltip-tooltip': {
                                color: '#000',
                                backgroundColor: 'transparent'
                            }
                        }}

                        title={
                            <div className='wrapper_autocomplit cursor-pointer p-2 '>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    className={'border-white'}
                                    options={data}
                                    onChange={(event, val) => putNewLabel(val)}
                                    sx={{
                                        width: 250,
                                    }}
                                    renderInput={(params) =>
                                        <TextField
                                            variant={'outlined'}
                                            color={'secondary'}
                                            sx={{
                                                '& .MuiInput-underline:after': {
                                                    backgroundColor: "#fff",
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        backgroundColor: "#fff",
                                                    },
                                                    '&:hover fieldset': {
                                                        backgroundColor: "#fff",
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        backgroundColor: "#fff",
                                                    },
                                                },
                                            }}
                                            {...params}
                                            label="Выберите город"
                                        />
                                    }
                                />
                            </div>
                        }
                    >
                        <div className='flex items-center'>
                            <IconDefault name={before}/>
                            <p className='mx-2 whitespace-nowrap'>{selectValue ? `г. ${selectValue}` : `г. ${text}`}</p>
                            <IconDefault name={after}/>
                        </div>
                    </Tooltip>
                    :
                    <div className='flex items-center'>
                        <IconDefault name={before}/>
                        <p className='mx-1'>{text}</p>
                        <IconDefault name={after}/>
                    </div>
            }
        </>
    );
};

export default SelectDefault;

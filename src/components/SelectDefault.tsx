import React, {FC} from 'react';
import IconDefault from "./IconDefault";


type SelectDefaultTypes = {
    before?: string,
    text: string,
    after?: string,
    data: { value: string, label: string }[],
}

const SelectDefault: FC<SelectDefaultTypes> = (
    {
        before,
        text,
        after,
        data,
    }
) => {

    return (
        <>
            <div className='flex items-center'>
                <IconDefault name={before}/>
                <p className='mx-1'>{text}</p>
                <IconDefault name={after}/>
            </div>

        </>
    );
};

export default SelectDefault;

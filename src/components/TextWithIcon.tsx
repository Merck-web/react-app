import React, {FC} from 'react';
import IconDefault from "./IconDefault";

type textWithIconType = {
    before?: string,
    after?: string,
    text: string
}

const TextWithIcon: FC<textWithIconType> = ({before,after, text}) => {
    return (
        <div className='flex items-center'>
            {before && <IconDefault name={before}/>}
            <p className='mx-1'>{text}</p>
            {after && <IconDefault name={after}/>}
        </div>
    );
};

export default TextWithIcon;

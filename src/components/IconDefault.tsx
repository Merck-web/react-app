import React, {FC} from 'react';
import icons from '../assets/icons/icons';

type BaseIconTypes = {
    name?: string
}

const IconDefault: FC<BaseIconTypes> = ({name}) => {

    const htmlText = icons[name] || '';
    return (
        <div
            className='cursor-pointer'
            dangerouslySetInnerHTML={{__html: htmlText}}
        />
    );
};

export default IconDefault;

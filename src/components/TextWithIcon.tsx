import React, {FC} from 'react';
import IconDefault from "./IconDefault";

type textWithIconType = {
    before?: string,
    after?: string,
    text: string,
    click?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    href?: string,
    mail?: boolean
}

const TextWithIcon: FC<textWithIconType> = (
    {
        before,
        after,
        text,
        click,
        href,
        mail
    }) => {
    return (
        <>
            {
                href ?
                    <a href={`${mail && 'mailto:'}${href}`} >
                        <span className='flex items-center' onClick={click}>
                            {before && <IconDefault name={before}/>}
                            <p className='mx-2'>{text}</p>
                            {after && <IconDefault name={after}/>}
                        </span>
                    </a>
                    :
                    <div onClick={click} className='flex items-center'>
                        {before && <IconDefault name={before}/>}
                        <p className='mx-2'>{text}</p>
                        {after && <IconDefault name={after}/>}
                    </div>
            }

        </>

    );
};

export default TextWithIcon;

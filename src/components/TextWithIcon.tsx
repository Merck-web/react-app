import React, {FC} from 'react';
import IconDefault from "./IconDefault";

type textWithIconType = {
    before?: string,
    after?: string,
    text: string,
    click?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    href?: string,
    mail?: boolean,
    phone?: boolean,
    classes?: any
}

const TextWithIcon: FC<textWithIconType> = (
    {
        before,
        after,
        text,
        click,
        href,
        mail,
        phone,
        classes
    }) => {
    return (
        <>
            {
                href ?
                    <a href={`${mail ? 'mailto:' : phone ? 'tel:' : ''}${href}`}>
                        <span className={`${classes} flex items-center`} onClick={click}>
                            {before && <IconDefault name={before}/>}
                            <p className='mx-2'>{text}</p>
                            {after && <IconDefault name={after}/>}
                        </span>
                    </a>
                    :
                    <div onClick={click} className={`${classes} flex items-center`}>
                        {before && <IconDefault name={before}/>}
                        <p className='mx-2'>{text}</p>
                        {after && <IconDefault name={after}/>}
                    </div>
            }

        </>

    );
};

export default TextWithIcon;

import React from 'react'
import {Helmet} from "react-helmet";
import {onlyText} from "../utils/clearText";
import {useLocation} from 'react-router-dom'

interface IMeta {
    title: string,
    lang?: 'ru',
    image?: string,
    description: string
}

const Meta: React.FC<IMeta> = ({
                                   title,
                                   lang,
                                   image,
                                   description
                               }) => {
    const location = useLocation();

    return (
        <>
            <Helmet
                htmlAttributes={{lang: lang}} title={`${title} | React App`}
            >
                <meta
                    itemProp='description'
                    name='description'
                    content={onlyText(description, 152)}
                />
                <link rel='canonical' href={location.pathname}/>
                <meta property='og:locale' content='en'/>
                <meta property='og:title' content={title}/>
                <meta property='og:url' content={location.pathname}/>
                <meta property='og:image' content={image || '/logo.jpg'}/>
                <meta property='og:site_name' content='Shop App'/>
                <meta
                    property='og:description'
                    content={onlyText(description, 197)}
                />
            </Helmet>
        </>
    );
};

export default Meta;
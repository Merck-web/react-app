import React, {FC, useEffect} from 'react';
import SelectDefault from "../../../components/SelectDefault";
import axios from "axios";
import TextWithIcon from "../../../components/TextWithIcon";


const TopInfo: FC = () => {
    const [city, setCity] = React.useState('Ваш город');

    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + process.env.REACT_APP_DADATA_API_KEY
        }
    };



    const getUserPlace = async () => {
        const res = await axios.get('https://api.ipify.org?format=json', {})
        if (res.data.ip){
            const data = await axios.get(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${res.data.ip}`, options);
            setCity(data.data.location.data.city)
        }
    }


    useEffect(() => {
        getUserPlace().then();
    }, [])

    const data = [
        {
            value: 'nt',
            label: 'Нижний Тагил',
        },
        {
            value: 'aramil',
            label: 'Арамиль',
        },
        {
            value: 'ekb',
            label: 'Екатеринбург',
        },
        {
            value: 'nevyansk',
            label: 'Невьянск',
        },
    ]

    return (
        <div className="bg-gray_white py-0.5">
            <div className="main_container flex items-center justify-between">

                <div className='cursor-pointer w-full max-w-[200px]'>
                    <SelectDefault
                        data={data}
                        before={"MapMarker"}
                        text={city}
                        tooltip={true}
                    />
                </div>

                <div className=''>
                    <TextWithIcon
                        before={'CircleTime'}
                        text={'savd'}
                    />
                </div>

                <div className=''>
                    mail
                </div>

                <div>
                    links
                </div>

                <div>
                    sign
                </div>


            </div>
        </div>
    );
};

export default TopInfo;

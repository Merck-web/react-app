import React, {FC, useEffect} from 'react';
import SelectDefault from "../../../components/SelectDefault";
import axios from "axios";


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

    const getRussiaCities = async () => {

        // const res = await axios.get(`https://api.vk.com/method/database.getCountries?access_token=${process.env.REACT_APP_SERVICES_VK_API_KEY}&count=20&v=5.131`);
        const res = fetch(`https://api.vk.com/method/database.getCountries?access_token=${process.env.REACT_APP_SERVICES_VK_API_KEY}&count=20&v=5.131`)
            .then(response => console.log(response));
        // console.log(res)
    }

    useEffect(() => {
        // getUserPlace().then();
        getRussiaCities().then()
    }, [])

    const data = [
        {
            value: 'wqe',
            name: 'wqe'
        }
    ]

    return (
        <div className="bg-gray_white py-0.5">
            <div className="main_container flex items-center justify-between">

                <div className='cursor-pointer'>
                    <SelectDefault
                        data={data}
                        after={"ArrowSelect"}
                        before={"MapMarker"}
                        text={city}
                    />
                </div>

                <div className=''>
                    time
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
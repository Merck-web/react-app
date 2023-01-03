import React, {FC} from 'react';
import {motion} from "framer-motion";

interface TransitionDivTypes {
    typeAnimation?: 'default' | 'scaleOpacity' | 'rotate' | 'fade' | undefined,
    children?: React.ReactElement;
    fadeReverse?: any
}


const TransitionDiv: FC<TransitionDivTypes> = ({typeAnimation, children, fadeReverse}) => {

    return (

        <>
            {
                typeAnimation === 'default' ?
                    <motion.div
                        whileHover={{opacity: .75}}
                        whileTap={{opacity: 1}}
                        transition={{duration: 0.3, type: 'tween'}}
                    >
                        {children}
                    </motion.div>
                    :
                    typeAnimation === 'scaleOpacity' ?
                        <motion.div
                            whileHover={{opacity: .75, scale: 1.05}}
                            whileTap={{opacity: 1, scale: 0.95}}
                            transition={{duration: 0.3, type: 'spring'}}
                        >
                            {children}
                        </motion.div>
                        :
                        typeAnimation === 'rotate' ?
                            <motion.div
                                whileHover={{
                                    rotate: [0, 360],
                                }}
                                transition={{duration: 1, type: 'tween'}}
                            >
                                {children}
                            </motion.div>
                            :
                            typeAnimation === 'fade' ?
                                <motion.div
                                    initial={{opacity: fadeReverse > 0 ? 0 : 1}}
                                    animate={{opacity: fadeReverse > 0 ? 1 : 0}}
                                    transition={{
                                        delay: 0.5,
                                        duration: 1
                                    }}
                                >
                                    {children}
                                </motion.div>
                                :
                                ''
            }
        </>


    );
};

export default TransitionDiv;
import React, {FC} from 'react';
import {motion} from "framer-motion";

interface TransitionDivTypes {
    typeAnimation?: 'default' | 'scaleOpacity' | 'rotate' | undefined,
    children?: React.ReactElement;
}


const TransitionDiv: FC<TransitionDivTypes> = ({typeAnimation, children}) => {

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
                                    scale: [1, 1.1, 1.1, 1.1, 1],
                                    rotate: [0, 90, 0],
                                }}
                                whileTap={{
                                    scale: [1.1, 1, 1, 1.1, 1.1],
                                    rotate: [0, 90, 0],
                                }}

                                transition={{duration: 1, type: 'tween', repeat: Infinity}}
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
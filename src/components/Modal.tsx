import React, {FC, forwardRef, useImperativeHandle} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useSpring, animated} from 'react-spring';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import TransitionDiv from "./TransitionDiv";

interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const {in: open, children, onEnter, onExited, ...other} = props;
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: open ? 1 : 0},
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});


type ModalTypes = {
    width?: number,
    children?: React.ReactElement,
    shadow?: number,
    modalName?: string,
    colorTitle?: string
}

const ModalDefault: FC<ModalTypes> = forwardRef(({width, children, shadow, modalName, colorTitle}, ref) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width ? width : 400,
        bgcolor: 'background.paper',
        boxShadow: shadow ? shadow : 24,
    };

    useImperativeHandle(ref, () => ({
        handleOpen: () => {
            setOpen(true);
            return
        },
        handleClose: () => {
            setOpen(false);
        }
    }));


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className={`py-3`} sx={style}>
                        <div className={'flex items-center justify-between text-xl py-3 px-5'}>
                            <h1 className={`text-[${colorTitle ? colorTitle : 'black'}] font-semibold`}>{modalName}</h1>
                            <TransitionDiv typeAnimation={'rotate'}>
                                <FontAwesomeIcon onClick={handleClose} color={`${colorTitle ? colorTitle : 'black'}`} className='cursor-pointer' icon={faClose}/>
                            </TransitionDiv>
                        </div>
                        <hr className='border-1.5 bg-black'/>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
})
export default ModalDefault;

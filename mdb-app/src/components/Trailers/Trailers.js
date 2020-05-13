import React from 'react';
import Modal from 'react-modal';
/* Material ui */
import Button from '@material-ui/core/Button';
/* Components */
import TrailerCarousel from "../../components/TrailerCarousel/TrailerCarousel";
/* CSS */
import '../../styles/MovieTrailers.scss';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '80%',
        height                : 'auto',
        borderRadius          : '10px',
        background            : 'rgba(1,1,1,1)'
    }
};

Modal.setAppElement('#root')

export default function Trailers(props){
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = 'orange';
    // }

    function closeModal(e){
        setIsOpen(false);
    }

    return (
        <div>
            <Button className='trailer-modal' variant="contained" color="secondary" onClick={openModal}>
                <PlayCircleOutlineIcon />  Trailers
            </Button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {props.videos ?
                    <TrailerCarousel videos={props.videos}/>
                    :
                    ''
                }
            </Modal>
        </div>
    );
}
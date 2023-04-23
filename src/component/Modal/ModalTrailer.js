import { Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_MODAL } from '../../Page/redux/constant/modalConstant';
import './modal.css';

const ModalTrailer = () => {
    const { isModalOpen } = useSelector((state) => state.modalReducer);
    const { urlTrailerBanner } = useSelector((state) => state.modalReducer);
    const dispatch = useDispatch();

    const handleOk = () => {
        dispatch({ type: HIDE_MODAL });
    };
    const handleCancel = () => {
        dispatch({ type: HIDE_MODAL });
    };

    return (
        <>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                destroyOnClose={true}
            >
                <iframe
                    src={urlTrailerBanner}
                    title='Phim "Bàn Tay Diệt Quỷ" Teaser Trailer | KC 09.04.2021'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen="{true}"
                    className="w-[600px] h-[400px] md:w-[400px] md:h-[300px] mx-auto sm:w-[300px] sm:h-[200px] my-auto"
                />
            </Modal>
        </>
    );
};

export default ModalTrailer;

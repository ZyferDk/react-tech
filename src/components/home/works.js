import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { FaPlay } from 'react-icons/fa';


const AppWork = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className="contentHolder">
                    <Button size="large" onClick={showModal}>
                        <FaPlay />
                    </Button>

                    <Modal title="Orasi Kedaulatan oleh Jusuf Kalla @Pak_JK - PPSMB Palapa UGM" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer="">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/bLEai-pc2IE" title="Orasi Kedaulatan oleh Jusuf Kalla @Pak_JK - PPSMB Palapa UGM"></iframe>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default AppWork;
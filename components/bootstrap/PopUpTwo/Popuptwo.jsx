import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss'; // Import the default styles for react-modal-video

const Popuptwo = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show the modal after 10 seconds
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 10000);

        // Clear the timer on component unmount
        return () => clearTimeout(timer);
    }, []); // Run once after component mounts

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="10Zhaffs1hU" // The video ID, not the whole URL
                onClose={handleClose}
                autoplay
            />

            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
                        {/* <h2>Popup Form</h2> */}
                        {/* Add your form here */}
                        {/* <button onClick={handleClose}>Close</button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popuptwo;

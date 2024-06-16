import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss'; // Import the default styles for react-modal-video

const Popuptwo = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show the modal after 10 seconds (for demonstration)
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 800);

        // Clear the timer on component unmount
        return () => clearTimeout(timer);
    }, []); // Run once after component mounts

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="10Zhaffs1hU" // The video ID, not the whole URL
                onClose={handleClose}
                autoplay
            /> */}

            {isOpen && (
                <div style={styles.popup}>
                    <div style={styles.popupContent}>
                        <button style={styles.closeButton} onClick={handleClose}>X</button>
                        <h2 className='text-danger'>This Section is Only Available for Enrolled Students</h2>
                        {/* Add your form or content here */}
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    popup: {
        position: "fixed",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'flex-start', // Align to the top of the viewport
    },
    popupContent: {
        backgroundColor: 'white',
        padding: '20px',
        maxWidth: '80%',
        maxHeight: '80%',
        overflow: 'auto',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        textAlign: 'center', // Center text horizontally
        position: 'relative', // Ensure the close button is positioned relative to this container
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
    },
};

export default Popuptwo;

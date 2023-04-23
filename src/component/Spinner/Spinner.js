import React from 'react';
import { useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';

const Spinner = () => {
    const { isLoading } = useSelector((state) => state.spinnerReducer);
    return isLoading ? (
        <div className="inset-0 fixed bg-black opacity-90 flex items-center justify-center z-50">
            <HashLoader size={80} color="#c2410c" />
        </div>
    ) : (
        <></>
    );
};

export default Spinner;

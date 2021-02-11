import React from 'react';
import spinStyle from "./style/spinner.module.css";


const Spinner = () => {
    return(
        <div className={spinStyle.spinner}>
            <div className={spinStyle.doublebounce1}></div>
            <div className={spinStyle.doublebounce2}></div>
        </div>
    )
}

export default Spinner;
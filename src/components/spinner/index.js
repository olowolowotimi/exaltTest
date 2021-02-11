import React from 'react';
import spinStyle from "./style/spinner.module.css";


const spinner = () => {
    return(
        <div className={spinStyle.spinner}>
            <div className={spinStyle.double-bounce1}></div>
            <div className={spinStyle.double-bounce2}></div>
        </div>
    )
}

export default spinner;
import React from 'react';
import {useSelector} from 'react-redux';

const Preview =()=>{
    const useTexto = useSelector(state => state.texto)
    return(
        <div>
            <h3>{useTexto}</h3>
        </div>
    )
}

export default Preview
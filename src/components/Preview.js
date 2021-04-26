import React from 'react';
import {useSelector} from 'react-redux';
import marked from 'marked';

const Preview =()=>{
    const useTexto = useSelector(state => state.texto)
    return(
        <div id="preview" 
        dangerouslySetInnerHTML={{ __html: marked(useTexto, {gfm: true, breaks: true}) }}>
        </div>
    )
}

export default Preview
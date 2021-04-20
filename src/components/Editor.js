import React,{useState, useEffect} from 'react';

const Editor =()=>{
    const [texto,setTexto] = useState('');
    const handleChange=(e)=>{
        setTexto(e.target.value);
    }
    return(
        <div>
            <textarea id="editor" value={texto} onChange={handleChange}/>

        </div>
    )
}

export default Editor
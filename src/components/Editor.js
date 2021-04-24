import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newText } from '../store';

const Editor =()=>{
    const dispatch = useDispatch();
    const prueba = useSelector(state=>state.texto)
    //const [texto,setTexto] = useState('');

    const handleChange=(e)=>{
        //setTexto(e.target.value);
        dispatch(newText(e.target.value));
    }

    return(
        <div>
            <textarea id="editor" value={prueba} onChange={handleChange}/>
        </div>
    )
}

export default Editor
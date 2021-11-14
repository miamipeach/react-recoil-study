import React from 'react'
import { atom , useRecoilState, selector, useRecoilValue } from 'recoil';

export const TextCounterPage:React.FC = (()=>{
    const [text , setText] = useRecoilState(textState);

    const onChangeHandle = (value : string) =>{
        setText(value);
    }

    const textLenValue = useRecoilValue(textLen);
    
    return(
        <div>
            <h2>text counter</h2>
            <input type="text" defaultValue={text} onChange={(e)=>{ onChangeHandle(e.target.value)}}/>
            <p>text : {text}</p>
            <p>text length : {textLenValue}</p>
        </div>
    );
});


const textState = atom({
    key : 'textState' , 
    default : ''
});

const textLen = selector({
    key : 'textLen',
    get : ({get})=>{
        const text = get(textState);
        return text.length;
    }
})
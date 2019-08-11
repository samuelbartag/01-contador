import React from 'react';

const ContadorTempo = (props) => {
    const tempo = props.secs;
    const mins = Math.round(tempo / 60);
    const secs = tempo % 60;
  
    const minStr = mins < 10 ? '0' + mins : mins;
    const secStr = secs < 10 ? '0' + secs.toFixed(2) : secs.toFixed(2);
  
    return (
        <div className='tempo'>
            <div>{ `${minStr}:${secStr}` }</div>
            tempo médio por volta
        </div>
    )
}
  
export default ContadorTempo;
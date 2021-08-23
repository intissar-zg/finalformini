import React from 'react'

const Filter = (props) => {
    const getsearch =(e) =>{
        props.searchkey(e.target.value);
    }  
    return (
        <div className="filter">
            
            <input
				className='form-control'
				onChange={getsearch}
				placeholder='Type your search'></input>
            
     
        </div>
    )
}

export default Filter

/* import React, { useRef } from 'react'

const Filter = (props) => {
    const refel = useRef("");
    const getsearch =() =>{
        props.handlechangeinput(refel.current.value)
    }
    return (
        <div>
   
    <input type="text" placeholder="Search" className=" search" ref={props.refel} value={props.search} onChange={getsearch}></input>
    <button type="submit">Submit</button>
     
        </div>
    )
}

export default Filter
 */
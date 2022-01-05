import React from 'react';
import Home from "./home";
const Search = ({data,onIncrement,onDecrement,onReset})=>{
    const [prev,setPrev] = React.useState(false);
    const handleClick = ()=>{
        setPrev(!prev)
        onReset()
    }
    return prev?(<Home/>): (
        <div>
            <h1>Search Results</h1>
            <button onClick={handleClick}>Go to previos page</button>
            <button onClick={onIncrement}>Next Page</button>
            <button onClick={onDecrement}>Previous Page</button>
            {data?.map((item)=>(
                <div key={item.id} style={{width:'1000px',height:'200px',display: 'flex',gap:'irem',padding:'1rem',backgroundColor:'red',color:'black',border:'1px solid white',margin:'auto'}}>
                    <div style={{width:'30%',padding:'1rem'}}>{item.name}</div>
                    <div style={{width:'30%'}}><img style={{width:'80%',height:'90%',padding:'1rem'}} src={item.owner.avatar_url}/></div>
                    <div style={{width:'30%',padding:'1rem'}}>{item.description}</div>
                </div>
            ))}
        </div>
    )
}
export default Search
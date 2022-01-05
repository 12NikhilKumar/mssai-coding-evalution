import axios from 'axios';
import React from 'react';
import Search from './search';
const Home = ()=>{
    const [qurey,setQurey] = React.useState(null);
    const [data,setData] = React.useState(null);
    const [count,setCount] = React.useState(1);
    const search = ()=>{
        const config = {
            method: 'get',
            url: `https://api.github.com/search/repositories?q=${qurey}&per_page=5&page=${count}`
        }
        axios(config)
        .then((res)=>{
            setData(res.data.items);
        })
    }
    const incrementCount = ()=>{
        setCount((prev)=>prev+1)
    }
    const decrementCount = ()=>{
        if(count > 0){
            setCount((prev)=>prev-1)
        }
    }
    const reset = ()=>{
        setQurey(null);
        setData(null);
        setCount(1);
        console.log(data)
    }
    React.useEffect(()=>{
        search()
    },[count])
    return data?(
        <Search data={data} onIncrement={incrementCount} onDecrement={decrementCount} onReset={reset}/>
    ):
    (
        <div>
            <h1>Wecome to Home Page now search</h1>
            <input placeholder="enter your qurey" value={qurey} onChange={(e)=>{setQurey(e.target.value)}}/>
            <button onClick={search}>Search</button>
        </div>
    )
}
export default Home
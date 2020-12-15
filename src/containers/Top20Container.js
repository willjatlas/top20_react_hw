import {useState, useEffect} from 'react';
import Top20List from '../components/Top20List'

const Top20Container = () => {

    const [top20, setTop20] = useState(null);

    const getTop20 = ()=>{
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setTop20(data);
        })
    };

    useEffect(()=>{
        getTop20();
    }, []);

    return(
        <>
            <h1>This is the UK top 20:</h1>
            <Top20List apiData = {top20}/>
        </>
    );
};

export default Top20Container;
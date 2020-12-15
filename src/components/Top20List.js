const Top20List = ({apiData})=>{

    if(!apiData) return null;

    return(
        <>
            <ol>
            {apiData.feed.entry.map((element)=>{
                return <li>
                            <b>Artist: </b> {element["im:artist"].label} <br></br>
                            <b> Song: </b> {element["im:name"].label}
                        </li>;
            })}
            </ol>
        </>
    )
}
export default Top20List;


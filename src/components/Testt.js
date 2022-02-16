import React,{useState, useEffect} from "react";
import Button from "./Button";
import Quote from "./Quote";
import '../components/Quote.css';
import '../components/Button.css'

const Testt = () =>{
    let data = [];
    const [finalData, setFinalData] = useState([]);
    const list = ['Naruto','Death Note','Dragon Ball','Bleach','Hunter X Hunter','Sword Art Online','One Punch Man','Pokémon','Seven deadly sins','One Piece'];
    const [name, settName] = useState(list[Math.floor(Math.random()*list.length)]);

    function clickHandler(){
        settName(list[Math.floor(Math.random()*list.length)]);
        console.log('click Handler');
    }

    useEffect(()=>{
        fetchHandler();
    },[name])
    async function fetchHandler(){
        try{
            const response = await fetch("https://animechan.vercel.app/api/quotes/anime?title="+name);
            // const response = await fetch("https://zenquotes.io/api/quotes");
            if(!response.ok) throw new Error("Error..");

            data = await response.json();
            // console.log(data);
            if(response.ok){
                const dataTransformed = data.map((element)=>{
                    return {name:element.character, age:randomNumber(), quote:element.quote}
                })
                // console.log("hello world");
                setFinalData(dataTransformed);
            }
        }catch{
            console.log("Error getting data. Probably reached max API call limit");
        }
    }
    
    const randomNumber = () =>{
        return Math.floor(Math.random() *60);
    }

    return(
        <React.Fragment>
            <h1>Hey, Welcome to Random Quotes</h1>
            <button className="button" onClick={clickHandler}>Get Next</button>
            <h1>{'From: '+name}</h1>
            <div className="sectioncontainer">
                <div className="outer_container">
                    {finalData.map(element => <Quote data={element}/>)}
                </div>
            </div>
            {/* <Button buttonName='Get Next' onClick={clickHandler}/> */}
        </React.Fragment>
    )
}

export default Testt;
import React,{useContext} from "react";
import '../components/Quote.css'
import infoContext from "./store/info-context";

const Quote = (props) =>{

    const samplearr = [];
    const ctx = useContext(infoContext);

    // console.log("im in quote");
    // console.log(props.data);

    return( 
            <React.Fragment>
                <div className="inner_container"> 
                    <h4>Name: {props.data.name}</h4>
                    <h4>Age: {props.data.age}</h4>
                    <h4 className="quotecss">Quote: {`"`+props.data.quote+`"`}</h4>
                </div>
            </React.Fragment>
    )
}

export default Quote;
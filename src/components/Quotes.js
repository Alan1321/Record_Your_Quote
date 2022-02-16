import React,{useContext} from "react";
import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min";
import '../components/Quote.css';
import Quote from "./Quote";
import infoContext from "./store/info-context";

const Quotes = () =>{

    const ctx = useContext(infoContext);

    // console.log('im in quotesssss');
    // console.log(ctx.data);
    console.log(ctx.data);
    return(
        <div className="sectioncontainer">
            <div className="outer_container">
                {ctx.data && ctx.data.map(element => <Quote data={element}/>)}
                {!ctx.data.length && <h3>No Quotes to Display :(</h3>}
            </div>
        </div>
    )
}

export default Quotes;
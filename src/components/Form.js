import React, {useState, useContext} from "react";
import Button from "./Button";
import '../components/Form.css'
import Card from "./Card";
import infoContext from "./store/info-context";

const Form = () =>{
    const [firstname, setFirstName]=useState('');
    const [lastname, setLastName]=useState('');
    const [age, setAge]=useState('');
    const [quote, setQuote]=useState('');

    const ctx = useContext(infoContext);

    const submitHandler = (event) =>{
        event.preventDefault();
        let quote2 = quote.replace(/\s+/g,'');

        if(firstname.trim().length === 0){
            alert("PLease enter a valid firstname");
        }else if(lastname.trim().length === 0){
            alert("Please enter a valid lastname");
        }else if(age <= 0){
            alert("Please enter a valid age");
        }else if(quote2.length < 5){
            alert("Quote needs to be of at least length 5");
        }else{
            ctx.parseData(
                {firstname:firstname, lastname:lastname, age:age, quote:quote, name:firstname+' '+lastname}
            )
            setFirstName('');
            setLastName('');
            setAge('');
            setQuote('');
        }
    }
    const firstNameHandler = (event) =>{
        setFirstName(event.target.value);
    }
    const lastNameHandler = (event) =>{
        setLastName(event.target.value);
    }
    const ageHandler = (event)=>{
        setAge(event.target.value);
    }
    const quoteHandler = (event) =>{
        setQuote(event.target.value);
    }

    return(
        <Card>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <label className='label'>FirstName</label><br></br>
                    <input type='text' onChange={firstNameHandler} value={firstname}></input>
                </div>
                <div>
                    <label className='label'>LastName</label><br></br>
                    <input type='text' onChange={lastNameHandler} value={lastname}></input>
                </div>
                <div>
                    <label className='label'>Age</label><br></br>
                    <input type='number' onChange={ageHandler} value={age}></input>
                </div>
                <div>
                    <label className='label'>Quote</label><br></br>
                    <textarea rows='8' cols='22' onChange={quoteHandler} value={quote}></textarea>
                </div>
                <Button buttonName="Submit"></Button>
            </form>
        </Card>
    )
}


export default Form;
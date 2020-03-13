import React, { useState } from "react";


const RegForm = props => {
    const [ formState, setFormState ] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        confirmPW: "",
        submitted: false
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
        
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            [event.target.submitted]: true
        });
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="fName" onChange={onChangeHandler}/>
                {formState.fName.length > 0 && formState.fName.length < 2 && (<span>Not long enough</span>)}
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lName" onChange={onChangeHandler}/>
                {formState.lName.length > 0 && formState.lName.length < 2 && (<span>Not long enough</span>)}
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                {formState.email.length > 0 && formState.email.length < 5 && (<span>Email needs to be at least</span>)}
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                {formState.password.length > 0 && formState.password.length < 8 && (<span>Password needs to be 8 characters</span>)}
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPW" onChange={onChangeHandler}/>
                {formState.confirmPW.match(formState.password) && formState.confirmPW < 8 && (<span>Passwords need to match</span>)}
                <br/>   
                <input type="submit" />     
            </form>
            <div>
                <label>First Name: {formState.fName}</label>
                <br></br>
                <label>Last Name: {formState.lName}</label>
                <br></br>
                <label>Email:{formState.email}</label>
                <br></br>
                <label>Password:{formState.password}</label>
                <br></br>
                <label>Confirm Password:{formState.confirmPW}</label>
            </div>
        </div>
    )
}

export default RegForm
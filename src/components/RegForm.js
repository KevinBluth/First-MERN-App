import React, { useState } from "react";


const RegForm = props => {
    const [ formState, setFormState ] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        confirmPW: ""
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });;
    }
    const onSubmitHandler = event => {
        event.prevent.Default();
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="fName" onChange={onChangeHandler}/>
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lName" onChange={onChangeHandler}/>
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPW" onChange={onChangeHandler}/>
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
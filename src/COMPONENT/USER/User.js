import React, { useState } from "react";
import classes from './User.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";






const User = (props) => {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [Error, setError] = useState();

    const userNameUpdated = (event) => {
        setUserName(event.target.value);
    }

    const userAgeUpdated = (event) => {
        setUserAge(event.target.value);
    }

    const saveUserDetails = (event) => {
        event.preventDefault();

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please Enter a valid Name & Age(non-empty values).'
            });
            return;
        }

        if (+userAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please Enter a valid Age(Age>0)'
            });
            return;
        }
        props.onAddUser(userName, userAge)
        setUserName('')
        setUserAge('')
    }

    const ErrorHandler = () => {
        setError(null);
    }

    return (
        [
            Error && (
                <ErrorModule 
                        key="error-modal"
                        title={Error.title}
                        message={Error.message} 
                        onConfirm={ErrorHandler}
                        />
            ),

            <Card key="add-user-card" className={classes.input}>
                <form onSubmit={saveUserDetails}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input id="username" value={userName} type="text" onChange={userNameUpdated} />
                    </div >

                    <div><label htmlFor="userage">Age(Years)</label>
                        <input id="userage" value={userAge} type="number" onChange={userAgeUpdated} />
                    </div>
                    <div>
                        <Button type="submit">Add User</Button>
                    </div>
                </form>

            </Card>
      ]
    )
}
export default User;

import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button123 from "../UI/Button/Button";




const AddUser = (props) => {

    //יוצרים משתני סטייט אשר ערכם משתנה במהלך הפרוייקט
    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredUserAge,setEnteredUserAge] = useState('');

    //ומכניסה אותו כערך value פונ אשר לוקחת את פרטי התגית שהפעילה אותה ומחלצת ממנה את ה
    //enteredUserName למשתנה 
    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    //ומכניסה אותו כערך value פונ אשר לוקחת את פרטי התגית שהפעילה אותה ומחלצת ממנה את ה
    //enteredUserName למשתנה 
    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }

    const addUserHandelr = (event) => {
        //פקודה זו מבטלת את ההתנהגות הדיפולטיבית של המערכת ומבצעת את הפקודות שאנו נכתוב מטה event.preventDefault();
        event.preventDefault();

        //וולידציות
        //מבטל רווחים מיותרים = .trim()
        if(enteredUserAge.trim().length === 0 || enteredUserName.trim().length === 0)
        {
            return;
        }

        //וולידציות
        if (+enteredUserAge < 1) {
            return;
        }

        console.log(enteredUserName,enteredUserAge);
        props.onAddUser(enteredUserName,enteredUserAge);
        // מאפס את המשתנים הללו
        setEnteredUserName('');
        setEnteredUserAge('');
    };

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandelr}>

            <label htmlFor="username">Username</label>
            <input id="username"
             type="text"
              onChange={userNameChangeHandler}
              value={enteredUserName} />

            <label htmlFor="age">age (Years)</label>
            <input id="age"
             type="number"
              onChange={userAgeChangeHandler}
              value={enteredUserAge}/>

            <Button123 type="submit">Add User</Button123>
        </form>
        </Card>
    );
}; 

export default AddUser
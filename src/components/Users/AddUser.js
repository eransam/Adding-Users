import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button123 from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModel";




const AddUser = (props) => {

    //יוצרים משתני סטייט אשר ערכם משתנה במהלך הפרוייקט
    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredUserAge,setEnteredUserAge] = useState('');
    const [error,seterror] = useState();

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
            seterror({
                title: "invalid input",
                message: "please enter a valid "
            });
            return;
        }

        //וולידציות
        if (+enteredUserAge < 1) {
            seterror({
                title: "invalid age",
                message: "please enter a valid  age (>0)"
            });
            return;
        }

        console.log(enteredUserName,enteredUserAge);
        props.onAddUser(enteredUserName,enteredUserAge);
        // מאפס את המשתנים הללו
        setEnteredUserName('');
        setEnteredUserAge('');
    };

    const errorHandler = () => {
        seterror(null);
    }

    return (
        <div>
        {/*לנל כדי לבטל ולצאת מהודעת השגיאה error פקודה זו הופכת את הערך של המשתנה = onConfirm={errorHandler} */}
        {/*לא תופעל או ErrorModal יהיה נל אז הקומפוננטה error מכיוון שפה בשורה מתחת במידה והמשתנה  */}
        {/*המערכת שלנו תצא מהודעת השגיאה errorHandler שבמידה ותופעל בלחיצה על הכפתור שמפעילאת הפונ */}
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        
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
        </div>
    );
}; 

export default AddUser
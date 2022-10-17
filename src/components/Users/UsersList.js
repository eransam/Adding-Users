import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

//אומר בעצם שהקומםוננטה הזו מקבלת ערכים מבחוץ = props
//props.users אנו נצטרך גם להזין את הערך של UserList לדוג' פה בקומפוננטה אשר תזמן את הקומפוננטה 
//<UsersList users={[]}/> כך 
const UserList = (props) => {
    return(
        <Card className={classes.users}>
        <ul> 

            {/* זוהי פונ' שעוברת על כל האובייקטים במערך - .map */}
            {props.users.map((user) => (
                
                <li>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
        </Card>
    );

};

export default UserList;
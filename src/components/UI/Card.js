import React from "react";
import classes from "./Card.module.css"

// כאן אנו עושים ראפר
//className אנו בעצם נאפשר להוסיף קלאסים חיצוניים תחת ה ${props.className} כאשר הזנו פה את הפקודה 
// כאשר נתחום קוד מסויים בראפר הזה

// **${classes.card} כל מה שיתחם בראפר זה אוטומטית יקבל את הקלאס 

//פקודה זו בעצם מצביע על כל הקוד אשר יתחם בראפר זה {props.children}
const Card = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>

}

export default Card;
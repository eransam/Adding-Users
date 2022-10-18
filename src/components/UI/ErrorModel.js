import React from "react";
import Card from "./Card";
import Button from "./Button/Button";
import classes from "./ErrorModal.module.css";

// מודיע שקומפוננטה זו מקבלת ערכים מבחוץ props 
const ErrorModel = props => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}>
                <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>

                            {/*מבחוץ title זה אומר שקומפוננטה זו תקבל את הערך שהנצא בתוך המשתנה */}
                            {/* כך לדוג בקומפוננטה המזמנת : */}
                            {/* <ErrorMmodal title="erere" message="sdsdsd" /> */}
                            {props.title}
                        </h2>
                    </header>
                    <div className={classes.content}>
                        <p>

                            {/*מבחוץ message זה אומר שקומפוננטה זו תקבל את הערך שהנצא בתוך המשתנה */}
                            {props.message}
                        </p>
                    </div>
                    <footer className={classes.actions}>
                        <Button onClick={props.onConfirm}>Okey</Button>
                    </footer>
                </Card>
            </div>
        </div>
    )
}



export default ErrorModel

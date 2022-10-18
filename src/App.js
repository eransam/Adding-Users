import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList,setUsersList] = useState([]);

    const addUserHandelr = (uName,uAge) => {
        setUsersList((prevUserList) => {
            return [...prevUserList, {name:uName, age: uAge , id: Math.random().toString()}];
        });
    };


        console.log("test");
        console.log(usersList);



  return (
    <div>
        <AddUser onAddUser={addUserHandelr}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;





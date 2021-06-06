import logo from './logo.svg';
import './App.css';
import { Button, FormControl, Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { useState } from 'react';
import Todo from './Todo';
// import db from './firebase';
// import { db } from './src/firebase.js';


  
function App() {
  // settodo is used to add the value to the todos.
  // settodo is short term memory.
  const [todos, settodo] = useState(['Try your work ','Good luck!!!!!!!']);
  const [input, setinput] = useState('');
  console.log(input);

  // // 
  // useEffect(() => {
  //   // this code fire up when firebase.js loads up.
  //   db.collection('todo').onSnapshot(snapshot=>{
  //     console.log(snapshot.docs.map(doc=>doc.data().todo));
  //     settodo(snapshot.docs.map(doc=>doc.data().todo));
      
  //   })
  // }, [input]);

  const addTodo = (event) => {
    // event.preventDefault();//This will prevent from REFRESHING THE PAGE.

    // It will fire up when we Click the button.
    console.log("Here i am working");
    // Here we use (...) only three dots for spreading the array and also for also that we can append the values to the todos .


    // Actually it adds the value that has been entered in the textBox.
    // After refreshing the page the entered data will vanish because it is short term memory.
    settodo([...todos, input]);
    setinput('');
    console.log(todos);
  }
  return (
    <div className="App">
      <div className="head"><h1>How you doing ?</h1></div>

      {/* Here, event getting the target value to push the input value to the  */}
      {/* <input value={input} onChange={event => setinput(event.target.value)} /> */}

      <FormControl>
        <InputLabel>Write your Task</InputLabel>
        <Input value={input} onChange={event => setinput(event.target.value)} />

      </FormControl>

      {/* Button is the material-UI from the react that enables us to use the css bootstrap with html tag. */}

      {/* The link is:  https://material-ui.com/ */}
 
   <Button disable={!input} type="button" onClick={addTodo} varaint="contained" color="primary">ADD</Button>

 
      {/* <button onClick={addTodo}>Add</button> */}
      <ul>
        {/** map is used for tracing the array */}

        
        {todos.map(todo =>
        (
         <Todo  text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

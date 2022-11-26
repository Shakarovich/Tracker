import React, {Fragment, useState} from 'react'
import MyButton from './details/MyButton'
import MyInput from './details/MyInput'


const Creator = ({create}) => {

    const now  = new Date().toLocaleTimeString();
    const [todo, setTodo] = useState({
        title:"",
        description:"",
        status:"",
        time:now
    });

    const handleStatus = (e) => {
        setTodo({...todo, status: e.target.value})
    };
      
      const handleAdd = (e) => {
        e.preventDefault()
       const newPost = {
        ...todo, id:Date.now()
       }
       create(newPost)
       setTodo({title:"", description:"", status:"", time:now})
       console.log(newPost)
      }
  return (
    <Fragment>
        <MyInput value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})} type="text" placeholder="Type here your heading" className="input"/>
        <MyInput value={todo.description} onChange={e => setTodo({...todo, description: e.target.value})} type="text" placeholder="Type here your description" className="input"/>
        <br/>
        <select onChange={(e) => handleStatus(e)}>
            <option value="Queue">Queue</option>
            <option value="Development">Development</option>
            <option value="Done">Done</option>
        </select>     
        <br/>   
        <MyButton style={{padding:"10px"}} onClick={handleAdd}>Add</MyButton>
    </Fragment>
  )
}

export default Creator
import React, { Fragment, useState } from 'react';
import MetaDecorator from '../../components/MetaDecorator';
import { HelmetProvider } from 'react-helmet-async';
import LayoutProvider from '../../components/details/Layout/LayoutProvider';
import MyModal from '../../components/details/MyModal';
import Creator from '../../components/Creator';
import Indexer from '../../components/Indexer';
// import {useDispatch, useSelector} from 'react-redux';
// import { addTodoAction, removeTodoAction } from '../../components/redux/reducer';



const Project = () => {

  const [todos, setTodos] = useState([
    {id:1, title:"Title", description:"Description", time:"00-01-00", status:"Done", image:"https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"},
    {id:2, title:"Title", description:"Description", time:"00-02-00", status:"Development",  image:"https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"},
    {id:3, title:"Title", description:"Description", time:"00-03-00", status:"Queue",  image:"https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"},
    {id:4, title:"Title", description:"Description", time:"00-04-00", status:"Queue",  image:"https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"},
  ]);

  // const dispatch = useDispatch();
  // const todo = useSelector(state => state.todo.todo);

  // const addTodo = (name) => {
  //   const todo = {
  //     id: Date.now(),
  //     name
  //   }
  //   dispatch(addTodoAction(name))
  // }
  // const removeTodo = (arg) => {
  //   dispatch(removeTodoAction(arg.id))
  // }

const createTodo = (newPost) => {
  setTodos([...todos, newPost])
}

const Delete = (todo) => {
  setTodos(todos.filter(t => t.id !== todo.id))
  alert("Do you wanna delete?")
}

  return (
    <Fragment>
      <HelmetProvider>
        <MetaDecorator title="Tracker-Projects" description="React DOM rendering project page" name="Tracker-Projects" type="article"/>
        <LayoutProvider>
          <main className='main'>
            <MyModal title={"👋 Create tracks here..."} content={<Creator create={createTodo}/>}/>
            <MyModal title={"👋 Show tracks here..."} content={<Indexer remove={Delete} todos={todos} title="Tracker list:"/>}/>
          </main>
        </LayoutProvider>
      </HelmetProvider>
    </Fragment>
  )
}

export default Project;
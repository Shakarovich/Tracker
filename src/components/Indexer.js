import React, {Fragment} from 'react';
import DragnDrop from './details/DragnDrop';
import IndexerItem from './IndexerItem';

const Indexer = ({todos, title, remove}) => {

  return (
    <Fragment>
        <h1>{title}</h1>
        {/* {todos.map((todo, index) => 
        <IndexerItem remove={remove} number={index + 1} todo={todo} key={todo.id}/>
        )} */}
        <DragnDrop tasks={todos}/>
    </Fragment>
  )
}


export default Indexer;
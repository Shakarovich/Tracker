import React from 'react';


const IndexerItem = (props) => {

  return (
    <React.Fragment>
        <div>

          <div>
            <ul>
                <li>{props.number}</li>
                <li>{props.todo.title}</li>
                <li>{props.todo.time}</li>
                <li><button style={{display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => props.remove(props.todo)}>Delete</button></li>
            </ul>
          </div>
        </div>
    </React.Fragment>
  )
}

export default IndexerItem;
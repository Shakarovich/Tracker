/* eslint-disable no-undef */
import React from "react";
import '../../styles/dragndrop.scss';
import MyButton from "./MyButton";

class DragnDrop extends React.Component {

  state = { tasks: [] };
  
  componentDidMount() {
    const { tasks } = this.props;
    this.setState({
      tasks
    });
  }

  

  onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };
  onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };
  onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };
  onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };
  onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };
  onDrop = (evt, value, status) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let tasks = this.state.tasks;
    console.log("data", data, status);
    let updated = tasks.map((task) => {
      if (task.id.toString() === data.toString()) {
        task.status = status;
      }
      return task;
    });
    this.setState({ tasks: updated });
  };


  render() {
    const { tasks } = this.state;
    console.log("tasks", tasks);
    let queue = tasks.filter((data) => data.status === "Queue");
    let development = tasks.filter((data) => data.status === "Development");
    let done = tasks.filter((data) => data.status === "Done");


    return (
      <div className="containier">
        <div
          className="order small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, false, "Development")}
        >
          <section className="drag_containier">
            <div className="containier">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Development</h4>
                  {development.map((task) => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                      <div className="img">
                        <img src={task.image} alt="box" />
                      </div>
                      <div className="card_right">
                        <div className="title">{task.title}</div>
                        <div className="desc">{task.description}</div>
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <MyButton>Delete</MyButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="pending small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, false, "Queue")}
        >
          <section className="drag_containier">
            <div className="containier">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Queue</h4>
                  {queue.map((task) => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                      <div className="img">
                        <img src={task.image} alt="box" />
                      </div>
                      <div className="card_right">
                        <div className="title">{task.title}</div>
                        <div className="desc">{task.description}</div>
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <MyButton>Delete</MyButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="done small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, true, "Done")}
        >
          <section className="drag_containier">
            <div className="containier">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Done</h4>
                  {done.map((task) => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                      <div className="img">
                        <img src={task.image} alt="box" />
                      </div>
                      <div className="card_right">
                        <div className="title">{task.title}</div>
                        <div className="desc">{task.description}</div>
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <MyButton>Delete</MyButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default DragnDrop;

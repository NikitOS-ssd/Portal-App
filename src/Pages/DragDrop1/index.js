import React, { Component } from 'react'
import './style.css'


class DragDrop1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasksType: {
        inProgress: [],
        Done: []
      },
      tasks: [
        { id: "1", taskName: "Read book", type: "inProgress", bgcolor: "red" },
        { id: "2", taskName: "Pay bills", type: "inProgress", bgcolor: "green" },
        { id: "3", taskName: "Go to the gym", type: "Done", bgcolor: "blue" },
        { id: "4", taskName: "Play baseball", type: "Done", bgcolor: "green" },
        { id: "5", taskName: "Programming", type: "inProgress", bgcolor: "blue" }
      ]
    }
  }


  onDragStart = (event, taskName) => {
    console.log('dragstart on div: ', taskName);
    event.dataTransfer.setData("taskName", taskName);
  }

  onDragOver = (event) => {
    event.preventDefault();
  }
  onDrop = (event, name) => {
    let taskName = event.dataTransfer.getData("taskName");

    let tasks = this.state.tasks.filter((task) => {
      if (task.taskName === taskName) {
        task.type = name;
      }
      return task;
    });

    this.setState({ tasks });
  }

  getDomElement({ tasksType: types, tasks }) {

    const tasksTypeDOM = Object.keys(types).map(item => {
      let tasksElement = tasks.filter(task => task.type === item);

      tasksElement = tasksElement.map(task => {
        let {id, taskName, bgcolor} = task;

        return (
          <div key={id}
            onDragStart={(event) => this.onDragStart(event, taskName)}
            draggable
            className="draggable"
            style={{ backgroundColor: bgcolor }}
          >
            {taskName}
          </div>
        );
      })

      let typeElement = (
        <div key={item} className={item}
          onDragOver={(event) => this.onDragOver(event)}
          onDrop={(event) => { this.onDrop(event, `${item}`) }}
        >
          <span className="group-header">{item}</span>
          <p>{tasksElement}</p>
        </div>
      );
      return typeElement;
    });

    return tasksTypeDOM
  }

  render() {
    const typesDOM = this.getDomElement(this.state);
    console.log(this.state);

    return (
      <section className="drag-section">
        <h2>To do List 2</h2>

        {typesDOM}
      </section>
    )
  }
}

export default DragDrop1

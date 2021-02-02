import React, { Component } from 'react'
import Task from '../../Components/Task'
import TaskType from '../../Components/TaskType'
import './style.css'

var jobTask = {
  planned: [{ name: '#name1', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' }, { name: 'create repository', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' }],
  indev: [{ name: '#found capital investor', info: 'Lorem ipsum dolor sit amet.' }],
  qa: [],
  production: []
};

class DragDropPro extends Component {
  state = {
    tasks: jobTask
  }

  onDragStart(event, taskName) {
    let category = event.target.closest('li').getAttribute('data-title');
    let taskObj = this.state.tasks[category].find(item => item.name === taskName);

    event.dataTransfer.setData("taskName", taskName);
    event.dataTransfer.setData("taskCategory", category);
    event.dataTransfer.setData("taskObj", JSON.stringify(taskObj));
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onDragEnter(event) {
    event.preventDefault();
    let thisElem = event.target.closest('li');
    thisElem.classList.add('hovered');
  }

  onDragLeave(event) {
    let thisElem = event.target.closest('li');
    thisElem.classList.remove('hovered');
  }

  onDrop(event, name) {
    let taskName = event.dataTransfer.getData('taskName');
    let taskCategory = event.dataTransfer.getData('taskCategory');
    let taskObj = JSON.parse(event.dataTransfer.getData('taskObj'));
    let thisElem = event.target.closest('li');

    thisElem.classList.remove('hovered');

    let tasks = { ...this.state.tasks };
    tasks[taskCategory] = tasks[taskCategory].filter(item => item.name !== taskName);
    tasks[name].push(taskObj);
    this.setState({ tasks });
  }

  getAllTasksDOM() {
    let { tasks } = this.state;
    
    let popDoc = Object.keys(tasks).map((item, index) => {
      let tasksDomElement = tasks[item].map((task, id) => {
        let { name, info } = task;
        return (
          <Task
            key={id}
            name={name}
            info={info}
            draggable
            onDragStart={this.onDragStart.bind(this)}
          />
        );
      });

      let typeDomElement = (
        <TaskType key={index} item={item}
          onDragOver={this.onDragOver.bind(this)}
          onDragEnter={this.onDragEnter.bind(this)}
          onDragLeave={this.onDragLeave.bind(this)}
          onDrop={this.onDrop.bind(this)}
        >
          {tasksDomElement}
        </TaskType>
      )
      
      return typeDomElement
    });

    return popDoc
  }
  getTypeTask() {
    let {tasks} = this.state;

    let liType = Object.keys(tasks).map((item, index) => {
      return (<li key={index} className="list__caption">{item.toUpperCase()}</li>);
    });

    return liType;
  }


  render() {
    let tasksColumns = this.getAllTasksDOM();
    let tasksTypes = this.getTypeTask();

    return (
      <div className="hero">
        <h2>Drag Drop</h2>
        <div className="wrapper">
          <ul className="list">
            {tasksTypes}

            {tasksColumns}
          </ul>
        </div>
      </div>
    )
  }
}


export default DragDropPro

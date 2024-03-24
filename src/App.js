import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import BtnItem from './components/btnItem'
import TaskItem from './components/taskItem'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here

class App extends Component {
  state = {tasksList: [], task: '', tag: tagsList[0].optionId, activeTag: ''}

  updateName = event => {
    this.setState({task: event.target.value})
  }

  updateTag = event => {
    this.setState({tag: event.target.value})
  }

  addTask = () => {
    const {task, tag, tasksList} = this.state
    const newTask = {id: uuidv4(), task, tag}
    const updateList = [...tasksList, newTask]
    this.setState({tasksList: updateList, task: '', tag: tagsList[0].optionId})
  }

  onSelectTag = id => {
    const {activeTag} = this.state
    if (activeTag === id) {
      this.setState({activeTag: ''})
    } else {
      this.setState({activeTag: id})
    }
  }

  render() {
    const {tasksList, tag, task, activeTag} = this.state
    const tagedTasks = tasksList.filter(each =>
      each.tag.toLowerCase().includes(activeTag.toLowerCase()),
    )
    return (
      <div className="bg">
        <form className="user-cont">
          <h1 className="heading">Create a task!</h1>
          <label htmlFor="title">Task</label>
          <br />
          <input
            onChange={this.updateName}
            className="user-input"
            id="title"
            type="text"
            placeholder="Enter the task here"
            value={task}
          />
          <br />
          <label htmlFor="tags">Tags</label>
          <br />
          <select
            value={tag}
            onChange={this.updateTag}
            className="user-input"
            id="tags"
          >
            {tagsList.map(each => (
              <option value={each.optionId} key={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>
          <br />
          <button onClick={this.addTask} type="button" className="add-task-btn">
            Add Task
          </button>
        </form>
        <div className="task-cont">
          <h1>Tags</h1>
          <ul className="tags-cont">
            {tagsList.map(each => (
              <BtnItem
                onSelectTag={this.onSelectTag}
                item={each}
                key={each.optionId}
                activeTag={activeTag}
              />
            ))}
          </ul>
          <h1>Tasks</h1>
          {tagedTasks.length === 0 ? (
            <div className="empty">
              <p>No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="tasks">
              {tagedTasks.map(each => (
                <TaskItem item={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App

import './index.css'

const TaskItem = props => {
  const {item} = props
  const {task, tag} = item
  return (
    <li className="task-item">
      <p>{task}</p>
      <p className="tag">{tag}</p>
    </li>
  )
}

export default TaskItem

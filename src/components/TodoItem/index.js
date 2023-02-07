// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoListDetails, onDeleteTitle} = props
  const {title, id} = todoListDetails
  const onDelete = () => {
    onDeleteTitle(id)
    console.log(id)
  }

  return (
    <li className="list-item">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

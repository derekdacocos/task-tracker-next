export default function TaskItem({ id, title, onDelete }) {
  return (
    <li>
      {title}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
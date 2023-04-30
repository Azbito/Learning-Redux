import './styles.scss'
export default function Button({ title, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  )
}

import './styles.scss'

export default function GreenButton({ onClick, children }) {
  return (
    <button className="green-button-content" onClick={onClick}>
      {children}
    </button>
  )
}

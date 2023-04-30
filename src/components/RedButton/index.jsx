import './styles.scss'

export default function RedButton({ onClick, children }) {
  return (
    <button className="button-content" onClick={onClick}>
      {children}
    </button>
  )
}

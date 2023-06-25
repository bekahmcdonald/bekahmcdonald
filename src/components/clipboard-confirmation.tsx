import s from './clipboard-confirmation.module.scss'

interface Position {
  top: string;
  left: string;
}

export default function ClipboardConfirmation({ position }: { position: Position }) {

  return (
    <div className={s.clipboardConfirmation} style={position}>
      <div className={s.message}>Copied to clipboard</div>
      <ul className={s.confetti}>
        {Array.from(Array(80).keys()).map((i) => (
          <li className={s.piece} key={i}></li>
        ))}
      </ul>
    </div>
  )
}
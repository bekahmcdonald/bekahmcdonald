import Logo from '../components/logo'
import s from './header.module.scss'

export default function Header({data}: {data: any}) {
  return (
    <>
      <header className="o-container">
        <div className={s.header}>
        <a href="/">
            <Logo/>
          </a>
        </div>
        <div className={s.intro}>
          <div className={s.block}>
            <div dangerouslySetInnerHTML={{ __html: data.content[0].copy }}></div>
          </div>
        </div>
      </header>
    </>
  )
}
import s from './skills.module.scss'

export default function Skills({skills}: {skills: any}) {
  return (
    <section className="o-container">
      <h2 className="heading">
        <div className="outline">{skills.heading}</div>
        <div className="solid">{skills.heading}</div>
      </h2>
      {skills.preference.map((group: any) => (
        <div key={skills.language}>
          <h3 className={s.subheading}>{group.heading}</h3>
          <ul className={s.skillList}>
            {group.list.map((skill: any) => (
              <li className={s.skill} key={skill.language}>
                <span>{skill.language}</span>
              </li>
            ))}
          </ul>
        </div>

      ))}
    </section>
  )
}
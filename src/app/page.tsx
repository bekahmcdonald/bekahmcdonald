import Header from '../components/header'
import Footer from '../components/footer'
import Skills from '../components/skills'
import GirlCode from '../components/girlcode'
import Contact from '@/components/contact'

export default async function Home() {
  const data = await getData()
  const { about, contact, skills, social } = data;

  return (
    <main>
      <Header data={about} />
      <GirlCode />
      <Skills skills={skills} />
      <Contact social={social} contact={contact} />
      <Footer />
    </main>
  )
}

async function getData() {
  const res = await fetch('http://cms.bekahmcdonald.com/wp-json/bm/v1/global')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

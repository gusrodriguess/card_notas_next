import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/navbar'
import Menu from '@/comps/menu'
import Notas from '@/comps/notas'
import Footer from '@/comps/footer'

export default function Home() {
  return (
    <div className={styles.bg}>
      <Navbar />
      <div className={styles.conteudo}>
        <Menu />
        <Notas />
      </div>
      <Footer />
    </div>
  )
}

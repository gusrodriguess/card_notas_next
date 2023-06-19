import styles from '@/styles/Home.module.css'
import Image from 'next/image';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.itens_menu_selecionado}>
                <Image src="/home.png" width={30} height={28} alt="home"/>
                <p> Início </p>
            </div>
            <div className={styles.itens_menu}>
                <Image src="/study.png" width={30} height={30} alt="home"/>
                <p> Estudo </p>
            </div>
            
            <div className={styles.itens_menu}>
                <Image src="/notas.png" width={30} height={30} alt="home"/>
                <p> Notas </p>
            </div>

            <div className={styles.itens_menu}>
                <Image src="/progress.png" width={30} height={30} alt="home"/>
                <p> Progressão do Aluno </p>
            </div>

            <div className={styles.itens_menu}>
                <Image src="/exit.png" width={30} height={30} alt="home"/>
                <p> Sair </p>
            </div>
        </div>
    );
}

export default Menu;
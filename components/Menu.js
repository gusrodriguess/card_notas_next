import styles from '@/styles/Menu.module.css'
import Image from 'next/image';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.itens_menu}>
                <Image src="/home1.png" width={30} height={28} alt="home"/>
                <p> Início </p>
            </div>
            <div className={styles.itens_menu}>
                <Image src="/study.png" width={30} height={28} alt="study"/>
                <p> Estudo </p>
            </div>
            
            <div className={styles.itens_menu_selecionado}>
                <Image src="/notas1.png" width={30} height={28} alt="notas"/>
                <p> Notas </p>
            </div>

            <div className={styles.itens_menu}>
                <Image src="/progress.png" width={30} height={28} alt="progress"/>
                <p> Progressão do Aluno </p>
            </div>

            <div className={styles.itens_menu}>
                <Image src="/exit.png" width={30} height={28} alt="exit"/>
                <p> Sair </p>
            </div>
        </div>
    );
}

export default Menu;
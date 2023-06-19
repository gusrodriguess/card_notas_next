import Image from "next/image";
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/logo.png" width={170}height={30} alt="logo"/>
            </div>
            <div className={styles.perfil}>
                <div className={styles.info}>
                    <h4> Rafael Diego Nogueira </h4>
                    <a> Informações do perfil </a>
                    <div className={styles.dark}>
                        <p> Dark Mode </p>
                        <div className={styles.toggle}>
                            <i className={styles.indicator}></i>
                        </div>
                    </div>
                </div>
                <div className="icon">
                    <Image src="/icon.png" width={88} height={88} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
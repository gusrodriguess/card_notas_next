import styles from '@/styles/Home.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.info_footer}>
                <h3> Último acesso ao site</h3>
                <p> Segunda. 07 Jun 2021 18:02 </p>
                <p> (20 seg) </p>
            </div>

            <div>
                <h4> Plataforma Dataviewer. Universidade Federal do Rio Grande do Norte </h4>
            </div>
        </div>
    );
}

export default Footer;
import styles from '@/styles/Home.module.css';

const Notas = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card_notas}>
                <h5> Notas </h5>
                <div className={styles.notas}>
                    <div className={styles.infos}>
                        <h5> 7,9 </h5>
                        <p> U1 </p>
                    </div>

                    <div className={styles.infos}>
                        <h5> 8,7 </h5>
                        <p> U2 </p>
                    </div>
                    
                    <div className={styles.infos}>
                        <h5> 9,8 </h5>
                        <p> U3 </p>
                    </div>

                    <div>
                        <h4> 8,8 </h4>
                        <p> Média </p>
                    </div>
                </div>  
            </div>

            <div className={styles.card_notas}>
                <h5> Unidade I </h5>
                <div className={styles.notas}>
                    <div className={styles.infos}>
                        <h5> 10,0 </h5>
                        <p> Presença </p>
                    </div>

                    <div className={styles.infos}>
                        <h5> 8,7 </h5>
                        <p> Listas </p>
                    </div>
                    
                    <div className={styles.infos}>
                        <h5> 9,8 </h5>
                        <p> Prova </p>
                    </div>

                    <div>
                        <h4> 7,9 </h4>
                        <p> Total </p>
                    </div>
                </div>  
            </div> 
            
            <div className={styles.card_notas}>
                <h5> Unidade II </h5>
                <div className={styles.notas}>
                    <div className={styles.infos}>
                        <h5> 5,0 </h5>
                        <p> Presença </p>
                    </div>

                    <div className={styles.infos}>
                        <h5> 8,7 </h5>
                        <p> Listas </p>
                    </div>
                    
                    <div className={styles.infos}>
                        <h5> 9,8 </h5>
                        <p> Prova </p>
                    </div>

                    <div>
                        <h4> 7,5 </h4>
                        <p> Total </p>
                    </div>
                </div>  
            </div>

            <div className={styles.card_notas}>
                <h5> Unidade III </h5>
                <div className={styles.notas}>
                    <div className={styles.infos}>
                        <h5> 5,0 </h5>
                        <p> Presença </p>
                    </div>

                    <div className={styles.infos}>
                        <h5> 6,7 </h5>
                        <p> Listas </p>
                    </div>
                    
                    <div className={styles.infos}>
                        <h5> 4,8 </h5>
                        <p> Prova </p>
                    </div>

                    <div>
                        <h4> 5,8 </h4>
                        <p> Total </p>
                    </div>
                </div>  
            </div>

            <div className={styles.card_presenca}>
                    <h5> Presença - Unidade I </h5>
                    <div className={styles.notas}>
                        <div className={styles.infos}>
                            <h5> 1,0 </h5>
                            <p> Lab 1 </p>
                        </div>

                        <div className={styles.infos}>
                            <h5> 1,0 </h5>
                            <p> Lab 2 </p>
                        </div>
                            
                        <div>
                            <h4> 10,0 </h4>
                            <p> Total </p>
                        </div>
                    </div> 
            </div>

            <div className={styles.card_presenca}>
                    <h5> Presença - Unidade II </h5>
                    <div className={styles.notas}>
                        <div className={styles.infos}>
                            <h5> 1,0 </h5>
                            <p> Lab 1 </p>
                        </div>

                        <div className={styles.infos}>
                            <h5> 0,0 </h5>
                            <p> Lab 2 </p>
                        </div>
                            
                        <div>
                            <h4> 5,0 </h4>
                            <p> Total </p>
                        </div>
                    </div> 
            </div>

            <div className={styles.card_presenca}>
                    <h5> Presença - Unidade III </h5>
                    <div className={styles.notas}>
                        <div className={styles.infos}>
                            <h5> 0,0 </h5>
                            <p> Lab 1 </p>
                        </div>

                        <div className={styles.infos}>
                            <h5> 1,0 </h5>
                            <p> Lab 2 </p>
                        </div>
                            
                        <div>
                            <h4> 5,0 </h4>
                            <p> Total </p>
                        </div>
                    </div> 
            </div>

            <div className={styles.card_presenca}>
                <h5> Comentários - Prova 01 </h5>
                <p className={styles.comentarios}> Ok </p>
            </div>

            <div className={styles.card_presenca}>
                <h5> Comentários - Prova 02 </h5>
                <p className={styles.comentarios}>
                    Link bloqueado
                </p>
            </div>

            <div className={styles.card_presenca}>
                <h5> Comentários - Prova 03 </h5>
                <p className={styles.comentarios}>
                Faltou realizar os testes, melhorar a indentação e as 
                explicações sobre o algoritmo desenvolvido ficaram incompletas.
                </p>
            </div>
        </div>
    );
}

export default Notas;
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Leila</h1>
                <p className={styles.description}>
                    <p className="home__job">
                        <span className="text-cs">I Am A </span>
                        <span className={styles.dataScientist}>Data Scientist.</span>
                        <br />
                        <br />
                    </p>
                    From Tunis, Tunisia. I am an autonomous <br />
                    individual with a strong enthusiasm for <br />
                    learning and discovering new things.
                </p>
                <div className={styles.buttons}>
  <a href="https://drive.google.com/file/d/1Z0H0BiWcNwCoExEVzGe6SN8RS3BLAo8w/view?usp=sharing" className={styles.cvBtn}> English CV</a>
  <a href="https://drive.google.com/file/d/18gJpYNH54Eqn442VNRVNck7ANjhepKSM/view?usp=sharing" className={styles.cvBtn}> French CV</a>
</div>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};

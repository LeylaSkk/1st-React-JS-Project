

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (<footer id="contact" className={styles.container}>
    <div className={styles.text}><h2> Contact</h2>
    <p>Feel free to reach out!</p>
    </div>

    <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="email icon "/>
            <a href="mailto:leila.skouri.ls@gmail.com">Email</a>
        </li>

        <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon "/>
            <a href="https://www.linkedin.com/in/leila-skouri-0673b3274"> Linkedin</a>
        </li>

        <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="github icon "/>
            <a href="https://github.com/LeylaSkk"> Git</a>
        </li>
    </ul>
  </footer>
   
   
  );
};
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="certification">
            <h2 className={styles.title}>Certifications</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    {/* Data Science and Machine Learning */}
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Data Science and Machine Learning</h3>
                            <ul>
                                <li>Data Science Associate (DP-100) Professional Certificate - Microsoft Azure</li>
                                <li>Machine Learning with Python - IBM</li>
                                <li>Neural Networks and Deep Learning - DeepLearning.AI</li>
                                <li>Natural Language Processing Specialization - DeepLearning.AI</li>
                            </ul>
                        </div>
                    </li>

                    {/* Software Development */}
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Software Development</h3>
                            <ul>
                                <li>Programming in Python - Meta</li>
                                <li>Back-End Developer Professional Certificate - Meta</li>
                            </ul>
                        </div>
                    </li>

                    {/* Data Analytics and Cloud */}
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Data Analytics and Cloud</h3>
                            <ul>
                                <li>Power BI Data Analyst Professional Certificate - Microsoft</li>
                                <li>Microsoft Azure Fundamentals AZ-900 Exam Prep - Microsoft</li>
                                <li>AI Fundamentals - DataCamp</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <a 
                    href="https://drive.google.com/drive/folders/1How5wviguOnosiyll9tYcJ6WK0gwraHc?usp=sharing"  // Replace with your Google Drive link
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.viewButton}
                >
                    View Certificates
                </a>
            </div>
        </section>
    );
};
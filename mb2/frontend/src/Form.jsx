import styles from "./Form.module.css";

const quote =
  "Step into the world of Linux and Open Source! Connect with fellow enthusiasts, contribute to real-world projects, and level up your skills.";

function Form() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <p className={styles.formHeading}>Walchand Linux Users' Group</p>
        <p className={styles.formPurpose}>Member Board Drive 2</p>
        <p className={styles.formQuote}>{quote}</p>
      </div>
    </div>
  );
}

export default Form;

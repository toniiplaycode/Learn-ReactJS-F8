import styles from './CssModule2.module.scss';

console.log('module2: ', styles);
// style là một object gồm các class của module đã được hash

const CssModule2 = () => {
    return(
        <div>
            <h1 className={styles.headingTitle}>CSS MODULE 2</h1>
        </div>
    )
}

export default CssModule2;
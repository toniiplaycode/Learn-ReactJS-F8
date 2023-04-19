import {clsx} from 'clsx';
import styles from './CssModule1.module.scss';

console.log('module1: ', styles);
// style là một object gồm các class của module đã được hash

const CssModule1 = () => {

    let showDecoration = true;
    let showBgGrey = true;

    return(
        <div>
            <h1 
            // className={`${styles.headingTitle} ${styles.fontFamily}`} // class, dùng temple string để thêm được nhiều class

            className={clsx(styles.headingTitle, styles.fontFamily, {
                [styles.textDecoration]: showDecoration,
                [styles.bgGrey]: showBgGrey
            })} // class, dùng clsx thêm được nhiều class gọn hơn có thể dùng được CSS động (xử lý logic) thông qua tham số là object, '[]' là enhanced object literals 

            id={styles['fontSize']} // ID
            >
                CSS MODULE 1
            </h1>
        </div>
    )
}

export default CssModule1;
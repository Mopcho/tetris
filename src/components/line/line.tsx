import {FunctionComponent} from 'react';
import styles from './Line.module.css';

export const Line: FunctionComponent = () => {

    return (
        <div className={styles.line}>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
        </div>
    );
}
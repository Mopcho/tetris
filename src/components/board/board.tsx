import {FunctionComponent} from 'react';
import { Line } from '../line/line';
import styles from './board.module.css';

export const Board: FunctionComponent = () => {

    return (
        <div className={styles.board}>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
        </div>
    );
}
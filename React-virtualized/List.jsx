import { loremIpsum } from "lorem-ipsum";
import { List, AutoSizer } from "react-virtualized";
import styles from './style.module.css'

const rowCount = 5000;
const listHeight = 400;
const rowHeight = 50;
const rowWidth = 700;

const list = Array.from({length:rowCount}).map((_, index) => {
    return {
        id: index,
        name: 'Shushanik',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
            count: 3,
            units: 'sentences',
            sentenceLowerBound: 4,
            sentenceUpperBound: 8
        })
    }
});

function renderRow({ key, index, style }) {
    return (
        <div key={key} style={style} className={styles.row}>
            <div className={styles.image}>
                <img src={list[index].image} />
            </div>
            <div className={styles.content}>
                <div>{list[index].name}</div>
                <div>{list[index].text}</div>
            </div>
        </div>
    )
};

function ListApp() {
    return (
        <div className={styles.App}>
            <div className={styles.list}>
                <List
                    width={rowWidth}
                    height={listHeight}
                    rowHeight={rowHeight}
                    rowRenderer={renderRow}
                    rowCount={list.length}
                    overscanRowCount={3}
                />
            </div>
        </div>
    )
} export default ListApp
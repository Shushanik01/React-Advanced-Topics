import { loremIpsum } from "lorem-ipsum";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";
import styles from './style.module.css'

const rowCount = 5000;
const listHeight = 400;
const rowHeight = 50;
const rowWidth = 700;

const list = Array.from({ length: rowCount }).map((_, index) => {
    return {
        id: index,
        name: 'Shushanik',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
            count: 5,
            units: 'sentences',
            sentenceLowerBound: 4,
            sentenceUpperBound: 8
        })
    }
});

const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultWidth: 100
});


function renderRow({ key, index, style, parent }) {
    return (
        <CellMeasurer
            cache={cache}
            key={key}
            index={index}
            parent={parent}
            columnIndex={0}
            rowIndex={index}
        >
            {({registerChild}) => (<div style={style} className={styles.row} ref={registerChild}>
                <div className={styles.image}>
                    <img src={list[index].image} />
                </div>
                <div className={styles.content}>
                    <div>{list[index].name}</div>
                    <div>{list[index].text}</div>
                </div>
            </div>)}
        </CellMeasurer>
    )
};

// function ListApp() {
//     return (
//         <div className={styles.App}>
//             <div className={styles.list}>
//                 <List
//                     width={rowWidth}
//                     height={listHeight}
//                     rowHeight={rowHeight}
//                     rowRenderer={renderRow}
//                     rowCount={list.length}
//                     overscanRowCount={3}
//                 />
//             </div>
//         </div>
//     )
// } export default ListApp



function AutoSizerList() {
    return (
        <div className={styles.list}>
            <AutoSizer>
                {
                    ({ width, height }) => (<List
                        deferredMeasurementCache={cache}
                        rowHeight={cache.rowHeight}
                        width={width}
                        height={height}
                        rowRenderer={renderRow}
                        rowCount={list.length}
                        overscanRowCount={3}
                    />)}
            </AutoSizer>
        </div>
    )
} export default AutoSizerList
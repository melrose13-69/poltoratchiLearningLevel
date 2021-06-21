import React, { useState } from 'react';
import s from './Pagination.module.scss';


const Pagination = ( { currentPage, totalCount, pageSize, onPageChanged, portionSize = 50 } ) => {
    const [portionNumber, setPortionNumber] = useState( 1 );
    const pagesCount = Math.ceil( totalCount / pageSize );
    const portionCount = Math.ceil( pagesCount / portionSize );
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const pages = [];
    for ( let i = 1; i <= pagesCount; i++ ) {
        pages.push( i );
    }

    return (
        <div>
            { leftPortionPageNumber !== 1 &&
            <button onClick={ () => {setPortionNumber( portionNumber - 1 );} }>prev</button> }
            <ul className={ s.pagination }>
                {
                    pages.filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
                         .map( p =>
                             <li key={ p } onClick={ () => {onPageChanged( p );} }
                                 className={ currentPage === p ? `${s.selectedPage} ${s.item}` : s.item }>{ p }
                             </li>
                         )
                }
            </ul>
            { portionCount > portionNumber &&
            <button onClick={ () => {setPortionNumber( portionNumber + 1 );} }>next</button> }
        </div>
    );
};

export default Pagination;
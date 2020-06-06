import React, {useState} from "react";
import s from "./Paginator.module.css"
import {NavLink} from "react-router-dom";


const Paginator = ({totalCount, currentPage, pageSize, onChangePages, portionSize = 5}) => {
	let pageCount = Math.ceil(totalCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	let portionPage = Math.ceil(pageCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionNumberPage = (portionNumber - 1) * portionSize + 1
	let rightPortionNumberPage = portionNumber * portionSize

	let pageLinks = pages
		.filter(el => el >= leftPortionNumberPage && el <= rightPortionNumberPage)
		.map(el => {
			return (
				<li key={el.id} onClick={(e) => onChangePages(el)}
						className={currentPage === el ? 'active' : null}><NavLink to='#'> {el} </NavLink></li>
			)
		})

	return (
		<div className={s.pagination}>
			<ul className='pagination'>
				{portionNumber > 1 && <li className='waves-effect'>
					<NavLink to="#">
						<i onClick={() => setPortionNumber(portionNumber - 1)}
							 className="material-icons"> chevron_left </i>
					</NavLink>
				</li>}
				{pageLinks}
				{/* eslint-disable-next-line no-unused-expressions */}
				{portionPage > portionNumber && <li className='waves-effect'>
					<li onClick={() => setPortionNumber(portionNumber + 1)} className='waves-effect'><NavLink to='#'><i
						className='material-icons'> chevron_right </i></NavLink></li>
				</li>}
			</ul>
		</div>
	)
}

export default Paginator;
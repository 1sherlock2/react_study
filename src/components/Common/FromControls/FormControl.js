import React from "react";
import s from "./FormControl.module.css"

export const FormControl = ({input, meta,...props}) => {
	return (
		<div className={`${s.formControl} + ${meta.touched && meta.error ? s.error : ''} `}>
			<div>
				{props.children}
			</div>
			<div>
					{meta.touched && meta.error && <span> {meta.error} </span>}
			</div>
		</div>
	)
}
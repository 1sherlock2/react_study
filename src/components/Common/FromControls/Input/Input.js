import React from "react";
import {FormControl} from "../FormControl";

export const Input = (props) => {
	let {input, meta, ...restProps} = props
	return (
		<FormControl {...props}>
			<input {...input} {...restProps} />
		</FormControl>
	)
}
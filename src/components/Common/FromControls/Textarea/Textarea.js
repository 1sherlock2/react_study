import React from "react";
import {FormControl} from "../FormControl";

export const Textarea = (props) => {
	let {input, meta, ...restProps} = props
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps}/>
		</FormControl>
	)
}
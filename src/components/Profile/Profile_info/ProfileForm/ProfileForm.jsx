import React from "react";
import {Input} from "../../../Common/FromControls/Input/Input";
import {reduxForm} from "redux-form";
import {createField} from "../../../Common/FromControls/CreateField/CreateField";
import style from "../../../Common/FromControls/FormControl.module.css";


const ProfileForm = ({profile, handleSubmit, error, isOwnerProfile, changeImage}) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				{<button> Save changes </button>}
				{error ? <div className={style.formSummaryError}>} {error} </div> : null}
				<div>
					{isOwnerProfile &&
					<label htmlFor={'Change photo'}>
						Change Photo
					</label>}
					<input type={'file'} onChange={changeImage}/>
					<p><b> My name </b>: {createField('Your  name', 'fullName', [], Input)}</p>
					<p><b> About me </b>: {createField('Information about you', 'aboutMe', [], Input)} </p>
					<p><b> Looking for a job </b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}</p>
					<p><b> looking for a job description </b>: {createField('', 'lookingForAJobDescription', [], Input)}</p>
					<div>
				<span><b> Contacts </b>: {Object.keys(profile.contacts).map(key => {
					return <div key={key}><b>{key} :</b> {createField(key, 'contacts.' + key, [], Input)} </div>
				})}
				</span>
					</div>
				</div>
			</form>
		</div>
	)
}

const ProfileFormReduxForm = reduxForm({form: 'profileInfo'})(ProfileForm)
export default ProfileFormReduxForm
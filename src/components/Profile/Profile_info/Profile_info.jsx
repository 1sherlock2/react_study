import React, {useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";
import imagePhoto from "../../../img/avatar1.jpg"
import ProfileForm from "./ProfileForm/ProfileForm";

const Profile_info = React.memo(props => {
	if (!props.profile) {
		return <Preloader/>
	}

	let [editMode, setEditMode] = useState(false)

	let changeImage = (e) => {
		if (e.target.files.length) {
			props.changeImageThunk(e.target.files[0])
		}
	}

	let activateEditMode = () => {
		setEditMode(true)
	}

	let onSubmit = (formData) => {
		props.saveProfileInformationThunk(formData).then(() => {
			setEditMode(false)
		})
	}

	return (
		<div className='row' style={{marginTop: '2.5%', marginLeft: '5%'}}>
			<div className='col s4'>
				<img style={{borderRadius: '10%', width: '90%'}}
						 src={props.profile.photos.large !== null ? props.profile.photos.large : imagePhoto}/>
				<ProfileStatusHook status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
			</div>
			<div className='col s8'>
				{editMode ?
					<ProfileForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}
											 isOwnerProfile={props.isOwnerProfile} changeImage={changeImage}/>
					: <ProfileData profile={props.profile} isOwnerProfile={props.isOwnerProfile}
												 activateEditMode={activateEditMode}/>}
			</div>
		</div>
	)
})

const ProfileData = ({profile, isOwnerProfile, activateEditMode}) => {
	return (
		<div>
			<div>
				{isOwnerProfile && <button onClick={activateEditMode} className='btn'> Edit profile information </button>}
				<p><b> My name </b> {profile.fullName}</p>
				<p><b> About me </b> {profile.aboutMe} </p>
				<p><b> Looking for a job </b>: {profile.lookingForAJob ? 'Yes' : 'No'} </p>
				<p><b> looking for a job description </b>: {profile.lookingForAJobDescription}</p>
				<div>
			<span>
			<b> Contacts </b>:
				{Object.keys(profile.contacts).map(key => {
					return <Contacts key={key} titleContact={key} valueContact={profile.contacts[key]}/>
				})}</span>
				</div>
			</div>
		</div>
	)
}

let Contacts = ({titleContact, valueContact}) => {
	return <div><b>{titleContact}</b>: {valueContact}</div>
}


export default Profile_info;


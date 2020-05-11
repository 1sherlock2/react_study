import React from "react";
import s from "./Profile_info.module.css";
import Preloader from "../../common/Preloader/Preloader";

const Profile_info = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.profile_info}>
			<div className={s.image_profile}>
			<img src="https://yandex.ru/images/_crpd/ZVs13f636/eab49fn-K/3HGXrfuOroqVa-8sWOfM8ZAq6ZlCy6xwoceaAFZOe2XiN4SyRD2BQiiFNsIoSdjfZdLo-iQdoNYNhPbPk2sS7-llwtHz587D9FqyJVSP6PScLsDYM5r5bcXrhhAeSmsEmmA" />
			</div>
			<div className={s.description}>
				text and info about profile
			</div>
		</div>
	)
}
export default Profile_info;
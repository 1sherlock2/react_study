import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "../Profile_info/ProfileStatus/ProfileStatus";


describe('Profile status component', () => {
	test('Status from props should be in state', () => {
		const component = create(<ProfileStatus status='Alim' />)
		const instance = component.getInstance();
		expect(instance.state.status).toBe('Alim')
	})
})
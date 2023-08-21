import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { Props } from '../screenContainer/ScreenContainer';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoginStatus } from '../../redux/actions/dashboardAction';


const Homepage = ({ navigation, route }: Props) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(updateLoginStatus(true))
	}
	const { isLoggedIn, isDark } = useSelector((state: any) => state.dashboard);
	useEffect(() => {
		console.log(isLoggedIn, isDark, 'this is is logged ')
	}, [isLoggedIn, isDark])
	return (
		<View style={{ flex: 1 }}>
			<Text>Homepage</Text>
			<Text>dahslkhfdla</Text>
			<Text>Homepage</Text>
			<Text>dahslkhfdla</Text>
			<Text>Homepage</Text>
			<Text>dahslkhfdla</Text>
			<Text>Homepage</Text>
			<Text>dahslkhfdla</Text>
			<Button title='click me' onPress={handleClick} />
		</View>
	)
}

export default Homepage
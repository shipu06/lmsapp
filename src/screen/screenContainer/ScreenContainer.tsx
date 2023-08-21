import React, { PropsWithChildren } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../homepage/Homepage';
import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';
import Result from '../result/Result';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';


type ScreenContainerProps = PropsWithChildren<{}>;
type RootStackParamList = {
	Home: undefined;
	Dashboard: { userId: string };
	Login: undefined;
	Result: { sort: 'latest' | 'top' } | undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Stack = createStackNavigator<RootStackParamList>();
const ScreenContainer = ({ }: ScreenContainerProps): JSX.Element => {
	useSelector(state => console.log(state))
	// const { isLoggedIn , isDark } = useSelector((state)=>state.dashboard);
	// console.log(isLoggedIn, isDark)
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Home'}>
				<Stack.Screen name="Home" component={Homepage} />
				<Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Result" component={Result} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default ScreenContainer
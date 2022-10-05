export enum Routes {
	Register = '/register',
	Home = '/home',
}

export type StackNavigationParamList = {
	[Routes.Home]: undefined;
	[Routes.Register]: undefined;
};

export type RouterParamList = StackNavigationParamList;

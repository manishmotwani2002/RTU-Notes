import { Fragment } from 'react';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
	return (
		<Fragment className="">
			<MainNavigation />
			<main className="bg-gray-50">{props.children}</main>
		</Fragment>
	);
};

export default Layout;

import { useState } from 'preact/hooks';
import './Sidebar.scss';
import Logo from '../UI/Logo/Logo';

const Sidebar = () => {
	const [sidebarData, setSidebarData] = useState([
		{
			components: [
				{
					name: 'Dropdown',
					path: '/dropdown',
				}, {
					name: 'Button',
					path: '/button',
				}, {
					name: 'Input',
					path: '/input',
				}, {
					name: 'LimitChar',
					path: '/limit-char',
				}
			]
		}
	])

	return (
		<div className='Sidebar sticky-top'>
			<div className="sidebar_top">
				<Logo style={{ fontSize: "2.4rem" }} />
				<div className="close">
					
				</div>
			</div>
		</div>
	)
}

export default Sidebar
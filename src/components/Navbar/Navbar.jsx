import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai'
import { FaLayerGroup } from 'react-icons/fa'
import { IoIosNotificationsOutline } from 'react-icons/io';
import avatar from '@/assets/images/avatar.jpg'
import useScrolledDown from '@/hooks/useScrolledDown';
import { BiSearchAlt } from 'react-icons/bi'

const Navbar = () => {
	const pathname = usePathname();
	const scrolledDown = useScrolledDown();
	const [searchText, setSearchText] = useState('')
	// const links = [
	// 	{
	// 		name: 'Jobs',
	// 		path: '/',
	// 		icon: <AiFillHome />,
	// 		type: 'ai'
	// 	},
	// 	{
	// 		name: 'Join Socials',
	// 		path: '/upload',
	// 		icon: <AiFillHome />,
	// 		type: 'ai'
	// 	},
	// 	{
	// 		name: 'Post A Job',
	// 		path: '/upload',
	// 		icon: <AiFillHome />,
	// 		type: 'ai'
	// 	},
	// 	{
	// 		name: 'About Us',
	// 		path: '/components',
	// 		icon: <FaLayerGroup />,
	// 		type: 'fa'
	// 	},
	// ]

	const checkActive = (path) => {
		if (pathname.includes(path)) return true;
		return false;
	}

	const [scrolledThreshold, setScrolledThreshold] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", handleNavScroll)
		return () => window.removeEventListener("scroll", handleNavScroll)
	}, [])

	const handleNavScroll = () => {
		if (typeof window !== "undefined") {
			const currentScrollPos = window.pageYOffset
			if (currentScrollPos > 120) {
				setScrolledThreshold(true)
			} else {
				setScrolledThreshold(false)
			}
		}
	}

	return (
		<div className={styles.Navbar + ' container' + ` ${scrolledDown ? styles.scrolled : ''}` + ` ${scrolledThreshold ? styles.scrolled_threshold : ''}`}>
			<Link href={'/'}>
				<div className={styles.Logo}>
					<span>JH</span>
					JobHub
				</div>
			</Link>
			<div className={styles.search}>
				<input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search Job Titles or Keywords" />
				<BiSearchAlt />
			</div>
			{/* <div className={styles.links_container}>
				{
					links.map((link, index) => {
						return (
							<Link href={link.path} key={index}>
								<div className={styles.link + ' ' + (checkActive(link.path) ? styles.active : '')}>
									{link.name}
								</div>
							</Link>
						)
					})
				}
			</div> */}
			<div className={styles.utils}>
				<div className={styles.notification}>
					<IoIosNotificationsOutline />
				</div>
				{/* <div className={styles.profile}>
					<img src={avatar.src} alt="" />
				</div> */}
			</div>
		</div>
	)
}

export default Navbar
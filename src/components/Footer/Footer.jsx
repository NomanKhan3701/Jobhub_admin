import React from 'react'
import styles from './Footer.module.scss';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs'
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
    const socials = [
        {
            style: styles.whatsapp,
            link: 'https://www.linkedin.com/in/noman-khan-0450b5203/',
            icon: <BsWhatsapp />,
        },
        {
            style: styles.linkedin,
            link: 'https://www.linkedin.com/in/noman-khan-0450b5203/',
            icon: <FaLinkedinIn />
        },
        {
            style: styles.telegram,
            link: 'https://www.linkedin.com/in/noman-khan-0450b5203/',
            icon: <FaTelegramPlane />
        }
    ]

    const creators = [
        {
            name: 'Noman Khan',
            link: 'https://www.linkedin.com/in/noman-khan-0450b5203/',
        },
        {
            name: 'Varun Koranne',
            link: 'https://www.linkedin.com/in/varun-koranne/',
        }
    ]

    return (
        <div className={styles.Footer + " container"}>
            <Link href={'/'}>
                <div className={styles.Logo}>
                    <span>JH</span>
                    JobHub
                </div>
            </Link>
            <div className={styles.links_container}>
                <div className={styles.heading}>
                    Creators Of JobHub
                </div>
                <div className={styles.links}>
                    {
                        creators.map((creator, index) => {
                            return (
                                <a className={styles.link} href={creator.link} target='_blank' key={index}>
                                    {creator.name}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.socials}>
                <div className={styles.heading}>
                    Follow Our Socials
                </div>
                <div className={styles.links}>
                    {
                        socials.map((social, index) => {
                            return (
                                <a className={styles.link + " " + social.style} href={social.link} target='_blank' key={index}>
                                    {social.icon}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer
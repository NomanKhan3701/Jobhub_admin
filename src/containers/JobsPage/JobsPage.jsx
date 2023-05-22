"use client";

import React, { useState } from 'react'
import styles from './JobsPage.module.scss'
import Filter from '@/components/Filter/Filter'
import Jobs from '@/components/Jobs/Jobs'
import headerBg from '@/assets/images/bgHeader.png'
import useScrolledDown from '@/hooks/useScrolledDown'

const JobsPage = () => {
    const [searchText, setSearchText] = useState('');
    const scrolledDown = useScrolledDown();

    const search = () => {
        
    }

    return (
        <div className={styles.Jobs_page}>
            <div className={styles.jobs_container + " container"}>
                <div className={"sticky-top " + styles.filter_wrapper + ` ${scrolledDown ? styles.scrolled : ''}`} >
                    <Filter />
                </div>
                <div className={styles.jobs_wrapper}>
                    <Jobs />
                </div>
            </div>

        </div>
    )
}

export default JobsPage
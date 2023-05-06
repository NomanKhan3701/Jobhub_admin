import React from 'react'
import styles from './Jobs.module.scss';
import Image from 'next/image';
import companyLogo from '@/assets/images/companyLogo.jpg';

const Jobs = () => {

    const jobs = [
        {
            company: 'Amazon India',
            title: 'Fronted Developer',
            workplace: 'Remote',
            batches: [2020, 2021],
            opportunityType: 'Internship',
            intern: {
                low: 10000,
                high: 20000,
                type: "month"
            },
            fullTime: {
                low: 100000,
                high: 200000,
                type: "year"
            },
        },
        {
            company: 'Amazon India',
            title: 'Fronted Developer',
            workplace: 'Remote',
            batches: [2020, 2021],
            opportunityType: 'Internship',
            intern: {
                low: 10000,
                high: 20000,
                type: "month"
            },
            fullTime: {
                low: 100000,
                high: 200000,
                type: "year"
            },
        },
        {
            company: 'Amazon India',
            title: 'Fronted Developer',
            workplace: 'Remote',
            batches: [2020, 2021],
            opportunityType: 'Internship',
            intern: {
                low: 10000,
                high: 20000,
                type: "month"
            },
            fullTime: {
                low: 100000,
                high: 200000,
                type: "year"
            },
        },
        {
            company: 'Amazon India',
            title: 'Fronted Developer',
            workplace: 'Remote',
            batches: [2020, 2021],
            opportunityType: 'Internship',
            intern: {
                low: 10000,
                high: 20000,
                type: "month"
            },
            fullTime: {
                low: 100000,
                high: 200000,
                type: "year"
            },
        },
        {
            company: 'Amazon India',
            title: 'Fronted Developer',
            workplace: 'Remote',
            batches: [2020, 2021],
            opportunityType: 'Internship',
            intern: {
                low: 10000,
                high: 20000,
                type: "month"
            },
            fullTime: {
                low: 100000,
                high: 200000,
                type: "year"
            },
        },
        {
            company: 'Amazon India',
            title: 'Fronted Developer',
            workplace: 'Remote',
            batches: [2020, 2021],
            opportunityType: 'Internship',
            intern: {
                low: 10000,
                high: 20000,
                type: "month"
            },
            fullTime: {
                low: 100000,
                high: 200000,
                type: "year"
            },
        },
        {
            company: 'Amazon India',
            title: 'Fronted Developer',
            workplace: 'Remote',
            batches: [2020, 2021],
            opportunityType: 'Internship',
            intern: {
                low: 10000,
                high: 20000,
                type: "month"
            },
            fullTime: {
                low: 100000,
                high: 200000,
                type: "year"
            },
        },
        {
            company: 'Amazon India',
            title: 'Fronted Developer',
            workplace: 'Remote',
            batches: [2020, 2021],
            opportunityType: 'Internship',
            intern: {
                low: 10000,
                high: 20000,
                type: "month"
            },
            fullTime: {
                low: 100000,
                high: 200000,
                type: "year"
            },
        },
    ]

    function nFormatter(num, digits) {
        const lookup = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "K" },
            { value: 1e5, symbol: "L" },
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }

    return (
        <div className={styles.Jobs + " padding_top_nav"}>
            <div className={styles.jobs_list}>
                {
                    jobs.map((job, index) => {
                        return (
                            <div className={styles.job} key={index}>
                                <div className={styles.job_header}>
                                    <img src={companyLogo.src} alt='company-logo' />
                                    <div className={styles.job_title}>
                                        <h3>{job.title}</h3>
                                        <div className={styles.company_name}>
                                            {job.company} | {job.batches.join(', ')}
                                        </div>
                                    </div>
                                    <div className={styles.right_tags}>
                                        <div className={styles.opportunity}>{job.opportunityType}</div>
                                        <div className={styles.workplace}>{job.workplace}</div>
                                    </div>

                                </div>
                                <div className={styles.job_body}>
                                    <div className={styles.salary}>
                                        <div className={styles.salary_heading}>Internship</div>
                                        <div className={styles.salary_range}>
                                            {nFormatter(job.intern.low)} - {nFormatter(job.intern.high)}
                                        </div>
                                    </div>
                                    <div className={styles.line}></div>
                                    <div className={styles.salary}>
                                        <div className={styles.salary_heading}>Full Time </div>
                                        <div className={styles.salary_range}>
                                            {nFormatter(job.fullTime.low)} - {nFormatter(job.fullTime.high)}
                                        </div>
                                    </div>

                                    <div className={styles.apply}>
                                        <button>Apply</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Jobs
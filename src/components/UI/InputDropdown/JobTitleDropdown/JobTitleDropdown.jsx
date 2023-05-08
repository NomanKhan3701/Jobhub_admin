import React, { useEffect } from 'react'
import styles from '../InputDropdown.module.scss'
import InputDropdown from '../InputDropdown'
import { useSelector } from 'react-redux'
import Fuse from 'fuse.js'

const JobTitleDropdown = ({ value, setValue }) => {
    const [jobTitlesResult, setJobTitlesResult] = React.useState([])
    const jobTitles = useSelector(state => state.job.jobTitles)

    useEffect(() => {
        if (jobTitles.length > 0) setJobTitlesResult(jobTitles);
    }, [jobTitles])


    useEffect(() => {
        if (jobTitlesResult.length > 0 || jobTitles.length > 0) {
            const fuse = new Fuse(jobTitlesResult.length > 0 ? jobTitlesResult : jobTitles, {
                keys: ['name'],
                includeScore: true
            })
            const result = value === "" ? jobTitles : fuse.search(value).map(({ item }) => item);
            setJobTitlesResult(result)
        }
    }, [value, jobTitles])

    const Options = () => {
        return (
            <div>
                {
                    jobTitlesResult?.map((item) => {
                        return (
                            <div key={item.id} className={styles.option + ` ${value === item.name ? styles.active : ""}`} onClick={() => setValue(item.name)}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={styles.Job_title_dropdown}>
            <InputDropdown Options={Options} placeholder="Select Job Title" value={value} setValue={setValue} />
        </div>
    )
}

export default JobTitleDropdown
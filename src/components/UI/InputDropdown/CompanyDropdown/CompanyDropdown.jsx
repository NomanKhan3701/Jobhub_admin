import React, { useEffect } from 'react'
import styles from '../InputDropdown.module.scss'
import InputDropdown from '../InputDropdown'
import { useSelector } from 'react-redux'
import Fuse from 'fuse.js'

const CompanyDropdown = ({ value, setValue }) => {
    const [companiesResult, setCompaniesResult] = React.useState([])
    const companies = useSelector(state => state.job.companies)

    useEffect(() => {
        if (companies.length > 0) setCompaniesResult(companies);
    }, [companies])

    useEffect(() => {
        if (companiesResult.length > 0 || companies.length > 0) {
            const fuse = new Fuse(companiesResult.length > 0 ? companiesResult : companies, {
                keys: ['name'],
                includeScore: true
            })
            const result = value === "" ? companies : fuse.search(value).map(({ item }) => item);
            setCompaniesResult(result)
        }
    }, [value, companies])

    const Options = () => {
        return (
            <div>
                {
                    companiesResult?.map((item) => {
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

export default CompanyDropdown
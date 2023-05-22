import React, { useEffect } from 'react'
import styles from '../InputDropdown.module.scss'
import InputDropdown from '../InputDropdown'
import { useSelector } from 'react-redux'
import Fuse from 'fuse.js'
import { MdAdd } from 'react-icons/md'
import companyLogo from '@/assets/images/companyLogo.jpg'

const CompanyDropdown = ({ value, setValue, setAddCompanyShow }) => {
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
            const result = value.name === "" ? companies : fuse.search(value.name).map(({ item }) => item);
            setCompaniesResult(result)
        }
    }, [value, companies])

    const Options = () => {
        return (
            <div>
                <div className={styles.add_btn} onClick={() => setAddCompanyShow(true)}>
                    <MdAdd />
                    <span>Add new company</span>
                </div>
                {
                    companiesResult?.map((item) => {
                        return (
                            <div key={item.id} className={styles.option + ` ${value.name === item.name ? styles.active : ""}`} onClick={() => setValue(item)}>
                                <img src={item.image ? item.image.url : companyLogo.src} alt="" />
                                <span>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={styles.Job_title_dropdown}>
            <InputDropdown Options={Options} placeholder="Select Job Title" value={value.name} setValue={(value) => {
                setValue((prev) => {
                    return { ...prev, name: value }
                })
            }} />
        </div>
    )
}

export default CompanyDropdown
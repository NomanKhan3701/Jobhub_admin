import React from 'react'
import styles from './JobUpload.module.scss'
import { IoIosAddCircle } from 'react-icons/io'
import BatchesDropdown from '@/components/UI/MultiSelectDropdown/BatchesDropdown/BatchesDropdown'
import OpportunityDropdown from '@/components/UI/Dropdown/OpportunityDropdown/OpportunityDropdown'
import WorkplaceDropdown from '@/components/UI/Dropdown/WorkplaceDropdown/WorkplaceDropdown'
import JobTitleDropdown from '@/components/UI/InputDropdown/JobTitleDropdown/JobTitleDropdown'
import CompanyDropdown from '@/components/UI/InputDropdown/CompanyDropdown/CompanyDropdown'

const JobUpload = () => {
    const [batches, setBatches] = React.useState([])
    const [opportunity, setOpportunity] = React.useState("")
    const [workplace, setWorkplace] = React.useState("")
    const [jobTitle, setJobTitle] = React.useState("")
    const [company, setCompany] = React.useState("")

    const [addFullSalaryShow, setAddFullSalaryShow] = React.useState(false)
    const [addInternSalaryShow, setAddInternSalaryShow] = React.useState(false)

    

    return (
        <div className={styles.Job_upload}>
            <div className={styles.form}>
                <div className={styles.form_item}>
                    <label>Job Title</label>
                    <JobTitleDropdown value={jobTitle} setValue={setJobTitle} />
                </div>
                <div className={styles.form_item}>
                    <label>Company Name</label>
                    <CompanyDropdown value={company} setValue={setCompany} />
                </div>
                <div className={styles.form_item}>
                    <label>Company Image</label>
                    <input type="file" />
                </div>
                <div className={styles.form_item}>
                    <label>Batches Eligible</label>
                    <BatchesDropdown setSelected={setBatches} selected={batches} />
                </div>
                <div className={styles.form_item}>
                    <label>Oppurtunity Type</label>
                    <OpportunityDropdown value={opportunity} setValue={setOpportunity} />
                </div>
                <div className={styles.form_item}>
                    <label>Workplace</label>
                    <WorkplaceDropdown value={workplace} setValue={setWorkplace} />
                </div>
                {
                    addFullSalaryShow ? <></> : <div className={styles.add_btn} onClick={() => setAddFullSalaryShow(true)}>
                        <IoIosAddCircle />
                        <div>Add Full Time Salary</div>
                    </div>
                }
                {
                    addInternSalaryShow ? <></> : <div className={styles.add_btn} onClick={() => setAddFullSalaryShow(true)}>
                        <IoIosAddCircle />
                        <div>Add Intern Salary</div>
                    </div>
                }
                <button>Post the job</button>
            </div>
        </div>
    )
}

export default JobUpload
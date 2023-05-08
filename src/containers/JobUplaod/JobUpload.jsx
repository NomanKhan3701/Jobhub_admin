import React from 'react'
import styles from './JobUpload.module.scss'
import { IoAddCircleOutline } from 'react-icons/io5'
import BatchesDropdown from '@/components/UI/MultiSelectDropdown/BatchesDropdown/BatchesDropdown'
import OpportunityDropdown from '@/components/UI/Dropdown/OpportunityDropdown/OpportunityDropdown'
import WorkplaceDropdown from '@/components/UI/Dropdown/WorkplaceDropdown/WorkplaceDropdown'
import JobTitleDropdown from '@/components/UI/InputDropdown/JobTitleDropdown/JobTitleDropdown'
import CompanyDropdown from '@/components/UI/InputDropdown/CompanyDropdown/CompanyDropdown'
import CurrencyDropdown from '@/components/UI/Dropdown/CurrencyDropdown/CurrencyDropdown'
import { currencies } from '@/shared/constants'

const JobUpload = () => {
    const [batches, setBatches] = React.useState([])
    const [opportunity, setOpportunity] = React.useState("")
    const [workplace, setWorkplace] = React.useState("")
    const [jobTitle, setJobTitle] = React.useState("")
    const [company, setCompany] = React.useState("")
    const [fullTimeSalary, setFullTimeSalary] = React.useState({
        low: "",
        high: "",
        currency: currencies[0].name
    })
    const [internSalary, setInternSalary] = React.useState({
        low: "",
        high: "",
        currency: currencies[0].name
    })

    const [addFullSalaryShow, setAddFullSalaryShow] = React.useState(false)
    const [addInternSalaryShow, setAddInternSalaryShow] = React.useState(false)
    const [addCompanyImageShow, setAddCompanyImageShow] = React.useState(false)


    return (
        <div className={styles.Job_upload}>
            <div className={styles.form}>
                <div className={styles.group_item}>
                    <div className={styles.form_item}>
                        <div className={styles.label}>Job Title <span>*</span></div>
                        <JobTitleDropdown value={jobTitle} setValue={setJobTitle} />
                    </div>
                    <div className={styles.form_item}>
                        <div className={styles.label}>Company Name <span>*</span></div>
                        <CompanyDropdown value={company} setValue={setCompany} />
                    </div>
                </div>
                <div className={styles.form_item_full}>
                    <div className={styles.label}>Company Image (Only add image if company not available in the dropdown)</div>
                    <div className={styles.info}>Please upload an image with square dimension (e.g. 512px X 512px)</div>
                    <input type="file" />
                </div>

                <div className={styles.group_item}>
                    <div className={styles.form_item}>
                        <div className={styles.label}>Batches Eligible</div>
                        <BatchesDropdown setSelected={setBatches} selected={batches} />
                    </div>
                    <div className={styles.form_item}>
                        <div className={styles.label}>Oppurtunity Type <span>*</span></div>
                        <OpportunityDropdown value={opportunity} setValue={setOpportunity} />
                    </div>
                    <div className={styles.form_item}>
                        <div className={styles.label}>Workplace</div>
                        <WorkplaceDropdown value={workplace} setValue={setWorkplace} />
                    </div>
                </div>

                {
                    addFullSalaryShow ? <div>
                        <div className={styles.title}>
                            <div className={styles.txt}>
                                Full time salary details
                            </div>
                            <div className={styles.close_btn} onClick={() => setAddFullSalaryShow(false)}>
                                Cancel
                            </div>
                        </div>
                        <div className={styles.group_item}>
                            <div className={styles.form_item}>
                                <div className={styles.label}>Min</div>
                                <input className={styles.salary_input} placeholder='Enter the lower range' type="number" value={fullTimeSalary.low} onChange={(e) => setFullTimeSalary({ ...fullTimeSalary, low: e.target.value })} />
                            </div>
                            <div className={styles.form_item}>
                                <div className={styles.label}>Max</div>
                                <input type="number" placeholder='Enter the higher range' className={styles.salary_input} value={fullTimeSalary.high} onChange={(e) => setFullTimeSalary({ ...fullTimeSalary, high: e.target.value })} />
                            </div>
                            <div className={styles.form_item}>
                                <div className={styles.label}>Currency</div>
                                <CurrencyDropdown value={fullTimeSalary.currency} setValue={(value) => setFullTimeSalary({ ...fullTimeSalary, currency: value })} />
                            </div>
                        </div>
                    </div> : <div className={styles.add_btn} onClick={() => setAddFullSalaryShow(true)}>
                        <IoAddCircleOutline />
                        <div className={styles.txt}>Add Full Time Salary</div>
                    </div>
                }
                {
                    addInternSalaryShow ? <div>
                        <div className={styles.title}>
                            <div className={styles.txt}>
                                Intern salary details
                            </div>
                            <div className={styles.close_btn} onClick={() => setAddInternSalaryShow(false)}>
                                Cancel
                            </div>
                        </div>
                        <div className={styles.group_item}>
                            <div className={styles.form_item}>
                                <div className={styles.label}>Min</div>
                                <input className={styles.salary_input} placeholder='Enter the lower range' type="number" value={internSalary.low} onChange={(e) => setInternSalary({ ...internSalary, low: e.target.value })} />
                            </div>
                            <div className={styles.form_item}>
                                <div className={styles.label}>Max</div>
                                <input type="number" placeholder='Enter the higher range' className={styles.salary_input} value={internSalary.high}
                                    onChange={(e) => setInternSalary({ ...internSalary, high: e.target.value })} />
                            </div>
                            <div className={styles.form_item}>
                                <div className={styles.label}>Currency</div>
                                <CurrencyDropdown value={internSalary.currency} setValue={(value) => setInternSalary({ ...internSalary, currency: value })} />
                            </div>
                        </div>
                    </div> : <div className={styles.add_btn} onClick={() => setAddInternSalaryShow(true)}>
                        <IoAddCircleOutline />
                        <div className={styles.txt}>Add Intern Salary</div>
                    </div>
                }
                <button className={styles.submit_btn}>Post the job</button>
            </div>
        </div>
    )
}

export default JobUpload
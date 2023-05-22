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
import Modal from '@/components/UI/Modal/Modal'
import UploadImage from '@/components/UploadImage/UploadImage'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '@/store/actions'
import SalaryTypeDropdown from '@/components/UI/Dropdown/SalaryTypeDropdown/SalaryTypeDropdown'

const JobUpload = () => {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.job.companies);
    const [batches, setBatches] = React.useState([])
    const [opportunity, setOpportunity] = React.useState("")
    const [workplace, setWorkplace] = React.useState("")
    const [jobTitle, setJobTitle] = React.useState("")
    const [company, setCompany] = React.useState({
        name: "",
        _id: "",
        image: null
    })
    const [fullTimeSalary, setFullTimeSalary] = React.useState({
        low: "",
        high: "",
        currency: currencies[0].name,
        type: "yearly"
    })
    const [internSalary, setInternSalary] = React.useState({
        low: "",
        high: "",
        currency: currencies[0].name,
        type: "monthly"
    })

    const [addFullSalaryShow, setAddFullSalaryShow] = React.useState(false)
    const [addInternSalaryShow, setAddInternSalaryShow] = React.useState(false);

    const [addNewCompanyShow, setAddNewCompanyShow] = React.useState(false);
    const [newCompanyName, setNewCompanyName] = React.useState("");
    const [companyImgPrev, setCompanyImgPrev] = React.useState(null);
    const [companyImgFiles, setCompanyImgFiles] = React.useState([]);
    const [applyLink, setApplyLink] = React.useState("");

    const addOrganization = async () => {
        try {
            if (newCompanyName === "") {
                toast.warn("Please enter the company name!");
                return;
            }
            const formData = new FormData();
            formData.append("organizationName", newCompanyName);
            formData.append("file", companyImgFiles[0]);
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/organization/`, formData);
            dispatch(actions.setCompanies([...companies, res.data]));
            setNewCompanyName("");
            setCompanyImgPrev(null);
            setAddNewCompanyShow(false);
            toast.success("Organization added successfully!");
        } catch (error) {
            toast.error("Something went wrong while adding the organization!");
            console.log(error);
        }
    }

    const postJob = async () => {
        try {
            if (jobTitle === "" || company.name === "" || opportunity === "" || applyLink === "") {
                toast.warn("Please fill all the fields!");
                return;
            } else {
                let data = {};
                if (internSalary.low === "" && internSalary.high === "") {
                    data = {
                        organization: company._id,
                        title: jobTitle,
                        workplace: workplace,
                        batches: batches,
                        opportunityType: opportunity,
                        stipend: null,
                        PPO: {
                            type: fullTimeSalary.type,
                            low: fullTimeSalary.low,
                            high: fullTimeSalary.high,
                            currency: fullTimeSalary.currency
                        },
                        url: applyLink
                    }
                } else if (fullTimeSalary.low === "" && fullTimeSalary.high === "") {
                    data = {
                        organization: company._id,
                        title: jobTitle,
                        workplace: workplace,
                        batches: batches,
                        opportunityType: opportunity,
                        stipend: {
                            type: internSalary.type,
                            low: internSalary.low,
                            high: internSalary.high,
                            currency: internSalary.currency
                        },
                        PPO: null,
                        url: applyLink
                    }
                } else {
                    data = {
                        organization: company._id,
                        title: jobTitle,
                        workplace: workplace,
                        batches: batches,
                        opportunityType: opportunity,
                        stipend: {
                            type: internSalary.type,
                            low: internSalary.low,
                            high: internSalary.high,
                            currency: internSalary.currency
                        },
                        PPO: {
                            type: fullTimeSalary.type,
                            low: fullTimeSalary.low,
                            high: fullTimeSalary.high,
                            currency: fullTimeSalary.currency
                        },
                        url: applyLink
                    }
                }

                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/offer/`, data);
                console.log(res);
                toast.success("Job posted successfully!");
            }
        } catch (error) {
            toast.error("Something went wrong while posting the job!");
            console.log(error);
        }
    }

    return (
        <div className={styles.Job_upload}>
            <Modal show={addNewCompanyShow} hideBackdrop={() => setAddNewCompanyShow(false)} >
                <div className={styles.new_company_modal}>
                    <div className={styles.form_item_full}>
                        <div className={styles.label}>New Company Name <span>*</span></div>
                        <input type="text" placeholder='Company (e.g Google)' value={newCompanyName} onChange={(e) => { setNewCompanyName(e.target.value) }} />
                    </div>
                    <div className={styles.form_item_full}>
                        <div className={styles.label}>Company Image</div>
                        <div className={styles.info}>Please upload an image with square dimension (e.g. 512px X 512px)</div>
                        <UploadImage prevImg={companyImgPrev} setPrevImg={setCompanyImgPrev} files={companyImgFiles} setFiles={setCompanyImgFiles} />
                    </div>
                    <button className={styles.add_btn} onClick={addOrganization}>Add Company</button>
                </div>

            </Modal>
            <div className={styles.form}>
                <div className={styles.group_item}>
                    <div className={styles.form_item}>
                        <div className={styles.label}>Job Title <span>*</span></div>
                        <JobTitleDropdown value={jobTitle} setValue={setJobTitle} />
                    </div>
                    <div className={styles.form_item}>
                        <div className={styles.label}>Company Name <span>*</span></div>
                        <CompanyDropdown value={company} setValue={setCompany} setAddNewCompanyShow={setAddNewCompanyShow} setAddCompanyShow={setAddNewCompanyShow} />
                    </div>
                    <div className={styles.form_item}>
                        <div className={styles.label}>Apply Link <span>*</span></div>
                        <input type="text" className={styles.salary_input} placeholder='Apply link (e.g. https://apply.com)' value={applyLink} onChange={(e) => setApplyLink(e.target.value)} />
                    </div>
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
                    addInternSalaryShow && opportunity !== "Full Time" ? <div>
                        <div className={styles.title}>
                            <div className={styles.txt}>
                                Intern salary details
                            </div>
                            <div className={styles.close_btn} onClick={() => {
                                setInternSalary({
                                    low: "",
                                    high: "",
                                    currency: "",
                                    type: "monthly"
                                })
                                setAddInternSalaryShow(false)
                            }}>
                                Cancel
                            </div>
                        </div>
                        <div className={styles.group_item}>
                            <div className={styles.form_item_sm}>
                                <div className={styles.label}>Min</div>
                                <input className={styles.salary_input} placeholder='Enter the lower range' type="number" value={internSalary.low} onChange={(e) => setInternSalary({ ...internSalary, low: e.target.value })} />
                            </div>
                            <div className={styles.form_item_sm}>
                                <div className={styles.label}>Max</div>
                                <input type="number" placeholder='Enter the higher range' className={styles.salary_input} value={internSalary.high}
                                    onChange={(e) => setInternSalary({ ...internSalary, high: e.target.value })} />
                            </div>
                            <div className={styles.form_item_sm}>
                                <div className={styles.label}>Currency</div>
                                <CurrencyDropdown value={internSalary.currency} setValue={(value) => setInternSalary({ ...internSalary, currency: value })} />
                            </div>
                            <div className={styles.form_item_sm}>
                                <div className={styles.label}>Salary Type</div>
                                <SalaryTypeDropdown value={internSalary.type} setValue={(value) => setInternSalary({ ...internSalary, type: value })} />
                            </div>
                        </div>
                    </div> : opportunity !== "Full Time" ? <div className={styles.add_btn} onClick={() => setAddInternSalaryShow(true)}>
                        <IoAddCircleOutline />
                        <div className={styles.txt}>Add Intern Salary</div>
                    </div> : ""
                }
                {
                    addFullSalaryShow ? <div>
                        <div className={styles.title}>
                            <div className={styles.txt}>
                                Full time salary details
                            </div>
                            <div className={styles.close_btn} onClick={() => {
                                setFullTimeSalary({
                                    low: "",
                                    high: "",
                                    currency: currencies[0].name,
                                    type: "yearly"
                                })
                                setAddFullSalaryShow(false)
                            }}>
                                Cancel
                            </div>
                        </div>
                        <div className={styles.group_item}>
                            <div className={styles.form_item_sm}>
                                <div className={styles.label}>Min</div>
                                <input className={styles.salary_input} placeholder='Enter the lower range' type="number" value={fullTimeSalary.low} onChange={(e) => setFullTimeSalary({ ...fullTimeSalary, low: e.target.value })} />
                            </div>
                            <div className={styles.form_item_sm}>
                                <div className={styles.label}>Max</div>
                                <input type="number" placeholder='Enter the higher range' className={styles.salary_input} value={fullTimeSalary.high} onChange={(e) => setFullTimeSalary({ ...fullTimeSalary, high: e.target.value })} />
                            </div>
                            <div className={styles.form_item_sm}>
                                <div className={styles.label}>Currency</div>
                                <CurrencyDropdown value={fullTimeSalary.currency} setValue={(value) => setFullTimeSalary({ ...fullTimeSalary, currency: value })} />
                            </div>
                            <div className={styles.form_item_sm}>
                                <div className={styles.label}>Salary Type</div>
                                <SalaryTypeDropdown value={fullTimeSalary.type} setValue={(value) => setFullTimeSalary({ ...fullTimeSalary, type: value })} />
                            </div>
                        </div>
                    </div> : <div className={styles.add_btn} onClick={() => setAddFullSalaryShow(true)}>
                        <IoAddCircleOutline />
                        <div className={styles.txt}>Add Full Time Salary</div>
                    </div>
                }

                <button className={styles.submit_btn} onClick={postJob}>Post the job</button>
            </div>
        </div>
    )
}

export default JobUpload
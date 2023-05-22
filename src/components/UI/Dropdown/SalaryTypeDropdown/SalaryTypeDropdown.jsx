import React from 'react'
import styles from '../Dropdown.module.scss'
import Dropdown from '../Dropdown'

const SalaryTypeDropdown = ({ value, setValue }) => {
    const Options = () => {
        return (
            <div>
                {
                    [{ name: "monthly" }, { name: "yearly" }].map((item) => {
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
        <div className={styles.Batch_dropdown}>
            <Dropdown Options={Options} placeholder="Select Salary Type" value={value} />
        </div>
    )
}

export default SalaryTypeDropdown
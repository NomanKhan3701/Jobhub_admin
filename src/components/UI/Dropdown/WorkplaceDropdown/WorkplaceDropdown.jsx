import React from 'react'
import styles from '../Dropdown.module.scss'
import Dropdown from '../Dropdown'
import { workplaces } from '@/shared/constants'

const WorkplaceDropdown = ({ value, setValue }) => {

    const Options = () => {
        return (
            <div>
                <div className={styles.option + ` ${value === null || value === "" ? styles.active : ""}`} onClick={() => setValue(null)}>
                    All
                </div>
                {
                    workplaces?.map((item) => {
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
            <Dropdown Options={Options} placeholder="Select Workplace" value={value} />
        </div>
    )
}

export default WorkplaceDropdown
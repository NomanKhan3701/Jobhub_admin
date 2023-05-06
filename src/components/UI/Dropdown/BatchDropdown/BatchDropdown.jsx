import React from 'react'
import styles from '../Dropdown.module.scss'
import Dropdown from '../Dropdown'
import { batches } from '@/shared/constants'

const BatchDropdown = ({ value, setValue }) => {

    const Options = () => {
        return (
            <div>
                <div className={styles.option + ` ${value === null || value === "" ? styles.active : ""}`} onClick={() => setValue(null)}>
                    All
                </div>
                {
                    batches?.map((item) => {
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
            <Dropdown Options={Options} placeholder="Select Batch" value={value} />
        </div>
    )
}

export default BatchDropdown
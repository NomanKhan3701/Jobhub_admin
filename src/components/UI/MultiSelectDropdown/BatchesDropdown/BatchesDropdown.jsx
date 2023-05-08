import React, { useEffect } from 'react'
import styles from './BatchesDropdown.module.scss'
import MultiSelectDropdown from '../MultiSelectDropdown'
import { batches } from '@/shared/constants'

const BatchesDropdown = ({ selected, setSelected }) => {
    const [value, setValue] = React.useState("");

    const Options = () => {
        const selectBatch = (batch) => {
            if (!selected.includes(batch)) {
                setSelected((prev) => [...prev, batch])
            } 
        }

        return (
            <div>
                {
                    batches?.map((item) => {
                        return (
                            <div key={item.id} className={styles.option + ` ${value === item.name ? styles.active : ""}`} onClick={() => selectBatch(item.name)}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={styles.Batches_dropdown}>
            <MultiSelectDropdown Options={Options} placeholder="Select Batch" value={value} setValue={setValue} selected={selected} setSelected={setSelected} />
        </div>
    )
}

export default BatchesDropdown
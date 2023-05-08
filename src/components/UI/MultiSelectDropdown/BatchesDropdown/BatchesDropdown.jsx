import React, { useEffect } from 'react'
import styles from '../MultiSelectDropdown.module.scss'
import MultiSelectDropdown from '../MultiSelectDropdown'
import { batches } from '@/shared/constants'

const BatchesDropdown = ({ selected, setSelected }) => {
    const [value, setValue] = React.useState("")

    const Options = () => {
        const selectBatch = (batch) => {
            if (!selected.includes(batch)) {
                setSelected((prev) => [...prev, batch])
            }
        }

        return (
            <div>
                {
                    batches?.filter((item) => item.name.toString().includes(value)).map((item) => {
                        return (
                            <div key={item.id} className={styles.option} onClick={() => selectBatch(item.name)}>
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
            <MultiSelectDropdown Options={Options} placeholder="Select Batch" selected={selected} setSelected={setSelected} value={value} setValue={setValue} />
        </div>
    )
}

export default BatchesDropdown
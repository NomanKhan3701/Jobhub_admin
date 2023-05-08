import React from 'react'
import styles from '../Dropdown.module.scss'
import Dropdown from '../Dropdown'
import { currencies } from '@/shared/constants'

const CurrencyDropdown = ({ value, setValue }) => {

    const Options = () => {
        return (
            <div>
                {
                    currencies?.map((item) => {
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
        <div className={styles.Currency_dropdown}>
            <Dropdown Options={Options} placeholder="Select Currency" value={value} />
        </div>
    )
}

export default CurrencyDropdown
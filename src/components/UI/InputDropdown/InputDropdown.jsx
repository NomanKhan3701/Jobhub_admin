import React from 'react'
import styles from './InputDropdown.module.scss'
import useClickOutside from '@/hooks/useClickedOutside'

const InputDropdown = ({ Options, placeholder, value }) => {
    const [show, setShow] = React.useState(false)
    const dropdownRef = React.useRef(null)
    const outside = useClickOutside(dropdownRef, () => setShow(false))

    return (
        <div className={styles.Input_dropdown}>
            <div className={styles.dropdown_select} onClick={() => setShow((state) => !state)} ref={dropdownRef}>
                <div>{value || placeholder}</div>
            </div>
            <div className={styles.options + ` ${show ? styles.show : ""}` + " hide-scrollbar"} onClick={() => setShow(false)}>
                <Options />
            </div>
        </div>
    )
}

export default InputDropdown
import React, { useEffect } from 'react'
import styles from './InputDropdown.module.scss'
import useClickOutside from '@/hooks/useClickedOutside'
import { BiSearchAlt } from 'react-icons/bi'

const InputDropdown = ({ Options, placeholder, value, setValue }) => {
    const [show, setShow] = React.useState(false)
    const dropdownRef = React.useRef(null)
    const outside = useClickOutside(dropdownRef, () => setShow(false))

    useEffect(() => {
        if (value !== "") setShow(true)
    }, [value])

    return (
        <div className={styles.Input_dropdown}>
            <div className={styles.dropdown_select} onClick={() => setShow((state) => !state)} ref={dropdownRef}>
                <div className={styles.input}>
                    <input type="text" placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
                    <BiSearchAlt />
                </div>
            </div>
            <div className={styles.options + ` ${show ? styles.show : ""}` + " hide_scrollbar"} onClick={() => setShow(false)}>
                <Options />
            </div>
        </div>
    )
}

export default InputDropdown
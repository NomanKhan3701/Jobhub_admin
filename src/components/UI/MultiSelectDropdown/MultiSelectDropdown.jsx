import React from 'react'
import styles from './MultiSelectDropdown.module.scss'
import useClickOutside from '@/hooks/useClickedOutside'
import { IoIosRemove } from 'react-icons/io'

const MultiSelectDropdown = ({ Options, placeholder, value = "", setValue, selected = [], setSelected }) => {
    const [show, setShow] = React.useState(false)
    const dropdownRef = React.useRef(null)
    const outside = useClickOutside(dropdownRef, () => setShow(false))

    const removeItem = (itemToRemove) => {
        setSelected((state) => state.filter((item) => item !== itemToRemove))
    }

    return (
        <div className={styles.Multi_select_dropdown}>
            <div className={styles.dropdown_select} onClick={() => setShow((state) => !state)} ref={dropdownRef}>
                {
                    selected.length > 0 && (
                        <div className={styles.selected}>
                            {
                                selected.map((item, index) => (
                                    <div key={index} className={styles.selected_item}>
                                        {item}
                                        <IoIosRemove className={styles.remove} onClick={() => removeItem(item)} />
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
                <input type="text" placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className={styles.options + ` ${show ? styles.show : ""}` + " hide-scrollbar"}>
                <Options />
            </div>
        </div>
    )
}

export default MultiSelectDropdown
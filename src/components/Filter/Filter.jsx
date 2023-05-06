import React, { useEffect, useState } from 'react'
import styles from './Filter.module.scss';
import BatchDropdown from '../UI/Dropdown/BatchDropdown/BatchDropdown';
import OpportunityDropdown from '../UI/Dropdown/OpportunityDropdown/OpportunityDropdown';
import WorkplaceDropdown from '../UI/Dropdown/WorkplaceDropdown/WorkplaceDropdown';

const Filter = () => {
    const [batch, setBatch] = React.useState(null);
    const [opportunityType, setOpportunityType] = React.useState(null);
    const [workplace, setWorkplace] = React.useState(null);

    return (
        <div className={styles.Filter}>
            <div className={styles.title}>
                <h3>Filter</h3>
                <div className={styles.util}>
                    123 Results
                </div>
            </div>
            <div className={styles.filter_item}>
                <div className={styles.heading}>Batch</div>
                <BatchDropdown value={batch} setValue={setBatch} />
            </div>
            <div className={styles.filter_item}>
                <div className={styles.heading}>Oppotunity Type</div>
                <OpportunityDropdown value={opportunityType} setValue={setOpportunityType} />
            </div>
            <div className={styles.filter_item}>
                <div className={styles.heading}>Workplace</div>
                <WorkplaceDropdown value={workplace} setValue={setWorkplace} />
            </div>
            <div className={styles.filter}>
                <button>Apply Filters</button>
            </div>
        </div>

    )
}

export default Filter
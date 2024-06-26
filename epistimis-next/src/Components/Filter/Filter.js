import React, { useState, useRef, useEffect } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import "./Filter.css";

const Filter = ({ filterOption, handleSetFilterOption, filterOpen, setFilterOpen }) => {
    const [showConsumerRightsOptions, setShowConsumerRightsOptions] = useState(false);
    const [showBusinessObligationsOptions, setShowBusinessObligationsOptions] = useState(false);
    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        if (filterOption === option) {
            console.log(`${option} unselected`);
            handleSetFilterOption('');
        } else {
            console.log(`${option} selected`);
            handleSetFilterOption(option);
        }
        // setFilterOpen(false);
    };

    useEffect(() => {
        setShowBusinessObligationsOptions(false);
        setShowConsumerRightsOptions(false);
    }, [filterOpen]);

    const toggleConsumerRightsOptions = () => {
        setShowConsumerRightsOptions(prev => !prev);
    };

    const toggleBusinessObligationsOptions = () => {
        setShowBusinessObligationsOptions(prev => !prev);
    };

    return (
        <ClickAwayListener onClickAway={() => setFilterOpen(false)}>
            <div className='menu-container filter-component' ref={dropdownRef}>
                <button className='trigger' onClick={() => setFilterOpen(!filterOpen)}>
                    <span className='filter-text'>Filter</span>
                    <FilterListIcon className="filter-icon"/>
                </button>
                <div className={`dropdown-menu ${filterOpen ? 'active' : 'inactive'}`}>
                    <ul>
                        <li className="dropdownItem filterCategory" onClick={toggleConsumerRightsOptions}>
                            Consumer Rights
                        </li>
                        {showConsumerRightsOptions && (
                            <>
                                <DropdownItem text="Access" isSelected={filterOption === "Access"} onClick={() => handleOptionClick("Access")} />
                                <DropdownItem text="Correct" isSelected={filterOption === "Correct"} onClick={() => handleOptionClick("Correct")} />
                                <DropdownItem text="Delete" isSelected={filterOption === "Delete"} onClick={() => handleOptionClick("Delete")} />
                                <DropdownItem text="Opt-Out(Processing)" isSelected={filterOption === "Opt-Out(Processing)"} onClick={() => handleOptionClick("Opt-Out(Processing)")} />
                                <DropdownItem text="Portability" isSelected={filterOption === "Portability"} onClick={() => handleOptionClick("Portability")} />
                                <DropdownItem text="Opt-Out(Sales)" isSelected={filterOption === "Opt-Out(Sales)"} onClick={() => handleOptionClick("Opt-Out(Sales)")} />
                                <DropdownItem text="Opt-In(Processing)" isSelected={filterOption === "Opt-In(Processing)"} onClick={() => handleOptionClick("Opt-In(Processing)")} />
                                <DropdownItem text="Anti-Automation" isSelected={filterOption === "Anti-Automation"} onClick={() => handleOptionClick("Anti-Automation")} />
                                <DropdownItem text="Private Action" isSelected={filterOption === "Private Action"} onClick={() => handleOptionClick("Private Action")} />
                            </>
                        )}
                        <li className="dropdownItem filterCategory" onClick={toggleBusinessObligationsOptions}>
                            Business Obligations
                        </li>
                        {showBusinessObligationsOptions && (
                            <>
                                <DropdownItem text="Opt-In(Default)" isSelected={filterOption === "Opt-In(Default)"} onClick={() => handleOptionClick("Opt-In(Default)")} />
                                <DropdownItem text="Notice/Transparency" isSelected={filterOption === "Notice/Transparency"} onClick={() => handleOptionClick("Notice/Transparency")} />
                                <DropdownItem text="Risk Assessments" isSelected={filterOption === "Risk Assessments"} onClick={() => handleOptionClick("Risk Assessments")} />
                                <DropdownItem text="No Discrimination" isSelected={filterOption === "No Discrimination"} onClick={() => handleOptionClick("No Discrimination")} />
                                <DropdownItem text="Processing Limits" isSelected={filterOption === "Processing Limits"} onClick={() => handleOptionClick("Processing Limits")} />
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </ClickAwayListener>
    );
};

function DropdownItem({ text, onClick, isSelected }) {
    return (
        <li
            className={`dropdownItem ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {text}
        </li>
    );
}

export default Filter;

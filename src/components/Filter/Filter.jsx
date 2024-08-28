import { useRef } from 'react';

import FilterModal from './FilterModal.jsx';
import './filter.scss'
import XIcon from "../icons/XIcon.jsx";
import PlusIcon from "../icons/PlusIcon.jsx";

const Filter = () => {

    const filterModal = useRef(null);

    const openFilterModal = () => {
        if (filterModal.current) {
            filterModal.current.showModal();
        }
    }

    const closeFilterModal = () => {
        if (filterModal.current) {
            filterModal.current.close();
        }
    }

    return (
        <div className="shop-filter">
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <p className='result-count'>Showing 48 of 48</p>
                    <div className='filter-bar'>
                        <div className='flex gap-3 flex-wrap align-items-center'>
                            <button onClick={openFilterModal} className='filter-button'>
                                <p>Filters</p>
                            </button>
                            <div className="vertical-divider"></div>
                            <div className='flex gap-1 flex-wrap'>
                                <div className="filter-tag">
                                    <p>Split</p>
                                    <XIcon/>
                                </div>
                                <div className="filter-tag">
                                    <p>White</p>
                                    <XIcon/>
                                </div>
                                <div className="filter-tag">
                                    <p>Samsung</p>
                                    <XIcon/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='sort-button'>
                                <p>Sort By</p>
                                <PlusIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="horizontal-divider"></div>
            </div>
            <dialog ref={filterModal} id="filter-modal" className="filter-modal">
                <FilterModal onClose={closeFilterModal} />
            </dialog>

        </div>
    )
}

export default Filter

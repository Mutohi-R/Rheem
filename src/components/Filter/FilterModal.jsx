import PropTypes from 'prop-types'

import XIcon from '../icons/XIcon';
import Button from '../ui/Button/Button';
import './filter.scss'

const FilterModal = ({ filters, setFilters, resetFilters, onClose }) => {

    const handleFilterChange = (filterType, filterValue) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: prevFilters[filterType].includes(filterValue)
                ? prevFilters[filterType].filter((item) => item !== filterValue)
                : [...prevFilters[filterType], filterValue],
        }))
    }

    return (
        <div className="filter-modal-container">
            <button onClick={onClose}>
                <XIcon />
            </button>
            <div className="grid gap-4">
                <div className="filter-modal-group">
                    <div className="grid gap-1">
                        <h6>Category</h6>
                        <div className="horizontal-divider"></div>
                    </div>
                    <div className="filter-modal-tags">
                        <div onClick={() => handleFilterChange('category', 'Split')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Split</p>
                        </div>
                        <div onClick={() => handleFilterChange('category', 'Window')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Window</p>
                        </div>
                        <div onClick={() => handleFilterChange('category', 'Cassette')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Cassette</p>
                        </div>
                    </div>
                </div>
                <div className="filter-modal-group">
                    <div className="grid gap-1">
                        <h6>Tonnage</h6>
                        <div className="horizontal-divider"></div>
                    </div>
                    <div className="filter-modal-tags">
                        <div onClick={() => handleFilterChange('tonnage', '1 Ton')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>1 Ton</p>
                        </div>
                        <div onClick={() => handleFilterChange('tonnage', '1.5 Tons')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>1.5 Ton</p>
                        </div>
                        <div onClick={() => handleFilterChange('tonnage', '2 Tons')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>2 Ton</p>
                        </div>
                        <div onClick={() => handleFilterChange('tonnage', '2.5 Tons')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>2.5 Ton</p>
                        </div>
                        <div onClick={() => handleFilterChange('tonnage', '5 Tons')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>5 Ton</p>
                        </div>
                    </div>
                </div>
                <div className="filter-modal-group">
                    <div className="grid gap-1">
                        <h6>Brand</h6>
                        <div className="horizontal-divider"></div>
                    </div>
                    <div className="filter-modal-tags">
                        <div onClick={() => handleFilterChange('brand', 'LG')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>LG</p>
                        </div>
                        <div onClick={() => handleFilterChange('brand', 'Samsung')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Samsung</p>
                        </div>
                        <div onClick={() => handleFilterChange('brand', 'Carrier')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Carrier</p>
                        </div>
                        <div onClick={() => handleFilterChange('brand', 'Lennox')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Lennox</p>
                        </div>
                        <div onClick={() => handleFilterChange('brand', 'Daikin')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Daikin</p>
                        </div>
                        <div onClick={() => handleFilterChange('brand', 'Thermocool')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Thermocool</p>
                        </div>
                        <div onClick={() => handleFilterChange('brand', 'Goodman')} className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Goodman</p>
                        </div>
                    </div>
                </div>
                <div className="filter-modal-group">
                    <div className="grid gap-1">
                        <h6>Color</h6>
                        <div className="horizontal-divider"></div>
                    </div>
                    <div className="filter-modal-tags">
                        <div onClick={() => handleFilterChange('color', 'White')} className="filter-modal-tag">
                            <div className="circle white"></div>
                            <p>White</p>
                        </div>
                        <div onClick={() => handleFilterChange('color', 'Black')} className="filter-modal-tag">
                            <div className="circle black"></div>
                            <p>Black</p>
                        </div>
                        <div onClick={() => handleFilterChange('color', 'Grey')} className="filter-modal-tag">
                            <div className="circle grey"></div>
                            <p>Grey</p>
                        </div>
                    </div>
                </div>
                <div className="filter-modal-group">
                    <div className="grid gap-1">
                        <h6>Price</h6>
                        <div className="horizontal-divider"></div>
                    </div>
                    <div className="">
                        {/* price slider goes here */}
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-3'>
                <Button onClick={onClose} type={"primary"} icon={false} label={"Apply Filters"} />
                <Button onClick={resetFilters} type={"outlined"} icon={false} label={"Reset Filters"} />
            </div>
        </div>
    );
};

FilterModal.propTypes = {
    filters: PropTypes.object.isRequired,
    setFilters: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default FilterModal;
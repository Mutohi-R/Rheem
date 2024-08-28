import XIcon from '../icons/XIcon';
import Button from '../ui/Button/Button';
import './filter.scss'

const FilterModal = ({ onClose }) => {
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
                        <div className="filter-modal-tag selected">
                            <div className="circle"></div>
                            <p>Split</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Window</p>
                        </div>
                        <div className="filter-modal-tag">
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
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>1 Ton</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>1.5 Ton</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>2 Ton</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>2.5 Ton</p>
                        </div>
                        <div className="filter-modal-tag">
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
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>LG</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Samsung</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Carrier</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Lennox</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Daikin</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle"></div>
                            <p>Thermocool</p>
                        </div>
                        <div className="filter-modal-tag">
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
                        <div className="filter-modal-tag">
                            <div className="circle white"></div>
                            <p>White</p>
                        </div>
                        <div className="filter-modal-tag">
                            <div className="circle black"></div>
                            <p>Black</p>
                        </div>
                        <div className="filter-modal-tag">
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
                <Button type={"primary"} icon={false} label={"Apply Filters"} />
                <Button type={"outlined"} icon={false} label={"Reset Filters"} />
            </div>
        </div>
    );
};

export default FilterModal;
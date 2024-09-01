import { useRef } from "react";
import PropTypes from "prop-types";

import FilterModal from "./FilterModal.jsx";
import "./filter.scss";
import XIcon from "../icons/XIcon.jsx";
import PlusIcon from "../icons/PlusIcon.jsx";

// Filter component to handle the filtering logic and UI
const Filter = ({ filters, setFilters, resetFilters }) => {
    // useRef to control the modal element for filters
    const filterModal = useRef(null);

    // Function to open the filter modal
    const openFilterModal = () => {
        if (filterModal.current) {
            filterModal.current.showModal();
        }
    };

    // Function to close the filter modal
    const closeFilterModal = () => {
        if (filterModal.current) {
            filterModal.current.close();
        }
    };

    // Function to handle the removal of a specific filter tag
    const handleRemoveFilter = (filterType, value) => {
        // Update the filters state by removing the selected filter
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: prevFilters[filterType].filter(
                (item) => item !== value
            ),
        }));
    };

    return (
        <div className="shop-filter">
            <div className="grid gap-4">
                <div className="grid gap-2">
                    {/* Display the count of products shown */}
                    <p className="result-count">Showing 48 of 48</p>
                    <div className="filter-bar">
                        <div className="flex gap-3 flex-wrap align-items-center">
                            {/* Button to open the filter modal */}
                            <button
                                onClick={openFilterModal}
                                className="filter-button"
                            >
                                <p>Filters</p>
                            </button>
                            <div className="vertical-divider"></div>
                            <div className="flex gap-1 flex-wrap">
                                {/* Render filter tags for selected categories */}
                                {filters.category.map((category, index) => (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            handleRemoveFilter(
                                                "category",
                                                category
                                            )
                                        }
                                        className="filter-tag"
                                    >
                                        <p>{category}</p>
                                        <XIcon />
                                    </div>
                                ))}

                                {/* Render filter tags for selected brands */}
                                {filters.brand.map((brand, index) => (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            handleRemoveFilter("brand", brand)
                                        }
                                        className="filter-tag"
                                    >
                                        <p>{brand}</p>
                                        <XIcon />
                                    </div>
                                ))}

                                {/* Render filter tags for selected tonnage */}
                                {filters.tonnage.map((tonnage, index) => (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            handleRemoveFilter(
                                                "tonnage",
                                                tonnage
                                            )
                                        }
                                        className="filter-tag"
                                    >
                                        <p>{tonnage}</p>
                                        <XIcon />
                                    </div>
                                ))}

                                {/* Render filter tags for selected colors */}
                                {filters.color.map((color, index) => (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            handleRemoveFilter("color", color)
                                        }
                                        className="filter-tag"
                                    >
                                        <p>{color}</p>
                                        <XIcon />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Button to handle sorting logic (currently only UI) */}
                        <div>
                            <div className="sort-button">
                                <p>Sort By</p>
                                <PlusIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="horizontal-divider"></div>
            </div>
            {/* Modal component for advanced filter options */}
            <dialog
                ref={filterModal}
                id="filter-modal"
                className="filter-modal"
            >
                <FilterModal
                    filters={filters}
                    setFilters={setFilters}
                    resetFilters={resetFilters}
                    onClose={closeFilterModal}
                />
            </dialog>
        </div>
    );
};

Filter.propTypes = {
    // PropTypes to enforce expected prop types
    filters: PropTypes.object,
    setFilters: PropTypes.func,
    resetFilters: PropTypes.func,
};

export default Filter;

import { useRef } from "react";
import PropTypes from "prop-types";

import FilterModal from "./FilterModal.jsx";
import "./filter.scss";
import XIcon from "../icons/XIcon.jsx";
import PlusIcon from "../icons/PlusIcon.jsx";

const Filter = ({ filters, setFilters, resetFilters }) => {
    const filterModal = useRef(null);

    const openFilterModal = () => {
        if (filterModal.current) {
            filterModal.current.showModal();
        }
    };

    const closeFilterModal = () => {
        if (filterModal.current) {
            filterModal.current.close();
        }
    };

    const handleRemoveFilter = (filterType, value) => {
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
                    <p className="result-count">Showing 48 of 48</p>
                    <div className="filter-bar">
                        <div className="flex gap-3 flex-wrap align-items-center">
                            <button
                                onClick={openFilterModal}
                                className="filter-button"
                            >
                                <p>Filters</p>
                            </button>
                            <div className="vertical-divider"></div>
                            <div className="flex gap-1 flex-wrap">
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
    filters: PropTypes.object,
    setFilters: PropTypes.func,
    resetFilters: PropTypes.func,
};

export default Filter;

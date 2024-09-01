import PropTypes from "prop-types";
import XIcon from "../icons/XIcon";
import Button from "../ui/Button/Button";
import "./filter.scss";

const FilterModal = ({ filters, setFilters, resetFilters, onClose }) => {
    // Function to handle filter selection/deselection
    const handleFilterChange = (filterType, filterValue) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: prevFilters[filterType].includes(filterValue)
                ? prevFilters[filterType].filter((item) => item !== filterValue)
                : [...prevFilters[filterType], filterValue],
        }));
    };

    return (
        <div className="filter-modal-container">
            <button onClick={onClose}>
                <XIcon />
            </button>
            <div className="grid gap-4">
                {/* Category Filters */}
                <div className="filter-modal-group">
                    <div className="grid gap-1">
                        <h6>Category</h6>
                        <div className="horizontal-divider"></div>
                    </div>
                    <div className="filter-modal-tags">
                        {["Split", "Window", "Cassette"].map((category) => (
                            <div
                                key={category}
                                onClick={() =>
                                    handleFilterChange("category", category)
                                }
                                className={`filter-modal-tag ${
                                    filters.category.includes(category)
                                        ? "selected"
                                        : ""
                                }`}
                            >
                                <div className="circle"></div>
                                <p>{category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tonnage Filters */}
                <div className="filter-modal-group">
                    <div className="grid gap-1">
                        <h6>Tonnage</h6>
                        <div className="horizontal-divider"></div>
                    </div>
                    <div className="filter-modal-tags">
                        {[
                            "1 Ton",
                            "1.5 Tons",
                            "2 Tons",
                            "2.5 Tons",
                            "5 Tons",
                        ].map((tonnage) => (
                            <div
                                key={tonnage}
                                onClick={() =>
                                    handleFilterChange("tonnage", tonnage)
                                }
                                className={`filter-modal-tag ${
                                    filters.tonnage.includes(tonnage)
                                        ? "selected"
                                        : ""
                                }`}
                            >
                                <div className="circle"></div>
                                <p>{tonnage}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Brand Filters */}
                <div className="filter-modal-group">
                    <div className="grid gap-1">
                        <h6>Brand</h6>
                        <div className="horizontal-divider"></div>
                    </div>
                    <div className="filter-modal-tags">
                        {[
                            "LG",
                            "Samsung",
                            "Rheem",
                            "Carrier",
                            "Lennox",
                            "Daikin",
                            "Thermocool",
                            "Goodman",
                        ].map((brand) => (
                            <div
                                key={brand}
                                onClick={() =>
                                    handleFilterChange("brand", brand)
                                }
                                className={`filter-modal-tag ${
                                    filters.brand.includes(brand)
                                        ? "selected"
                                        : ""
                                }`}
                            >
                                <div className="circle"></div>
                                <p>{brand}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Color Filters */}
                <div className="filter-modal-group">
                    <div className="grid gap-1">
                        <h6>Color</h6>
                        <div className="horizontal-divider"></div>
                    </div>
                    <div className="filter-modal-tags">
                        {["White", "Black", "Grey"].map((color) => (
                            <div
                                key={color}
                                onClick={() =>
                                    handleFilterChange("color", color)
                                }
                                className={`filter-modal-tag ${
                                    filters.color.includes(color)
                                        ? "selected"
                                        : ""
                                }`}
                            >
                                <div
                                    className={`circle ${color.toLowerCase()}`}
                                ></div>
                                <p>{color}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions: Apply and Reset Filters */}
            </div>
            <div className="flex flex-wrap gap-3">
                <Button
                    onClick={onClose}
                    type={"primary"}
                    icon={false}
                    label={"Apply Filters"}
                />
                <Button
                    onClick={resetFilters}
                    type={"outlined"}
                    icon={false}
                    label={"Reset Filters"}
                />
            </div>
        </div>
    );
};

FilterModal.propTypes = {
    filters: PropTypes.object.isRequired,
    setFilters: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FilterModal;

import StarIcon from "../icons/StarIcon.jsx";
import CaretIcon from "../icons/CaretIcon.jsx";
import './categories.scss'
import Button from "../ui/Button/Button.jsx";

const Categories = () => {
    return (
        <div className="categories-card-section">
            <div className="categories-card-container split">
                <div className="categories-card">
                    <div className="card-image">
                        <img src="src/assets/cat-split-ac.png" alt=""/>
                    </div>
                    <div className="card-content | grid gap-4">
                        <div className="grid gap-0">
                            <p className="label">Category</p>
                            <h4>Split Air Conditioners</h4>
                        </div>
                        <div className="grid gap-0">
                            <p className="label">Description</p>
                            <p>Ideal for cooling individual rooms with efficient, quiet operation</p>
                        </div>
                        <div className="grid gap-0">
                            <p className="label">Rating</p>
                            <div className="flex align-items-center gap-0">
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </div>
                        </div>

                        <div className="cta">
                            {/*<button>*/}
                            {/*    <p>View Split ACs</p>*/}
                            {/*    <CaretIcon/>*/}
                            {/*</button>*/}
                            <Button label={"View Split ACs"} icon={false} type={"primary"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories-card-container cassette">
                <div className="categories-card">
                    <div className="card-image">
                        <img src="src/assets/cat-cassette-ac.png" alt=""/>
                    </div>
                    <div className="card-content | grid gap-4">
                        <div className="grid gap-0">
                            <p className="label">Category</p>
                            <h4>Cassette Air Conditioners</h4>
                        </div>
                        <div className="grid gap-0">
                            <p className="label">Description</p>
                            <p>Great for large areas with unobtrusive installation and powerful performance.</p>
                        </div>
                        <div className="grid gap-0">
                            <p className="label">Rating</p>
                            <div className="flex align-items-center gap-0">
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </div>
                        </div>

                        <div className="cta">
                            {/*<button>*/}
                            {/*    <p>View Split ACs</p>*/}
                            {/*    <CaretIcon/>*/}
                            {/*</button>*/}
                            <Button label={"View Cassette" +
                                "" +
                                " ACs"} icon={false} type={"primary"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories-card-container window">
                <div className="categories-card">
                    <div className="card-image">
                        <img src="src/assets/cat-window-ac.png" alt=""/>
                    </div>
                    <div className="card-content | grid gap-4">
                        <div className="grid gap-0">
                            <p className="label">Category</p>
                            <h4>Window Air Conditioners</h4>
                        </div>
                        <div className="grid gap-0">
                            <p className="label">Description</p>
                            <p>Perfect for compact spaces, offering easy installation and effective cooling</p>
                        </div>
                        <div className="grid gap-0">
                            <p className="label">Rating</p>
                            <div className="flex align-items-center gap-0">
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </div>
                        </div>

                        <div className="cta">
                            {/*<button>*/}
                            {/*    <p>View Split ACs</p>*/}
                            {/*    <CaretIcon/>*/}
                            {/*</button>*/}
                            <Button label={"View Window ACs"} icon={false} type={"primary"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
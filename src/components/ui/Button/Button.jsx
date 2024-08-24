import './button.scss';
import CaretIcon from "../../icons/CaretIcon.jsx";

const Button = ({type, label, icon}) => {
    return (
        <button className={type}>
            <p>{label}</p>
            {icon && <CaretIcon/>}
        </button>
    );
};

export default Button;
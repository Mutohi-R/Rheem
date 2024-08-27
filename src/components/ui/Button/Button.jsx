import './button.scss';
import CaretIcon from "../../icons/CaretIcon.jsx";

const Button = ({type, label, icon, onClick}) => {
    return (
        <button className={type} onClick={onClick}>
            <p>{label}</p>
            {icon && <CaretIcon/>}
        </button>
    );
};

export default Button;
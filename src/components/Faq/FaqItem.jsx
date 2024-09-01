import PropTypes from "prop-types";
import "./faq.scss";
import PlusIcon from "../icons/PlusIcon.jsx";
import MinusIcon from "../icons/MinusIcon.jsx";

const FaqItem = ({ faq, selectedFaq, index, onClick }) => {
  return (
    <div className="faq-item">
      <div
        onClick={onClick}
        className="faq-heading | flex align-items-start justify-content-between"
      >
        <p className="fw-bold">{faq.question}</p>
        {selectedFaq === index ? <MinusIcon /> : <PlusIcon />}
      </div>
      <div
        className={selectedFaq === index ? "faq-answer open" : "faq-answer"}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
  selectedFaq: PropTypes.number,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FaqItem;


import PropTypes from "prop-types";


const Button = ({ text, className, id }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById("work");
    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <button
      id={id}
      type="button"
      className={`${className ?? ""} cta-wrapper`}
      onClick={handleClick}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </button>
  );
};

Button.propTypes = {
  /** Texte affiché dans le bouton */
  text: PropTypes.string.isRequired,
  /** Classes CSS additionnelles */
  className: PropTypes.string,
  /**
   * Identifiant HTML du bouton (et drapeau pour activer le scroll).
   * S’il est fourni et qu’un élément #counter existe, on scroll.
   */
  id: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  id: null,
};

export default Button;

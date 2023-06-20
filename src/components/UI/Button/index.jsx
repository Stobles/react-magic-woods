import Loader from '../Loader';
import styles from './Button.module.scss';

const Button = ({ children, isInverted, isFull, isBold, isSubmit, isRounded, isDisabled, maxWidth, onClick }) => (
  <button
    style={maxWidth && { maxWidth: `${maxWidth}px` }}
    disabled={isDisabled}
    type={isSubmit ? 'submit' : 'button'}
    onClick={onClick}
    className={`${styles.Button} ${isInverted ? styles.Inverted : ''} ${isFull ? styles.Full : ''} ${isBold ? styles.Bold : ''} ${isRounded ? styles.Rounded : ''}`}
  >
    {isDisabled ? <Loader /> : children}
  </button>
);
export default Button;

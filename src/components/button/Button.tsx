import './Button.css';

interface ButtonProps {
    title: string,
    onClickCallback: () => void,
}

const Button = ({title, onClickCallback}: ButtonProps) => {
    return (
        <div className="button" onClick={onClickCallback}>
            {title}
        </div>
    );
};

export default Button;
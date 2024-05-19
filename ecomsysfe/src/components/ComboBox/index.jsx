import style from './ComboBox.module.scss';

export default function ComboBox({ name, selected, options, handleSelectItem }) {
    const handleSelect = (e) => {
        handleSelectItem(e);
    };
    return (
        <select name={name} className={style.container} onChange={handleSelect}>
            {options && options.map((option, index) => (
                <option key={index} value={option} selected={selected === option} className={style.option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

import styles from './Select.module.css';

interface Option {
  value: string;
  label: string;
}

interface PropTypes {
  label?: string;
  name: string;
  id: string;
  required?: boolean;
  className?: string;
  options: Option[];
}

const Select = (props: PropTypes) => {
  const { label, name, id, required = false, className, options } = props;

  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <select
        name={name}
        required={required}
        id={id}
        className={`${styles.select} ${className}`}
      >
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;

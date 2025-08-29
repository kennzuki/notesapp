const TextInputs = ({ label, name, value, onchange, required = false }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold p-2'>
        {label}
      </label>
      <input
        className='border border-gray-400 p-2 w-full rounded-lg'
        name={name}
        value={value}
        onChange={onchange}
        required={required}
      />
    </div>
  );
};

export default TextInputs;

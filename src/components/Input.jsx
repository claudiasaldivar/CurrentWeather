
const Input = ({ name, label, register, required, errors }) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type="text"
          {...register(name, { required })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
        {errors[name] && <p className="text-sm text-red-500">{errors[name].message}</p>} && <p className="text-sm text-red-500">{errors.message}</p>
      </div>
    )
  }

export default Input

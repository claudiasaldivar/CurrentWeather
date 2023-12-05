
const Error = ({ message }) => {
    return (
      <div className="flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full shadow-lg rounded-lg p-6 bg-red-100 border border-red-300">
          <div className="flex items-center space-x-4">
            <svg
              className="w-16 h-16 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 6a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-red-700">
              <h1 className="text-2xl font-bold">Error</h1>
              <p className="text-sm">{message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Error

import React from 'react';

function Button({actionName}) {
  return (
    <button
      type="button"
      className="font-medium bg-gray-900 dark:bg-white shadow-md rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:scale-90 duration-150 hover:shadow-xl">
      {actionName}
    </button>
  );
}

export default Button;

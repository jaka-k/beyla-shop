import React from 'react';

function Button({actionName, classAddon}) {
  return (
    <button
      type="button"
      className={"font-medium shadow-md rounded-lg text-sm px-5 py-2.5 text-center active:scale-90 duration-150 hover:shadow-xl " + classAddon}>
      {actionName}
    </button>
  );
}

export default Button;

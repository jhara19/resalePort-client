import React from 'react';

const Button = ({children}) => {
    return (
      <div>
        <button className="w-40 btn bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl border-none text-slate-100">
          {children}
        </button>
      </div>
    );
};

export default Button;
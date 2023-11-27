import React, { useState } from 'react';

function Button({onClick, label, className }){

    return (
      <button onClick={onClick} className={className}>
        {label}
      </button>
    );
}

export default Button
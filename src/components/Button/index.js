import React, { useState } from 'react';

function Button({onClick, label }){

    return (
      <button onClick={onClick}>
        {label}
      </button>
    );
}

export default Button
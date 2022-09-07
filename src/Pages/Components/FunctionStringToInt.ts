import React from 'react'

const FunctionStringToInt = (s: string) => {
  const res: string = s.replace(/[^0-9]/g, '');
  return Number(res);
}

export default FunctionStringToInt
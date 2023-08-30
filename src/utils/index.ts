const convertNumberFormat = (
  number: number,
  nullValue?: string,
  decimal?: number,
) => {
  // // Tent - For set default decimal (Option)
  // let defaultVal = '0';
  // let defaultDecimal = '';
  // if(decimal){
  //   for (let index = 0; index < decimal; index++) {
  //     defaultDecimal += '0';
  //   }
  //   defaultVal = defaultVal + '.' + defaultDecimal;
  // }
  return number
    ? Number(number)
        .toFixed(decimal ?? 0)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    : nullValue || '0';
};

export { convertNumberFormat };

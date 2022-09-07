const FunctionStringToInt = (s: string) => {
  const res: string = s.replace(/[^0-9]/g, '');
  return Number(res);
}

// 日付をYYYY-MM-DDの書式で返すメソッド
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = ('00' + (date.getMonth()+1)).slice(-2);
  const day = ('00' + date.getDate()).slice(-2);
  return (`${year}-${month}-${day}`);
}


export { FunctionStringToInt, formatDate }
import ParserDetail from '../search/parserDetail';

function goDetailFuntion(text) {
  return new Promise(async function (resolve, reject) {
    text = text.slice(text.indexOf('precSeq=') + 8, text.indexOf('&mode=0'));
    try {
      let a = await ParserDetail(text);
      resolve(a);
    } catch (e) {
      console.log(e, 'err');
      reject(e);
    }
  });
}

export default goDetailFuntion;

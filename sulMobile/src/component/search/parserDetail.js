import {lawgo} from '../helper/fetchApi';
const cheerio = require('react-native-cheerio');

//로 홈페이지에서 세부 판결 내용을 가져옴
const ParserDetail = (text) => {
  return new Promise(function (resolve, reject) {
    let title;
    let day;
    let data = [];
    let justice;
    let obj = {};
    lawgo(text)
      .then((result) => {
        if (result.status === 200) {
          const $ = cheerio.load(result.data);

          title = $('.viewwrap h2').text();
          day = $('.viewwrap .subtit1').text();

          $('.viewwrap .pgroup .pty4_dep1').each(function (i, elem) {
            let tmpText = $(elem).text();
            data.push(tmpText);
          });
          justice = $('.viewwrap .pgroup').find('div').text();
          if (data.length > 0) {
            obj = {title, day, data, justice};
            resolve(obj);
          }
        } else {
          reject('error');
        }
      })
      .catch((e) => {
        console.log(e);
        reject('error');
      });
  });
};

export default ParserDetail;

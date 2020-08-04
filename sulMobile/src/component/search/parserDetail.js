import React, {useState, useEffect} from 'react';
import {lawgo} from '../helper/fetchApi';
const cheerio = require('react-native-cheerio');
import fake from './fakeDataSearch/content';
// const onlyTypeTag = ({type}) => type == 'tag';

//로 홈페이지에서 세부 판결 내용을 가져옴
const ParserDetail = (text) => {
  // useEffect(() => {
  //   dispatch(isLoding(true));
  // }, []);
  //   const [isDetail, setIsDetail] = useState(false);
  //   const [title, setTitle] = useState('');
  //   const [day, setDay] = useState('');
  //   const [content, setContent] = useState([]);

  // return new Promise((resolve, reject) => {
  //   // resolve({title: 'parse Title', day: '2020', data: ['hello', 'cho']});
  //   resolve(fake);
  // });
  // data로 배열이름을 바/꿔야함
  return new Promise(function (resolve, reject) {
    let title;
    let day;
    let data = [];
    let justice;
    let obj = {};
    // dispatch(isLoding(true));
    console.log(text, 'uuuuuuu');
    lawgo(text)
      .then((result) => {
        if (result.status === 200) {
          // lawgo(text).then((html) => {
          console.log('start parserDetail');
          // console.log(html.data, 'data11');
          const $ = cheerio.load(result.data);

          title = $('.viewwrap h2').text();
          day = $('.viewwrap .subtit1').text();

          // $('.viewwrap .pgroup').each(function (i, elem) {
          //   let tmpText = $(elem).text();
          //   if (tmpText.length > 1) {
          //     data.push(tmpText);
          //   }
          // });
          $('.viewwrap .pgroup .pty4_dep1').each(function (i, elem) {
            let tmpText = $(elem).text();
            data.push(tmpText);
            // console.log(tmpText, i, 'i???');
          });
          justice = $('.viewwrap .pgroup').find('div').text();
          // console.log( justice, '재판장!');
          if (data.length > 0) {
            obj = {title, day, data, justice};
            // dispatch(lisLoding(false));
            resolve(obj);
          }
          // });
        } else {
          // dispatch(lisLoding(false));
          reject('error');
        }
      })
      .catch((e) => {
        console.log(e);
        // dispatch(lisLoding(false));
        reject('error');
      });
  });
};

export default ParserDetail;

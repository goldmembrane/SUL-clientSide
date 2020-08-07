//dismiss 와 acc 함침
//랜덤으로 석음 전체 길이만큼 배열만들어서
//각각 푸쉬
//포문으로 한번만 돌림 랜덤 자리로 가게

function disAccMixF(acc, diss) {
  let allData = [...acc, ...diss];
  const len = allData.length;
  const lenIclusionZero = allData.length - 1;
  for (let i = 0; i < len; i++) {
    const ranNum = parseInt(Math.random() * lenIclusionZero);
    const tmp = allData[i];
    allData[i] = allData[ranNum];
    allData[ranNum] = tmp;
  }
  // console.log(allData, 'allData!!!');
  return allData;
}

export default disAccMixF;

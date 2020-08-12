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
  return allData;
}

export default disAccMixF;

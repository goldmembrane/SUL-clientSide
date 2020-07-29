export function chkEmail(str) {
  let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (regExp.test(str) === false) {
    setErrmsg('이메일을 입력해 주세요');
  } else {
    setErrmsg('');
  }
  return regExp.test(str) ? true : false;
}

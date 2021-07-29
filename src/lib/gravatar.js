import crypto from 'crypto';
export const gravatarPath = (string) => {
  console.log(string);
  console.log(typeof string);
  const lowerCaseString = 'hoge'.trim().toLowerCase();
  const md5 = crypto.createHash('md5');
  const digest = md5.update(lowerCaseString, 'binary').digest('hex');
  return `http://www.gravatar.com/avatar/${digest}/?d=robohash`;
};

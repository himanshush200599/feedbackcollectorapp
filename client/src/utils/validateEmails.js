const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default emails => {
  const invalidEmailsArrays = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false);
  if (invalidEmailsArrays.length) {
    return `These are the  invalid emails list :${invalidEmailsArrays}`;
  }

  return;
};

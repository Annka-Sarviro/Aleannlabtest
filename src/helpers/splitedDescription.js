function splitedDescription(text) {
  if (!text) {
    return;
  }
  const data = text.split(/\r?\n/).filter(Boolean);
  console.log(data);
  const description = data[0];
  const responsopilities = data[3];
  const benefits = data[6];
  const benefitsArray = benefits.split('.').filter(Boolean);
  return { description, responsopilities, benefitsArray };
}

export default splitedDescription;

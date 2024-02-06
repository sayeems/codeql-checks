import rp from 'request-promise';
const test = async (name, age, school) => {

  const options = {
    resolveWithFullResponse: true,
    rejectUnauthorized: true,
  };

  const ssl = await rp.get(`http://${age}-${name}.${school}`, options)
    .then((response) => response.socket.encrypted)
    .catch((error) => error.response.socket.encrypted);

  let protocol = ssl ? 'https' : 'http';

  return protocol;
};

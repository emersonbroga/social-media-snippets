const parseJson = data => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
};

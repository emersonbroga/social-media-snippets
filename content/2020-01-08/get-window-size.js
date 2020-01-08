const getWindowSize = () => {
  const body = document.getElementsByTagName("body")[0];
  const width = window.innerWidth || docElem.clientWidth || body.clientWidth;
  const height = window.innerHeight || docElem.clientHeight || body.clientHeight;
  return { width, height };
};

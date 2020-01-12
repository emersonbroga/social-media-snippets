const phoneMask = event => {
  const e = event || window.event;
  const code = e.keyCode;
  if (code === 8) return;

  var input = e.target;
  var value = (input && input.value) || null;
  if (!value) return;

  value = value.replace(/\D/g, "");

  const ddd = value.substring(0, 2);
  const nine = value.substring(2, 3);
  const prefix = value.substring(3, 7);
  const suffix = value.substring(7, 11);

  const parts = [];
  if (ddd) parts.push("(" + ddd + ")");
  if (nine) parts.push(" " + nine);
  if (prefix) parts.push(" " + prefix);
  if (suffix) parts.push("-" + suffix);
  e.target.value = parts.join("");
};

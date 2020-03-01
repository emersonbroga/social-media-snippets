const text = 'https://emersonbroga.com/?s=javascript&action=learn';

const url = new URL(text);

console.log(url);

/*
[object URL] {
  hash: "",
  host: "emersonbroga.com",
  hostname: "emersonbroga.com",
  href: "https://emersonbroga.com/?s=javascript&action=learn",
  origin: "https://emersonbroga.com",
  password: "",
  pathname: "/",
  port: "",
  protocol: "https:",
  search: "?s=javascript&action=learn",
  searchParams: [object URLSearchParams] {
    append: function append() { [native code] },
    delete: function delete() { [native code] },
    entries: function entries() { [native code] },
    forEach: function forEach() { [native code] },
    get: function get() { [native code] },
    getAll: function getAll() { [native code] },
    has: function has() { [native code] },
    keys: function keys() { [native code] },
    set: function set() { [native code] },
    sort: function sort() { [native code] },
    toString: function toString() { [native code] },
    values: function values() { [native code] }
  },
  toJSON: function toJSON() { [native code] },
  toString: function toString() { [native code] },
  username: ""
}
*/

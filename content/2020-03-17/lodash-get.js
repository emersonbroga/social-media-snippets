const get = (object, path, defaultValue = null) => {
  if (typeof path === 'string') path = path.split('.').filter(key => key.length);
  const result = path.reduce((dive, key) => dive && dive[key], object);
  return result || defaultValue;
};

const data = {
  user: {
    name: 'Casey Neistat',
    address: { city: 'Los Angeles' },
    socialNetworks: ['youtube', 'facebook', 'instagram'],
  },
};

get(data, 'user.address.city'); // Los Angeles
get(data, 'user.socialNetworks.1'); // facebook
get(data, 'user.address.country', 'USA'); // USA

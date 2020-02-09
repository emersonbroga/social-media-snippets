const project = {frontend: 'react', backend: 'express' };

// spread
{ ...project};

// object.assign
Object.assign({}, project);

// JSON
JSON.parse(JSON.stringify(project));
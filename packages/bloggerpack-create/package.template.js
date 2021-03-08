const sortAlphabetically = (object) => {
  let sorted = {};
  Object.keys(object).sort().forEach(key => {
    sorted[key] = object[key];
  });
  return sorted;
};

const packageTemplate = (content, args) => {
  let key = JSON.parse(content);
  let bloggerpackVersion = args.bpLatestVersion;

  // devDependencies
  if (key.devDependencies['bloggerpack'] === undefined && key.dependencies['bloggerpack'] === undefined) {
    key.devDependencies['bloggerpack'] = '^' + bloggerpackVersion;
  }
  key.devDependencies = sortAlphabetically(key.devDependencies);

  let newKey = JSON.stringify(key, null, 2).trim() + '\n';
  return newKey;
};

module.exports = packageTemplate;

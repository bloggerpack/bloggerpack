const sortAlphabetically = (object) => {
  let sorted = {};
  Object.keys(object).sort().forEach(key => {
    sorted[key] = object[key];
  });
  return sorted;
};

const packageDotJson = (content, args) => {
  let key = JSON.parse(content);

  let scripts = key.scripts ? key.scripts : {};
  let dependencies = key.dependencies ? key.dependencies : {};
  let devDependencies = key.devDependencies ? key.devDependencies : {};
  let peerDependencies = key.peerDependencies ? key.peerDependencies : {};

  let bloggerpackCreate = key.bloggerpackCreate ? key.bloggerpackCreate : {};
  let bloggerpackVersion = bloggerpackCreate['bloggerpack'] ? bloggerpackCreate['bloggerpack'] : args.bpLatestVersion;

  key = {};
  key.private = true;

  // scripts
  key.scripts = scripts;

  // dependencies
  key.dependencies = dependencies;
  key.dependencies = sortAlphabetically(key.dependencies);

  // devDependencies
  key.devDependencies = devDependencies;
  if (key.devDependencies['bloggerpack'] === undefined && key.dependencies['bloggerpack'] === undefined) {
    if (bloggerpackCreate['bloggerpack'] === undefined) {
      key.devDependencies['bloggerpack'] = '^' + bloggerpackVersion;
    } else {
      key.devDependencies['bloggerpack'] = bloggerpackVersion;
    }
  }
  key.devDependencies = sortAlphabetically(key.devDependencies);

  // peerDependencies
  key.peerDependencies = peerDependencies;
  key.peerDependencies = sortAlphabetically(key.peerDependencies);
  if (Object.keys(key.peerDependencies).length === 0) {
    delete key.peerDependencies;
  }

  let newKey = JSON.stringify(key, null, 2).trim() + '\n';
  return newKey;
};

module.exports = packageDotJson;

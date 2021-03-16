const packageTemplate = (content, args) => {
  let key = JSON.parse(content);

  delete key.name;
  let key2 = {
    name: args.projectName,
    ...key
  };
  key = key2;

  let newKey = JSON.stringify(key, null, 2).trim() + '\n';
  return newKey;
};

module.exports = packageTemplate;

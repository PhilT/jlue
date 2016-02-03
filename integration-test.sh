rm -rf tmp
mkdir tmp
jlue tmp/test
pushd tmp/test
tar xf ../../nm_cache.tar
npm install --optional=false
npm run build --silent
if [[ $? == '0' ]]; then
  npm start
fi


rm -rf tmp
mkdir tmp
jlue tmp/test
pushd tmp/test
[ -f ../../nm_cache.tar ] || tar xf ../../nm_cache.tar
npm install --optional=false -ddd
npm prune --optional=false
popd
npm run update-cache
pushd tmp/test
npm run build --silent
[[ $? == '0' ]]; npm start

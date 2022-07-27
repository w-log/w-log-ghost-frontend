# rm -rf node_modules/.cache

yarn build

touch out/.nojekyll


now=`date +%D-%T`
commit_message="gh-page-deploy: $now"
git add out
git commit -m "ci(gh-pages):$commit_message"


git subtree push --prefix out origin gh-pages
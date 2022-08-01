# rm -rf node_modules/.cache

yarn build

touch out/.nojekyll

mv ./out ./docs

now=`date +%D-%T`
commit_message="gh-page-deploy: $now"
git add docs
git commit -m "ci(gh-pages):$commit_message"


git push -u origin gh-pages
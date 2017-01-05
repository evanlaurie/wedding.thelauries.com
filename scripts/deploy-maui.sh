git checkout maui
git pull origin dev
npm run build:prod
git add *
git commit -m 'deployed'
git push origin
git checkout dev
ssh evalau@evanlaurie.com << EOF
 cd wedding.thelauries.com/maui
 git pull origin
 git checkout maui
EOF
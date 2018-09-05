# install serverless
ng add @ng-toolkit/serverless  —-provider aws

# deploy
npm run build:serverless:deploy

# fix serverless.yml
diff serverless.yml serverless.valid.yml
cp serverless.valid.yml serverless.yml

# deploy again
npm run build:serverless:deploy

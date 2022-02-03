# Dashboard-Application

git clone.
Make sure you have mongo installed & running on your local.
open terminal --> type mongo --> show dbs --> is chicago_data present ? yes= "dont do anything" or no= type "use chicago_data"
open another terminal and type : mongoimport --db chicago_data --collection dataset1/2/3/4/5 --type csv --headerline --ignoreBlanks --file dataset1/2/3/4/5.csv
now cd into Dashboard-Application-master and run npm install 
after a succesfull npm install, run node app.js
open on port XXX

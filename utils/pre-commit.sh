#!/bin/sh

#VARIABLES FOR TEXT FORMATING
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

##TODO ensure that other webpack files are not prettified
# grab stagged JS and JSX files
jsfiles=$(git diff --cached --name-only --diff-filter=ACM | grep '\.jsx\|\.js\?$' | grep -v "webpack.config.js" | grep -v "utils/webpack.prod.js" | grep -v "webpack-helpers/webpack.dev.js" | grep -v "utils/webpack.common.js")
#[ -z "$jsfiles" ] && exit 0

# Prettify all staged .js and .jsx files
echo -e "\n${CYAN}****EXECUTING PRETTIER ON STAGED JS & JSX FILES****${NC}"
echo $jsfiles | xargs ./node_modules/.bin/prettier --write --trailing-comma all

# Add back the modified/prettified files to staging
echo $jsfiles | xargs git add


echo -e "\n${CYAN}****EXECUTING UNIT TESTS****${NC}"
npm run test
unitTestResults=$?

# Fail commit if unit tests fail
if [ $unitTestResults -eq 1  ]
then
    echo -e "\nCOMMIT ${RED}FAILED${NC} ON UNIT TEST EXECUTION, STATUS $unitTestResults"
    exit $unitTestResults
fi

# Run Linter and fail if errors
echo -e "\n${CYAN}****EXECUTING LINTER****${NC}"
npm run lint
linterResults=$?
if [ $linterResults -eq 1  ]
then
    echo -e "\nCOMMIT ${RED}FAILED${NC} ON LINT EXECUTION, STATUS $linterResults"
    exit $linterResults
fi

exit 0
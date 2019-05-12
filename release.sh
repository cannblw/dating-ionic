#!/bin/bash
set -eo pipefail

if [[ -n $(git status -z) ]]; then
    echo "Repository not clean, ensure you have committed all your changes"
    exit 1
fi


PROJECT_NAME=$(cat package.json | perl -ne 'print $1 if /"name":\s"(.+?)"/')
CURRENT=$(npm version | perl -ne 'print $1 if /'"$PROJECT_NAME"'\D+(\d+\.\d+\.\d+)/')
BRANCH=$(git branch | grep \* | cut -d ' ' -f2-)

if [[ $BRANCH == "develop" ]]
then

    # Ensuring master is updated
    echo "Ensuring master is updated"
    git checkout master
    git pull
    git checkout develop

    # Create release
    git flow release start $CURRENT || exit 1
    GIT_MERGE_AUTOEDIT=no git flow release finish -m $CURRENT $CURRENT -T $CURRENT
    git checkout master

    # Publish release
    git push origin HEAD --tags

    # Merge release into develop
    git checkout develop
    git merge master
else
    # Create new tag
    git tag -a $CURRENT -m"$CURRENT"

    # Publish tag
    git push --tags
fi

# Bump npm version
npm version patch --no-git-tag-version

# Update develop with new bumped version
NEXT=$(npm version | perl -ne 'print $1 if /'"$PROJECT_NAME"'\D+(\d+\.\d+\.\d+)/')

# Bump config.xml version
sed -i '' "s/version=\"$CURRENT\"/version=\"$NEXT\"/" config.xml

git commit -a -m"Bump version to $NEXT"
git push

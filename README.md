# LevelUp Watch Edition App Development Environment ★★

[![Build Status](https://travis-ci.org/twlevelup/SydBuild2017S2_Purple.svg?branch=master)](https://travis-ci.org/twlevelup/SydBuild2017S2_Purple)

This git repo contains all the code you need to prototype apps for the Proto Watch.

The [wiki](https://github.com/twlevelup/watch_edition_react/wiki) contains lots of useful documentation

# Installation

See the [Installation Instructions](https://github.com/twlevelup/watch_edition_react/wiki/Setup)

## Continuous Integration

The project is continuously deployed to heroku by [Travis CI](https://travis-ci.org)


## Setup
Tested with node 8.x

```
$ ./go setup
```

Visit `http://localhost:8000/` from your browser of choice.
Server is visible from the local network as well.

## Production

http://twlevelup-syd-2017-s2-purple.herokuapp.com/

### Before you commit

1. Check the CI build, do not commit unless it's passing!
2. Run ```git pull --rebase```
3. Fix any merge conflicts
4. Run
```./go precommit``` (OS X)
```npm run precommit``` (Windows)
4. Fix any errors
5. Run ```git push```

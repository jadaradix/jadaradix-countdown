# jadaradix-countdown

Prints the number of days until the end of the year in ASCII art.

## Install

```
npm i -g jadaradix-countdown
```

[If this fails on macOS, try this](https://stackoverflow.com/a/27705973):

```
brew install cairo
pkg-config --atleast-version=1.12.2 cairo
echo $?
```

It should print 0.

## Test
Tests are written with [Jest](https://jestjs.io/) and [ToBeType](https://www.npmjs.com/package/jest-tobetype).

```
npm test
```

## Add to `.bash_profile` or `.bashrc`

```
echo "jadaradix-countdown" >> ~/.bash_profile
```

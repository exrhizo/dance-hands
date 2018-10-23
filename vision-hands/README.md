# Hand Visuals

## About

This was originally forked from the posenet js demo.

## Setup

cd into the vision-hands folder:

```sh
cd vision-hands
```

Install dependencies and prepare the build directory:

```sh
yarn
```

To watch files for changes, and launch a dev server:

```sh
yarn watch
```

## If you are developing hand-model locally, and want to test the changes visuals

Install yalc:
```sh
npm i -g yalc
```

cd into the hand-model folder:
```sh
cd hand-model
```

Install dependencies:
```sh
yarn
```

Publish hand-model locally:
```sh
yalc push
```

Cd into the vision-hands and install dependencies:

```sh
cd ../vision-hands
yarn
```

Link the local hand-model to the vision-hands:
```sh
yalc link hand-model
```

Start the dev demo server:
```sh
yarn watch
```

To get future updates from the hand-model source code:
```
# cd up into the hand-model directory
cd ../hand-model
yarn build && yalc push
```

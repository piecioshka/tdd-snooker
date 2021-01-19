# Test Driven Development (TDD) @ game-snooker

## Stage 1 ✅ Setup project

<https://www.youtube.com/watch?v=aR7j6jy9Sqc>

* Create empty project
    + directory
    + `package.json` by `npm init -f`
* Setup
    + Install deps: `karma`
        - Create `karma.conf.js` by `./node_modules/.bin/karma init`
    + Update `karma.conf.js`
        - Set logging mode to `LOG_WARN`
        - Set path to `js/**`
    + Install deps: `karma-commonjs`
        - Update `karma.conf.js`
        - Update preprocessor path to `js/**`
    + Install deps: `karma-clear-screen-reporter`
        - Update `karma.conf.js`
* Specs
    Board
    + Add: should be creatable
    + Add: canvas should be removed

    Table
    + Add: should be creatable
    + Add: should has contain empty list of balls at start
    + Add: should has contain one ball after add one ball

    Ball
    + Add: should be creatable

## Stage 2 🚩 Objects

* Replace `Karma` by `Jest`
    + Why? Faster, more built-in tools
    + Install `jest`
        - `npm install -D jest @types/jest`
        - Add new task in `package.json`
    + Remove `jasmine`, `karma` etc.
        - `npm remove jasmine karma karma-chrome-launcher`
        - `npm remove karma-clear-screen-reporter karma-commonjs karma-jasmine`
    + Remove `karma.conf.js`
* Restructure
    + `*.test.js` -> `*.spec.js`
    + `js/*.js` -> `src/scripts/*.js`
* Reformat *.js files
    + Indentation
* Demo page
    + Why? It will help to define next steps
    + Use Webpack AND <https://github.com/piecioshka/boilerplate-webpack-babel>
        - Copy `devDependencies` and `scripts` from boilerplate
            * `npm install`
        - Create file: `main.js` without test
            * Why? This file hasn't any logic, it is only call functions
        - .gitignore: ignore `dist/` folder
        - Require `index.html` in first line of `main.js` file
        - Install <https://github.com/hustcc/jest-canvas-mock>
            * `npm install -D jest-canvas-mock`
    + Build demo page
    + Start testing in watch mode
* Restructure
    + core
        - files which handle logic layer
* Create configuration file `config.js`

    ```text
    BOARD_WIDTH: 400,
    BOARD_HEIGHT: 200,
    TABLE_WIDTH: 370,
    TABLE_HEIGHT: 180,
    BALL_SIZE: 5.2,
    ```

* Specs
    Board
    + Add: should define table
    + Remove: should has size
    + Add: should be visible after render

    Table
    + Add: should be visible after render

    Ball
    + Add: should be visible after render

    CanvasHelper
    + Add: should have possibility to read pixel color

* Positions
    + <https://en.wikipedia.org/wiki/Rules_of_snooker> 12 ft × 6 ft
    + <https://wpbsa.com/wp-content/uploads/WPBSA-Official-Rules-of-the-Games-of-Snooker-and-Billiards-2020.pdf>
    + <https://dynamicbilliard.ca/resources/snooker-table-layout/>

    + Baulk-line
    + The "D"
    + Dots for high-score balls
    + Balls

        ```text
        40, 70, 'white'

        60, 40, 'darkgreen'
        60, 90, 'brown'
        60, 140, 'yellow'

        185, 90, 'blue'
        240, 90, 'pink'

        260, 90, 'red'

        270, 85, 'red'
        270, 95, 'red'

        280, 80, 'red'
        280, 90, 'red'
        280, 100, 'red'

        290, 75, 'red'
        290, 85, 'red'
        290, 95, 'red'
        290, 105, 'red'

        300, 70, 'red'
        300, 80, 'red'
        300, 90, 'red'
        300, 100, 'red'
        300, 110, 'red'

        330, 90, 'black'
        ```

## Stage 3 🚩 Bounding box

* ...

## Stage 4 🚩 Collisions

* ...

## Stage 5 🚩 Game logic

* ...

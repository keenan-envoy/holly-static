# HollyStatic

#### ENVOYsites Gulp build system and boilerplate for static websites.

## Requirements
**Node 6 recommended, tested on 6.9.5**

## Install
To get **holly** set up on your static website project, we recommend that Yarn package manager is installed on your machine. 
https://yarnpkg.com/en/docs/install

1. After Yarn is installed, open the terminal and `cd` to your project's root directory and install **holly** for static websites.

        yarn add envoy-holly-static

2. After successful installation, a `gulpfile.js` should automatically be generated at your project's root directory. 

3. Initialize **holly** and answer a few prompts to scaffold starter boilerplate files. 

        gulp init

## Post-Install
After installing **holly**, the following entries should be added to the project's `.gitignore` file.

        /dist
        /node_modules

Navigate to `http://localhost:8000` to view the site. 

## Usage

* `gulp`

    Start **holly** in *development* mode. Styles and scripts will *not* be minified. Starts up "serve" and "watch" tasks. 

* `gulp --prod`

    Start **holly** in *production* mode. Styles and scripts will be minified.

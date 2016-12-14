## Installation

1) First, install [Yeoman](http://yeoman.io)  
`npm install -g yo`  

2) than install dependencies and link to this local package (from this folder)  
```bash
npm i
npm link
```
Then generate your new component: `yo kx-cmpt`

Or you can skip second step and just run it by local path
`yo ./some_path/kx-cmpt/generators/app `


## Component Structure
Generated component directory has the following structure
```
component-name
 ├──component_name_cmpt.js
 ├───component_name.html
 ├───component_name.styl
```

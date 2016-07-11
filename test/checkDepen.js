/**
 * Created by kimown on 16-7-10.
 */

'use strict';

let pkgJson = require("./../package.json");
let dependencies = pkgJson.dependencies;
if(dependencies.hasOwnProperty('hexoserver')){
    console.log("true");
}
/**
 * Created by kimown on 16-7-10.
 */

'use strict';




let cmd = "npm install kimown-demo --save --registry=https://registry.npm.taobao.org";
let cmd2 = "rm /tmp/aa";
let cmdAr = cmd.split(' ');
let command = cmdAr.shift();


var cp = require('child_process');
var task = cp.spawn(command,cmdAr,{
    cwd: process.cwd(),
    stdio: 'inherit'
});

console.log('Failed to install dependencies. Please run \'npm install\' manually!');




/**
 sudo su
 cd /tmp
 touch root
 chmod -R 700 root
 rm root

 *
 */

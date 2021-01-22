'use strict'


var TaosRestful = require('../taosrestful.js')

var tr = new TaosRestful("121.36.56.117","6041","root","msl110918")

tr.selectData('node_7',[],'',10,null,null,'dianli1').then(a =>
    console.log(a)
)
tr.selectData('node_7',['ts','pjxdy1'],null,10,100,null,'dianli1').then(a =>
    console.log(a)
)
tr.useDatabase('dianli1')
tr.selectData('node_7',['ts','pjxdy1'],"ts > '2021-01-12 20:42:30.275' and pjxdy1 > 394.5",10).then(a =>
    console.log(a)
)
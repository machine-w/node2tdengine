'use strict'


var TaosRestful = require('./taosrestful.js')

var tr = new TaosRestful("121.36.56.117","6041","root","msl110918")

tr.createDatabase('nodeadd2',true,1000,true).then(a =>
    console.log(a)
)
tr.showDatabases().then(a =>
    console.log(a)
)
// tr.rawSql('select * from dianli1.node_7').then(a =>
//     console.log(a)
// )
// tr.showSuperTables('dianli1').then(a =>
//     console.log(a)
// )
// tr.showTables('dianli1').then(a =>
//     console.log(a)
// )
// tr.useDatabase('test3')
// tr.showTables().then(a =>
//     console.log(a)
// )
// tr.disTable('person100').then(a =>
//     console.log(a)
// )
// tr.insertData('person100',{'td':Date.now(),'name5':1.2}).then(a =>
//     console.log(a)
// )
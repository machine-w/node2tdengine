'use strict'


var TaosRestful = require('./taosrestful.js')

var tr = new TaosRestful("121.36.56.117","6041","root","msl110918")

// tr.createDatabase('nodeadd2',true,1000,true).then(a =>
//     console.log(a)
// )
// tr.showDatabases().then(a =>
//     console.log(a)
// )
// tr.alterDatabase('nodeadd2',1200,0).then(a =>
//     console.log(a)
// )
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
// tr.disTable('person100','test3').then(a =>
//     console.log(a)
// )
// tr.insertData('person100',{'td':Date.now(),'name5':1.2}).then(a =>
//     console.log(a)
// )

tr.selectData('node_7',['ts','pjxdy1'],"ts > '2021-01-12 20:42:30.275' and pjxdy1 > 394.5",100,null,null,'dianli1').then(a =>
    console.log(a)
)
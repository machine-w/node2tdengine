'use strict'
const axios = require('axios')

module.exports = class TaosRestful {
   constructor(ip='localhost', port='6041',user='root',password="taosdata") {
       this.ip = ip
       this.port = port
       this.user = user
       this.password = password
       this.database = 'demo'
   }
   async sendRequest(sqlStr){
    try {   
        let res = await axios.post(`http://${this.ip}:${this.port}/rest/sql`, sqlStr, {
            auth: {
            username: this.user,
            password: this.password
            }
        })
        if (res.data.status == 'succ'){
            // console.log(res.data.data)
            // console.log(res.data.rows)
            // console.log(res.data.head)
            let head  = res.data.head
            // console.log(head)
            let resData = res.data.data.map(item => Object.fromEntries(head.map((a,b)=>[a,item[b]])))
            return  {'res':true,'count':res.data.rows,'data':resData}
        }else{
            return {'res':false,'msg':res.data.desc,'code':res.data.code}
        }
    } catch (err) {
        // console.log(err.response.data)
        return {'res':false,'msg':err.response.data.desc,'code':err.response.data.code}
        // alert('请求出错！')
    }

   }
   showDatabases(){
    return this.sendRequest('SHOW DATABASES')
   }
   useDatabase(dbName){
    this.database = dbName
   }
   dropDatabase(dbName,safe=true){
    // console.log(`DROP DATABASE ${safe?'IF EXISTS':''} ${dbName}`)
    return this.sendRequest(`DROP DATABASE ${safe?'IF EXISTS':''} ${dbName}`)
   }
   showSuperTables(dbName){
    return this.sendRequest(`SHOW ${dbName}.STABLES`)
   }
   showTables(dbName=null){
    let dbN = dbName ? dbName : this.database
    console.log(`SHOW ${dbN}.TABLES`)

    return this.sendRequest(`SHOW ${dbN}.TABLES`)
   }
   disTable(tableName,dbName=null){
    let dbN = dbName ? dbName : this.database
    return this.sendRequest(`DESCRIBE ${dbN}.${tableName}`)
   }
   insertData(tableName,data,dbName=null){
    
    let dbN = dbName ? dbName : this.database
    let fields = ''
    let values = ''
    for (const [key, value] of Object.entries(data)) {
        fields += key + ','
        values += value + ','
    }
    // fields = fields.slice(0,-1)
    // values = values.slice(0,-1)
    // for (const key of data) {
    //     fields += key + ','
    //     values += data[key] + ','
    // // }substr(1,2)
    // console.log(fields,values)
    console.log(`INSERT INTO ${dbN}.${tableName} (${fields.slice(0,-1)}) VALUES (${values.slice(0,-1)})` )
    return this.sendRequest(`INSERT INTO ${dbN}.${tableName} (${fields.slice(0,-1)}) VALUES (${values.slice(0,-1)})`)
   }
   rawSql(sqlStr){
    return this.sendRequest(sqlStr)
   }
}


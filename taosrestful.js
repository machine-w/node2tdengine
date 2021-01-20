'use strict';
const axios = require('axios')

module.exports = class TaosRestful {
   constructor(ip='localhost', port='6041',user='root',password="taosdata") {
       this.ip = ip;
       this.port = port;
       this.user = user;
       this.password = password;
   }
   showDatabases(){
    axios.post(`http://${this.ip}:${this.port}/rest/sql`, 'SHOW DATABASES', {
        auth: {
        username: this.user,
        password: this.password
        }
    }).then(res => {
        // console.log(`statusCode: ${res.statusCode}`)
        if (res.data.status == 'succ'){

            console.log(res.data.data)
            console.log(res.data.rows)
            console.log(res.data.head)
        }
        // console.log(res.data)
        // console.log(res)
    }).catch(error => {
        console.error(error)
    })
   }
}


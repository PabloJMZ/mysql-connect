const mysql = require('mysql2/promise');

class Database{
    constructor(){
        this.database = null;
    }  

    async connect(options){
      try {
        const connection = await mysql.createConnection(options);
        this.database = connection;
        console.log('Conectado a MySQL');
      } catch (error) {
        console.error("  Error al conectarse a MySQL");
      }
    }
    async query(query){
        try {
            const [rows, fields] = await this.database.query(query);
            console.table(rows);
        } catch (error) {
            console.error("  Ocurrió un error");
        }
    }
}

module.exports = Database;
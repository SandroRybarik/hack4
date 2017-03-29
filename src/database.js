const connection = require('../lib/db');

const test = () => {

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });

    // connection.end();
}

const test2 = () => {

    connection.query('SELECT * FROM classes', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
    });

    // connection.end();
}

module.exports.dbtest = test;
module.exports.dbtest2 = test2;
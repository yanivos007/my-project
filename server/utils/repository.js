const dbService = require('./dbService');

class Repository {
  // This will return a promise..
  findAll() {
    return dbService.executeQuery('SELECT * FROM mytable');
  }

  async findById(id) {
    const results = await dbService.executeQuery('SELECT * FROM mytable WHERE id = ?', [id]);
    return (results.length === 0) ? null : results[0];
  }

  async save(data) {
    const result = await dbService.executeQuery('INSERT INTO mytable SET ?', data);
    return { id: result.insertId, ...data };
  }
}

const repository = new Repository();
module.exports = repository;
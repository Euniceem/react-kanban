const bookshelf = require('./bookshelf');

class Status extends bookshelf.Model {
  get tableName() { return 'statuses'; }
  get timestamps() { return true; }

  statuses() {
    return this.belongsToMany('cards');
  }
}

module.exports = bookshelf.Model('Status', Status);
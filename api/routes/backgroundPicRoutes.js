'use strict';
module.exports = function(app) {
    const backgroundPic = require('../controllers/backgroundPicController')

    // todoList Routes
    app.route('/background-pics')
    .get(backgroundPic.list_all_pics)
    .post(todoList.create_a_task)

    app.route('/background-pics/:picId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task)
}

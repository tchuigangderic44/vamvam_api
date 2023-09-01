/*jslint
node
*/
const {
    Blacklist,
    Delivery,
    DeliveryConflict,
    Message,
    Registration,
    Room,
    User,
    UserRoom,
    connection,
    otpRequest
} = require("../models");

async function createTable(connection, model) {
    await connection.getQueryInterface().createTable(
        model.getTableName(),
        model.getAttributes()
    );
}

async function up() {
    await createTable(connection, otpRequest);
    await createTable(connection, User);
    await createTable(connection, Delivery);
    await createTable(connection, Room);
    await createTable(connection, Message);
    await createTable(connection, UserRoom);
    await createTable(connection, DeliveryConflict);
    await createTable(connection, Registration);
    await createTable(connection, Blacklist);
}

async function down() {
    await connection.getQueryInterface().dropTable(otpRequest.getTableName());
    await connection.getQueryInterface().dropTable(User.getTableName());
    await connection.getQueryInterface().dropTable(Delivery.getTableName());
    await connection.getQueryInterface().dropTable(Room.getTableName());
    await connection.getQueryInterface().dropTable(UserRoom.getTableName());
    await connection.getQueryInterface().dropTable(Registration.getTableName());
    await connection.getQueryInterface().dropTable(Message.getTableName());
    await connection.getQueryInterface().dropTable(
        DeliveryConflict.getTableName()
    );
    await connection.getQueryInterface().dropTable(Blacklist.getTableName());
}

module.exports = Object.freeze({down, up});
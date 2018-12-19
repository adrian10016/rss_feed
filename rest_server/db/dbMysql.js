"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = new Sequelize('rss_feed', 'root', 'root', {
    dialect: 'mysql',
    host: '172.31.29.91'
});
/* order model define */
const Coindesk = sequelize.define('coindesks', {
    title: Sequelize.STRING,
    creator: Sequelize.STRING,
    url: Sequelize.STRING,
    content: Sequelize.STRING,
    content_snippet: Sequelize.STRING,
    isodate: Sequelize.DATE,
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
function get_latest_rss(limit) {
    if (limit == 0)
        limit = 25;
    return Coindesk.findAll({
        limit: limit,
        order: [['created_at', 'DESC']]
    });
}
exports.get_latest_rss = get_latest_rss;
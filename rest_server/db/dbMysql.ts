import * as Sequelize from 'sequelize';
const sequelize = new Sequelize('rss_feed', 'root', 'root', {
  dialect: 'mysql',
  host: '172.31.29.91'
});

/* order model define */
const Feed = sequelize.define('feed', {
  title: Sequelize.STRING,
  creator: Sequelize.STRING,
  url: Sequelize.STRING,
  content: Sequelize.STRING,
  content_snippet: Sequelize.STRING,
  isodate: Sequelize.DATE,
  type: Sequelize.INTEGER,
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

function get_latest_rss(limit) {
  if (limit == 0)
    limit = 100;

  return Feed.findAll({
    limit: limit,
    order: [['isodate', 'DESC']]
  });
}

export {
  get_latest_rss,
};

import Sequelize from 'sequelize';
import sequelize from '../../mysql/db.js';
import moment from 'moment';

var users = sequelize.define('users', {
    user_name: Sequelize.STRING,
	password: Sequelize.STRING,
	id: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	mobile: Sequelize.STRING,
	address: Sequelize.STRING,
	createdAt: {
		type: Sequelize.DATE,
		field: 'createdAt',
		get() {
			return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
		}
	},
}, {
	// 如果为 true 则表的名称和 model 相同，即 user
	// 为 false MySQL创建的表名称会是复数 users
	// 如果指定的表名称本就是复数形式则不变
	freezeTableName: true,
	timestamps: false
});

export default users

'use strict';

import v1 from './v1'
import admin from './admin'


export default app => {
	// app.get('/', (req, res, next) => {
	// 	res.redirect('/');
	// });
	app.use('/v1', v1);
	app.use('/admin', admin);
}
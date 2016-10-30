import Config, { environment } from 'webpack-config';
 
environment.setAll({
	env: () => process.env.WEBPACK_ENV || process.env.NODE_ENV,
	dir: __dirname
});
 
export default new Config().extend('./config/webpack.config.[env].js');
const mix = require('laravel-mix')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
require('laravel-mix-copy-watched')

const paths = {
	src: path.resolve(__dirname, 'src'),
	build: path.resolve(__dirname, 'build'),
}

mix
	.setPublicPath('dist/')
	.js('./src/js/app.js', 'js')
	.sass('./src/css/app.scss', 'css')
	.browserSync({
		proxy: {
			target: 'http://localhost:8888/_base/',
		},		
		// port: 8000,
		files: [
			'./src/scss/**/*.scss',
			'./src/js/**/*.js',
			'./templates/*.php',
			'./**.php',
		],
	})

	.copyWatched('src/fonts/**/*.{woff,woff2}', 'dist/fonts')

	.webpackConfig({
		plugins: [
			new CleanWebpackPlugin()
		],
	})

	.webpackConfig({
		resolve: {
			alias: {
				'@': `${paths.src}/js/`,
				'fonts': path.resolve(__dirname, 'src/'),
				_highway: `${paths.src}/js/highway/index.js`
			}
		}
	})

	.options({
		processCssUrls: false,
		terser: { extractComments: false }
	})

	.disableSuccessNotifications()

	if (mix.inProduction()) {
		mix
			.version()
	} else {
		mix
			.webpackConfig({ devtool: 'cheap-module-source-map' })
			.sourceMaps()
	}

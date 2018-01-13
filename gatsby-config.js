module.exports = {
	siteMetadata: {
		title: 'Alexander Kallaway Portfolio Site'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js'
			}
		}
	]
}

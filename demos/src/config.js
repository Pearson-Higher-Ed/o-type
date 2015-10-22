/*eslint-env node*/

module.exports = {
	options: {
		sass: 'demos/src/demo.scss'
	},
	demos: [
		{
			name: 'titles',
			template: 'demos/src/titles.mustache',
			description: 'Titles'
		},
		{
			name: 'labels',
			template: 'demos/src/labels.mustache',
			description: 'Labels'
		},
		{
			name: 'leads',
			template: 'demos/src/leads.mustache',
			description: 'Leads'
		},
		{
			name: 'copy',
			template: 'demos/src/copy.mustache',
			description: 'Body copy'
		},
		{
			name: 'inline',
			template: 'demos/src/labels.mustache',
			description: 'Inline text elements'
		},
		{
			name: 'links',
			template: 'demos/src/links.mustache',
			description: 'Links'
		}
	]
};

export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eeb2c08eb35ddab2fcfd1a5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-o4v41oi9',
                  apiId: 'b2181216-a54f-4f19-bc32-01e72d5a61e4'
                },
                {
                  buildHookId: '5eeb2c08eb35dd3654cfd270',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-21b9jqx8',
                  apiId: 'd5b30b6a-e88a-4cdb-9eb1-ab3db3ecf2e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lospampepe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-21b9jqx8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

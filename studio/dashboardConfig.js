export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f9ad46a312ed1008dc4da16',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dw58jga8',
                  apiId: '67b35fc8-3be7-4a66-959c-85c9dcbd3b21'
                },
                {
                  buildHookId: '5f9ad46a6bad01008e1d8d2f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-djy5us43',
                  apiId: 'd9218a26-a0df-4b2a-92a9-5ac06066afd3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/micahtaylor/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-djy5us43.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

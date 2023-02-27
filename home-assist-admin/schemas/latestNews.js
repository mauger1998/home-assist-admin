export default {
  name: 'latestNews',
  type: 'document',
  title: 'Latest News',
  fields: [
    {
      name: 'cardTitle',
      type: 'string',
      title: 'Card Title',
      description: 'No more than 33 characters',
    },
    {
      name: 'cardText',
      type: 'text',
      title: 'Card Text',
      description: 'No more than 344 characters',
    },
  ],
}

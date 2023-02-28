export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [
        {
          type: 'document',
          name: 'job',
          title: 'Job',
          fields: [
            {name: 'role', title: 'Role', type: 'string'},
            {name: 'company', title: 'Company', type: 'string'},
          ],
        },
      ],
    },
  ],
}

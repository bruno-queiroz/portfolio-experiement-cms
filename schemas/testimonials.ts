export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      type: 'document',
      name: 'testimonial',
      title: 'Testimonial',
      fields: [
        {
          name: 'testimonialText',
          title: 'Testimonial Text',
          type: 'text',
        },
        {
          name: 'testimonialName',
          title: 'Testimonial Name',
          type: 'string',
        },
        {
          name: 'testimonialCompany',
          title: 'Testimonial Company',
          type: 'string',
        },
        {
          name: 'testimonialImage',
          title: 'Testimonial Image',
          type: 'image',
        },
      ],
    },
  ],
}

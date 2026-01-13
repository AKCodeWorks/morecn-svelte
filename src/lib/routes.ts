import { resolve } from "$app/paths";

export const ROUTES = [
  {
    title: 'Getting Started',
    url: '#',
    items: [
      {
        title: 'Installation',
        url: resolve("/installation")
      }
    ]
  },
  {
    title: 'Components',
    url: '/components',
    items: [
      {
        title: 'Combobox',
        url: resolve("/components/combobox")
      },

    ]
  },
  {
    title: 'Blocks',
    url: '#',
    items: [
      {
        title: 'TBA',
        url: '#'
      },

    ]
  },
  {
    title: 'Hooks',
    url: '#',
    items: [
      {
        title: 'TBA',
        url: '#'
      },

    ]
  },
  {
    title: 'External Links',
    url: '#',
    items: [
      {
        title: 'shadcn-svelte',
        url: 'https://shadcn-svelte.com'
      },
      {
        title: 'shadcn-svelte repo',
        url: 'https://github.com/huntabyte/shadcn-svelte'
      }
    ]
  }
]
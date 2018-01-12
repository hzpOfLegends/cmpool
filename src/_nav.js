export default {
  items: [{
      title: true,
      name: 'CMPOOL',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'New',
      url: '/commons/news',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'HomePage',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'homePage',
      url: '/homePage',
      icon: 'icon-puzzle',
      children: [{
          name: 'News',
          url: '/commons/news',
          icon: 'fa fa-lightbulb-o fa-fw'
        },
        {
          name: 'Group',
          url: '/commons/group',
          icon: 'fa fa-address-book fa-fw'
        },
        {
          name: 'blogs',
          url: '',
          icon: 'fa fa-medium fa-fw'
        },

      ]
    },
    {
      title: true,
      name: 'Mineral pools statistics',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'Mineral pools statistics',
      url: '',
      icon: 'icon-note',
      children: [{
          name: 'System statistics',
          url: '/commons/statistics',
          icon: 'fa fa-bar-chart fa-fw'
        },
        {
          name: 'Hash Rate Prove',
          url: '/commons/hash',
          icon: 'fa fa-balance-scale fa-fw'
        },
        {
          name: 'The Mining History',
          url: '/commons/miningHistory',
          icon: 'fa fa-history fa-fw'
        },
        {
          name: 'Hall of Fame',
          url: '/commons/person',
          icon: 'fa fa-trophy fa-fw'
        },
        {
          name: 'JSON statistics',
          url: '/commons/json',
          icon: 'fa fa-bar-chart fa-fw'
        }
      ]
    },
    {
      title: true,
      name: 'Help Center',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'Help Center',
      url: '',
      icon: '',
      children: [{
          name: 'Help Center',
          url: '/commons/help',
          icon: 'fa fa-life-ring fa-fw'
        },
        {
          name: 'Development Angle',
          url: '/commons/exploit',
          icon: 'fa fa-code'
        },
        {
          name: 'Terms Of Service',
          url: '/commons/serve',
          icon: 'fa fa-gavel fa-fw'
        }
      ]
    },
    {
      title: true,
      name: 'My Account',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'My Account',
      url: '',
      icon: 'icon-energy',
      children: [{
          name: ' Instrument Panel',
          url: '/common/instrumentPanel',
          icon: 'fa fa-th-large fa-fw'
        },
        {
          name: 'Miner',
          url: '/common/miner',
          icon: 'fa fa-cogs fa-fw'
        },
        {
          name: 'Monitoring',
          url: '/common/monitoring',
          icon: 'fa fa-line-chart fa-fw'
        },
        {
          name: 'Reward',
          url: '/common/reward',
          icon: 'fa fa-btc fa-fw'
        },
        {
          name: 'Reward Payment History',
          url: '/common/reward',
          icon: 'fa fa-usd fa-fw'
        },
        {
          name: 'Activity Logging',
          url: '/common/activity',
          icon: 'fa fa-book fa-fw'
        },
        {
          name: 'Setting',
          url: '/common/set',
          icon: 'fa fa-cog fa-fw'
        }

      ]
    },
    
    {
      divider: true
    },
    {
      title: true,
      name: 'Register',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'LOGIN',
      url: '',
      icon: 'icon-star',
      children: [{
          name: 'LOGIN',
          url: '',
          icon: 'icon-star'
        },
        {
          name: 'LOGOUT',
          url: '',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'UI Kits',
      url: '/ui-kits',
      icon: 'icon-layers',
      children: [{
          name: 'Invoicing',
          url: '/ui-kits/invoicing',
          icon: 'icon-speech',
          children: [{
            name: 'Invoice',
            url: '/ui-kits/invoicing/invoice',
            icon: 'icon-speech'
          }]
        },
        {
          name: 'Email',
          url: '/ui-kits/email',
          icon: 'icon-speech',
          children: [{
              name: 'Inbox',
              url: '/ui-kits/email/inbox',
              icon: 'icon-speech'
            },
            {
              name: 'Message',
              url: '/ui-kits/email/message',
              icon: 'icon-speech'
            },
            {
              name: 'Compose',
              url: '/ui-kits/email/compose',
              icon: 'icon-speech'
            }
          ]
        }
      ]
    },
    {
      divider: true,
      class: 'm-2'
    },
    {
      title: true,
      name: 'Labels',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'Label danger',
      icon: 'fa fa-circle',
      class: '',
      label: {
        variant: 'danger',
        class: ''
      }
    },
    {
      name: 'Label info',
      label: {
        variant: 'info'
      }
    },
    {
      name: 'Label warning',
      label: {
        variant: 'warning'
      }
    }
  ]
}

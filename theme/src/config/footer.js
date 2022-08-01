import { twitterIcon, youtubeIcon, githubIcon, instagramIcon } from "../icons/icons";


export const footerSocials = [{
        url: 'https://instagram.com/',
        icon: instagramIcon,
    },
    {
        url: 'https://youtube.com/',
        icon: youtubeIcon,
    },
    {
        url: 'https://twitter.com/littlesticksdev',
        icon: twitterIcon,
    },
    {
        url: 'https://github.com/defiours',
        icon: githubIcon,
    },
]

export const footerLists = [{
        title: 'Upcoming Events',
        items: [{
                title: 'First Event',
                slug: '/upcoming-events/events/first-event',
            },
            {
                title: 'Second Event',
                slug: '/upcoming-events/events/second-event',
            },
            {
                title: 'Third Event',
                slug: '/upcoming-events/events/third-event',
            },
        ],
    },
    {
        title: 'Company',
        items: [{
                title: 'About',
                slug: '/company/about',
            },
            {
                title: 'Upcoming Events',
                slug: '/upcoming-events',
            },
            {
                title: 'News',
                slug: '/news',
            },
            {
                title: 'Contact',
                slug: '/company/contact',
            },
        ],
    },
    {
        title: 'Resources',
        items: [{
                title: 'Legal',
                slug: '/company/legal',
            },
            {
                title: 'Style Guide',
                slug: '/theme/style-guide',
            },
        ],
    },
]
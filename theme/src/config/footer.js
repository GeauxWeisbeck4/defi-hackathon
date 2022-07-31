import { twitterIcon, youtubeIcon, githubIcon, instagramIcon } from "../icons/icons";


export const footerSocials = [
  {
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
    url: 'https://github.com/littlesticksdev/odyssey-theme',
    icon: githubIcon,
  },
]

export const footerLists = [
	{
		title: 'Upcoming Events',
		items: [
			{
				title: 'Event 1',
				slug: '/upcoming-events/info/event-1',
			},
			{
				title: 'Event 2',
				slug: '/upcoming-events/info/event-2',
			},
		],
	},
	{
		title: 'Company',
		items: [
			{
				title: 'About',
				slug: '/company/about',
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
		items: [
			{
				title: 'Get Started',
				slug: '/theme/get-started',
			},
			{
				title: 'Style Guide',
				slug: '/theme/style-guide',
			},
		],
	},
];

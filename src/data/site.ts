export const site = {
	name: 'Spraytech Pest and Weed Control',
	shortName: 'Spraytech',
	description:
		'Local pest and weed control services for homes and businesses in St. George and surrounding Southern Utah communities.',
	primaryLocation: {
		city: 'St. George',
		state: 'Utah',
		region: 'Southern Utah',
	},
	phone: {
		display: '(435) 705-3696',
		href: 'tel:+14357053696',
		smsHref: 'sms:+14357053696',
	},
	hours: {
		display: 'Monday-Saturday, 7 AM-7 PM',
		days: 'Monday-Saturday',
		time: '7 AM-7 PM',
	},
	licensedAndInsured: true,
} as const;

export type Site = typeof site;

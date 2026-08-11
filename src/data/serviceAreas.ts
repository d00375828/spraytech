export interface ServiceArea {
	name: string;
	slug: string;
	state: 'Utah';
}

export const serviceAreas = [
	{ name: 'St. George', slug: 'st-george', state: 'Utah' },
	{ name: 'Washington', slug: 'washington', state: 'Utah' },
	{ name: 'Santa Clara', slug: 'santa-clara', state: 'Utah' },
	{ name: 'Ivins', slug: 'ivins', state: 'Utah' },
	{ name: 'Hurricane', slug: 'hurricane', state: 'Utah' },
] as const satisfies readonly ServiceArea[];

export type ServiceAreaSlug = (typeof serviceAreas)[number]['slug'];

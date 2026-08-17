export interface ServiceArea {
	name: string;
	slug: string;
	state: 'Utah';
	isBuilt: boolean;
}

export const serviceAreas = [
	{ name: 'St. George', slug: 'st-george', state: 'Utah', isBuilt: false },
	{ name: 'Washington', slug: 'washington', state: 'Utah', isBuilt: false },
	{ name: 'Santa Clara', slug: 'santa-clara', state: 'Utah', isBuilt: false },
	{ name: 'Ivins', slug: 'ivins', state: 'Utah', isBuilt: false },
	{ name: 'Hurricane', slug: 'hurricane', state: 'Utah', isBuilt: false },
] as const satisfies readonly ServiceArea[];

export type ServiceAreaSlug = (typeof serviceAreas)[number]['slug'];

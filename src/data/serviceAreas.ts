export interface ServiceArea {
	name: string;
	slug: string;
	state: 'Utah';
	isBuilt: boolean;
}

export const serviceAreas = [
	{ name: 'St. George', slug: 'st-george', state: 'Utah', isBuilt: true },
	{ name: 'Washington', slug: 'washington', state: 'Utah', isBuilt: true },
	{ name: 'Santa Clara', slug: 'santa-clara', state: 'Utah', isBuilt: true },
	{ name: 'Ivins', slug: 'ivins', state: 'Utah', isBuilt: true },
	{ name: 'Hurricane', slug: 'hurricane', state: 'Utah', isBuilt: true },
] as const satisfies readonly ServiceArea[];

export type ServiceAreaSlug = (typeof serviceAreas)[number]['slug'];

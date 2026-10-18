export interface Service {
	name: string;
	slug: string;
	description: string;
	isBuilt: boolean;
}

export const services = [
	{
		name: 'Scorpion Control',
		slug: 'scorpion-control',
		description: "Targeted treatment for one of Southern Utah's most unwelcome residents.",
		isBuilt: true,
	},
	{
		name: 'Spider Control',
		slug: 'spider-control',
		description: 'Help reduce spiders and the places they like to hide around your home.',
		isBuilt: true,
	},
	{
		name: 'Ant Control',
		slug: 'ant-control',
		description: 'Treatment for trails, colonies and recurring ant problems.',
		isBuilt: true,
	},
	{
		name: 'Roach Control',
		slug: 'roach-control',
		description: 'Get cockroach problems under control before they spread.',
		isBuilt: true,
	},
	{
		name: 'Wasp Control',
		slug: 'wasp-control',
		description: 'Help remove active wasp problems around your home and property.',
		isBuilt: true,
	},
	{
		name: 'Rodent Control',
		slug: 'rodent-control',
		description: 'Identify rodent activity and help keep mice and rats out.',
		isBuilt: true,
	},
	{
		name: 'Weed Control',
		slug: 'weed-control',
		description:
			'Targeted weed treatment to help keep unwanted growth under control around your property.',
		isBuilt: true,
	},
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof services)[number]['slug'];

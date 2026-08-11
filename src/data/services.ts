export interface Service {
	name: string;
	slug: string;
	description: string;
}

export const services = [
	{
		name: 'Scorpion Control',
		slug: 'scorpion-control',
		description: "Targeted treatment for one of Southern Utah's most unwelcome residents.",
	},
	{
		name: 'Spider Control',
		slug: 'spider-control',
		description: 'Help reduce spiders and the places they like to hide around your home.',
	},
	{
		name: 'Ant Control',
		slug: 'ant-control',
		description: 'Treatment for trails, colonies and recurring ant problems.',
	},
	{
		name: 'Roach Control',
		slug: 'roach-control',
		description: 'Get cockroach problems under control before they spread.',
	},
	{
		name: 'Wasp Control',
		slug: 'wasp-control',
		description: 'Help remove active wasp problems around your home and property.',
	},
	{
		name: 'Rodent Control',
		slug: 'rodent-control',
		description: 'Identify rodent activity and help keep mice and rats out.',
	},
	{
		name: 'Weed Control',
		slug: 'weed-control',
		description:
			'Targeted weed treatment to help keep unwanted growth under control around your property.',
	},
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof services)[number]['slug'];

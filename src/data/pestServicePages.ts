import { site } from './site';

const benefits = [
	{ title: 'Local Knowledge', copy: 'Spraytech is based in Southern Utah and understands the conditions local homeowners deal with.' },
	{ title: 'Fast, Personal Service', copy: 'Communication stays simple and local.' },
	{ title: 'Straightforward Recommendations', copy: "We'll recommend the service that makes sense for your property without pressuring you into treatments you don't need." },
] as const;

const serviceAnswer = (service: string) =>
	`Yes. Spraytech offers both one-time and recurring ${service} service depending on what makes sense for your property and the activity you're dealing with.`;
const recurringAnswer =
	"No. We'll recommend the option that fits your situation without pressuring you into ongoing service you don't want.";
const areasAnswer = (service: string) =>
	`Spraytech provides ${service} in St. George and nearby communities including Washington, Santa Clara, Ivins, and Hurricane.`;
const licensedAnswer = 'Yes. Spraytech Pest and Weed Control is licensed and insured.';
const quoteAnswer = `Call or text ${site.phone.display}, or request a quote through our contact page.`;

const standardSteps = (problem: string) => [
	{ title: 'Understand the Problem', copy: `We start with what you're seeing and where ${problem} is showing up around the property.` },
	{ title: 'Recommend the Right Service', copy: "We'll recommend service based on the situation instead of automatically pushing every customer into the same plan." },
	{ title: 'Keep the Problem Under Control', copy: 'Choose one-time or recurring service depending on what makes sense for your property.' },
] as const;

export const pestServicePages = {
	spider: {
		title: 'Spider Control in St. George, UT | Spraytech',
		description: 'Local spider control in St. George, Utah from Spraytech Pest and Weed Control. One-time and recurring pest service for Southern Utah homeowners.',
		slug: 'spider-control', serviceName: 'Spider control',
		heroEyebrow: 'Spider Control • St. George, Utah', heroHeading: 'Spider Control in St. George, Utah',
		heroCopy: 'Spiders are common around Southern Utah homes, especially where they can find shelter and other insects. Spraytech provides local spider-control service to help get activity around your property under control.',
		localEyebrow: 'A Common Southern Utah Pest', localHeading: 'Why Spiders Show Up Around Homes.',
		localCopy: ['Spiders may settle around sheltered parts of a property and in places where other insects are present. Southern Utah homes can offer plenty of protected spaces around structures and landscaping.', 'Homeowners may notice activity around garages, patios, exterior walls, entry areas, and other quiet spaces around the property.'],
		placesHeading: 'Places spiders may show up', places: ['Garages', 'Exterior walls', 'Patios and covered areas', 'Landscaping', 'Cracks and sheltered spaces'],
		approachHeading: 'Getting Spider Activity Under Control.', steps: standardSteps('spider activity'),
		signsHeading: "When It's Time to Call for Spider Control.", signs: ['Repeated spider activity inside the home', 'Webs returning around entryways or exterior areas', 'Spiders frequently appearing in garages or patios', 'You want help reducing ongoing activity'],
		benefitsHeading: 'Local Spider Control Without the Runaround.', benefits,
		areasHeading: 'Spider Control Across the St. George Area.', faqsHeading: 'Spider Control Questions',
		faqs: [
			{ question: 'Are spiders common in Southern Utah?', answer: 'Yes. Spiders are common around Southern Utah homes, especially in sheltered areas and places where other insects are present.' },
			{ question: 'Do you offer one-time spider treatment?', answer: serviceAnswer('spider-control') },
			{ question: 'Do I have to sign up for recurring service?', answer: recurringAnswer },
			{ question: 'What areas do you provide spider control in?', answer: areasAnswer('spider control') },
			{ question: 'Are you licensed and insured?', answer: licensedAnswer },
			{ question: 'How do I get a quote?', answer: quoteAnswer },
		],
		ctaHeadline: 'Seeing Too Many Spiders Around Your Home?', ctaCopy: "Tell Spraytech what you're dealing with and we'll help you figure out the right next step.",
		relatedLinks: [{ label: 'Scorpion Control', href: '/scorpion-control/' }, { label: 'Ant Control', href: '/ant-control/' }],
	},
	ant: {
		title: 'Ant Control in St. George, UT | Spraytech', description: 'Local ant control in St. George, Utah from Spraytech Pest and Weed Control. Get help with recurring ant problems around your Southern Utah home.',
		slug: 'ant-control', serviceName: 'Ant control', heroEyebrow: 'Ant Control • St. George, Utah', heroHeading: 'Ant Control in St. George, Utah',
		heroCopy: 'Ants can quickly become a recurring problem around kitchens, patios, landscaping, and other parts of a property. Spraytech provides local ant-control service designed around Southern Utah homes.',
		localEyebrow: 'Small Pest. Big Nuisance.', localHeading: 'Why Ant Problems Keep Coming Back.',
		localCopy: ['Ants may establish colonies around a property and travel indoors while searching for food, moisture, or shelter. A trail inside can be a sign of activity extending beyond the ants currently in view.', 'Activity often appears around kitchens, patios, landscaping, doors, windows, and exterior edges where ants can move through the property.'],
		placesHeading: 'Places ants may show up', places: ['Kitchens and food areas', 'Around doors and windows', 'Patios', 'Landscaping', 'Cracks and exterior edges'],
		approachHeading: 'Getting an Ant Problem Under Control.', steps: standardSteps('ant activity'),
		signsHeading: "When It's Time to Call for Ant Control.", signs: ['Ant trails repeatedly appearing indoors', 'Ants returning after temporary DIY control', 'Repeated activity around kitchens or entry points', 'Ongoing colonies or activity around the property'],
		benefitsHeading: 'Local Ant Control Without the Runaround.', benefits, areasHeading: 'Ant Control Across the St. George Area.', faqsHeading: 'Ant Control Questions',
		faqs: [
			{ question: 'Are ants common around Southern Utah homes?', answer: 'Yes. Ants are a common nuisance around Southern Utah properties and may appear indoors while searching for food, moisture, or shelter.' },
			{ question: 'Do you offer one-time ant treatment?', answer: serviceAnswer('ant-control') },
			{ question: 'Do I need recurring service?', answer: recurringAnswer },
			{ question: 'What areas do you provide ant control in?', answer: areasAnswer('ant control') },
			{ question: 'Are you licensed and insured?', answer: licensedAnswer }, { question: 'How do I get a quote?', answer: quoteAnswer },
		],
		ctaHeadline: 'Tired of Ants Coming Back?', ctaCopy: "Tell Spraytech what you're seeing and we'll help you figure out the right next step.",
		relatedLinks: [{ label: 'Spider Control', href: '/spider-control/' }, { label: 'Roach Control', href: '/roach-control/' }],
	},
	roach: {
		title: 'Roach Control in St. George, UT | Spraytech', description: 'Local roach control in St. George, Utah from Spraytech Pest and Weed Control. One-time and recurring service for Southern Utah homeowners.',
		slug: 'roach-control', serviceName: 'Roach control', heroEyebrow: 'Roach Control • St. George, Utah', heroHeading: 'Roach Control in St. George, Utah',
		heroCopy: 'Cockroach problems can be difficult to manage once activity becomes established. Spraytech provides local roach-control service to help homeowners get the problem under control.',
		localEyebrow: "Don't Let the Problem Spread", localHeading: 'Where Roaches May Show Up Around a Home.',
		localCopy: ['Roaches may settle in sheltered areas where food or moisture is available. Once activity is established, homeowners may continue to see them in the same parts of the property.', 'Kitchens, bathrooms, garages, utility areas, cracks, and other protected spaces are among the places where activity may be noticed.'],
		placesHeading: 'Places roaches may show up', places: ['Kitchens', 'Bathrooms', 'Garages', 'Utility areas', 'Cracks and sheltered spaces'],
		approachHeading: 'Getting Roach Activity Under Control.', steps: standardSteps('roach activity'),
		signsHeading: "When It's Time to Call for Roach Control.", signs: ['Repeated sightings indoors', 'Activity returning after temporary control', 'Roaches appearing in kitchens or bathrooms', 'Signs of ongoing activity around sheltered areas'],
		benefitsHeading: 'Local Roach Control Without the Runaround.', benefits, areasHeading: 'Roach Control Across the St. George Area.', faqsHeading: 'Roach Control Questions',
		faqs: [
			{ question: 'Are cockroaches found in Southern Utah?', answer: 'Yes. Cockroaches can be found around Southern Utah homes, particularly where they have access to sheltered areas, food, or moisture.' },
			{ question: 'Do you offer one-time roach treatment?', answer: serviceAnswer('roach-control') },
			{ question: 'Do I have to sign up for recurring service?', answer: recurringAnswer },
			{ question: 'What areas do you provide roach control in?', answer: areasAnswer('roach control') },
			{ question: 'Are you licensed and insured?', answer: licensedAnswer }, { question: 'How do I get a quote?', answer: quoteAnswer },
		],
		ctaHeadline: 'Dealing With a Roach Problem?', ctaCopy: "Tell Spraytech what you're seeing and we'll help you figure out the right next step.",
		relatedLinks: [{ label: 'Ant Control', href: '/ant-control/' }, { label: 'Rodent Control', href: '/rodent-control/' }],
	},
	wasp: {
		title: 'Wasp Control in St. George, UT | Spraytech', description: 'Local wasp control in St. George, Utah from Spraytech Pest and Weed Control. Get help with unwanted wasp activity around your home and property.',
		slug: 'wasp-control', serviceName: 'Wasp control', heroEyebrow: 'Wasp Control • St. George, Utah', heroHeading: 'Wasp Control in St. George, Utah',
		heroCopy: 'Wasps can make patios, yards, entryways, and other outdoor areas uncomfortable to use. Spraytech provides local wasp-control service for Southern Utah homeowners.',
		localEyebrow: 'Outdoor Pest Control', localHeading: 'Where Wasps May Build Around Your Property.',
		localCopy: ['Wasps may build in sheltered places around a home or property. Their activity can become especially noticeable near spaces people use regularly.', 'Eaves, rooflines, covered patios, sheds, exterior structures, and other protected areas may provide places for wasps to build.'],
		placesHeading: 'Places wasps may build', places: ['Eaves and rooflines', 'Patios and covered areas', 'Sheds', 'Exterior structures', 'Sheltered areas around the property'],
		approachHeading: 'Getting Wasp Activity Under Control.', steps: standardSteps('wasp activity'),
		signsHeading: "When It's Time to Call for Wasp Control.", signs: ['Repeated wasp activity around entryways', 'Visible nest activity', 'Wasps frequently using patios or outdoor living areas', 'Recurring activity around structures'],
		benefitsHeading: 'Local Wasp Control Without the Runaround.', benefits, areasHeading: 'Wasp Control Across the St. George Area.', faqsHeading: 'Wasp Control Questions',
		faqs: [
			{ question: 'Are wasps common in Southern Utah?', answer: 'Yes. Wasps are a common outdoor pest around Southern Utah properties and may build in sheltered areas around structures.' },
			{ question: 'Do you offer one-time wasp control?', answer: serviceAnswer('wasp-control') },
			{ question: 'Do I need recurring wasp service?', answer: "Not necessarily. We'll recommend one-time or recurring service based on the activity around your property without pressuring you into service you don't need." },
			{ question: 'What areas do you provide wasp control in?', answer: areasAnswer('wasp control') },
			{ question: 'Are you licensed and insured?', answer: licensedAnswer }, { question: 'How do I get a quote?', answer: quoteAnswer },
		],
		ctaHeadline: 'Wasps Taking Over Your Outdoor Space?', ctaCopy: "Tell Spraytech what you're dealing with and we'll help you figure out the right next step.",
		relatedLinks: [{ label: 'Spider Control', href: '/spider-control/' }, { label: 'Ant Control', href: '/ant-control/' }],
	},
	rodent: {
		title: 'Rodent Control in St. George, UT | Spraytech', description: 'Local rodent control in St. George, Utah from Spraytech Pest and Weed Control. Get help with unwanted mice and rodent activity around your property.',
		slug: 'rodent-control', serviceName: 'Rodent control', heroEyebrow: 'Rodent Control • St. George, Utah', heroHeading: 'Rodent Control in St. George, Utah',
		heroCopy: 'Mice and other unwanted rodents can find their way into garages, storage areas, and homes while looking for food and shelter. Spraytech provides local rodent-control service for Southern Utah properties.',
		localEyebrow: 'Keep Unwanted Guests Out', localHeading: 'Signs of Rodent Activity Around Your Property.',
		localCopy: ['Rodent activity is not always limited to a direct sighting. Homeowners may first notice signs in quiet, sheltered parts of a home or property.', 'Droppings, movement sounds, damaged food packaging, or activity around garages and storage areas can all be reasons to take a closer look.'],
		placesHeading: 'Common signs of rodent activity', places: ['Droppings', 'Scratching or movement sounds', 'Damaged food packaging', 'Activity around garages or storage areas', 'Repeated sightings'],
		approachHeading: 'Getting Rodent Activity Under Control.', steps: standardSteps('rodent activity'),
		signsHeading: "When It's Time to Call for Rodent Control.", signs: ['Repeated rodent sightings', 'Signs of activity indoors', 'Activity around garages or storage areas', 'Recurring problems around the property'],
		benefitsHeading: 'Local Rodent Control Without the Runaround.', benefits, areasHeading: 'Rodent Control Across the St. George Area.', faqsHeading: 'Rodent Control Questions',
		faqs: [
			{ question: 'What are common signs of rodent activity?', answer: 'Common signs can include droppings, scratching or movement sounds, damaged food packaging, and repeated activity around garages or storage areas.' },
			{ question: 'Do you offer one-time rodent service?', answer: serviceAnswer('rodent-control') },
			{ question: 'Do I have to sign up for recurring service?', answer: recurringAnswer },
			{ question: 'What areas do you provide rodent control in?', answer: areasAnswer('rodent control') },
			{ question: 'Are you licensed and insured?', answer: licensedAnswer }, { question: 'How do I get a quote?', answer: quoteAnswer },
		],
		ctaHeadline: 'Seeing Signs of Rodents Around Your Property?', ctaCopy: "Tell Spraytech what you're dealing with and we'll help you figure out the right next step.",
		relatedLinks: [{ label: 'Roach Control', href: '/roach-control/' }, { label: 'Scorpion Control', href: '/scorpion-control/' }],
	},
} as const;

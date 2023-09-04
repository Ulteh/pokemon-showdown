export const Formats: FormatList = [	
	{
		section: "CYBERVILLE",
		column: 1,
	},
	{
		name: "[Gen 9] Cyberville Standard",

		mod: 'gen9cyb',
		ruleset: ['Standard'],
		banlist: ['Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Shed Tail'],
	},
	{
		name: "[Gen 9] Cyberville NatDexDraft",

		mod: 'gen9cyb',
		ruleset: ['Standard NatDex', 'Sleep Clause Mod', 'Evasion Clause', 'Draft'],
		banlist: ['Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Shed Tail'],
	},
	
	{
		name: "[Gen 9] Cyberville NatDex FFA",
		
		//mod: 'gen9cyb',
		gametype: 'freeforall',
		ruleset: ['Standard NatDex'],
		banlist: ['Arena Trap', 'Shadow Tag'],
	},
];

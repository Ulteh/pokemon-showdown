export const Moves: {[k: string]: ModdedMoveData} = {
	acidspray: {
		inherit: true,
		basePower: 65,
		pp: 15,
	},
	aircutter: {
		inherit: true,
		basePower: 70,
		pp: 20,
	},
	blastburn: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	bounce: {
		inherit: true,
		accuracy: 95,
		basePower: 90,
	},
	cometpunch: {
		inherit: true,
		basePower: 20,
		type: "Fighting",
	},
	darkvoid: {
		inherit: true,
		accuracy: 90,
		pp: 5,
	},
	dig: {
		inherit: true,
		basePower: 100,
	},
	dive: {
		inherit: true,
		basePower: 100,
	},
	eternabeam: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	fly: {
		inherit: true,
		accuracy: 100,
		basePower: 100,
		pp: 10,
	},
	frenzyplant: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	gigaimpact: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	grasswhistle: {
		inherit: true,
		accuracy: 70,
		pp: 30,
	},
	hydrocannon: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	hyperbeam: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	hypnosis: {
		inherit: true,
		accuracy: 75,
		pp: 25,
	},
	lovelykiss: {
		inherit: true,
		accuracy: 75,
		pp: 25,
		type: "Fairy",
	},
	meteorassault: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	prismaticlaser: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	pursuit: {
		inherit: true,
		accuracy: 100,
		basePower: 55,
	},
	razorwind: {
		inherit: true,
		accuracy: 100,
		basePower: 110,
	},
	roaroftime: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	rockwrecker: {
		inherit: true,
		accuracy: 85,
		basePower: 180,
	},
	sing: {
		inherit: true,
		accuracy: 80,
		pp: 20,
	},
	sleeppowder: {
		inherit: true,
		accuracy: 80,
		pp: 15,
	},
	snore: {
		inherit: true,
		basePower: 85,
	},
	spore: {
		inherit: true,
		accuracy: 80,
		pp: 15,
	},
	vitalthrow: {
		num: 233,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			const damagedByTarget = pokemon.attackedBy.some(
				p => p.source === target && p.damage > 0 && p.thisTurn
			);
			if (damagedByTarget) {
				this.debug('BP doubled for getting hit by ' + target);
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		name: "Vital Throw",
		pp: 10,
		priority: -4,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
};

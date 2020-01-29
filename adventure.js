// Available functions:

// getTitle()
// getAdventure()
// getNPC()

// getHookAndDraw()
// getPlotConcept()

// getAntagonist()
// getPlotFulfillmentAndLocation()

// getTwist()
// getTwist()
// getGoal()
// getLocation()
// getLocation()

// others:

// getArtifact()
// getSupportingCast()
// getObstacle()
// getCreature()

let religiousTenents = [
  "Set",
  "Jhebbal Sag",
  "Asura",
  "Ishtar",
  "Mitra",
  "Bel",
  "The Spider-God"
]

let cult = [
  "Black Seers of Mount Yimsha",
  "Cult of Jhebbal Sag",
  "Cult of Asura",
  "The Spider Cult of Yezud",
  "Cannibal Cult of Zamboula",
  "Cult of Hanuman",
  "The Black Ring",
  "The Red Brotherhood",
  "The Scarlet Circle"
]

let legendaryCharacter = [
  "Conan",
  "Valeria",
  "Amalric",
  "Astreas",
  "Thutmekri",
  "Olgerd Vladislav",
  "Taurus of Nemedia",
  "Thoth-Amon"
]

let legendaryArtifact = [
  "The Heart of Ahriman",
  "A lock of Atali's hair",
  "Golden elixir of Xuthal",
  "Headdress of Zogar Sag",
  "Khemsa's Stygian girdle",
  "The Bowl of Set",
  "The Teeth of Gwahlur",
  "The Heart of the Elephant",
  "The Serpent Ring of Set"
]

let artifactState = [
  "Ancient",
  "Sentient",
  "Cursed",
  "Fragile",
  "Unstable",
  "Mutable",
  "Infectious",
  "Blessed",
  "Incorruptible",
  "Locked",
  "Frozen (iced)",
  "Ethereal",
  "Lucky",
  "Toxic",
  "Broken",
  "Buried",
  "Powerless",
  "Corrupt",
  "Otherworldly"
]
let stateX = rollOn(artifactState)
let stateY = stateX
while (stateY == stateX) stateY = rollOn(artifactState)
artifactState = artifactState.concat([`Appears to be ${stateX}, but is actually ${stateY}`])

let artifactDescriptor = [
  `Book`,
  `Scroll`,
  `Key`,
  `Religious icon of ${rollOn(religiousTenents)}`,
  `Statue`,
  `Rare plant or flower Jewel`,
  `Precious ore`,
  `Crystal`,
  `Contraption`,
  `Otherworldly object`,
  `Heirloom`,
  `Potion`,
  `Armor and/or shield`,
  `Drug`,
  `Priceless art object`,
  `Jewelry`,
  `Weapon`,
  `Legendary weapon`,
  `Legendary artifact '${rollOn(legendaryArtifact)}'`
]

function getArtifact () {
  return rollOn(artifactState) + ' ' + rollOn(artifactDescriptor)
}

let knowledgeObjective = [
  "Map (treasure, lost land, building plans, kingdom defenses)",
  "Crude alchemical discovery",
  "Cure to a strange illness",
  "A weakness",
  "An ancient secret",
  "Escape route",
  "Conspiracy",
  "Strange formula",
  "Criminal activity",
  "A legend",
  "A lost language",
  `Concerning an artifact (${rollOn(artifactDescriptor)})`,
  `A cult secret of ${rollOn(cult)}`,
  "The truth to a cover up",
  "What is at the location?",
  "What transpired?",
  "A traitor's identity",
  "Historical data",
  "Cartographical data",
  "Otherworldly knowledge"
]

let creature = [
  "Abomination",
  "Child of the Dark",
  "Creature of the Far Reaches of the Skies ",
  "Devil of the Outer Dark",
  "Forest devil",
  "Malign plant",
  "Mummified sorcerer",
  "Werewolf",
  "Winged One"
]

function getOpponent () {
  let opponent = [
    "Bandit",
    "Berserker",
    "Bodyguard",
    "Cultist",
    "Cult leader",
    "Degenerate",
    "Degenerate warrior",
    "Guard sergeant",
    "Knight",
    "Pirate",
    "Pirate captain",
    "Savage",
    "Sorcerer",
    "Thug",
    "Ghoul",
    "Skeletal warrior",
    "Rat thing",
    "Frost giant",
    "Black One",
  ]
  opponent = opponent.concat([`${getCreature()}`])

  return rollOn(opponent)
}

// building (also used by objectives)
let sinister = [
  "Castle",
  "Temple",
  "Stone circle",
  "Church",
  "Mansion",
  "Cemetery",
  "Cave system",
  "Tomb",
  "Archaeological excavation",
  "Ruins",
  "Mine",
  "Hospital",
  "Monastery",
  "Museum",
  "Swamp",
  "Stone circle",
  "Ancient battlefield",
  "Gateway",
  "Island",
  "Monolith"
]

function getSupportingCast () {
  let nationalities = [
    { "weight": 1, "value": "Hyperborea" },
    { "weight": 1, "value": "Border Kingdom" },
    { "weight": 1, "value": "Nordheim: Asgard or Vanaheim" },
    { "weight": 1, "value": "Cimmeria" },
    { "weight": 1, "value": "Bossonian Marches" },
    { "weight": 2, "value": "Gunderland" },
    { "weight": 2, "value": "Aquilonia" },
    { "weight": 2, "value": "Koth" },
    { "weight": 2, "value": "Nemedia" },
    { "weight": 2, "value": "Ophir" },
    { "weight": 2, "value": "Brythunia" },
    { "weight": 2, "value": "Argos" },
    { "weight": 2, "value": "Zamora" },
    { "weight": 2, "value": "Shem" },
    { "weight": 2, "value": "Stygia" },
    { "weight": 1, "value": "Corinthia" },
    { "weight": 1, "value": "Zingara" },
    { "weight": 1, "value": "Khoraja" },
    { "weight": 1, "value": "Khauran" },
    { "weight": 1, "value": "Kush" },
    { "weight": 1, "value": "Darfar" },
    { "weight": 1, "value": "Keshan" },
    { "weight": 1, "value": "Punt" },
    { "weight": 1, "value": "Zembabwei" },
    { "weight": 1, "value": "The Black Kingdoms" },
    { "weight": 1, "value": "Turan" },
    { "weight": 1, "value": "Iranistan, Ghulistan" },
    { "weight": 1, "value": "Hyrkania" }
  ]

  let quirks = [
    { "weight": 1, "value": "Eye color is mismatched" },
    { "weight": 1, "value": "Prone to bouts of twitching" },
    { "weight": 1, "value": "Talks using as few words as possible" },
    { "weight": 1, "value": "Appears to be constantly distracted" },
    { "weight": 1, "value": "Has visible tribal scars or tattoos" },
    { "weight": 1, "value": "Swears every other word during conversation" },
    { "weight": 1, "value": "Always refers to a list of rules, which can be real or imagined" },
    { "weight": 1, "value": "Constantly drinking, but never seems drunk" },
    { "weight": 1, "value": "Slips as many quotes and figures of speech as possible into conversation" },
    { "weight": 1, "value": "Is extremely flirtatious, but seems shocked if anyone responds" },
    { "weight": 1, "value": "Abhors physical contact. Visibly cleans self if this occurs" },
    { "weight": 1, "value": "Sports several piercings" },
    { "weight": 1, "value": "Performs a superstitious tic to ward away bad luck" },
    { "weight": 1, "value": "Can never comprehend jokes or sarcasm" },
    { "weight": 1, "value": "Holds on to first impressions and discounts anything that contradicts that opinion" },
    { "weight": 1, "value": "Always seeks to obtain and hold eye contact for an uncomfortably long time Talks in sibilant whispers" },
    { "weight": 1, "value": "Attaches a cost to everything" },
    { "weight": 1, "value": "Missing a limb" },
    { "weight": 1, "value": "Covered in warts and boils" },
    { "weight": 1, "value": "Extremely hairy" },
    { "weight": 1, "value": "Laughs nervously and inappropriately" },
    { "weight": 1, "value": "Uncouth, vulgar, or spectacularly rude" },
    { "weight": 1, "value": "Very possessive of an object or person" },
    { "weight": 1, "value": "Persistently claims one-upmanship" },
    { "weight": 1, "value": "Treats everyone with complete disdain" },
    { "weight": 1, "value": "Always expects a negative outcome" },
    { "weight": 1, "value": "Is a habitual gambler" },
    { "weight": 1, "value": "Becomes aggressive when criticized" },
    { "weight": 1, "value": "Claims to know someone in every town and city" },
    { "weight": 1, "value": "Is a glutton (food, wealth, power, pleasure, etc.)" },
    { "weight": 1, "value": "Has an obvious tell when lying" },
    { "weight": 1, "value": "Can only talk by shouting" },
    { "weight": 1, "value": "All conversations are drawn out and formal" },
    { "weight": 1, "value": "Struggles to talk through a hacking cough" },
    { "weight": 1, "value": "Badly disfigured by disease" },
    { "weight": 1, "value": "Has extremely obscure tastes in food and drink" },
    { "weight": 1, "value": "Has a terrible catchphrase" },
    { "weight": 1, "value": "Constantly relates in the third person" }
  ]

  let quirk1 = rollOn(quirks)
  let quirk2 = rollOn(quirks, quirk1.index)

  return quirk1 + ' and ' + quirk2.toLowerCase();
}

// console.log('Supporting Cast Member:', getSupportingCast());
// console.log('Supporting Cast Member:', getSupportingCast());
// console.log("---");


function getTitle () {
  let objects = [
    "Jewel",
    "Gem",
    "Amulet",
    "Crown",
    "Scepter",
    "Throne",
    "Skull",
    "Bone",
    "Thunder",
    "Rain",
    "Wind",
    "Storm",
    "Knife",
    "Sword",
    "Axe",
    "Spear",
    "Blade",
    "Night",
    "Midnight",
    "Shadow",
    "Darkness",
    "Kingdom",
    "Empire",
    "Land",
    "Realm",
    "Tribe",
    "People",
    "Folk",
    "Flame",
    "Fire",
    "Pyre",
    "Brand",
    "Circle",
    "Ring",
    "Obelisk",
    "Column"
  ]

  let entities = [
    `${rollOn(["Demon", "Devil", "Fiend", "Horror"])}`,
    `${rollOn(["Ghost", "Spirit", "Specter"])}`,
    `${rollOn(["Ghoul", "Dweller", "Serpent Folk", "Abomination"])}`,
    `${rollOn(["Vulture", "Serpent", "Eagle", "Wolf", "Raven", "Lion", "Tiger", "Owl", "Ape", "Rat", "Eagle", "Hound", "Hawk"])}`,
    `${rollOn(["King", "Queen", "Lord", "Lady", "Emperor", "Empress", "Warlord", "Prince", "Princess"])}`,
    `${rollOn(["Sorcerer", "Witch"])}`,
    `${rollOn(["Priest", "Priestess"])}`,
    `God (of ${rollOn(religiousTenents)})`,
    `${rollOn(["Phoenix", "Dragon", "Hydra", "Mummy"])}`,
    `${rollOn(["Stranger", "The One", "Dweller", "Lurker", "Holder", "Keeper"])}`
  ]

  let locations = [
    "Tower",
    `${rollOn(["Citadel", "Castle", "Fortress"])}`,
    `${rollOn(["Cave", "Cavern"])}`,
    "City",
    "River",
    "Pool",
    "Forest",
    "Temple",
    "Pit",
    `${rollOn(["Tomb", "Crypt"])}`
  ]

  let dispositions = [
    "Born",
    "Cursed",
    "Haunted",
    "Doomed",
    "Lost",
    "Damned",
    "Spawned",
    "Fallen",
    "Broken",
    "Forgotten"
  ]

  let descriptors = [
    `${rollOn(["Black", "Ebon", "Crimson", "Red", "Scarlet"])}`,
    `${rollOn(["Ancient", "Elder", "Old"])}`,
    `${rollOn(["Iron", "Steel", "Silver", "Gold/Golden", "Stone", "Bronze"])}`,
    `${rollOn(["Cold", "Fire/Fiery"])}`,
    `${rollOn(["Shining", "Gleaming", "Jewelled", "Shadowed"])}`
  ]

  let start = [
    "The ",
    "",
    "A/An "
  ]

  let titleStructures = [
    { "value": `${rollOn(start)}${maybeGetEntryFromList(descriptors)}${rollOn(objects)} on the ${rollOn(objects)}` },
    { "value": `${rollOn(start)}${maybeGetEntryFromList(descriptors)}${rollOn(objects)} of the ${rollOn(objects)}` },
    { "value": `${rollOn(start)}${maybeGetEntryFromList(descriptors)}${rollOn(entities)} in the ${rollOn(locations)}` },
    { "value": `${rollOn(start)}${rollOn(objects)} of ${rollOn(objects)}` },
    { "value": `A/an ${rollOn(entities)} ${rollOn(["Is", "Will Be", "Shall Be"])} ${rollOn(dispositions)}` },
    { "value": `${rollOn(start)}${rollOn(dispositions)} of ${rollOn(entities)}` },
    { "value": `The ${rollOn(locations)}` },
    { "value": `${rollOn(start)}${maybeGetEntryFromList(descriptors)}${rollOn(objects)}` },
    { "value": `${maybeGetEntryFromList(descriptors)}${rollOn(objects)} in ${rollOn(locations)}` },
    { "value": `${maybeGetEntryFromList(descriptors)}${rollOn(entities)} of ${rollOn(locations)}` }
  ]

  return rollOn(titleStructures);
}


function getCreature () {
  let creature = [
    "Abomination",
    "Child of the Dark",
    "Creature of the Far Reaches of the Skies",
    "Devil of the Outer Dark",
    "Forest devil",
    "Malign plant",
    "Mummified sorcerer",
    "Werewolf",
    "Winged One"
  ]

  return rollOn(creature)
}


function getAdventure () {
  let descriptors = [
    "A chaotic",
    "A frozen",
    "An ominous",
    "A claustrophobic",
    "An eerie",
    "A fathomless",
    "A sprawling",
    "A malodorous",
    "A vibrant",
    "A barren",
    "An oppressive",
    "An obscure",
    "A brackish",
    "A foggy or misty",
    "A searing",
    "A tempestuous",
    "An empty",
    "A crumbling",
    "A weird"
  ]

  let settingDescriptors = descriptors.concat([`${rollOn(descriptors)} and ${rollOn(descriptors).toLowerCase()}`])

  let settings = [
    `${rollOn(settingDescriptors)} jungle`,
    `${rollOn(settingDescriptors)} island`,
    `${rollOn(settingDescriptors)} mountain range`,
    `${rollOn(settingDescriptors)} back alley`,
    `${rollOn(settingDescriptors)} crypt`,
    `${rollOn(settingDescriptors)} blood-soaked battlefield`,
    `${rollOn(settingDescriptors)} courtesan's chambers`,
    `${rollOn(settingDescriptors)} noble's villa`,
    `${rollOn(settingDescriptors)} sewer system`,
    `${rollOn(settingDescriptors)} ruined keep`,
    `${rollOn(settingDescriptors)} hidden temple`,
    `${rollOn(settingDescriptors)} execution chamber`,
    `${rollOn(settingDescriptors)} slavers market`,
    `${rollOn(settingDescriptors)} graveyard`,
    `${rollOn(settingDescriptors)} desert`,
    `${rollOn(settingDescriptors)} lake or ocean`,
    `${rollOn(settingDescriptors)} forest`,
    `${rollOn(settingDescriptors)} swamp`,
    `${rollOn(settingDescriptors)} mine`,
    `${rollOn(settingDescriptors)} royal court`
  ]

  return rollOn(settings)
}


let locationObjetive = [

]

function getPlotFulfillmentAndLocation () {
  let antagonistRequirementToFulfill = [
    `Willing sacrificial victims`,
    `Unwilling sacrificial victims`,
    `Subjects for experimentation`,
    `An ancient text`,
    `Hidden knowledge (${rollOn(knowledgeObjective)})`,
    `A specific location (${rollOn(locationObjetive)})`,
    `An otherworldly gateway`,
    `A relic of Acheron or Valusia`,
    `A lock of hair (${getAntagonist()})`,
    `The kidnap of a powerful figure`,
    `A precious jewel`,
    `An extract from the books of Skelos`,
    `A strange and alien device`,
    `A stone circle`,
    `A cursed object`,
    `A sorcerer's tome`,
    `An alignment of the stars`,
    `The blood of a royal`,
    `The heart of an otherworldly creature (${getCreature()})`,
    `The horn of a living dragon`
  ]

  let fromWhere = [
    `Mount Yimsha`,
    `Atlantean ruins`,
    `Hyperborea`,
    `The Island of the Black Ones A lost island or ruin`,
    `A sacred temple`,
    `A concealed tomb`,
    `A pyramid lost to the desert`,
    `A cursed glade`,
    `A sunken ship`,
    `A trap-filled dungeon`,
    `The vault of a hidden cult (${rollOn(cult)})`,
    `A pirate haven`,
    `The hidden depths of the Maul`,
    `An otherworldly gateway`,
    `An otherworldly entity's lair (${getCreature()})`,
    `A cursed and forgotten city A sorcerer's lair`,
    `A royal vault A dragon's lair`
  ]

  return rollOn(antagonistRequirementToFulfill) + ' from/where ' + rollOn(fromWhere)
}

function getNPC () {
  let npcs = [
    "Royalty",
    "Nobility",
    "Militia",
    "Natives",
    "Mercenary soldiers",
    "Porters",
    "Slaves",
    `Clergy of ${rollOn(religiousTenents)}`,
    "Bounty hunter",
    "Hunter"
  ]

  let temperament = [
    "Benevolent",
    "Friendly",
    "Indifferent",
    "Unfriendly",
    "Hostile"
  ]

  let npc = rollOn(temperament) + ' ' +rollOn(npcs)

  if (Math.random() > 0.95)
    npc = npc + ' and ' + rollOn(temperament) + ' ' +rollOn(npcs).toLowerCase()

  return npc
}

// console.log('npc suggestion 1:', getNPC());
// console.log('npc suggestion 2:', getNPC());
// console.log("---");


function getPlotConcept () {
  let plot = [
    "Overthrow the ruling elite",
    "Complete an infernal ritual",
    "Tear a gateway to an ancient era",
    "Foment a war",
    "Destruction of a place, a group, or a creature",
    "Gather information to prove the existence of something or someone",
    "Unleash the power of an otherworldly horror",
    "Protect a person or place",
    "Gain control of a person or place",
    "Break a deadlock",
    "A secret coup",
    "Dissection and experimentation",
    "Enact revenge for a wrongdoing (real or perceived)",
    "Cover up a dirty secret",
    "Exploitation of a group of people",
    "The pursuit of knowledge",
    "Recover an ancient artifact",
    "Recover an otherworldly relic",
    "Resurrecting an ancient power",
    "World domination!"
  ]

  let motivation = [
    "Vengeance",
    "Pure malice",
    "Intense hatred",
    "Envy",
    `Being manipulated by someone or something (${rollOn(getAntagonist)} is used as a front by ${rollOn(getAntagonist)} who is the real antagonist)`,
    "An ancient prophecy",
    "The voices have spoken...",
    "Forbidden knowledge",
    `${rollOn(knowledgeObjective)}`,
    "Dreams or visions",
    "Protect interests",
    "Greed",
    "Spiritual or (un)ethical beliefs",
    "To protect a person, place, or belief",
    "To strike first",
    "An ancient feud",
    "For the greater good",
    "Repentance for a mistake",
    "An unpayable debt",
    "Megalomania"
  ]

  motivation = motivation.concat([`To divert attention from the true scheme (getPlotConcept)`])
  // motivation = motivation.concat([`To divert attention from the true scheme (${getPlotConcept()})`])

  return rollOn(plot) + ' because of ' + rollOn(motivation).toLowerCase()
}

// console.log('plot:', getPlotConcept());
// console.log("---");

function getHookAndDraw () {
  let draw = [
    "Delivered outrageous demands",
    "Sent an invitation",
    "Lied to the player characters",
    `Delivered sensitive information (${rollOn(knowledgeObjective)})`,
    "Offered a fortune",
    "Asked for help",
    "Attempted blackmail or extortion",
    "Funded an expedition",
    "Has mistaken a player character's identity",
    "Offered a contract of employment",
    "Placed an artifact in a player character's safekeeping with their final breath",
    "Performed a dangerous ritual",
    "Called in a debt or favor",
    "Sent a warning",
    "Has information on someone relevant who is missing or dead",
    "Stole from the player characters",
    "Seeks revenge",
    "Is worried for their life",
    "Has been framed for crime or treason",
    `Offered details on another antagonist (${getAntagonist()})`
  ]

  let hook = [
    `A close friend ${rollOn(draw).toLowerCase()}`,
    `A kidnapped relative ${rollOn(draw).toLowerCase()}`,
    `An anonymous letter ${rollOn(draw).toLowerCase()}`,
    `A wizened scholar ${rollOn(draw).toLowerCase()}`,
    `An ancient prophecy ${rollOn(draw).toLowerCase()}`,
    `A fanatical layperson of ${rollOn(religiousTenents)} ${rollOn(draw).toLowerCase()}`,
    `A dying man or woman ${rollOn(draw).toLowerCase()}`,
    `A member of ${rollOn(cult)} ${rollOn(draw).toLowerCase()}`,
    `An old acquaintance ${rollOn(draw).toLowerCase()}`,
    `A noble ${rollOn(draw).toLowerCase()}`,
    `Unwittingly caught between two opposing forces`,
    `Stumble on a strange event or dangerous location`,
    `A wealthy entrepreneur ${rollOn(draw).toLowerCase()}`,
    `A seemingly freak accident ${rollOn(draw).toLowerCase()}`,
    `A priest or priestess of ${rollOn(religiousTenents)} ${rollOn(draw).toLowerCase()}`,
    `A diplomat ${rollOn(draw).toLowerCase()}`,
    `The local militia ${rollOn(draw).toLowerCase()}`,
    `A former enemy ${rollOn(draw).toLowerCase()}`,
    `A member of a royal family ${rollOn(draw).toLowerCase()}`,
    `A despotic tyrant ${rollOn(draw).toLowerCase()}`
  ]

  return rollOn(hook)
}

// console.log('hook:', getHookAndDraw());
// console.log("---");


function getAntagonist () {
  let trait = [
    "An aggressive",
    "A disgruntled",
    "An ambitious",
    "A manipulative",
    "An unpredictable",
    "An obsessed",
    "A maniacal",
    "A tortured",
    "A cruel",
    "A psychotic",
    "An impulsive",
    "A covert",
    "A disillusioned",
    "A traitorous",
    "A conspiratorial",
    "An intolerant",
    "A vindictive",
    "A masochistic",
    "An ineffable",
    "A layered quality"
  ]

  trait = trait.concat([rollOn(trait) + ' and ' + rollOn(trait)])

  let primaryMalefactor = [
    `${rollOn(trait)} otherworldly entity`,
    `${getCreature()}`,
    `${rollOn(trait)} nefarious ${rollOn(cult)}`,
    `${rollOn(trait)} villainous noble`,
    `${rollOn(trait)} crime syndicate`,
    `${rollOn(trait)} tyrannical overlord`,
    `${rollOn(trait)} evil priest or priestess A crime lord`,
    `${rollOn(trait)} infernal sorcerer`,
    `${rollOn(trait)} pirate king or queen`,
    `${rollOn(trait)} tribal chieftain`,
    `${rollOn(trait)} guild leader`,
    `${rollOn(trait)} unfeeling historian`,
    `${rollOn(trait)} insane collector of antiquities`,
    `${rollOn(trait)} mercenary captain`,
    `${rollOn(trait)} legendary gladiator`,
    `${rollOn(trait)} intelligent beast`,
    `${rollOn(trait)} corrupt judiciary`,
    `One or more royal advisors (${rollOn(trait)})`,
    `One or more members of a royal family (${rollOn(trait)})`,
    `${rollOn(trait)} despotic king or queen`
  ]

  return rollOn(primaryMalefactor)
}

// console.log('antagonist option 1:', getAntagonist());
// console.log('antagonist option 2:', getAntagonist());
// console.log("---");


function getObstacle () {
  let obstacles = [
    "On a short timescale",
    "Considered an unreachable destination (lost island, deep underwater, inside a volcano)",
    "Numerous distractions along the way (side missions, rival factions, opportunities)",
    "Key knowledge is required (held in a location or by a person — usually guarded)",
    "Physically or environmentally challenging (frozen tundra, cloying swamp, dense jungle)",
    "Another non-player character faction is also involved (use Non-Player Characters and Temperament tables to determine)", // todo
    "It is guarded by at least a Nemesis level entity or Toughened unit",
    "They must carry a hindrance (fragile asset, incompetent person, dangerous prisoner)",
    "Battered by the elements (volcanic activity, sand or snow storms, earthquakes, tsunamis, etc.)",
    "Must cross hotly disputed territory",
    "Famine",
    "Poverty stricken (rotten, stolen, corrupted, or faulty equipment)",
    "Extortionate cost (in something the character's value)",
    "Lesser of two evils (working with an uncomfortable ally)",
    "Civil unrest (riots, terrorists)",
    "Extortion and bribery (a group member is bribed or held to ransom)",
    "Sold misinformation",
    "Problems with the authorities (arrested, bounty placed)",
    "Strange malady that requires the antagonists' plot fulfillment to cure",
    "Ambushed!",
  ]

  return rollOn(obstacles)
}

function getTwist () {
  let twists = [
    "They must make a great personal sacrifice (one or more group members)",
    "They are the experiment (a group or faction is testing their abilities)",
    "Led into a trap (they are the antagonist's missing ingredient)",
    "Into the jaws of death (no one is expected to leave alive)",
    "The antagonist is part of the group (if played right, maybe even a player character)",
    "Intelligence leads them to believe there is only one to deal with (they were wrong!)",
    "Familial connections (the antagonist has close ties to a player character)",
    `Snake in the grass (a traitor working for an independent faction: ${getNPC()})`,
    "High body count",
    "Damned if we do... (letting the antagonist escape will save countless lives)",
    "A person or object that is a required to foil the antagonist is also exactly what the antagonist needs!",
    "To understand a villain, you must become the villain (they must do bad things to achieve their goal)",
    `The antagonist is a patsy for the true villain (${getAntagonist()})`,
    "The antagonist is performing heinous acts in the hope of preventing a greater evil",
    "Fulfillment before their eyes (the group arrive too late or the event unfolds around them)",
    "Cut off and left adrift (the group's supporters fall strangely silent and no longer provide support)",
    "A key character of the plot is killed, only to return alive later",
    "The player characters are working for the real villain and the antagonist is trying to stop them",
    "Tread dark paths (the player characters must open themselves to Corruption to achieve a greater good)"
  ]

  twists = twists.concat([`${rollOn(twists)} and ${rollOn(twists)}`])

  return rollOn(twists)
}


// console.log('obstacle:', getObstacle());
// console.log('twist:', getTwist());
// console.log("---");


function getGoal () {
  let goals = [
    "Explore",
    "Recover",
    "Plunder",
    "Destroy",
    "Protect",
    "Deliver",
    "Capture",
    "Find/Locate",
    "Negotiate",
    "Scout",
    "Divert",
    "Distract",
    "Unveil",
    "Hide",
    "Understand",
    "Prove",
    "Disprove",
    "Steal",
    "Infiltrate",
    "Rescue"
  ]

  let personObjective = [
    "Civilian",
    "Roll",
    "Militia",
    "Soldier",
    "Scholar",
    "Insane genius",
    "Fugitive",
    "Criminal",
    "Spy",
    "Traitor",
    "Mercenary",
    `Priest or priestess of ${rollOn(religiousTenents)}`,
    "Noble",
    "Historian",
    "Politician",
    "Sorcerer",
    "Archaeologist",
    "Heir/heiress",
    "Smuggler"
  ]

  personObjective = personObjective.concat([`Wounded ${rollOn(personObjective)}`])
  personObjective = personObjective.concat([`Royal ${rollOn(personObjective)}`])

  let objectives = [
    `an ally who is a ${rollOn(personObjective).toLowerCase()}`,
    `an enemy (${getAntagonist().toLowerCase()})`,
    `identity of a person (${getAntagonist().toLowerCase()})`,
    `${getOpponent().toLowerCase()}`,
    `${getOpponent().toLowerCase()}`,
    `documents or secrets (${rollEither(knowledgeObjective, personObjective).toLowerCase()})`,
    `documents or secrets (${rollEither(knowledgeObjective, personObjective).toLowerCase()})`,
    `${getArtifact().toLowerCase()}`,
    `${getArtifact().toLowerCase()}`,
    `${getLocation().toLowerCase()}`,
    `${getLocation().toLowerCase()}`,
    `an ancient map to ${rollOn(sinister).toLowerCase()}`,
    `an ancient map to ${rollOn(sinister).toLowerCase()}`,
    `an otherworldly creature's body part (${getCreature().toLowerCase()})`,
    `an otherworldly creature's body part (${getCreature().toLowerCase()})`,
    `the current antagonist`,
    `the current antagonist`,
    `${rollOn(cult)}`,
    `${rollOn(cult)}`,
    `a legendary character (${rollOn(legendaryCharacter)})`
  ]

  return rollOn(goals) + ' ' + rollOn(objectives)
}

// console.log('goal and objective:', getGoal());
// console.log("---");


function getLocation () {
  let building = [
    "Hovel",
    "Tavern",
    "Monastery",
    "Warehouse",
    "Blacksmithy",
    "Prison",
    "Shop or store",
    "Gambling den",
    "Noble's estate",
    "Library",
    "Hospital",
    "University",
    "Temple",
    "Mansion",
    "Museum",
    "Farmhouse",
    "Inn",
    "Royal building",
    "Sanatorium",
    "Palace"
  ]

  let rural = [
    "Old battlefield",
    "Cavern",
    "Plantation",
    "Jungle",
    "Abandoned settlement",
    "River",
    "Desert",
    "Glacier",
    "Swamp",
    "Coastline",
    "Canyon",
    "Lake",
    "Forest",
    "Mine",
    "Farm",
    "Fields",
    "Hills",
    "Mountains",
    "Delta",
    "Snowfields"
  ]

  let marine = [
    "Shipyard",
    "Cargo ship",
    "Warship",
    "Underwater ruins",
    "Deep sea ridge",
    "Submerged wreck",
    "Reef",
    "Lost island",
    "Pirate haven",
    "Merchant ship",
    "Open sea",
    "Coastal waters",
    "Coast",
    "Port",
    "Underwater caverns",
    "Beached wreck",
    "Deep sea trench",
    "Island chain",
    "Sinking island",
    "Armada"
  ]

  let military = [
    "Command tent",
    "Knight's tent",
    "Squire's tent",
    "Sentry post",
    "War camp",
    "Supply camp",
    "Horse enclosure",
    "Border fort",
    "Mercenary outpost",
    "Mercenary base",
    "Militia building",
    "Small keep",
    "Castle",
    "Wainwright's",
    "Blacksmith's",
    "Naval ship",
    "Naval dock",
    "Military monument",
    "Ambush site",
    "Battlefield"
  ]

  let ancient = [
    "Acheronian ruins",
    "Pre-Cataclysmic ruins",
    "Xuthal",
    "Island of the Black Ones",
    "Dweller's lair (submerged)",
    "Ancient pyramid",
    "Gateway to the Outer Dark",
    "Cyclopean tomb",
    "Primeval forest",
    "Pangaean valley",
    "City of Alkmeenon",
    "Citadel of Tsotha",
    "Haunted cairn",
    "Tunnels beneath sewers",
    "Heart of a mountain",
    "Stygian ruins",
    "Island of Xapur",
    "Ruins of Kuthchemes",
    "Mount Yimsha",
    "City of Xuchotil"
  ]

  let location = [
    { weight: 5, value: `${rollOn(building)}` },
    { weight: 3, value: `${rollOn(rural)}` },
    { weight: 5, value: `Sinister ${rollOn(sinister)}` },
    { weight: 3, value: `${rollOn(marine)}` },
    { weight: 2, value: `${rollOn(military)}` },
    { weight: 2, value: `${rollOn(ancient)}` }
  ]

  let atmosphere = [
    "Derelict",
    "Ruined",
    "Peaceful",
    "Abandoned",
    "Windswept",
    "Dreadful",
    "Overgrown",
    "Submerged",
    "Ancient",
    "Impossible",
    "Perched",
    "Mountain-top",
    "Cliff-top",
    "Flooded",
    "Underground",
    "Remote",
    "Enigmatic",
    "Dripping",
    "Frozen",
    "Eerie"
  ]

  return rollOn(atmosphere) + ' ' + rollOn(location).toLowerCase()
}

// console.log('location and atmosphere:', getLocation());
// console.log("---");

function letmetellyouofthedaysofhighadventure () {
  document.querySelector('#title .value').addEventListener('click', () => {
    document.querySelector('#title .value').innerText = getTitle()
  })
  document.querySelector('#title .value').innerText = getTitle()

  document.querySelector('#setting .value').addEventListener('click', () => {
    document.querySelector('#setting .value').innerText = getAdventure()
  })
  document.querySelector('#setting .value').innerText = getAdventure()

  document.querySelector('#npc .value').addEventListener('click', () => {
    document.querySelector('#npc .value').innerText = getNPC()
  })
  document.querySelector('#npc .value').innerText = getNPC()

  document.querySelector('#hooks .value').addEventListener('click', () => {
    document.querySelector('#hooks .value').innerText = getHookAndDraw()
  })
  document.querySelector('#hooks .value').innerText = getHookAndDraw()

  document.querySelector('#plot .value').addEventListener('click', () => {
    document.querySelector('#plot .value').innerText = getPlotConcept()
  })
  document.querySelector('#plot .value').innerText = getPlotConcept()

  document.querySelector('#antagonist .value').addEventListener('click', () => {
    document.querySelector('#antagonist .value').innerText = getAntagonist()
  })
  document.querySelector('#antagonist .value').innerText = getAntagonist()

  document.querySelector('#plotfulfillment .value').addEventListener('click', () => {
    document.querySelector('#plotfulfillment .value').innerText = getPlotFulfillmentAndLocation()
  })
  document.querySelector('#plotfulfillment .value').innerText = getPlotFulfillmentAndLocation()

  document.querySelector('#twist .value').addEventListener('click', () => {
    document.querySelector('#twist .value').innerText = getTwist()
  })
  document.querySelector('#twist .value').innerText = getTwist()

  document.querySelector('#goal .value').addEventListener('click', () => {
    document.querySelector('#goal .value').innerText = getGoal()
  })
  document.querySelector('#goal .value').innerText = getGoal()

  document.querySelector('#location1 .value').addEventListener('click', () => {
    document.querySelector('#location1 .value').innerText = getLocation()
  })
  document.querySelector('#location1 .value').innerText = getLocation()

  document.querySelector('#location2 .value').addEventListener('click', () => {
    document.querySelector('#location2 .value').innerText = getLocation()
  })
  document.querySelector('#location2 .value').innerText = getLocation()

}

letmetellyouofthedaysofhighadventure()
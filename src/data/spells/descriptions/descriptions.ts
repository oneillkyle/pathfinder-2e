export const data = {
  '1': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Chaotic',
        description:
          'Chaotic effects often manipulate energy from chaos-aligned Outer Planes and are anathema to lawful divine servants or divine servants of lawful deities. A creature with this trait is chaotic in alignment. An ability with this trait can be selected or used only by chaotic creatures.',
        id: '25',
        url: 'Traits.aspx?ID=25'
      },
      {
        title: 'Disease',
        description:
          'An effect with this trait applies one or more diseases. A disease is typically an affliction.',
        id: '46',
        url: 'Traits.aspx?ID=46'
      },
      {
        title: 'Evil',
        description:
          'Evil effects often manipulate energy from evil-aligned Outer Planes and are antithetical to good divine servants or divine servants of good deities. A creature with this trait is evil in alignment. An ability with this trait can be selected or used only by evil creatures.',
        id: '64',
        url: 'Traits.aspx?ID=64'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 316',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "\nYour touch afflicts the target with Abyssal plague, which siphons fragments of\ntheir soul away to empower the Abyss. The effect is based on the target's\nFortitude save.Abyssal Plague (disease); Level 9. The\ntarget can't recover from the drained condition from Abyssal plague until\nthe disease is cured. Stage 1 drained 1 (1 day); Stage 2 drained\nincreases by 2 (1 day).Critical Success The target is\nunaffected.Success The target takes 2 evil damage per spell level,\nand takes a –2 status penalty to saves against Abyssal plague for 1 day\nor until the target contracts it, whichever comes first.Failure The\ntarget is afflicted with Abyssal plague at stage 1.Critical Failure\nThe target is afflicted with Abyssal plague at stage 2.\n",
    range: 'touch',
    targets: '1 creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '2': {
    traits: [
      {
        title: 'Acid',
        description:
          'Effects with this trait deal acid damage. Creatures with this trait have a magical connection to acid.',
        id: '3',
        url: 'Traits.aspx?ID=3'
      },
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 316',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You conjure an arrow of acid that continues corroding the target after it hits. Make a spell attack against the target. On a hit, you deal 3d8 acid damage plus 1d6 persistent acid damage. On a critical hit, double the initial damage, but not the persistent damage.Heightened (+2) The initial damage increases by 2d8, and the persistent acid damage increases by 1d6.',
    range: '120 feet',
    targets: '1 creature or object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '3': {
    traits: [
      {
        title: 'Acid',
        description:
          'Effects with this trait deal acid damage. Creatures with this trait have a magical connection to acid.',
        id: '3',
        url: 'Traits.aspx?ID=3'
      },
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 316',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You splash a glob of acid that splatters creatures and objects alike. Make a spell attack. If you hit, you deal 1d6 acid damage plus 1 splash acid damage. On a critical success, the target also takes 1 persistent acid damage.Heightened (3rd) The initial damage increases to 1d6 + your spellcasting ability modifier, and the persistent damage increases to 2.Heightened (5th) The initial damage increases to 2d6 + your spellcasting ability modifier, the persistent damage increases to 3, and the splash damage increases to 2.Heightened (7th) The initial damage increases to 3d6 + your spellcasting ability modifier, the persistent damage increases to 4, and the splash damage increases to 3.Heightened (9th) The initial damage increases to 4d6 + your spellcasting ability modifier, the persistent damage increases to 5, and the splash damage increases to 4.',
    range: '30 feet',
    targets: '1 creature or object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '4': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 316',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You harness your mastery of primal forces to reshape your body into a Medium flying animal battle form. When you cast this spell, choose bat, bird, pterosaur, or wasp. You can decide the specific type of animal (such as an owl or eagle for bird), but this has no effect on the form's Size or statistics. While in this form, you gain the animal trait. You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose: AC = 18 + your level. Ignore your armor's check penalty and Speed reduction. 5 temporary Hit Points. Low-light vision. One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You're trained with them. Your attack modifier is +16, and your damage bonus is +5. These attacks are Dexterity based (for the purpose of the clumsy condition, for example). If your attack modifier for Dexterity-based unarmed attacks is higher, you can use it instead. Acrobatics modifier of +16, unless your own modifier is higher. You also gain specific abilities based on the form you choose:Bat Speed 20 feet, fly Speed 30 feet; precise echolocation 40 feet; Melee  fangs, Damage 2d8 piercing; Melee  wing (agile), Damage 2d6 bludgeoning.Bird Speed 10 feet, fly Speed 50 feet; Melee  beak, Damage 2d8 piercing; Melee  talon (agile), Damage 1d10 slashing.Pterosaur Speed 10 feet, fly Speed 40 feet; imprecise scent 30 feet; Melee  beak, Damage 3d6 piercing.Wasp Speed 20 feet, fly Speed 40 feet; Melee  stinger, Damage 1d8 piercing plus 1d6 persistent poison.Heightened (5th) Your battle form is Large and your fly Speed gains a +10-foot status bonus. You must have enough space to expand into or the spell is lost. You instead gain 10 temporary HP, attack modifier +18, damage bonus +8, and Acrobatics +20.Heightened (6th) Your battle form is Huge, your fly Speed gains a +15-foot status bonus, and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain AC = 21 + your level, 15 temporary HP, attack modifier +21, damage bonus +4 and double damage dice (including persistent damage), and Acrobatics +23.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '5': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 316',
    traditions: ['arcane', 'divine', 'primal'],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      "A bubble of pure air appears around the target's head, allowing it to breathe normally. The effect ends as soon as the target returns to an environment where it can breathe normally.",
    range: '60 feet',
    targets: 'the triggering creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '6': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 317',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The target can walk on air as if it were solid ground. It can ascend and descend in this way at a maximum of a 45-degree angle.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '5 minutes',
    area: ''
  },
  '7': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 317',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    cast: [''],
    description:
      "You ward an area to alert you when creatures enter without your permission. When you cast alarm, select a password. Whenever a Small or larger corporeal creature enters the spell's area without speaking the password, alarm sends your choice of a mental alert (in which case the spell gains the mental trait) or an audible alarm with the sound and volume of a hand bell (in which case the spell gains the auditory trait). Either option automatically awakens you, and the bell allows each creature in the area to attempt a DC 15 Perception check to wake up. A creature aware of the alarm must succeed at a Stealth check against the spell's DC or trigger the spell when moving into the area.Heightened (3rd) You can specify criteria for which creatures sound the alarm spell—for instance, orcs or masked people.",
    range: 'touch',
    targets: '',
    savingThrow: '',
    duration: '8 hours',
    area: '20-foot burst'
  },
  '8': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 317',
    traditions: ['occult'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You use your occult lore and the power of your mind to manipulate the spiritual multiverse, resulting in any of the following effects: Duplicate any occult spell of 9th level or lower. Duplicate any non-occult spell of 7th level or lower. Produce any effect whose power is equivalent to any occult spell 9th level or lower, or non-occult spell 7th level or lower. Reverse certain effects that refer to the wish spell At the GM's discretion, you can try to produce greater effects, but this is dangerous and the spell may have only a partial effect.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '9': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 317',
    traditions: ['divine'],
    actions: 'Reaction',
    cast: ['somatic', 'verbal;'],
    description:
      "You punish a creature that transgresses against your deity, drawing upon the anguish you feel upon seeing one of your deity's anathema committed. You can cast this spell only when a creature actively commits a unique act of anathema. For example, if creating undead were anathema to your deity, you could use anathematic reprisal on a necromancer who had just created undead in front of you, but not on an undead creature just for existing. You deal 4d6 mental damage to the target, but a basic Will save can reduce this damage. If it fails, it is also stupefied 1 for 1 round. The creature is then temporarily immune for 1 minute.Heightened (+1) The damage increases by 1d6.",
    range: '30 feet',
    targets: 'the triggering creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '10': {
    traits: [
      {
        title: 'Evil',
        description:
          'Evil effects often manipulate energy from evil-aligned Outer Planes and are antithetical to good divine servants or divine servants of good deities. A creature with this trait is evil in alignment. An ability with this trait can be selected or used only by evil creatures.',
        id: '64',
        url: 'Traits.aspx?ID=64'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 411',
    traditions: [],
    cast: [''],
    description:
      'You transform the target into an undead creature with a level up to that allowed in Table 7–1. There are many versions of this ritual, each specific to a particular type of undead (one ritual for all zombies, one for skeletons, one for ghouls, and so on), and the rituals that create rare undead are also rare. Some forms of undead, such as liches, form using their own unique methods and can’t be created with a version of create undead. Table 7-1: Creatures Creation Rituals Creature LevelSpell Level RequiredCost -1 or 0215 gp 1260 gp 23105 gp 33180 gp 44300 gp 54480 gp 65750 gp 751,080 gp 861,500 gp 962,100 gp 1073,000 gp 1174,200 gp 1286,000 gp 1389,000 gp 14913,500 gp 15919,500 gp 161030,000 gp 171045,000 gp  Critical Success The target becomes an undead creature of the appropriate type. If it’s at least 4 levels lower than you, you can make it a minion. This gives it the minion trait, meaning it can use 2 actions when you command it, and commanding it is a single action that has the auditory and concentrate traits. You can have a maximum of four minions under your control. If it’s intelligent and doesn’t become a minion, the undead is helpful to you for awakening it, though it’s still a horrid and evil creature. If it’s unintelligent and doesn’t become a minion, you can give it one simple command. It pursues that goal single-mindedly, ignoring any of your subsequent commands.Success As critical success, except an intelligent undead that doesn’t become your minion is only friendly to you, and an unintelligent undead that doesn’t become your minion leaves you alone unless you attack it. It marauds the local area rather than following your command.Failure You fail to create the undead.Critical Failure You create the undead, but its soul, tortured by your foul necromancy, is full of nothing but hatred for you. It attempts to destroy you.',
    range: '10 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '11': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 411',
    traditions: [],
    cast: [''],
    description:
      'You perform a ritual to free a creature imprisoned, petrified, or otherwise put into stasis by any magical effects from all such effects, even effects like imprisonment that don’t have a duration, as long as freedom’s spell level is equal to or higher than the effect’s spell level. To perform the ritual, you must be within 10 feet of the target, or within 10 feet of the place where the target was imprisoned (in the case of effects that trap the creature in an unreachable prison, like the oubliette form of imprisonment). You must know the name of the creature and details of its background; if the creature is not a close associate, a failure or critical failure on a secondary Society check reduces even a critical success on the primary check to a failure.Critical Success You free the target from all magical effects imprisoning it, petrifying it, or putting it into stasis. It gains a +1 status bonus to saving throws to resist those same magical effects for 1 week.Success You free the target from all magical effects imprisoning it, petrifying it, or putting it into stasis. Failure You fail to free the target.Critical Failure The magical effects imprisoning the target, petrifying the target, or putting it into stasis affect you and all secondary casters.',
    range: 'see text',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '12': {
    traits: [
      {
        title: 'Curse',
        description:
          'A curse is an effect that places some long-term affliction on a creature. Curses are always magical and are typically the result of a spell or trap.',
        id: '38',
        url: 'Traits.aspx?ID=38'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 412',
    traditions: [],
    cast: [''],
    description:
      'You enforce a magic rule on a willing target, forcing it to either perform or refrain from carrying out a certain act. A geas to perform an act is usually conditional, such as, “Always offer hospitality to strangers seeking a place to stay.” An unconditional geas to perform a certain act doesn’t require the target to perform that act exclusively, though it must prioritize the task above all leisurely pursuits. The most common geas to refrain from carrying out an act is a specification to avoid violating a contract. In those cases, the secondary caster usually takes charge of making sure the wording of the contract is attuned correctly with the ritual’s magic. Because the target is willing, geas can have a duration that lasts for as long as the target agrees to. If the target is unable to fulfill the geas, it becomes sickened 1, and the sickened condition increases by 1 for each consecutive day it is prevented from following the geas, to a maximum of sickened 4. The sickened condition ends immediately when it follows the geas again; it can’t remove the sickened condition in any other way. Only powerful magic such as a wish spell can remove the effects of geas from a willing target.Critical Success The geas succeeds, and the target receives a +1 status bonus to skill checks that directly uphold the geas (at the GM’s discretion). Success The geas succeeds.Failure The geas fails.Critical Failure The geas fails, and you are instead affected by the geas you were attempting to place on the target. You are considered an unwilling target, so the geas can be counteracted with a remove curse spell.Heightened (5th) You can use geas on an unwilling creature; it can attempt a Will save to negate the effect. If the target fails this Will save, the geas lasts up to 1 week. A remove curse spell can counteract a geas on an unwilling creature, in addition to powerful magic such as a wish spell. A clever unwilling creature can subvert the geas by contriving situations that prevent it from complying, but in that case it becomes sickened (as described above).Heightened (7th) As 5th level, but the geas lasts for up to 1 year on an unwilling creature.Heightened (9th) As 5th level, but the geas lasts for a duration you choose (even unlimited) on an unwilling creature.',
    range: '10 feet',
    targets: '',
    savingThrow: '',
    duration: 'see text',
    area: ''
  },
  '13': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 318',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You reinforce the target's musculoskeletal system to bear more weight. The target can carry 3 more Bulk than normal before becoming encumbered and up to a maximum of 6 more Bulk.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '14': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 318',
    traditions: ['arcane', 'divine', 'occult', 'dispel magic'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You repel all magic from the target area, preventing spells and other magic from functioning. Spells can't penetrate the area, magic items cease to function within it, and no one inside can cast spells or use magic abilities. Likewise, spells— such as dispel magic—can't affect the field itself unless they are of a higher level. Magic effects resume the moment they pass outside the field. For example, a ray fired from one side of the field could target a creature on the other side (as long as caster and target are both outside the field). A summoned creature winks out of existence but reappears if the field moves or ends. Invested magic items cease to function, but they remain invested and resume functioning when they exit the field; the ability boost from an apex item isn't suppressed within the field. Spells of a higher level than the antimagic field overcome its effects, and can even be cast by a creature within the field. The field disrupts only magic, so a +3 longsword still functions as a longsword. Magically created creatures (such as golems) function normally within an antimagic field.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: '10-foot emanation'
  },
  '15': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Prediction',
        description:
          'Effects with this trait determine what is likely to happen in the near future. Most predictions are divinations.',
        id: '132',
        url: 'Traits.aspx?ID=132'
      }
    ],
    source: 'Core Rulebook pg. 318',
    traditions: ['divine', 'occult'],
    cast: [''],
    description:
      "You gain a vague glimpse of the future. During the casting of this spell, ask about the results of a particular course of action. The spell can predict results up to 30 minutes into the future and reveals the GM's best guess among the following outcomes: Weal The results will be good. Woe The results will be bad. Weal and Woe The results will be a mix of good and bad. Nothing There won't be particularly good or bad results. The GM rolls a secret DC 6 flat check. On a failure, the result is always “nothing.” This makes it impossible to tell whether a “nothing” result is accurate. If anyone asks about the same topic as the first casting of augury during an additional casting, the GM uses the secret roll result from the first casting. If circumstances change, though, it's possible to get a different result.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '16': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 318',
    traditions: ['divine'],
    actions: 'Single Action',
    cast: ['somatic', 'verbal'],
    description:
      "You transform into an avatar of your deity, assuming a Huge battle form. You must have space to expand or the spell is lost. You have hands in this battle form and can take manipulate actions. You can Dismiss this spell. You gain the following statistics and abilities regardless of which deity's battle form you assume: AC = 25 + your level. Ignore your armor's check penalty and Speed reduction. 30 temporary Hit Points. Darkvision. One or more attacks specific to your deity's battle form, which are the only attacks you can use. You're trained with them. Your attack modifier is +33, and you use the listed damage. Melee attacks are Strength based (for the purposes of the enfeebled condition, for example) unless they have the finesse trait, and all ranged attacks are Dexterity based. Attacks that deal positive or negative damage don't heal creatures. Athletics modifier of +35, unless your own is higher. You also gain the specific abilities listed for your deity below:Abadar Speed 50 feet, burrow Speed 30 feet, immune to immobilized; Ranged crossbow (range increment 120 feet, reload 1), Damage 6d10+3 piercing.Asmodeus Speed 70 feet, air walk; Melee  mace (reach 15 feet), Damage 6d10+6 bludgeoning; Ranged  hell fire (range 120 feet), Damage 6d6+3 fire.Calistria Speed 30 feet, fly Speed 70 feet; Melee  whip (disarm, finesse, nonlethal, reach 20 feet), Damage 6d4+6 slashing; Ranged  savored sting (range 60 feet), Damage 6d6+3 poison.Cayden Cailean Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; Melee  rapier (deadly, reach 15 feet), Damage 6d6+6 piercing; Ranged  ale splash (range 120 feet), Damage 6d6+3 poison.Desna Speed 30 feet, fly Speed 70 feet; Melee  starknife (agile, deadly, finesse, reach 15 feet, silver, thrown 60 feet), Damage 6d4+6 piercing; Ranged  moonbeam (range 120 feet, silver), Damage 6d6+3 fire.Erastil Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; Ranged longbow (deadly d8, range increment 150 feet), Damage 6d8+3 piercing.Gorum Speed 70 feet, immune to immobilized; Melee  greatsword (versatile P, reach 15 feet), Damage 6d12+6 slashing.Gozreh no land Speed, fly Speed 70 feet, swim Speed 70 feet; ignore difficult terrain and greater difficult terrain; Melee  waves (bull rush, reach 15 feet, thrown 20 feet), Damage 6d8+6 bludgeoning; Ranged  wind (versatile electricity, range 120 feet), Damage 6d6+3 bludgeoning.Iomedae Speed 70 feet, air walk; shield (15 Hardness, can't be damaged); Melee  longsword (versatile P, reach 15 feet), Damage 6d8+6 slashing.Irori Speed 80 feet, air walk; Melee  unfettered strike (agile, versatile P or S, finesse, reach 15 feet), Damage 6d8+6 bludgeoning; Ranged  wind strike (range 60 feet), Damage 6d4+6 bludgeoning.Lamashtu Speed 30 feet, fly Speed 70 feet; Melee  falchion (forceful, reach 15 feet), Damage 6d10+6 slashing; Ranged  waters of Lamashtu (range 120 feet), Damage 6d6+3 poison.Nethys Speed 70 feet, air walk; Ranged  raw magic (range 120 feet; versatile cold, electricity, or fire), Damage 6d6 force.Norgorber Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; Melee  shortsword (agile, finesse, versatile S, reach 15 feet), Damage 6d6+6 piercing; Ranged  blackfinger toss (range 120 feet), Damage 6d6+3 poison.Pharasma Speed 70 feet, air walk; Melee  dagger (agile, finesse, reach 15 feet, thrown 40 feet), Damage 6d6+6 slashing; Ranged  spiral blast (range 120 feet, damages only undead), Damage 6d8+3 positive.Rovagug Speed 50 feet, burrow Speed 30 feet, immune to immobilized; Melee jaws(reach 15 feet), Damage 6d12+6 piercing; Melee le g (agile, versatile P, reach 15 feet), Damage 6d8+6 bludgeoning.Sarenrae Speed 30 feet, fly Speed 70 feet; Melee  scimitar (forceful, nonlethal, reach 15 feet), Damage 6d6+6 slashing; Ranged  everflame (nonlethal, range 120 feet), Damage 6d6+3 fire.Shelyn Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; Melee  glaive (deadly d8, nonlethal, reach 20 feet), Damage 6d8+6 slashing; Ranged  melody of inner beauty, (nonlethal, range 120 feet), Damage 6d6+3 sonic.Torag Speed 50 feet, burrow Speed 30 feet, immune to immobilized; shield (15 Hardness, can't be damaged); Melee  warhammer (bull rush, reach 15 feet), Damage 6d8+6 bludgeoning.Urgathoa Speed 70 feet, air walk; Melee scythe (deadly d10, trip, reach 15 feet), Damage 6d10+6 slashing; Ranged  pallid plague (range 120 feet), Damage 6d6+3 negative.Zon-Kuthon Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; Melee  spiked chain (disarm, trip, reach 15 feet), Damage 6d8+6 slashing; Ranged  midnight pain (mental, nonlethal, range 120 feet), Damage 6d6+3 mental.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '17': {
    traits: [
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 320',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You transform the target creature into a harmless animal appropriate to the area, with effects based on its Fortitude save.Critical Success The target is unaffected.Success The target's body gains minor features of the harmless animal. Its insides churn as they partially transform, causing it to be sickened 1. When it recovers from the sickened condition, its features revert to normal.Failure The target transforms for 1 minute but keeps its mind. If it spends all its actions on its turn concentrating on its original form, it can attempt a Will save to end the effect immediately.Critical Failure The target is transformed into the chosen harmless animal, body and mind, for an unlimited duration.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Fortitude;',
    duration: 'varies',
    area: ''
  },
  '18': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 320',
    traditions: ['divine', 'occult', 'bless'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You fill the minds of your enemies with doubt. Targets that fail their Will saves take a –1 status penalty to attack rolls as long as they are in the area. Once per turn, starting the turn after you cast bane, you can use a single action, which has the concentrate trait, to increase the emanation's radius by 5 feet and force enemies in the area that weren't yet affected to attempt another saving throw. Bane can counteract bless.",
    range: '',
    targets: 'enemies in the area',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: '5-foot emanation;'
  },
  '19': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      }
    ],
    source: 'Core Rulebook pg. 320',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You send the target back to its home plane. The target must attempt a Will save. You can spend an extra action while Casting this Spell and add a material component to give the creature a –2 circumstance penalty to its save. The component must be a specially gathered object that is anathema to the creature, and not from a spell component pouch. This spell fails if you aren't on your home plane when you cast it.Critical Success The target resists being banished and you are stunned 1.Success The target resists being banished.Failure The target is banished.Critical Failure The target is banished and can't return by any means to the plane it's banished from for 1 week.Heightened (9th) You can target up to 10 creatures. The extra material component affects targets to which it is anathema.",
    range: '30 feet',
    targets: "1 creature that isn't on its home plane",
    savingThrow: 'Will',
    duration: '',
    area: ''
  },
  '20': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 415',
    traditions: [],
    cast: [''],
    description:
      'You attempt to call forth the target’s soul and return it to its body. This requires the target’s body to be present and relatively intact. The target must have died within the past year. If Pharasma has decided that the target’s time has come or the target doesn’t wish to return, this ritual automatically fails, but you discover this after the successful Religion check and can end the ritual without paying the cost.Critical Success You resurrect the target. They return to life with full Hit Points and the same spells prepared and points in their pools they had when they died, and still suffering from any long-term debilitations of the old body. The target meets an agent of their deity during the resurrection who inspires them, granting them a +1 status bonus to attack rolls, Perception, saving throws, and skill checks for 1 week. The target is also permanently changed in some way by their time in the afterlife, such as gaining a slight personality shift, a streak of white in the hair, or a strange new birthmark.Success As critical success, except the target returns to life with 1 Hit Point and no spells prepared or points in any pools, and still is affected by any long-term debilitations of the old body. Instead of inspiring them, the character’s time in the Boneyard has left them temporarily debilitated. The target is clumsy 1, drained 1, and enfeebled 1 for 1 week; these conditions can’t be removed or reduced by any means until the week has passed.Failure Your attempt is unsuccessful.Critical Failure Something goes horribly wrong—an evil spirit possesses the body, the body transforms into a special kind of undead, or some worse fate befalls the target. Heightened (6th) You can resurrect a target of up to 12th level, and the base cost is 125 gp.Heightened (7th) You can use resurrect even with only a small portion of the body; the ritual creates a new body on a success or critical success. The target must have died within the past decade. The ritual requires four secondary casters, each of whom must be at least half the target’s level. The target can be up to 14th level, and the base cost is 200 gp.Heightened (8th) As 7th level, but the target can be up to 16th level and the base cost is 300 gp.Heightened (9th) You can use resurrect even without the body as long as you know the target’s name and have touched a portion of its body at any time. The target must have died within the past century, and it doesn’t gain the negative conditions on a success. The ritual requires eight secondary casters, each of whom must be at least half the target’s level. The target can be up to 18th level, and the base cost is 600 gp.Heightened (10th) As 9th level, except it doesn’t matter how long ago the target died. The ritual requires 16 secondary casters, each of whom must be at least half the target’s level. The target can be up to 20th level, and the ritual’s base cost is 1,000 gp.',
    range: '10 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '21': {
    traits: [
      {
        title: 'Evil',
        description:
          'Evil effects often manipulate energy from evil-aligned Outer Planes and are antithetical to good divine servants or divine servants of good deities. A creature with this trait is evil in alignment. An ability with this trait can be selected or used only by evil creatures.',
        id: '64',
        url: 'Traits.aspx?ID=64'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 320',
    traditions: ['divine', 'occult', 'wish'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal;'],
    description:
      "You wrench the target's soul away before it can pass on to the afterlife and imprison it in a black sapphire. While the soul is in the gem, the target can't be returned to life through any means, even powerful magic such as wish. If the gem is destroyed or bind soul is counteracted on the gem, the soul is freed. The gem has AC 16 and Hardness 10. A gem can't hold more than one soul, and any attempt wastes the spell.",
    range: '30 feet',
    targets: '1 creature that died within the last minute',
    savingThrow: '',
    duration: 'unlimited',
    area: ''
  },
  '22': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 321',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'With a word of necromantic power, you seize control of the target. It gains the minion trait. If you or an ally uses any hostile actions against the target, the spell ends.',
    range: '30 feet',
    targets: '1 mindless undead creature with a level no greater than',
    savingThrow: '',
    duration: '1 day',
    area: ''
  },
  '23': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 321',
    traditions: ['arcane', 'occult'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "Oily black tentacles rise up and attempt to Grapple each creature in the area. Make spell attack rolls against the Fortitude DC of each creature. Any creature you succeed against is grabbed and takes 3d6 bludgeoning damage. Whenever a creature ends its turn in the area, the tentacles attempt to grab that creature if they haven't already, and they deal 1d6 bludgeoning damage to any creature already grabbed. The tentacles' Escape DC is equal to your spell DC. A creature can attack a tentacle in an attempt to release its grip. Its AC is equal to your spell DC, and it is destroyed if it takes 12 or more damage. Even if destroyed, additional tentacles continue to grow in the area until the duration ends. You can Dismiss the spell.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '20-foot burst adjacent to a flat surface'
  },
  '24': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 321',
    traditions: ['divine'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "Blades of force form a churning wall. The wall is a straight line 20 feet high, 120 feet long, and 2 inches thick, and it provides cover. The wall deals 7d8 force damage to each creature that's in the wall's space when it is created, that attempts to pass through the wall, or that ends its turn inside the wall. A basic Reflex save reduces the damage. A  creature that succeeds at this save when the wall is created is pushed to the nearest space on the side of its choice. Creatures trying to move through the wall fail to do so if they critically fail the save, ending their movement adjacent to the wall.Heightened (+1) The damage increases by 1d8.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '25': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 321',
    traditions: ['divine', 'occult', 'bane'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Blessings from beyond help your companions strike true. You and your allies in the area gain a +1 status bonus to attack rolls. Once per turn, starting the turn after you cast bless, you can use a single action, which has the concentrate trait, to increase the emanation's radius by 5 feet. Bless can counteract bane.",
    range: '',
    targets: 'you and allies in the area',
    savingThrow: '',
    duration: '1 minute',
    area: '5-foot emanation;'
  },
  '26': {
    traits: [
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 321',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You blind the target. The effect is determined by the target's Fortitude save. The target then becomes temporarily immune for 1 minute.Critical Success The target is unaffected.Success The target is blinded until its next turn begins.Failure The target is blinded for 1 minute.Critical Failure The target is blinded permanently.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '27': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 321',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You blink quickly between the Material Plane and the Ethereal Plane. You gain resistance 5 to all damage (except force). You can Sustain the Spell to vanish and reappear 10 feet away in a random direction determined by the GM; the movement doesn't trigger reactions. At the end of your turn, you vanish and reappear as above.Heightened (+2) The resistance increases by 3.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '28': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 321',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target's form appears blurry. It becomes concealed. As the nature of this effect still leaves the target's location obvious, the target can't use this concealment to Hide or Sneak.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '29': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 322',
    traditions: ['divine', 'disintegrate'],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      "Your blessing revives a creature at the moment of its death. You prevent the target from dying and restore Hit Points to the target equal to 4d8 plus your spellcasting ability modifier. You can't use breath of life if the triggering effect was disintegrate or a death effect.",
    range: '60 feet',
    targets: 'the triggering creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '30': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 322',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Gouts of flame rush from your hands. You deal 2d6 fire damage to creatures in the area.Heightened (+1) The damage increases by 2d6.',
    range: '',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '15-foot cone'
  },
  '31': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 322',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You forcibly calm creatures in the area, soothing them into a nonviolent state; each creature must attempt a Will save.Critical Success The creature is unaffected.Success Calming urges impose a –1 status penalty to the creature's attack rolls.Failure Any emotion effects that would affect the creature are suppressed and the creature can't use hostile actions. If the target is subject to hostility from any other creature, it ceases to be affected by calm emotions.Critical Failure As failure, but hostility doesn't end the effect.",
    range: '120 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: 'sustained up to 1 minute',
    area: '10-foot burst'
  },
  '32': {
    traits: [
      {
        title: 'Acid',
        description:
          'Effects with this trait deal acid damage. Creatures with this trait have a magical connection to acid.',
        id: '3',
        url: 'Traits.aspx?ID=3'
      },
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Cold',
        description:
          'Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.',
        id: '27',
        url: 'Traits.aspx?ID=27'
      },
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      },
      {
        title: 'Electricity',
        description:
          'Effects with this trait deal electricity damage. A creature with this trait has a magical connection to electricity.',
        id: '56',
        url: 'Traits.aspx?ID=56'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 322',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You call upon the unimaginable power of world-ending cataclysms, ripping a small piece of each cataclysm and combining them together into one horrifically powerful attack. The following effects come down upon all creatures in the area. Treat the resistances of creatures in the area as if they were 10 lower for the purpose of determining the cataclysm's damage. Each creature attempts one basic Reflex save that applies to all six types of damage. Flesh-dissolving acid rain deals 3d10 acid damage. A roaring earthquake shakes and bludgeons creatures on the ground, dealing 3d10 bludgeoning damage. A blast of freezing wind deals 3d10 cold damage. Incredible lightning lashes the area, dealing 3d10 electricity damage. Beating winds churn across the sky, dealing 3d10 bludgeoning damage to creatures flying in the area. An instant tsunami sweeps over creatures in the area, dealing 3d10 bludgeoning damage with the water trait (doubled for creatures swimming in the area). A massive wildfire burns in a sudden inferno, dealing 3d10 fire damage.",
    range: '1,000 feet',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '60-foot burst'
  },
  '33': {
    traits: [
      {
        title: 'Electricity',
        description:
          'Effects with this trait deal electricity damage. A creature with this trait has a magical connection to electricity.',
        id: '56',
        url: 'Traits.aspx?ID=56'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 322',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You discharge a powerful bolt of lightning at the target, dealing 8d12 electricity damage. The target must attempt a basic Reflex save. The electricity arcs to another creature within 30 feet of the first target, jumps to another creature within 30 feet of that target, and so on. You can end the chain at any point. You can't target the same creature more than once, and you must have line of effect to all targets. Roll the damage only once, and apply it to each target (halving or doubling as appropriate for its saving throw outcome). The chain ends if any one of the targets critically succeeds at its save.Heightened (+1) The damage increases by 1d12.",
    range: '30 feet',
    targets: '1 creature, plus any number of additional creatures',
    savingThrow: 'Reflex',
    duration: '',
    area: ''
  },
  '34': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 322',
    traditions: ['arcane', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "To the target, your words are honey and your visage seems bathed in a dreamy haze. It must attempt a Will save, with a +4 circumstance bonus if you or your allies recently threatened it or used hostile actions against it. You can Dismiss the spell. If you use hostile actions against the target, the spell ends. When the spell ends, the target doesn't necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations, meaning you could potentially convince the target to continue being your friend via mundane means.Critical Success The target is unaffected and aware you tried to charm it.Success The target is unaffected but thinks your spell was something harmless instead of charm, unless it identifies the spell (usually with Identify Magic).Failure The target's attitude becomes friendly toward you. If it was friendly, it becomes helpful. It can't use hostile actions against you.Critical Failure The target's attitude becomes helpful toward you, and it can't use hostile actions against you.Heightened (+4) The duration lasts until the next time you make your daily preparations.Heightened (+8) The duration lasts until the next time you make your daily preparations, and you can target up to 10 creatures.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: '1 hour',
    area: ''
  },
  '35': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 323',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Siphoning negative energy into yourself, your hand radiates a pale darkness. Your touch weakens the living and disorients undead, possibly even causing them to flee. The effect depends on whether the target is living or undead. Living Creature The spell deals negative damage equal to 1d4 plus your spellcasting modifier. The target attempts a basic Fortitude save, but is also enfeebled 1 for 1 round on a critical failure. Undead Creature The target is flat-footed for 1 round on a failed Fortitude save. On a critical failure, the target is also fleeing for 1 round unless it succeeds at a Will save.Heightened (+1) The negative damage to living creatures increases by 1d4.',
    range: 'touch',
    targets: '1 living or undead creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '36': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cold',
        description:
          'Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.',
        id: '27',
        url: 'Traits.aspx?ID=27'
      },
      {
        title: 'Darkness',
        description:
          'Darkness effects extinguish non-magical light in the area, and can counteract less powerful magical light. You must usually target light magic with your darkness magic directly to counteract the light, but some darkness spells automatically attempt to counteract light.',
        id: '39',
        url: 'Traits.aspx?ID=39'
      },
      {
        title: 'Evil',
        description:
          'Evil effects often manipulate energy from evil-aligned Outer Planes and are antithetical to good divine servants or divine servants of good deities. A creature with this trait is evil in alignment. An ability with this trait can be selected or used only by evil creatures.',
        id: '64',
        url: 'Traits.aspx?ID=64'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 323',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You shoot an utterly cold ray of darkness tinged with unholy energy. Make a ranged spell attack against the target. You deal 5d6 cold damage, plus 5d6 evil damage if the target is a celestial. If the ray passes through an area of magical light or targets a creature affected by magical light, chilling darkness attempts to counteract the light. If you need to determine whether the ray passes through an area of light, draw a line between yourself and the spell's target.Critical Success The target takes double damage.Success The target takes full damage.Heightened (+1) The cold damage increases by 2d6, and the evil damage against celestials increases by 2d6.",
    range: '120 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '37': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 323',
    traditions: ['arcane', 'occult'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You create an opaque wall of light in a single vibrant color. The wall is straight and vertical, stretching 60 feet long and 30 feet high. If the wall would pass through a creature, the spell is lost. The wall sheds bright light for 20 feet on each side, and dim light for the next 20 feet. You can ignore the wall's effects. Roll 1d4 to determine the color of the wall. Each color has a particular effect on items, effects, or creatures that attempt to pass through. Chromatic wall can't be counteracted normally; rather, each color is automatically counteracted when targeted by a specific spell, even if that spell's level is lower than that of chromatic wall. Red The wall destroys ranged weapon ammunition (such as arrows and crossbow bolts) that would pass through, and it deals 20 fire damage to anyone passing through, with a basic Reflex save. Cone of cold can counteract a red chromatic wall. Orange The wall destroys thrown weapons that would pass through, and it deals 25 acid damage to anyone passing through, with a basic Reflex save. Gust of wind can counteract an orange chromatic wall. Yellow The wall stops acid, cold, electricity, fire, force, negative, positive, and sonic effects from passing through, and it deals 30 electricity damage to anyone passing through, with a basic Reflex save. Disintegrate can counteract a yellow chromatic wall. Green The wall stops toxins, gases, and breath weapons from passing through. It deals 10 poison damage to anyone passing through and makes them enfeebled 1 for 1 minute. A basic Fortitude save reduces the damage and negates the enfeebled condition on a success. Passwall can counteract a green chromatic wall.Heightened (7th) The spell's duration increases to 1 hour. Roll 1d8 to determine the wall's color; the results for 5–8 are below. A red, orange, yellow, or green wall deals an extra 10 damage. Blue The wall stops auditory, petrification, and visual effects from passing through, and creatures passing through are subject to the effects of flesh to stone. Magic missile can counteract a blue chromatic wall. Indigo The wall stops divination and mental effects from passing through, and those passing through are subject to the effects of warp mind. Searing light can counteract an indigo chromatic wall. Violet The wall prevents spells from targeting the other side (area effects still cross as normal). Creatures passing through must succeed at a Will save or they are slowed 1 for 1 minute; on a critical failure, the creature is instead sent to another plane, with the effect of plane shift . Dispel magic can counteract a violet chromatic wall. Reroll, and creatures that pass through the wall take a –2 circumstance penalty to their saves.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '38': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 324',
    traditions: ['divine', 'occult'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You ward a creature and those nearby against a specified alignment. Choose chaotic, evil, good, or lawful; this spell gains the opposing trait. Creatures in the area gain a +1 status bonus to AC against attacks by creatures of the chosen alignment and to saves against effects from such creatures. This bonus increases to +3 against effects from such creatures that directly control the target and attacks made by summoned creatures of the chosen alignment. Summoned creatures of the chosen alignment can't willingly enter the area without succeeding at a Will save; repeated attempts use the first save result.Heightened (4th) The duration increases to 1 hour.",
    range: 'touch',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '10-foot emanation centered on the touched creature'
  },
  '39': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Scrying',
        description:
          'A scrying effect lets you see, hear, or otherwise get sensory information from a distance using a sensor or apparatus, rather than your own eyes and ears.',
        id: '141',
        url: 'Traits.aspx?ID=141'
      }
    ],
    source: 'Core Rulebook pg. 324',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "You create an invisible floating ear at a location within range (even if it's outside your line of sight or line of effect). It can't move, but you can hear through the ear as if using your normal auditory senses.",
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '40': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Scrying',
        description:
          'A scrying effect lets you see, hear, or otherwise get sensory information from a distance using a sensor or apparatus, rather than your own eyes and ears.',
        id: '141',
        url: 'Traits.aspx?ID=141'
      }
    ],
    source: 'Core Rulebook pg. 324',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['1 minute (material', 'somatic', 'verbal)'],
    description:
      "You create an invisible floating eye at a location within range (even if it's outside your line of sight or line of effect). The eye can't move, but you can see in all directions from that point as if using your normal visual senses.",
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '41': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 324',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A cloak of swirling colors shrouds the target. Creatures are dazzled while adjacent to it, and attacking the target causes a brilliant flash of light. A creature that hits the target with a melee attack must attempt a Will save.The creature is temporarily immune until the end of its turn; this effect has the incapacitation trait.Success The attacker is unaffected.Failure The attacker is blinded for 1 round.Critical Failure The attacker is stunned for 1 round.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '42': {
    traits: [
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Poison',
        description:
          'An effect with this trait delivers a poison or deals poison damage. An item with this trait is poisonous and might cause an affliction.',
        id: '126',
        url: 'Traits.aspx?ID=126'
      }
    ],
    source: 'Core Rulebook pg. 324',
    traditions: ['arcane', 'primal', 'obscuring mist'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You conjure a poisonous fog. This functions as obscuring mist, except the area moves 10 feet away from you each round. You deal 6d8 poison damage to each breathing creature that starts its turn in the spell's area. You can Dismiss the spell.Heightened (+1) The damage increases by 1d8.",
    range: '120 feet',
    targets: '',
    savingThrow: 'basic Fortitude;',
    duration: '1 minute',
    area: '20-foot burst'
  },
  '43': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 324',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You teleport the targets to new positions within the area. The creatures must each be able to fit in their new space, and their positions must be unoccupied, entirely within the area, and in your line of sight. Unwilling creatures can attempt a Will save.Critical Success The target can teleport if it wants, but it chooses the destination within range.Success The target is unaffected.Failure You teleport the target and choose its destination.Heightened (+1) The number of targets increases by 1.',
    range: '',
    targets: 'up to 2 creatures',
    savingThrow: '',
    duration: '',
    area: '30-foot emanation;'
  },
  '44': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 324',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Swirling colors affect viewers based on their Will saves.Critical Success The creature is unaffected.Success The creature is dazzled for 1 round.Failure The creature is stunned 1, blinded for 1 round, and dazzled for 1 minute.Critical Failure The creature is stunned for 1 round and blinded for 1 minute.',
    range: '',
    targets: '',
    savingThrow: 'Will;',
    duration: '1 or more rounds (see below)',
    area: '15-foot cone'
  },
  '45': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 325',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You shout a command that's hard to ignore. You can command the target to approach you, run away (as if it had the fleeing condition), release what it's holding, drop prone, or stand in place. It can't Delay or take any reactions until it has obeyed your command. The effects depend on the target's Will save.Success The creature is unaffected.Failure For the first action on its next turn, the creature must use a single action to do as you command.Critical Failure The target must use all its actions on its next turn to obey your command.Heightened (5th) You can target up to 10 creatures.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: "until the end of the target's next turn",
    area: ''
  },
  '46': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 325',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target can understand the meaning of a single language it is hearing or reading when you cast the spell. This doesn't let it understand codes, language couched in metaphor, and the like (subject to GM discretion). If the target can hear multiple languages and knows that, it can choose which language to understand; otherwise, choose one of the languages randomly.Heightened (3rd) The target can also speak the language.Heightened (4th) You can target up to 10 creatures, and targets can also speak the language.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '47': {
    traits: [
      {
        title: 'Cold',
        description:
          'Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.',
        id: '27',
        url: 'Traits.aspx?ID=27'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 325',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Icy cold rushes forth from your hands. You deal 12d6 cold damage to creatures in the area.Heightened (+1) The damage increases by 2d6.',
    range: '',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '60-foot cone'
  },
  '48': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 325',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You befuddle your target with strange impulses, causing it to act randomly. The effects are determined by the target's Will save. You can Dismiss the spell.Critical Success The target is unaffected.Success The target babbles incoherently and is stunned 1.Failure The target is confused for 1 minute. It can attempt a new save at the end of each of its turns to end the confusion.Critical Failure The target is confused for 1 minute, with no save to end early.Heightened (8th) You can target up to 10 creatures.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: ''
  },
  '49': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 326',
    traditions: ['arcane', 'resist energy'],
    cast: [''],
    description:
      'You prepare a spell that will trigger later. While casting contingency, you also cast another spell of 4th level or lower with a casting time of no more than 3 actions. This companion spell must be one that can affect you. You must make any decisions for the spell when you cast contingency, such as choosing a damage type for resist energy. During the casting, choose a trigger under which the spell will be cast, using the same restrictions as for the trigger of a Ready action. Once contingency is cast, you can cause the companion spell to come into effect as a reaction with that trigger. It affects only you, even if it would affect more creatures. If you define complicated conditions, as determined by the GM, the trigger might fail. If you cast contingency again, the newer casting supersedes the older.Heightened (8th) You can choose a spell of 5th level or lower.Heightened (9th) You can choose a spell of 6th level or lower.Heightened (10th) You can choose a spell of 7th level or lower.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '24 hours',
    area: ''
  },
  '50': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 326',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal;'],
    description:
      "A magical flame springs up from the object, as bright as a torch. It doesn't need oxygen, react to water, or generate heat.Heightened (+1) The cost increases as follows: 16 gp for 3rd level; 30 gp for 4th, 60 gp for 5th, 120 gp for 6th,; 270 gp for 7th, 540 gp for 8th, 1,350 gp for 9th, and 3,350 gp for 10th.",
    range: 'touch',
    targets: '1 object',
    savingThrow: '',
    duration: 'unlimited',
    area: ''
  },
  '51': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 326',
    traditions: ['arcane', 'primal', 'slow'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'By imposing your will upon the water, you can raise or lower the level of water in the chosen area by 10 feet. Water creatures in the area are subjected to the effects of slow.',
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: '50 feet long by 50 feet wide'
  },
  '52': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 326',
    traditions: ['arcane', 'divine', 'primal'],
    cast: [''],
    description:
      'You create enough food to feed six Medium creatures for a day. This food is bland and unappealing, but it is nourishing. After 1 day, if no one has eaten the food, it decays and becomes inedible. Most Small creatures eat one-quarter as much as a Medium creature (one-sixteenth as much for most Tiny creatures), and most Large creatures eat 10 times as much (100 times as much for Huge creatures and so on).Heightened (4th) You can feed 12 Medium creatures.Heightened (6th) You can feed 50 Medium creatures.Heightened (8th) You can feed 200 Medium creatures.',
    range: '30 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '53': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 326',
    traditions: ['arcane', 'divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'As you cup your hands, water begins to flow forth from them. You create 2 gallons of water. If no one drinks it, it evaporates after 1 day.',
    range: '0 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '54': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 326',
    traditions: ['arcane', 'primal'],
    cast: [''],
    description:
      "You conjure a temporary object from eldritch energy. It must be of vegetable matter (such as wood or paper) and 5 cubic feet or smaller. It can't rely on intricate artistry or complex moving parts, never fulfills a cost or the like, and can't be made of precious materials or materials with a rarity of uncommon or higher. It is obviously temporarily conjured, and thus can't be sold or passed off as a genuine item.Heightened (5th) The item is metal and can include common minerals, like feldspar or quartz.",
    range: '0 feet',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '55': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 326',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You assault the target's faith, riddling the creature with doubt and mental turmoil that deal 6d6 mental damage, or 6d8 mental damage if it can cast divine spells. The effects are determined by its Will save. To many deities, casting this spell on a follower of your own deity without significant cause is anathema.Critical Success The target is unaffected.Success The target takes half damage.Failure The target takes full damage; if the target can cast divine spells, it's stupefied 1 for 1 round.Critical Failure The target takes double damage, is stupefied 1 for 1 round, and can't cast divine spells for 1 round.Heightened (+1) The damage increases by 2d6 (or by 2d8 if the target is a divine spellcaster).",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will',
    duration: '',
    area: ''
  },
  '56': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 327',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You issue a divine mandate to the targets. you pronounce a cause. It can be to attain an item, claim a patch of land, slay a creature, war with a group, or be entirely peaceful. Your cause can't force the targets to harm one another or themselves. The targets become completely dedicated to that cause, depending on their levels. They choose their own actions, but they favor direct action over inaction or indirect action. 13th or Lower The target is so dedicated to the cause that it pursues the cause to the death (unless you say otherwise). 14th The target is dedicated to the cause, but the spell ends for the target if it's reduced to half its maximum Hit Points or fewer.  15th As 14th, plus the target can attempt a Will save at the end of each of its turns to end the spell for itself. The spell ends for all creatures if you or one of your allies uses a hostile action against a target, or when the cause is completed. The GM might determine this spell has alignment traits befitting the cause.Heightened (10th) The level for each category increases by 2.",
    range: '60 feet',
    targets: 'up to 4 creatures',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '57': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 327',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You inflict despair on creatures in the area. The effects for each creature are determined by its Will save.Critical Success The creature is unaffected.Success For 1 round, the creature can't use reactions and must attempt another save at the start of its turn; on a failure, it is slowed 1 for that turn as it sobs uncontrollably.Failure As success, but the slowed 1 duration is 1 minute.Critical Failure As failure, and the creature is automatically slowed 1 for 1 minute.Heightened (7th) The area increases to a 60-foot cone.",
    range: '',
    targets: '',
    savingThrow: 'Will;',
    duration: '1 or more rounds',
    area: '30-foot cone'
  },
  '58': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 327',
    traditions: ['arcane', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You create up to four floating lights, no two of which are more than 10 feet apart. Each sheds light like a torch. When you Sustain the Spell, you can move any number of lights up to 60 feet. Each light must remain within 120 feet of you and within 10 feet of all others, or it winks out.',
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '59': {
    traits: [
      {
        title: 'Darkness',
        description:
          'Darkness effects extinguish non-magical light in the area, and can counteract less powerful magical light. You must usually target light magic with your darkness magic directly to counteract the light, but some darkness spells automatically attempt to counteract light.',
        id: '39',
        url: 'Traits.aspx?ID=39'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 327',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You create a shroud of darkness that prevents light from penetrating or emanating within the area. Light does not enter the area and any non-magical light sources, such as a torch or lantern, do not emanate any light while inside the area, even if their light radius would extend beyond the darkness. This also suppresses magical light of your darkness spell's level or lower. Light can't pass through, so creatures in the area can't see outside. From outside, it appears as a globe of pure darkness.Heightened (4th) Even creatures with darkvision (but not greater darkvision) can barely see through the darkness. They treat targets seen through the darkness as concealed.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '20-foot burst'
  },
  '60': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 327',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You grant yourself supernatural sight in areas of darkness. You gain darkvision.Heightened (3rd) The spell's range is touch and it targets 1 willing creature.Heightened (5th) The spell's range is touch and it targets 1 willing creature. The duration is until the next time you make your daily preparations.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '61': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Nonlethal',
        description:
          'Attacks with this weapon are nonlethal, and are used to knock creatures unconscious instead of kill them. You can use a nonlethal weapon to make a lethal attack with a –2 circumstance penalty.',
        id: '188',
        url: 'Traits.aspx?ID=188'
      }
    ],
    source: 'Core Rulebook pg. 327',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You cloud the target's mind and daze it with a mental jolt. The jolt deals mental damage equal to your spellcasting ability modifier; the target must attempt a basic Will save. If the target critically fails the save, it is also stunned 1.Heightened (+2) The damage increases by 1d6.",
    range: '60 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: '1 round',
    area: ''
  },
  '62': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 327',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The target loses hearing; it must attempt a Fortitude save. The target is then temporarily immune for 1 minute.Critical Success The target is unaffected.Success The target is deafened for 1 round.Failure The target is deafened for 10 minutes.Critical Failure The target is deafened permanently.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '63': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 328',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You snuff the life out of a creature on the brink of death. The target must attempt a Will save. If this kills it, you gain 10 temporary HP and a +1 status bonus to attack and damage rolls for 10 minutes.Critical Success The target is unaffected.Success The target's dying value increases by 1.Failure The target dies.",
    range: 'touch',
    targets: '1 living creature that has 0 HP',
    savingThrow: 'Will',
    duration: '',
    area: ''
  },
  '64': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 328',
    traditions: ['divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You shield a creature from the ravages of negative energy. It receives a +4 status bonus to saves against death and negative effects, gains negative resistance 10, and suppresses the effects of the doomed condition.',
    range: 'touch',
    targets: '1 living creature touched',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '65': {
    traits: [
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 328',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Your eyes glow as you sense aligned auras. Choose chaotic, evil, good, or lawful. You detect auras of that alignment. You receive no information beyond presence or absence. You can choose not to detect creatures or effects you're aware have that alignment. Only creatures of 6th level or higher—unless divine spellcasters, undead, or beings from the Outer Sphere—have alignment auras.Heightened (2nd) You learn each aura's location and strength.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: '30-foot emanation'
  },
  '66': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 328',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You send out a pulse that registers the presence of magic. You receive no information beyond the presence or absence of magic. You can choose to ignore magic you're fully aware of, such as the magic items and ongoing spells of you and your allies. You detect illusion magic only if that magic's effect has a lower level than the level of your detect magic spell. However, items that have an illusion aura but aren't deceptive in appearance (such as an invisibility potion) typically are detected normally.Heightened (3rd) You learn the school of magic for the highest-level effect within range that the spell detects. If multiple effects are equally strong, the GM determines which you learn.Heightened (4th) As 3rd level, but you also pinpoint the source of the highest-level magic. Like for an imprecise sense, you don't learn the exact location, but can narrow down the source to within a 5-foot cube (or the nearest if larger than that).",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: '30-foot emanation'
  },
  '67': {
    traits: [
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 328',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You detect whether a creature is venomous or poisonous, or if an object is poison or has been poisoned. You do not ascertain whether the target is poisonous in multiple ways, nor do you learn the type or types of poison. Certain substances, like lead and alcohol, are poisons and so mask other poisons.Heightened (2nd) You learn the number and types of poison.',
    range: '30 feet',
    targets: '1 object or creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '68': {
    traits: [
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 328',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'By tapping into trace divinatory auras, you detect the presence of scrying effects in the area. If detect scrying is higher level than a scrying effect, you gain a glimpse of the scrying creature and learn its approximate distance and direction.Heightened (6th) The duration is until the next time you make your daily preparations.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: '30-foot emanation'
  },
  '69': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 328',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Opening a door that bypasses normal space, you instantly transport yourself and any items you're wearing and holding from your current space to a clear space within range you can see. If this would bring another creature with you—even if you're carrying it in an extradimensional container—the spell is lost.Heightened (5th) The range increases to 1 mile. You don't need to be able to see your destination, as long as you have been there in the past and know its relative location and distance from you. You are temporarily immune for 1 hour.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '70': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 329',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You interfere with the target's ability to teleport and travel between dimensions. Dimensional anchor attempts to counteract any teleportation effect, or any effect that would move the target to a different plane. The duration is determined by the target's Will save.Critical Success The target is unaffected.Success The effect's duration is 1 minute.Failure The effect's duration is 10 minutes.Critical Failure The effect's duration is 1 hour.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '71': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 329',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create a shimmering barrier that attempts to counteract teleportation effects and planar travel into or out of the area, including items that allow access to extradimensional spaces (such as a bag of holding). Dimensional lock tries to counteract any attempt to summon a creature into the area but doesn't stop the creature from departing when the summoning ends.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: '60-foot burst'
  },
  '72': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 329',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You channel the primal forces of nature to transform into a Large animal battle form, specifically that of a powerful and terrifying dinosaur. You must have space to expand or the spell is lost. When you cast this spell, choose ankylosaurus, brontosaurus, deinonychus, stegosaurus, triceratops, or tyrannosaurus. You can decide the specific type of animal, but this has no effect on the form's Size or statistics. While in this form, you gain the animal and dinosaur traits. You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose: AC = 18 + your level. Ignore your armor's check penalty and Speed reduction. 15 temporary Hit Points. Low-light vision and imprecise scent 30 feet. One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You're trained with them. Your attack modifier is +16, and your damage bonus is +9. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead. Athletics modifier of +18, unless your own modifier is higher. You also gain specific abilities based on the form you choose:Ankylosaurus Speed 25 feet; Melee tail (back swing, reach 10 feet), Damage 2d6 bludgeoning; Melee  foot, Damage 2d6 bludgeoning.Brontosaurus Speed 25 feet; Melee  tail (reach 15 feet), Damage 2d6 bludgeoning; Melee  foot, Damage 2d8 bludgeoning.Deinonychus Speed 40 feet; Melee  talon (agile), Damage 2d4 piercing plus 1 persistent bleed; Melee  jaws, Damage 1d10 piercing.Stegosaurus Speed 30 feet; Melee  tail (reach 10 feet), Damage 2d8 piercing.Triceratops Speed 30 feet; Melee  horn, Damage 2d8 piercing, plus 1d6 persistent bleed on a critical hit; Melee foot, Damage 2d6 bludgeoning.Tyrannosaurus Speed 30 feet; Melee  jaws (deadly, reach 10 feet), Damage 1d12 piercing; Melee  tail (reach 10 feet), Damage 1d10 bludgeoning.Heightened (5th) Your battle form is Huge and your attacks have 15-foot reach, or 20-foot reach if they started with 15-foot reach. You instead gain 20 temporary HP, an attack modifier of +18, a damage bonus of +6, double the damage dice, and Athletics +21.Heightened (7th) Your battle form is Gargantuan and your attacks have 20-foot reach, or 25-foot reach if they started with 15-foot reach. You instead gain AC = 21 + your level, 25 temporary HP, an attack modifier of +25, a damage bonus of +15, double the damage dice, and Athletics +25.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '73': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 330',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['material', 'somatic'],
    description:
      "You shroud a creature from others' senses. The target becomes undetected, not just to sight but to all senses, allowing the target to count as invisible no matter what precise and imprecise senses an observer might have. It's still possible for a creature to find the target by Seeking, looking for disturbed dust, hearing gaps in the sound spectrum, or finding some other way to discover the presence of an otherwise-undetectable creature.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '74': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Revelation',
        description: 'Effects with this trait see things as they truly are.',
        id: '138',
        url: 'Traits.aspx?ID=138'
      }
    ],
    source: 'Core Rulebook pg. 330',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Falsehoods ring in your ears like discordant notes. You gain a +4 status bonus to Perception checks when someone Lies.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '75': {
    traits: [
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 330',
    traditions: ['arcane', 'divine', 'occult'],
    cast: [''],
    description:
      "You learn the name of the target's exact location (including the building, community, and country) and plane of existence. You can target a creature only if you've seen it in person, have one of its significant belongings, or have a piece of its body. To target an object, you must have touched it or have a fragment of it. Discern location automatically overcomes protections against detection and divination of lower level than this spell, even if they would normally have a chance to block it.",
    range: 'unlimited',
    targets: '1 creature or object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '76': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 330',
    traditions: ['arcane', 'wall of force'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You fire a green ray at your target. Make a spell attack. You deal 12d10 damage, and the target must attempt a basic Fortitude save. On a critical hit, treat the save result as one degree worse. A creature reduced to 0 HP is reduced to fine powder; its gear remains. An object you hit is destroyed (no save), regardless of Hardness, unless it's an artifact or similarly hard to destroy. A single casting can destroy no more than a 10-foot cube of matter. This automatically destroys any force construct, such as a wall of force.Heightened (+1) The damage increases by 2d10.",
    range: '120 feet',
    targets: '1 creature or unattended object',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '77': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 330',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Crackling energy disjoins the target. You attempt to counteract it (page 458). If you succeed, it's deactivated for 1 week. On a critical success, it's destroyed. If it's an artifact or similar item, you automatically fail.",
    range: '120 feet',
    targets: '1 magic item',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '78': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 330',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You unravel the magic behind a spell or effect. Attempt a counteract check against the target (page 458). If you succeed against a spell effect, you counteract it. If you succeed against a magic item, the item becomes a mundane item of its type for 10 minutes. This doesn't change the item's non-magical properties. If the target is an artifact or similar item, you automatically fail.",
    range: '120 feet',
    targets: '1 spell effect or unattended magic item',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '79': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 331',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You lance the target with energy. You deal 1d6 positive damage plus your spellcasting ability modifier. The target must attempt a basic Fortitude save. If the creature critically fails the save, it is also enfeebled 1 for 1 round.Heightened (+1) The damage increases by 1d6.',
    range: '30 feet',
    targets: '1 undead creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '80': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 331',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You infuse weapons with positive energy. Attacks with these weapons deal an extra 1d4 positive damage to undead.Heightened (3rd) The damage increases to 2d4 damage.Heightened (5th) Target up to three weapons, and the damage increases to 3d4 damage.',
    range: 'touch',
    targets:
      'up to two weapons, each of which must be wielded by you or a willing ally, or else unattended',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '81': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 331',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Divine power wards the targets, granting each a +1 status bonus to AC and saves while in the area. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can't cast this spell if you don't have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose. The bonuses granted by the spell increase to +2 against attacks by—and effects created by—creatures with an alignment opposite to the spell (lawful if you chose chaotic, evil if you chose good). These bonuses increase to +4 against effects created by such creatures that attempt to impose the controlled condition on a target of your divine aura, as well as against attacks made by creatures summoned by anything opposite in alignment to your divine aura. When a creature of opposite alignment hits a target with a melee attack, the creature must succeed at a Will save or be blinded for 1 minute. It's then temporarily immune for 1 minute. The first time you Sustain the Spell each round, the divine aura's radius grows 10 feet.",
    range: '',
    targets: 'allies in the area',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: '10-foot emanation;'
  },
  '82': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 331',
    traditions: ['divine', 'banishment'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You utter a potent litany from your faith, a mandate that harms those who oppose your ideals. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can't cast this spell if you don't have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose. You deal 7d10 damage to creatures in the area; each creature must attempt a Fortitude save. Creatures with an alignment that matches the one you chose are unaffected by the spell. Those that neither match nor oppose it treat the result of their saving throw as one degree better and don't suffer effects other than damage.Critical Success The creature is unaffected.Success The creature takes half damage.Failure The creature takes full damage and is enfeebled 2 for 1 minute.Critical Failure The creature takes double damage and is enfeebled 2 for 1 minute. On your home plane, a creature that critically fails is banished with the effect of a failed banishment save. A 10th-level creature or lower must attempt a Will save. On a failure, it's paralyzed for 1 minute; on a critical failure, it dies.",
    range: '40 feet',
    targets: '',
    savingThrow: 'Fortitude;',
    duration: 'varies',
    area: '40-foot emanation'
  },
  '83': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 331',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You infuse a target with spiritual energy, refreshing its magic. If it prepares spells, it recovers one 6th-level or lower spell it previously cast today and can cast that spell again. If it spontaneously casts spells, it recovers one of its 6th-level or lower spell slots. If it has a focus pool, it regains its Focus Points, as if it had Refocused.',
    range: 'touch',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '84': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 331',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You unleash a beam of divine energy. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can't cast this spell if you don't have a deity or if your deity is true neutral. Make a ranged spell attack roll against the target's AC. On a hit, the target takes damage of the chosen alignment type equal to 1d4 + your spellcasting ability modifier (double damage on a critical hit). The spell gains the trait of the alignment you chose.Heightened (+1) The damage increases by 1d4.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '85': {
    traits: [
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 331',
    traditions: ['divine', 'enlarge'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You accept otherworldly energies into your body; while you are still recognizably yourself, you gain the features of one of your deity's servitors. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can't cast this spell if you don't have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose. If you were Medium or smaller, you become Large, as the effects of enlarge. You must have space to expand into, or the spell is lost. You also gain the following benefits. 40 temporary Hit Points. A fly Speed equal to your Speed. Weakness 10 to the alignment opposite the one you chose. A +1 status bonus to saves against spells. Darkvision. Your unarmed attacks and weapons deal 1 additional damage of the chosen alignment type. One or more unarmed melee attacks. If you chose good or lawful, your fist attacks deal 2d8 damage. If you chose chaotic, you gain a bite unarmed attack that deals 2d10 piercing damage. If you chose evil, you gain a claws unarmed attack that deals 2d8 slashing damage and has the agile and finesse traits.Heightened (9th) The temporary Hit Points increase to 60, the weakness increases to 15, and the duration increases to 10 minutes.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '86': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 332',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You can channel the fury of your deity against foes of opposed alignment. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can't cast this spell if you don't have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose. You deal 4d10 damage of the alignment you chose; each creature in the area must attempt a Fortitude save. Creatures that match the alignment you chose are unaffected. Those that neither match nor oppose it treat the result of their saving throw as one degree better.Critical Success The creature is unaffected.Success The creature takes half damage.Failure The creature takes full damage and is sickened 1.Critical Failure The creature takes full damage and is sickened 2; while it is sickened, it is also slowed 1.Heightened (+1) The damage increases by 1d10.",
    range: '120 feet',
    targets: '',
    savingThrow: 'Fortitude',
    duration: '',
    area: '20-foot burst'
  },
  '87': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 332',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You take command of the target, forcing it to obey your orders. If you issue an obviously self-destructive order, the target doesn't act until you issue a new order. The effect depends on its Will save.Critical Success The target is unaffected.Success The target is stunned 1 as it fights off your commands.Failure The target follows your orders but can attempt a Will save at the end of each of its turns. On a success, the spell ends.Critical Failure As a failure, but the target receives a new save only if you give it a new order that is against its nature, such as killing its allies.Heightened (10th) The duration is unlimited.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '88': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 332',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Calling upon powerful transformative magic, you gain a Large dragon battle form. You must have space to expand or the spell is lost. When you cast this spell, choose one type of chromatic or metallic dragon. While in this form, you gain the dragon trait. You have hands in this battle form and can take manipulate actions. You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose: AC = 18 + your level. Ignore your armor's check penalty and Speed reduction. 10 temporary Hit Points. Speed 40 feet, fly Speed 100 feet. Resistance 10 against the damage type of your breath weapon (see below). Darkvision and imprecise scent 60 feet. One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You're trained with them. Your attack modifier is +22, and your damage bonus is +6. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead. See below for more on these attacks. Athletics modifier of +23, unless your own modifier is higher. Breath Weapon  (arcane, evocation) The shape, damage, and damage type of your breath weapon depend on your specific dragon form (see below). A creature in the area attempts a basic save against your spell DC. This is a Reflex save unless stated otherwise in the special ability description for your specific dragon form. Once activated, your breath weapon can't be used again for 1d4 rounds. Your breath weapon has the trait corresponding to the type of damage it deals. You also gain specific abilities based on the type of dragon you choose:Black swim Speed 60 feet; Melee jaws, Damage 2d12 piercing plus 2d6 acid; Melee  claw (agile), Damage 3d10 slashing; Melee tail (reach 10 feet), Damage 3d10 bludgeoning; Melee  horns (reach 10 feet), Damage 3d8 piercing; breath weapon 60-foot line, 11d6 acid.Blue burrow Speed 20 feet; Melee  jaws, Damage 2d10 piercing plus 1d12 electricity; Melee  claw (agile), Damage 3d10 slashing; Melee  tail (reach 10 feet), Damage 3d10 bludgeoning; Melee  horns (reach 10 feet), Damage 3d8 piercing; breath weapon 80-foot line, 6d12 electricity.Brass burrow Speed 20 feet; Melee  jaws, Damage 3d8 piercing plus 2d4 fire; Melee claw (agile), 3d10 slashing; Melee  tail (reach 10 feet), Damage 3d10 bludgeoning; Melee spikes (reach 10 feet), Damage 3d8 piercing; breath weapon 60-foot line, 15d4 fire.Bronze swim Speed 40 feet; Melee  jaws, Damage 2d10 piercing plus 1d12 electricity; Melee  claw (agile), Damage 3d10 slashing; Melee  tail (reach 10 feet), Damage 3d10 bludgeoning; Melee  wing (reach 10 feet), Damage 3d8 slashing; breath weapon 80-foot line, 6d12 electricity.Copper climb Speed 25 feet on stone only; Melee  jaws, Damage 2d12 piercing plus 2d6 acid; Melee  claw ( a g il e), Damage 3d10 slashing; Melee  tail (reach 10 feet), Damage 3d10 bludgeoning; Melee  wing (reach 10 feet), Damage 3d8 bludgeoning; breath weapon 60-foot line, 10d6 acid.Gold swim Speed 40 feet; Melee jaws, Damage 2d12 piercing plus 2d6 fire; Melee  claw (agile), Damage 4d6 slashing; Melee tail (reach 10 feet), Damage 3d10 bludgeoning; Melee  horns (reach 10 feet), Damage 3d8 piercing; breath weapon 30-foot cone, 6d10 fire.Green swim Speed 40 feet, ignores difficult terrain from non-magical foliage; Melee  jaws, Damage 2d12 piercing plus 2d6 poison; Melee  claw (agile), Damage 3d10 slashing; Melee  tail (reach 10 feet), Damage 3d10 bludgeoning; Melee  horns (reach 10 feet), Damage 3d8 piercing; breath weapon 30-foot cone, 10d6 poison (Fortitude save instead of Reflex).Red ignore concealed from smoke; Melee jaws, Damage 2d12 piercing plus 2d6 fire; Melee claw ( agile), Damage 4d6 slashing; Melee tail (reach 10 feet), Damage 3d10 bludgeoning; Melee w i ng (reach 10 feet), Damage 3d8 bludgeoning; breath weapon 30-foot cone, 10d6 fire.Silver walk on clouds; Melee  jaws, Damage 2d12 piercing plus 2d6 cold; Melee  claw (agile), Damage 3d10 slashing; Melee  tail (reach 10), Damage 3d10 bludgeoning; breath weapon 30-foot cone, 8d8 cold.White climb Speed 25 feet on ice only; Melee jaws, Damage 3d6 piercing plus 2d6 cold; Melee  claw (agile), Damage 3d10 slashing; Melee  tail (reach 10 feet), Damage 3d10 bludgeoning; breath weapon 30-foot cone, 10d6 cold.Heightened (8th) Your battle form is Huge, you gain a +20-foot status bonus to your fly Speed, and your attacks have 10-foot reach (or 15-foot reach if they previously had 10-foot reach). You instead gain AC = 21 + your level, 15 temporary HP, an attack modifier of +28, a damage bonus of +12, Athletics +28, and a +14 status bonus to breath weapon damage.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '89': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Sleep',
        description:
          'This effect can cause a creature to fall asleep or get drowsy.',
        id: '145',
        url: 'Traits.aspx?ID=145'
      }
    ],
    source: 'Core Rulebook pg. 333',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "When you Cast this Spell, any targets—including you—can choose to immediately fall asleep. The spell ends for any creatures that don't choose to fall asleep. Sleepers join a shared dream, where they can communicate with one another as though they were in the same room. Individual targets leave this shared dream upon awakening, and if all the targets awaken, the spell ends.",
    range: 'planetary',
    targets: 'up to 12 creatures you know by name and have met in person',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '90': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 333',
    traditions: ['arcane', 'divine', 'occult'],
    cast: [''],
    description:
      "You send a message to your target's dream. The message is one-way, up to 1 minute of speech (roughly 150 words). If the target is asleep, they receive the message instantly. If not, they receive it the next time they sleep. As soon as they receive it, the spell ends, and you know the message was sent.Heightened (4th) You can target up to 10 creatures you know by name and have met in person. You must send the same message to all of them; the spell ends for each creature individually.",
    range: 'planetary',
    targets: '1 creature you know by name and have met in person',
    savingThrow: '',
    duration: '1 day',
    area: ''
  },
  '91': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 333',
    traditions: ['occult'],
    cast: [''],
    description:
      "You draw the target into a lucid dream where it can explore the endless possibilities of its own potential within the ever-changing backdrop of its dreamscape. If it sleeps the full 8 hours uninterrupted, when it wakes, it counts as having spent a day of downtime retraining, though it can't use dreaming potential for any retraining that would require either an instructor or specialized knowledge it can't access within the dream.",
    range: 'touch',
    targets: '1 willing sleeping creature',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '92': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 333',
    traditions: ['arcane', 'divine'],
    actions: 'Reaction',
    cast: ['somatic;'],
    description:
      "The target appears to fall down dead, though it actually turns invisible. Its illusory corpse remains where it fell, complete with a believable fatal wound. This illusion looks and feels like a dead body. If the target's death seems absurd—for instance, a barbarian at full health appears to be slain by 2 damage—the GM can grant the attacker an immediate Perception check to disbelieve the illusion. If the target uses hostile actions, the spell ends. This ends the entire spell, so the illusory corpse disappears too.Heightened (7th) The spell doesn't end if the target uses hostile actions.",
    range: '120 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '93': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 334',
    traditions: ['arcane', 'occult'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You try to create a temporary duplicate of an enemy to fight on your behalf. The target can attempt a Fortitude save to disrupt the spell. The duplicate appears in an unoccupied space adjacent to the target and has the target's attack modifier, AC, saving throw modifiers, Perception, and skill modifiers, but it has only 70 Hit Points and lacks the target's special abilities, including immunities, resistances, and weaknesses. It has no magic items except weapon potency runes. The duplicate gains the minion trait, and it can only Stride and Strike. Its Strikes deal the target's normal damage but don't apply added effects, since it doesn't have special abilities. The spell automatically ends if the duplicate's Hit Points drop to 0. The duplicate attacks your enemies to the best of its abilities. You can also try to give it additional instructions; when you Sustain the Spell, you can also Command a Minion as part of your action, but the GM determines whether the duplicate follows your command. The duplicate is unstable, so each turn after it takes its actions, it loses 4d6 Hit Points. It's not a living creature, and it can never regain its lost Hit Points in any way.Critical Success You fail to create a duplicate.Success The duplicate deals half damage with its Strikes and the duration is reduced to a maximum of 2 rounds.Failure The duplicate works as described.Heightened (+1) The level of creature you can target increases by 2. The duplicate has 10 more HP.",
    range: '30 feet',
    targets: '1 enemy of level 15 or lower',
    savingThrow: 'Fortitude;',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '94': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 334',
    traditions: ['arcane', 'primal', 'levitate'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Using the weight of earth, you hamper a target's flight, with effects based on its Fortitude save. If the creature reaches the ground safely, it doesn't take falling damage.Critical Success The target is unaffected.Success The target falls safely up to 120 feet.Failure The target falls safely up to 120 feet. If it hits the ground, it can't Fly, levitate, or otherwise leave the ground for 1 round.Critical Failure The target falls safely up to 120 feet. If it hits the ground, it can't Fly, levitate, or otherwise leave the ground for 1 minute.",
    range: '120 feet',
    targets: '',
    savingThrow: 'Fortitude;',
    duration: 'varies',
    area: ''
  },
  '95': {
    traits: [
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 334',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You shake the ground, topple creatures into fissures, and collapse structures. The GM might add additional effects in certain areas. Cliffs might collapse, causing creatures to fall, or a lake might drain as fissures open up below its surface, leaving a morass of quicksand. Shaking Ground The ground is difficult terrain, and creatures on it take a –2 circumstance penalty to attack rolls, AC, and skill checks. Fissures Each creature on the ground must attempt a Reflex save at the start of its turn to keep its footing and avoid falling into 40-foot-deep fissures that open beneath it. The fissures are permanent, and their sides require DC 15 Athletics to Climb. Collapse Structures and ceilings might collapse. The GM rolls a flat check for each (DC 16 for a sturdy structure, DC 14 for an average structure and most natural formations, DC 9 for a shoddy structure, all adjusted higher or lower as the GM sees fit). A collapse deals 11d6 bludgeoning damage; each creature caught in a collapse must attempt a Reflex save to avoid it.Critical Success The creature takes half the collapse damage.Success The creature takes half the collapse damage and falls prone.Failure The creature takes the full collapse damage and falls prone.Critical Failure The creature takes the full collapse damage and falls into a fissure.Heightened (10th) You create a massive earthquake that can devastate a settlement. The range increases to half a mile and the area to a quarter-mile burst.',
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: '1 round',
    area: '60-foot burst'
  },
  '96': {
    traits: [
      {
        title: 'Cold',
        description:
          'Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.',
        id: '27',
        url: 'Traits.aspx?ID=27'
      },
      {
        title: 'Darkness',
        description:
          'Darkness effects extinguish non-magical light in the area, and can counteract less powerful magical light. You must usually target light magic with your darkness magic directly to counteract the light, but some darkness spells automatically attempt to counteract light.',
        id: '39',
        url: 'Traits.aspx?ID=39'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 334',
    traditions: ['arcane', 'divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A globe of freezing darkness explodes in the area, dealing 8d10 cold damage to creatures and objects in the area, plus 8d4 additional negative damage to living creatures. Creatures and objects in the area must attempt a Reflex save. If the globe overlaps with an area of magical light or affects a creature affected by magical light, eclipse burst attempts to counteract the light effect.Critical Success The creature or object is unaffected.Success The creature or object takes half damage.Failure The creature or object takes full damage.Critical Failure The creature or object takes double damage. If it's a creature, it becomes blinded by the darkness for an unlimited duration. Heightened (+1) The cold damage increases by 1d10 and the negative damage against the living increases by 1d4.",
    range: '500 feet',
    targets: '',
    savingThrow: 'Reflex',
    duration: '',
    area: '60-foot burst'
  },
  '97': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Electricity',
        description:
          'Effects with this trait deal electricity damage. A creature with this trait has a magical connection to electricity.',
        id: '56',
        url: 'Traits.aspx?ID=56'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 335',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'An arc of lightning leaps from one target to another. You deal electricity damage equal to 1d4 plus your spellcasting ability modifier.Heightened (+1) The damage increases by 1d4.',
    range: '30 feet',
    targets: '1 or 2 creatures',
    savingThrow: 'basic Reflex',
    duration: '',
    area: ''
  },
  '98': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 335',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You call upon the power of the planes to transform into a Medium elemental battle form. When you cast this spell, choose air, earth, fire, or water. While in this form, you gain the corresponding trait and the elemental trait. You have hands in this battle form and can take manipulate actions. You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose: AC = 19 + your level. Ignore your armor's check penalty and Speed reduction. 10 temporary Hit Points. Darkvision. One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You're trained with them. Your attack modifier is +18, and your damage bonus is +9. These are Dexterity based (air or fire) or Strength based (earth or water). If your corresponding unarmed attack modifier is higher, you can use it instead. Acrobatics (air or fire) or Athletics (earth or water) modifier of +20; ignore this change if your own modifier is higher.Air fly Speed 80 feet, movement doesn't trigger reactions; Melee gust, Damage 1d4 bludgeoning.Earth Speed 20 feet, burrow Speed 20 feet; Melee  fist, Damage 2d10 bludgeoning.Fire Speed 50 feet; fire resistance 10, weakness 5 to cold and 5 to water; Melee tendril , Damage 1d8 fire plus 1d4 persistent fire.Water Speed 20 feet, swim Speed 60 feet; fire resistance 5; Melee  wave, Damage 1d12 bludgeoning, and you can spend an action immediately after a hit to push the target 5 feet with the effects of a successful Shove.Heightened (6th) Your battle form is Large and your attacks have 10-foot reach. You must have space to expand or the spell is lost. You instead gain AC = 22 + your level, 15 temporary HP, an attack modifier of +23, a damage bonus of +13, and Acrobatics or Athletics +23.Heightened (7th) Your battle form is Huge and your attacks have 15-foot reach. You must have space to expand or the spell is lost. You instead gain AC = 22 + your level, 20 temporary HP, an attack modifier of +25, a damage bonus of +11, double the number of damage dice (including persistent damage), and Acrobatics or Athletics +25.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '99': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 335',
    traditions: ['arcane', 'divine', 'primal'],
    cast: [''],
    description:
      'You shield the target against dangerous temperatures. Choose severe cold or heat. The target is protected from the temperature you chose (but not extreme cold or heat).Heightened (3rd) The target is protected from severe cold and heat.Heightened (5th) The target is protected from severe cold, severe heat, extreme cold, and extreme heat.',
    range: 'touch',
    targets: '1 willing creature',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '100': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 335',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    cast: [''],
    description:
      'You protect the target with a powerful, long-lasting energy barrier. The target gains resistance 5 to acid, cold, electricity, fire, force, negative, positive, and sonic damage.Heightened (9th) The resistances increase to 10.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '24 hours',
    area: ''
  },
  '101': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 335',
    traditions: ['divine', 'primal'],
    cast: [''],
    description:
      "You transform the target into delicious fare, changing water into wine or another fine beverage or enhancing the food's taste and ingredients to make it a gourmet treat. Prior to the transformation, the spell attempts to counteract any poisons in the food or water. The food turns back to normal if not consumed before the duration expires, though any poisons that were counteracted are still gone.Heightened (+1) The number of gallons of water you can target increases by 1, or the number of pounds of food you can target increases by 5.",
    range: 'touch',
    targets: 'up to 1 gallon of non-magical water or up to 5 pounds of food',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '102': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 336',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Bolstered by magical power, the target grows to size Large. Its equipment grows with it but returns to natural size if removed. The creature is clumsy 1. Its reach increases by 5 feet (or by 10 feet if it started out Tiny), and it gains a +2 status bonus to melee damage. This spell has no effect on a Large or larger creature.Heightened (4th) The creature instead grows to size Huge. The status bonus to melee damage is +4 and the creature's reach increases by 10 feet (or 15 feet if the creature started out Tiny). The spell has no effect on a Huge or larger creature.Heightened (6th) As level 4, but you can target up to 10 creatures.",
    range: '30 feet',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '5 minutes',
    area: ''
  },
  '103': {
    traits: [
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 336',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Plants in the area entangle creatures. The area counts as difficult terrain. Each round that a creature starts its turn in the area, it must attempt a Reflex save. On a failure, it takes a –10-foot circumstance penalty to its Speeds until it leaves the area, and on a critical failure, it is also immobilized for 1 round. Creatures can attempt to Escape at entangle's DC to remove these effects.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: 'all squares in a 20-foot-radius burst that contain plants'
  },
  '104': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      }
    ],
    source: 'Core Rulebook pg. 336',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Your words fascinate your targets. You speak or sing without interruption throughout the casting and duration. Targets who notice your speech or song might give their undivided attention; each target must attempt a Will save. The GM might grant a circumstance bonus (to a maximum of +4) if the target is of an opposing religion, ancestry, or political leaning, or is otherwise unlikely to agree with what you're saying. Each creature that comes within range has to attempt a save when you Sustain the Spell. If you're speaking, enthrall gains the linguistic trait.Critical Success The target is unaffected and notices that you tried to use magic.Success The target needn't pay attention but doesn't notice you tried to use magic (it might notice others are enthralled).Failure The target is fascinated with you. It can attempt another Will save if it witnesses actions or speech with which it disagrees. If it succeeds, it's no longer fascinated and is temporarily immune for 1 hour. If the target is subject to a hostile act, or if another creature succeeds at a Diplomacy or Intimidation check against it, the fascination ends immediately.Critical Failure As failure, but the target can't attempt a save to end the fascination if it disagrees with you.",
    range: '120 feet',
    targets: 'all creatures in range',
    savingThrow: 'Will;',
    duration: 'sustained',
    area: ''
  },
  '105': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 336',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You travel to the Ethereal Plane, which overlaps the Material Plane. Material Plane creatures can't see you, and you can move through things on the Material Plane. You move at half your normal Speeds, but can move in any direction (including up and down). You can see onto the Material Plane within a radius of 60 feet; it is gray, hazy, and concealed from you. You can't affect the Material Plane, and you can't be affected by the Material Plane except by force effects and abjurations originating there. When the spell ends, you return to the Material Plane. If you're in the air, you fall (unless you can fly), and if you're inside an object, you're pushed into the nearest open space and take 1d6 damage per 5 feet you were pushed. If you cast this spell when not on the Material Plane, it is lost.Heightened (9th) You can target up to five additional willing creatures at a range of 30 feet. The duration is up to 10 minutes.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '106': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 336',
    traditions: ['occult'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "Choose a single statement you want the targets to believe. The fact could be narrow, such as “a dragon is circling overhead and wants to kill me”; wide-reaching, such as “all humanoids are disguised abominations”; or conceptual, such as “if I don't live a kinder life, I'll be punished in the afterlife.” The targets' experiences color how they react to this “truth” and how their behavior changes. If the statement changes what they perceive, they treat the change as a sudden revelation. The effect of the spell depends on the targets' Will saves. If a target is already subject to fabricated truth, your spell tries to counteract it. If the counteract check fails, the outcome of the target's saving throw can't be worse than a success.Critical Success The target doesn't believe the statement, and it knows you tried to trick it.Success The target doesn't believe the statement or realize you tried to trick it.Failure The target believes the statement for a duration of 1 week.Critical Failure The target believes the statement with unlimited duration.",
    range: '100 feet',
    targets: 'up to 5 creatures',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '107': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 337',
    traditions: ['divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "All creatures in the area when you cast the spell are limned in colorful, heatless fire of a color of your choice for the duration. Visible creatures can't be concealed while affected by faerie fire. If the creatures are invisible, they are concealed while affected by faerie fire, rather than being undetected.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '5 minutes',
    area: '10-foot burst'
  },
  '108': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 337',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You create a reservoir of vitality from necromantic energy, gaining a number of temporary Hit Points equal to 6 plus your spellcasting ability modifier.Heightened (+1) The temporary Hit Points increase by 3.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '109': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 337',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "You create a false image that fools any attempts to scry on an area. Any scrying spell sees, hears, smells, and otherwise detects whatever you wish within the area, rather than what is actually in the area. You can Sustain the Spell each round to change the illusion as you desire, including playing out a complex scene. If the scrying spell is of a higher level than false vision, the scryer can attempt a Perception check to disbelieve the illusion, though even if they're successful, they can't learn what's truly going on in the area.",
    range: 'touch',
    targets: '',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: '100-foot burst'
  },
  '110': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Fear',
        description:
          'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
        id: '68',
        url: 'Traits.aspx?ID=68'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 337',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You plant fear in the target; it must attempt a Will save.Critical Success The target is unaffected.Success The target is frightened 1.Failure The target is frightened 2.Critical Failure The target is frightened 3 and fleeing for 1 round.Heightened (3rd) You can target up to five creatures.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '111': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 337',
    traditions: ['arcane', 'primal'],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      "You cause the air itself to arrest a fall. The target's fall slows to 60 feet per round, and the portion of the fall during the spell's duration doesn't count when calculating falling damage. If the target reaches the ground while the spell is in effect, it takes no damage from the fall. The spell ends as soon as the target lands.",
    range: '60 feet',
    targets: '1 falling creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '112': {
    traits: [
      {
        title: 'Curse',
        description:
          'A curse is an effect that places some long-term affliction on a creature. Curses are always magical and are typically the result of a spell or trap.',
        id: '38',
        url: 'Traits.aspx?ID=38'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 337',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You drastically reduce the target's mental faculties. The target must attempt a Will save.Critical Success The target is unaffected.Success The target is stupefied 2 for 1 round.Failure The target is stupefied 4 with an unlimited duration.Critical Failure The target’s intellect is permanently reduced below that of an animal, and it treats its Charisma, Intelligence, and Wisdom modifiers as –5. It loses all class abilities that require mental faculties, including all spellcasting. If the target is a PC, they become an NPC under the GM’s control.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '113': {
    traits: [
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 337',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target's feet transform into fins, improving mobility in the water but reducing it on land. The target gains a swim Speed equal to its normal land Speed, but its land Speed becomes 5 feet.Heightened (6th) The spell lasts until the next time you make your daily preparations.",
    range: 'touch',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '114': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 337',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A field of positive energy fills the area, exuding warmth and rejuvenating those within. Each living creature that starts its turn in the area regains 1d8 Hit Points, and any undead creature that starts its turn in the area takes 1d8 positive damage.Heightened (8th) The healing and damage increase to 1d10.Heightened (9th) The healing and damage increase to 1d12.',
    range: '30 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: '20-foot burst'
  },
  '115': {
    traits: [
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      },
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 337',
    traditions: ['arcane', 'primal', 'produce flame'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You become living flame, giving you fire immunity, resistance 10 to precision damage, and weakness 5 to cold and to water. Any creature that touches you or damages you with an unarmed attack or non-reach melee weapon takes 3d6 fire damage. Your unarmed attacks deal 1d4 additional fire damage, and your fire spells deal one additional die of fire damage (of the same damage die the spell uses). You can cast produce flame as an innate spell; the casting is reduced from 2 actions to 1. In fire form, you have a fly Speed of 40 feet and don't need to breathe.Heightened (9th) Creatures touching you take 4d6 fire damage instead of 3d6, your unarmed attacks deal 2d4 additional fire damage, and you have a fly Speed of 60 feet.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '116': {
    traits: [
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You point your finger toward the target and speak a word of slaying. You deal 70 negative damage to the target. If the damage from finger of death reduces the target to 0 Hit Points, the target dies instantly.Heightened (+1) The damage increases by 10.',
    range: '30 feet',
    targets: '1 living creature',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: ''
  },
  '117': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      },
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Four acorns grow in your hand, their shells streaked with pulsing red and orange patterns. You or anyone else who has one of the acorns can toss it up to 30 feet with an Interact action. It explodes in a 5-foot burst, dealing 4d6 fire damage. The save uses your spell DC, even if someone else throws the acorn. Flames continue to burn on the ground in the burst for 1 minute, dealing 2d6 fire damage to any creature that enters the flames or ends its turn within them. A creature can take damage from the continuing flames only once per round, even if it's in overlapping areas of fire created by different acorns. When the spell ends, any remaining acorns rot and turn to ordinary soil.Heightened (8th) The burst's damage increases to 5d6, and the continuing flames damage increases to 3d6.Heightened (9th) The burst's damage increases to 6d6, and the continuing flames damage increases to 3d6.",
    range: '',
    targets: '',
    savingThrow: 'basic Reflex;',
    duration: '1 minute',
    area: ''
  },
  '118': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You wreathe yourself in ghostly flames, gaining cold resistance 5. Additionally, adjacent creatures that hit you with a melee attack, as well as creatures that touch you or hit you with an unarmed attack, take 2d6 fire damage each time they do.Heightened (+2) The cold resistance increases by 5, and the fire damage increases by 1d6.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '119': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A roaring blast of fire appears at a spot you designate, dealing 6d6 fire damage.Heightened (+1) The damage increases by 2d6.',
    range: '500 feet',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '20-foot burst'
  },
  '120': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You call a rain of divine fire that plummets down from above, dealing 8d6 fire damage. Because the flame is infused with divine energy, creatures in the area apply only half their usual fire resistance. Creatures that are immune to fire, instead of gaining the usual benefit of immunity, treat the results of their saving throws as one degree of success better.Heightened (+1) The damage increases by 2d6.',
    range: '120 feet',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '10-foot radius,  40-foot-tall cylinder'
  },
  '121': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You create a sphere of flame in a square within range. The sphere must be supported by a solid surface, such as a stone floor. The sphere deals 3d6 fire damage to each creature in the square where it first appears; each creature must attempt a basic Reflex save. On subsequent rounds, you can Sustain this Spell, leaving the sphere in its square or rolling it to another square within range and dealing 3d6 fire damage; each creature in its square must attempt a basic Reflex save.Creatures that succeed at their save take no damage (instead of half).Heightened (+1) The damage increases by 1d6.',
    range: '30 feet',
    targets: '',
    savingThrow: 'Reflex;',
    duration: 'sustained up to 1 minute',
    area: '1 5-foot square'
  },
  '122': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description: 'You gain a +30-foot status bonus to your Speed.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '123': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You try to turn the target's flesh into stone. The target must attempt a Fortitude save.Critical Success The target is unaffected.Success The target is slowed 1 for 1 round.Failure The target is slowed 1 and must attempt a Fortitude save at the end of each of its turns; this ongoing save has the incapacitation trait. On a failed save, the slowed condition increases by 1 (or 2 on a critical failure). A successful save reduces the slowed condition by 1. When a creature is unable to act due to the slowed condition from flesh to stone, the creature is petrified permanently. The spell ends if the creature is petrified or the slowed condition is removed.Critical Failure As failure, but the target is initially slowed 2.",
    range: '120 feet',
    targets: '1 creature made of flesh',
    savingThrow: 'Fortitude;',
    duration: 'varies',
    area: ''
  },
  '124': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A disk of magical force materializes adjacent to you. This disk is 2 feet in diameter and follows 5 feet behind you, floating just above the ground. It holds up to 5 Bulk of objects (though they must be able to fit and balance on its surface). Any objects atop the disk fall to the ground when the spell ends. The spell ends if a creature tries to ride atop the disk, if the disk is overloaded, if anyone tries to lift or force the disk higher above the ground, or if you move more than 30 feet away from the disk.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '125': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['arcane', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The target can soar through the air, gaining a fly Speed equal to its Speed or 20 feet, whichever is greater.Heightened (7th) The duration increases to 1 hour.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '5 minutes',
    area: ''
  },
  '126': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      }
    ],
    source: 'Core Rulebook pg. 338',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You ward an ally against the attacks and hostile spells from the target enemy. The target ally gains a +1 status bonus to Armor Class and saving throws against the target enemy's attacks, spells, and other effects.Heightened (6th) The status bonus increases to +2.",
    range: '30 feet',
    targets: '1 ally and 1 enemy',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '127': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Prediction',
        description:
          'Effects with this trait determine what is likely to happen in the near future. Most predictions are divinations.',
        id: '132',
        url: 'Traits.aspx?ID=132'
      }
    ],
    source: 'Core Rulebook pg. 340',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You gain a sixth sense that warns you of danger that might befall the target of the spell. If you choose a creature other than yourself as the target, you create a psychic link through which you can inform the target of danger. This link is a mental effect. Due to the amount of information this spell requires you to process, you can't have more than one foresight spell in effect at a time. Casting foresight again ends the previous foresight. While foresight is in effect, the target gains a +2 status bonus to initiative rolls and isn't flat-footed against undetected creatures or when flanked. In addition, you gain the following reaction. Foresight  Trigger The target of foresight defends against a hostile creature or other danger. Effect If the hostile creature or danger forces the target to roll dice (a saving throw, for example), the target rolls twice and uses the higher result, and this spell gains the fortune trait. But if the hostile creature or danger is rolling against the target (an attack roll or skill check, for example), that hostile creature or danger rolls twice and uses the lower result, and this spell gains the misfortune trait.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '128': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 340',
    traditions: ['arcane', 'divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You repel effects that would hinder a creature or slow its movement. While under this spell's effect, the target ignores effects that would give them a circumstance penalty to Speed. When they attempt to Escape an effect that has them immobilized, grabbed, or restrained, they automatically succeed unless the effect is magical and of a higher level than the freedom of movement spell.",
    range: 'touch',
    targets: '1 creature touched',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '129': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 340',
    traditions: ['arcane', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target transforms into a vaporous state. In this state, the target is amorphous and loses any item bonus to AC. It gains resistance 8 to physical damage and is immune to precision damage. It can't cast spells, activate items, or use actions that have the attack or manipulate trait. It gains a fly Speed of 10 feet and can slip through tiny cracks. The target can Dismiss the spell.",
    range: 'touch',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '5 minutes',
    area: ''
  },
  '130': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 340',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You tear open a rift to another plane, creating a portal that creatures can travel through in either direction. This portal is vertical and circular, with a radius of 40 feet. The portal appears at a location of your choice on the destination plane, assuming you have a clear idea of both the destination's location on the plane and what the destination looks like. If you attempt to create a gate into or out of the realm of a deity or another powerful being, that being can prevent the gate from forming.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '131': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 340',
    traditions: ['arcane', 'divine', 'occult', 'primal', 'raise dead'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The targeted corpse doesn't decay, nor can it be transformed into an undead. If the corpse is subject to a spell that requires the corpse to have died within a certain amount of time (for example, raise dead), do not count the duration of gentle repose against that time. This spell also prevents ordinary bugs and pests (such as maggots) from consuming the body.Heightened (5th) The spell's duration is unlimited, but the spell takes one more action to cast and requires a material component and a cost (embalming fluid worth 6 gp).",
    range: 'touch',
    targets: '1 corpse',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '132': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 340',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create an auditory illusion of simple sounds that has a maximum volume equal to four normal humans shouting. The sounds emanate from a square you designate within range. You can't create intelligible words or other intricate sounds (such as music).Heightened (3rd) The range increases to 60 feet.Heightened (5th) The range increases to 120 feet.",
    range: '30 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '133': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 340',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The target weapon becomes translucent and ghostly, and it can affect material and incorporeal creatures and objects. It can be wielded by a corporeal or incorporeal creature and gains the effects of the ghost touch property rune.',
    range: 'touch',
    targets:
      '1 non-magical weapon that is either unattended or wielded by you or a willing ally',
    savingThrow: '',
    duration: '5 minutes',
    area: ''
  },
  '134': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Disease',
        description:
          'An effect with this trait applies one or more diseases. A disease is typically an affliction.',
        id: '46',
        url: 'Traits.aspx?ID=46'
      },
      {
        title: 'Evil',
        description:
          'Evil effects often manipulate energy from evil-aligned Outer Planes and are antithetical to good divine servants or divine servants of good deities. A creature with this trait is evil in alignment. An ability with this trait can be selected or used only by evil creatures.',
        id: '64',
        url: 'Traits.aspx?ID=64'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 341',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You touch the target to afflict it with ghoul fever, infesting it with hunger and a steadily decreasing connection to positive energy; the target must attempt a Fortitude save.Ghoul Fever (disease); Level 3; Stage 1 carrier with no ill effects (1 day); Stage 2 3d8 negative damage and the creature regains half as many Hit Points from all healing (1 day); Stage 3 as stage 2 (1 day); Stage 4 3d8 negative damage and the creature gains no benefit from healing (1 day); Stage 5 as stage 4 (1 day); Stage 6 the creature dies and rises as a ghoul at the next midnightCritical Success The target is unaffected.Success The target is afflicted with ghoul fever at stage 1.Failure The target is afflicted with ghoul fever at stage 2.Critical Failure The target is afflicted with ghoul fever at stage 3.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '135': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 341',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Falsehoods pass your lips as smoothly as silk. You gain a +4 status bonus to Deception checks to Lie and against Perception checks to discern if you are telling the truth, and you add your level even if you're untrained. If the implausibility of your lies prompts a circumstance penalty or a DC increase, reduce that penalty or increase by half.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '136': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 341',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Creatures in the area are outlined by glittering dust. Each creature must attempt a Reflex save. If a creature has its invisibility negated by this spell, it is concealed instead of invisible. This applies both if the creature was already invisible and if it benefits from new invisibility effects before the end of the invisibility negation effect from this spell.Critical Success The target is unaffected.Success The target's invisibility is negated for 2 rounds.Failure The target is dazzled for 1 minute and its invisibility is negated for 1 minute.Critical Failure The target is blinded for 1 round and dazzled for 10 minutes. Its invisibility is negated for 10 minutes.",
    range: '120 feet',
    targets: '',
    savingThrow: 'Reflex',
    duration: '',
    area: '10-foot burst'
  },
  '137': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 341',
    traditions: ['arcane', 'divine', 'occult', 'dispel magic'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create an immobile globe around yourself that attempts to counteract any spell from outside the globe whose area or targets enter into the globe, as if the globe were a dispel magic spell 1 level lower than its actual spell level. If the counteract attempt succeeds, it prevents only the portion of the spell that would have entered the globe (so if the spell also has targets outside the globe, or part of its area is beyond the globe, those targets or that area is affected normally). You must form the sphere in an unbroken open space, so its edges don't pass through any creatures or objects, or the spell is lost (though creatures can enter the globe after the spell is cast).",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: '10-foot burst centered on one corner of your space'
  },
  '138': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 341',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    cast: [''],
    description:
      "You craft a trap by binding a hostile spell into a symbol. While Casting this Spell, you also Cast a Spell of a lower spell level to store in the glyph. The stored spell must take 3 actions or fewer to cast, have a hostile effect, and target one creature or have an area. You can set a password, a trigger, or both for the glyph. Any creature that moves, opens, or touches the target container or enters the target area that doesn't speak the password or that matches the trigger activates the glyph, releasing the harmful spell within. Once a spell is stored in the glyph, the glyph gains all the traits of that spell. If the stored spell targets one or more creatures, it targets the creature that set off the glyph. If it has an area, that area is centered on the creature that set off the glyph. Glyph of warding's duration ends when the glyph is triggered. The glyph counts as a magical trap, using your spell DC for both the Perception check to notice it and the Thievery check to disable it; both checks require the creature attempting them to be trained in order to succeed. You can Dismiss glyph of warding. The maximum number of glyphs of warding you can have active at a time is equal to your spellcasting ability modifier.",
    range: 'touch',
    targets: '1 container or a 10-foot-by-10-foot area',
    savingThrow: '',
    duration: 'unlimited',
    area: ''
  },
  '139': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Disease',
        description:
          'An effect with this trait applies one or more diseases. A disease is typically an affliction.',
        id: '46',
        url: 'Traits.aspx?ID=46'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 341',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Your touch afflicts the target with goblin pox, an irritating allergenic rash. The target must attempt a Fortitude save.Goblin Pox (disease); Level 1. Goblins and goblin dogs are immune. Stage 1 sickened 1 (1 round); Stage 2 sickened 1 and slowed 1 (1 round); Stage 3 sickened 1 and the creature can't reduce its sickened value below 1 (1 day)Critical Success The target is unaffected.Success The target is sickened 1.Failure The target is afflicted with goblin pox at stage 1.Critical Failure The target is afflicted with goblin pox at stage 2.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '140': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You conjure grease, with effects based on choosing area or target. Area All solid ground in the area is covered with grease. Each creature standing on the greasy surface must succeed at a Reflex save or an Acrobatics check against your spell DC or fall prone. Creatures using an action to move onto the greasy surface during the spell's duration must attempt either a Reflex save or an Acrobatics check to Balance. A creature that Steps or Crawls doesn't have to attempt a check or save. Target If you cast the spell on an unattended object, anyone trying to pick up the object must succeed at an Acrobatics check or Reflex save against your spell DC to do so. If you target an attended object, the creature that has the object must attempt an Acrobatics check or Reflex save. On a failure, the holder or wielder takes a –2 circumstance penalty to all checks that involve using the object; on a critical failure, the holder or wielder releases the item. The object lands in an adjacent square of the GM's choice. If you cast this spell on a worn object, the wearer gains a +2 circumstance bonus to Fortitude saves against attempts to grapple them.",
    range: '30 feet',
    targets: '1 object of Bulk 1 or less',
    savingThrow: '',
    duration: '1 minute',
    area: '4 contiguous 5-foot squares or;'
  },
  '141': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Tendrils of darkness curl out from your fingertips and race through the air. You deal 2d4 negative damage and 1 persistent bleed damage to living creatures in the line. Each living creature in the line must attempt a Fortitude save.Critical Success The creature is unaffected.Success The creature takes half the negative damage and no persistent bleed damage.Failure The creature takes full damage.Critical Failure The creature takes double negative damage and double persistent bleed damage.Heightened (+1) The negative damage increases by 2d4, and the persistent bleed damage increases by 1.',
    range: '',
    targets: '',
    savingThrow: 'Fortitude',
    duration: '',
    area: '30-foot line'
  },
  '142': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['divine', 'occult', 'primal'],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You ask for divine guidance, granting the target a +1 status bonus to one attack roll, Perception check, saving throw, or skill check the target attempts before the duration ends. The target chooses which roll to use the bonus on before rolling. If the target uses the bonus, the spell ends. Either way, the target is then temporarily immune for 1 hour.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: 'until the start of your next turn',
    area: ''
  },
  '143': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A violent wind issues forth from your palm, blowing from the point where you are when you cast the spell to the line's opposite end. The wind extinguishes small non-magical fires, disperses fog and mist, blows objects of light Bulk or less around, and pushes larger objects. Large or smaller creatures in the area must attempt a Fortitude save. Large or smaller creatures that later move into the gust must attempt the save on entering.Critical Success The creature is unaffected.Success The creature can't move against the wind.Failure The creature is knocked prone. If it was flying, it suffers the effects of critical failure instead.Critical Failure The creature is pushed 30 feet in the wind's direction, knocked prone, and takes 2d6 bludgeoning damage.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'until the start of your next turn',
    area: '60-foot line'
  },
  '144': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['material', 'somatic'],
    description:
      "The target consistently detects one thing as another, can't detect something that's there, or detects something that's not there, though it doesn't alter their beliefs. You choose which of these effects applies, and you determine the specifics of the hallucination. For example, you could make the target see all elves as humans, be unable to detect the presence of their brother, see their beloved pocket watch on their person even when it isn't, or see a tower in the center of town. The target can attempt an initial Will save, with effects below. They also receive a Will save to disbelieve the hallucination every time they Seek or directly interact with the hallucination. For example, the target could attempt to disbelieve the hallucination each time they interacted with an elf, bumped into their brother accidentally, tried to check their pocket watch, or studied the tower. The target can attempt to disbelieve with a large circumstance bonus in situations determined by the GM, such as if the target attempted to climb the nonexistent tower.Critical Success The creature is unaffected.Success The creature perceives what you chose until it disbelieves, but it knows what the hallucination is.Failure The creature perceives what you chose until it disbelieves.Critical Failure The creature perceives what you chose until it disbelieves, and it trusts its false senses, taking a –4 circumstance penalty to saves to disbelieve.Heightened (6th) Choose to either target up to 10 creatures or change the spell's duration to until the next time you make your daily preparations.Heightened (8th) Choose to either target any number of creatures or change the spell's duration to unlimited.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '145': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['arcane', 'occult', 'primal'],
    cast: [''],
    description:
      "You create an illusion that causes natural terrain to look, sound, feel, and smell like a different kind of terrain. This doesn't disguise any structures or creatures in the area. Any creature that touches the illusion or uses the Seek action to examine it can attempt to disbelieve your illusion.Heightened (5th) Your image can also disguise structures or create illusory structures (but still doesn't disguise creatures).",
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: '50-foot burst'
  },
  '146': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['divine'],
    actions: 'Single Action',
    cast: ['to'],
    description:
      "You channel negative energy to harm the living or heal the undead. If the target is a living creature, you deal 1d8 negative damage to it, and it gets a basic Fortitude save. If the target is a willing undead creature, you restore that amount of Hit Points. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.  (somatic) The spell has a range of touch. (verbal, somatic) The spell has a range of 30 feet. If you're healing an undead creature, increase the Hit Points restored by 8. (material, verbal, somatic) You disperse negative energy in a 30-foot emanation. This targets all living and undead creatures in the area.Heightened (+1) The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.",
    range: 'varies',
    targets: '1 living creature or 1 willing undead creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '147': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['arcane', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Magic empowers the target to act faster. It gains the quickened condition and can use the extra action each round only for Strike and Stride actions.Heightened (7th) You can target up to 6 creatures.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '148': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['divine', 'primal'],
    actions: 'Single Action',
    cast: ['to'],
    description:
      "You channel positive energy to heal the living or damage the undead. If the target is a willing living creature, you restore 1d8 Hit Points. If the target is undead, you deal that amount of positive damage to it, and it gets a basic Fortitude save. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters. (somatic) The spell has a range of touch. (verbal, somatic) The spell has a range of 30 feet. If you're healing a living creature, increase the Hit Points restored by 8. (material, somatic, verbal) You disperse positive energy in a 30-foot emanation. This targets all living and undead creatures in the burst.Heightened (+1) The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.",
    range: 'varies',
    targets: '1 willing living creature or 1 undead',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '149': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You tap into the target's inner heroism, granting it a +1 status bonus to attack rolls, Perception checks, saving throws, and skill checks.Heightened (6th) The status bonus increases to +2.Heightened (9th) The status bonus increases to +3.",
    range: 'touch',
    targets: '1 humanoid creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '150': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 342',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target is overtaken with uncontrollable laughter. It must attempt a Will save.Critical Success The target is unaffected.Success The target is plagued with uncontrollable laugher. It can't use reactions.Failure The target is slowed 1 and can't use reactions.Critical Failure The target falls prone and can't use actions or reactions for 1 round. It then suffers the failure effects.",
    range: '30 feet',
    targets: '1 living creature',
    savingThrow: 'Will;',
    duration: 'sustained',
    area: ''
  },
  '151': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Good',
        description:
          'Good effects often manipulate energy from good-aligned Outer Planes and are antithetical to evil divine servants or divine servants of evil deities. A creature with this trait is good in alignment. An ability with this trait can be selected or used only by good creatures.',
        id: '83',
        url: 'Traits.aspx?ID=83'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 344',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal;'],
    description:
      'You call upon sacred energy to amplify a vial of holy water, tossing it an incredible distance. It explodes in an enormous burst that deals 3d6 bludgeoning damage to creatures in the area from the cascade of water. The water deals an additional 6d6 positive damage to undead and 6d6 good damage to fiends.Heightened (+1) The bludgeoning damage increases by 1d6, and the additional positive and good damage each increase by 2d6.',
    range: '500 feet',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '20-foot burst'
  },
  '152': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 344',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You pull the moisture from the targets' bodies, dealing 10d10 negative damage. Creatures made of water (such as water elementals) and plant creatures use the outcome for one degree of success worse than the result of their saving throw. Creatures whose bodies contain no significant moisture (such as earth elementals) are immune to horrid wilting.Heightened (+1) The damage increases by 1d10.",
    range: '500 feet',
    targets: 'any number of living creatures',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: ''
  },
  '153': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 344',
    traditions: ['arcane', 'occult', 'primal', 'shrink', 'enlarge'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You transform your appearance to that of a Small or Medium humanoid, such as a dwarf, elf, goblin, halfling, human, orc, or lizardfolk. You gain the humanoid trait in addition to your other traits while in this form, as well as any trait related to the creature's kind (such as goblin or human). If this transformation reduces your size, it reduces your reach accordingly (as the shrink spell). This transformation doesn't change your statistics in any way, and you don't gain any special abilities of the humanoid form you assume. You can still wear and use your gear, which changes size (if necessary) to match your new form. If items leave your person, they return to their usual size. Humanoid form grants you a +4 status bonus to Deception checks to pass as a generic member of the chosen ancestry, and you add your level even if you're untrained, but you can't make yourself look like a specific person. If you want to Impersonate an individual, you still need to create a disguise, though the GM won't factor in the difference in ancestry when determining the DC of your Deception check. You can Dismiss this spell.Heightened (3rd) You gain darkvision or low-light vision if the form you assume has that ability.Heightened (5th) You can take on the appearance of a Large humanoid. If this increases your size, you gain the effects of the enlarge spell.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '154': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 344',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You call forth a powerful blast of pressurized water that bludgeons the target and knocks it back. Make a ranged spell attack roll.Critical Success The target takes 6d6 bludgeoning damage and is knocked back 10 feet.Success The target takes 3d6 bludgeoning damage and is knocked back 5 feet.Heightened (+1) The damage increases by 2d6.',
    range: '60 feet',
    targets: '1 creature or object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '155': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 344',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A swirling torrent of water manifests along a straight line, battering those that are its path and possibly pushing them away from you. The torrent deals 8d6 bludgeoning damage. Each creature in the area must attempt a basic Fortitude save. Creatures that fail the save are also knocked back 5 feet (10 feet on a critical failure).Heightened (+1) The damage increases by 2d6.',
    range: '',
    targets: '',
    savingThrow: 'Fortitude',
    duration: '',
    area: '60-foot line'
  },
  '156': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 344',
    traditions: ['occult'],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You rapidly catalog and collate information relevant to your current situation. You can instantly use up to 6 Recall Knowledge actions as part of Casting this Spell. For these actions, you can't use any special abilities, reactions, or free actions that trigger when you Recall Knowledge.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '157': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 344',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['material', 'somatic'],
    description:
      "You create a pattern of shifting colors that hovers in the air in a geometric cloud. Creatures are dazzled while inside the pattern. In addition, a creature must attempt a Will saving throw if it is inside the pattern when you cast it, when it enters the pattern, when it ends its turn within the pattern, or if it uses a Seek or Interact action on the pattern. A creature currently fascinated by the pattern doesn't attempt new saves.Success The target is unaffected.Failure The target is fascinated by the pattern.Critical Failure The target is fascinated by the pattern. While it remains fascinated, it can't use reactions.",
    range: '120 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: 'sustained up to 1 minute',
    area: '10-foot burst'
  },
  '158': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 345',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create an illusory image of a Large or smaller creature. It generates the appropriate sounds, smells, and feels believable to the touch. If you and the image are ever farther than 500 feet apart, the spell ends. The image can't speak, but you can use your actions to speak through the creature, with the spell disguising your voice as appropriate. You might need to attempt a Deception or Performance check to mimic the creature, as determined by the GM. This is especially likely if you're trying to imitate a specific person and engage with someone that person knows. In combat, the illusion can use 2 actions per turn, which it uses when you Sustain the Spell. It uses your spell attack roll for attack rolls and your spell DC for its AC. Its saving throw modifiers are equal to your spell DC – 10. It is substantial enough that it can flank other creatures. If the image is hit by an attack or fails a save, the spell ends. The illusion can cause damage by making the target believe the illusion's attacks are real, but it cannot otherwise directly affect the physical world. If the illusory creature hits with a Strike, the target takes mental damage equal to 1d4 plus your spellcasting ability modifier. This is a mental effect. The illusion's Strikes are nonlethal. If the damage doesn't correspond to the image of the monster—for example, if an illusory Large dragon deals only 5 damage—the GM might allow the target to attempt a Perception check to disbelieve the spell as a free action. Any relevant resistances and weaknesses apply if the target thinks they do, as judged by the GM. For example, if the illusion wields a warhammer and attacks a creature resistant to bludgeoning damage, the creature would take less mental damage. However, illusory damage does not deactivate regeneration or trigger other effects that require a certain damage type. The GM should track illusory damage dealt by the illusion. Any creature that touches the image or uses the Seek action to examine it can attempt to disbelieve your illusion. When a creature disbelieves the illusion, it recovers from half the damage it had taken from it (if any) and doesn't take any further damage from it.Heightened (+1) The damage of the image's Strikes increases by 1d4, and the maximum size of creature you can create increases by one (to a maximum of Gargantuan).",
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '159': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 345',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create an illusion that causes you to appear as another creature of the same body shape, and with roughly similar height (within 6 inches) and weight (within 50 pounds), as yourself. The disguise is typically good enough to hide your identity, but not to impersonate a specific individual. The spell doesn't change your voice, scent, or mannerisms. You can change the appearance of your clothing and worn items, such as making your armor look like a dress. Held items are unaffected, and any worn item you remove returns to its true appearance. Casting illusory disguise counts as setting up a disguise for the Impersonate use of Deception; it ignores any circumstance penalties you might take for disguising yourself as a dissimilar creature, it gives you a +4 status bonus to Deception checks to prevent others from seeing through your disguise, and you add your level even if you're untrained. You can Dismiss this spell.Heightened (2nd) The spell also disguises your voice and scent, and it gains the auditory trait.Heightened (3rd) You can appear as any creature of the same size, even a specific individual. You must have seen an individual to take on their appearance. The spell also disguises your voice and scent, and it gains the auditory trait.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '160': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 345',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create an illusory visual image of a stationary object. The entire image must fit within the spell's area. The object appears to animate naturally, but it doesn't make sounds or generate smells. For example, water would appear to pour down an illusory waterfall, but it would be silent. Any creature that touches the image or uses the Seek action to examine it can attempt to disbelieve your illusion.Heightened (2nd) Your image makes appropriate sounds, generates normal smells, and feels right to the touch. The spell gains the auditory trait. The duration increases to 1 hour.Heightened (5th) As the 2nd-level version, but the duration is unlimited.",
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: '20-foot burst'
  },
  '161': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 345',
    traditions: [
      'arcane',
      'occult',
      'illusory creature',
      'hallucinatory terrain'
    ],
    cast: [''],
    description:
      "You form an imaginary scene that includes up to 10 discrete creatures or objects of various sizes, all of which must be within the spell's area. These elements generate appropriate sounds and smells, and they feel right to the touch. Elements of an illusory scene are incapable of speech. Unlike with the illusory creature spell, creatures in your scene lack combat abilities and statistics. Your scene doesn't include changes to the environment around it, though you can place your scene within the illusory environment of a hallucinatory terrain spell. When you create the scene, you can choose to have it be static or follow a program. Though a static scene is stationary, it includes basic natural movement. For example, wind blowing on an illusory piece of paper would rustle it. A program can be up to 1 minute long and repeats when finished. For instance, you could create a scene of two orcs fighting each other, and the fight would go the same way for each repetition. If you create a loop, the two fighters end up in the same place at the start of the scene and at the end of it, but you can smooth the program so it's hard to tell when the loop ends and begins. Anyone observing the scene for more than a few minutes almost always notices it looping. You're unable to alter the program after you create the illusion. Any creature that touches any part of the image or uses the Seek action to examine it can attempt to disbelieve your illusion. If they interact with a portion of the illusion, they disbelieve only that portion. They disbelieve the entire scene only on a critical success.Heightened (6th) Creatures or objects in your scene can speak. You must speak the specific lines for each actor when creating your program. The spell disguises your voice for each actor.Heightened (8th) As the 6th-level version, and the duration is unlimited.",
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: '30-foot burst'
  },
  '162': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 346',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You crush the target by causing it to collapse in on itself, dealing 75 damage. Each time you Sustain the Spell, you must choose a new target to be subject to the same effect; the same creature can never be targeted more than once with a single casting of this spell. You also can't affect more than one creature per turn with implosion. You can't target a creature that's incorporeal, gaseous, or liquid, or one that otherwise lacks a solid form.Heightened (+1) The damage increases by 10.",
    range: '30 feet',
    targets: '1 corporeal creature',
    savingThrow: 'basic Fortitude;',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '163': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 346',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You envision a simple bug and transform into a Medium animal battle form. When you cast this spell, choose ant, beetle, centipede, mantis, scorpion, or spider. You can decide the specific type of animal (such as such as a ladybug or scarab for beetle), but this has no effect on the form's Size or statistics. While in this form, you gain the animal trait. You can Dismiss this spell. You gain the following statistics and abilities regardless of which battle form you choose: AC = 18 + your level. Ignore your armor's check penalty and Speed reduction. 10 temporary Hit Points. Low-light vision. One or more attacks specific to the battle form you choose, which are the only attacks you can use. You're trained with them. Your attack modifier is +13, and your damage bonus is +2. These attacks are Strength based (for the purpose of the enfeebled condition). If your unarmed attack modifier is higher, you can use it instead. Athletics modifier of +13, unless your own is higher. You also gain specific abilities based on the form you choose:Ant Speed 30 feet, climb Speed 30 feet; Melee  mandibles, Damage 2d6 bludgeoning.Beetle Speed 25 feet; Melee  mandibles , Damage 2d10 bludgeoning.Centipede Speed 25 feet, climb Speed 25 feet; darkvision; Melee  mandibles, Damage 1d8 piercing plus 1d4 persistent poison.Mantis Speed 40 feet; imprecise scent 30 feet; Melee  foreleg , Damage 2d8 bludgeoning.Scorpion Speed 40 feet; darkvision, imprecise tremorsense 60 feet; Melee  stinger, Damage 1d8 piercing plus 1d4 persistent poison; Melee  pincer (agile), Damage 1d6 bludgeoning.Spider darkvision; Melee  fangs, Damage 1d6 piercing plus 1d4 persistent poison; Melee  Speed 25 feet, climb Speed 25 feet; Ranged  web (range increment 20 feet), Damage entangles the target for 1 round.Heightened (4th) Your battle form is Large, and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 15 temporary HP, attack modifier +16, damage bonus +6, and Athletics +16.Heightened (5th) Your battle form is Huge, and your attacks have 15-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 20 temporary HP, attack modifier +18, damage bonus +2 and double damage dice (including persistent damage), and Athletics +20.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '164': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 347',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['material', 'somatic'],
    description:
      "Cloaked in illusion, the target becomes invisible. This makes it undetected to all creatures, though the creatures can attempt to find the target, making it hidden to them instead (page 466). If the target uses a hostile action, the spell ends after that hostile action is completed.Heightened (4th) The spell lasts 1 minute, but it doesn't end if the target uses a hostile action.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '165': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 347',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['material', 'somatic'],
    description:
      "You and all targets are invisible except to each other as long as you remain within the spell's area. If a creature made invisible by this spell leaves the spell's area, it becomes visible and remains so even if it returns to the spell's area. If any creature made invisible by this spell uses a hostile action, the spell ends after the hostile action is completed. While exploring, it's easy to move together slowly and remain invisible. This is untenable in a battle, however. Once an encounter begins, creatures remain invisible until at most the end of the first round, at which point the spell ends.Heightened (5th) The duration increases to 1 hour.",
    range: '',
    targets: 'you and any number of creatures in range',
    savingThrow: '',
    duration: '10 minutes',
    area: '10-foot emanation;'
  },
  '166': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 347',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You make the target object look and feel as though it were in much better or worse physical condition. When you cast this spell, decide whether you want to make the object look decrepit or perfect. An item made to look decrepit appears broken and shoddy. An intact item made to look better appears as though it's brand new and highly polished or well maintained. A broken item appears to be intact and functional. Destroyed items can't be affected by this spell. A creature that Interacts with the item can attempt to disbelieve the illusion.Heightened (2nd) The duration is 24 hours.Heightened (3rd) The duration is unlimited.",
    range: 'touch',
    targets: '1 object no more than 10 feet by 10 feet by 10 feet',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '167': {
    traits: [
      {
        title: 'Move',
        description:
          'An action with this trait involves moving from one space to another.',
        id: '114',
        url: 'Traits.aspx?ID=114'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 347',
    traditions: ['arcane', 'primal'],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'Your legs surge with strength, ready to leap high and far. You jump 30 feet in any direction without touching the ground. You must land on a space of solid ground within 30 feet of you, or else you fall after using your next action.Heightened (3rd) The range becomes touch, the target changes to one touched creature, and the duration becomes 1 minute, allowing the target to jump as described whenever it takes the Leap action.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '168': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 347',
    traditions: ['arcane', 'occult', 'lock'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You make the target easier to open. Knock grants a +4 status bonus to any creature that tries to open the target door, lock, or container with an Athletics or a Thievery check. You can attempt a Thievery check to open the target as part of casting knock, and you add your level even if you're untrained. Knock counteracts lock.",
    range: '30 feet',
    targets: '1 door, lock, or container',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '169': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 348',
    traditions: ['divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "In your mind's eye, you see a path northward. You immediately know which direction is north (if it exists at your current location).Heightened (7th) You can instead know the direction to a familiar location, such as a previous home or a favorite tavern.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '170': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 348',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You defy gravity and levitate the target 5 feet off the ground. For the duration of the spell, you can move the target up or down 10 feet with a single action, which has the concentrate trait. A creature floating in the air from levitate takes a –2 circumstance penalty to attack rolls. A floating creature can spend an Interact action to stabilize itself and negate this penalty for the remainder of its turn. If the target is adjacent to a fixed object or terrain of suitable stability, it can move across the surface by climbing (if the surface is vertical, like a wall) or crawling (if the surface is horizontal, such as a ceiling). The GM determines which surfaces can be climbed or crawled across.',
    range: 'touch',
    targets: '1 unatteded object or willing creature',
    savingThrow: '',
    duration: '5 minutes',
    area: ''
  },
  '171': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 348',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The object glows, casting bright light in a 20-foot radius (and dim light for the next 20 feet) like a torch. If you cast this spell again on a second object, the light spell on the first object ends.Heightened (4th) The object sheds bright light in a 60-foot radius (and dim light for the next 60 feet).',
    range: 'touch',
    targets: '1 unattended, non-magical object of 1 Bulk or less',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '172': {
    traits: [
      {
        title: 'Electricity',
        description:
          'Effects with this trait deal electricity damage. A creature with this trait has a magical connection to electricity.',
        id: '56',
        url: 'Traits.aspx?ID=56'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 348',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A bolt of lightning strikes outward from your hand, dealing 4d12 electricity damage.Heightened (+1) The damage increases by 1d12.',
    range: '',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '120-foot line'
  },
  '173': {
    traits: [
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 348',
    traditions: ['arcane', 'divine', 'occult'],
    cast: [''],
    description:
      "You learn the direction to the target (if you picked a specific object, such as “my mother's sword”) or the nearest target (if you picked a type of object, such as “swords”). If the target is a specific object, you must have observed it directly with your own senses. If it's a type of object, you still need to have an accurate mental image of the type of object. If there's lead or running water between you and the target, this spell can't locate the object. This means you might find a type of object farther away if the nearest one is behind lead or running water.Heightened (5th) You can target a specific creature or ancestry instead of an object, but you must have met or seen up close the creature or ancestry you want to target.",
    range: '500 feet',
    targets: '1 specific object or type of object',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '174': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 348',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target's latch mechanism clinks shut, held fast by unseen magical restraints. When you magically lock a target, you set an Athletics and Thievery DC to open it equal to your spell DC or the base lock DC with a +4 status bonus, whichever is higher. Any key or combination that once opened a lock affected by this spell does not do so for the duration of the spell, though the key or combination does grant a +4 circumstance bonus to checks to open the door. If the target is opened, the spell ends. Assuming the target is not barred or locked in some additional way, you can unlock and open it with an Interact action during which you touch the target. This does not end the spell. You can Dismiss this spell at any time and from any distance.Heightened (2nd) The duration increases to unlimited, but you must expend 6 gp worth of gold dust as an additional cost.",
    range: 'touch',
    targets: '1 lock, or a door or container with a latch',
    savingThrow: '',
    duration: '1 day',
    area: ''
  },
  '175': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 348',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You lengthen your stride beyond what should be possible. You gain a +10-foot status bonus to your Speed.Heightened (2nd) The duration increases to 8 hours.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '176': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 348',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You ward yourself with shimmering magical energy, gaining a +1 item bonus to AC and a maximum Dexterity modifier of +5. While wearing mage armor, you use your unarmored proficiency to calculate your AC.Heightened (4th) You gain a +1 item bonus to saving throws.Heightened (6th) The item bonus to AC increases to +2, and you gain a +1 item bonus to saving throws.Heightened (8th) The item bonus to AC increases to +2, and you gain a +2 item bonus to saving throws.Heightened (10th) The item bonus to AC increases to +3, and you gain a +3 item bonus to saving throws.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '177': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 349',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create a single magical hand, either invisible or ghostlike, that grasps the target object and moves it slowly up to 20 feet. Because you're levitating the object, you can move it in any direction. When you Sustain the Spell, you can move the object an additional 20 feet. If the object is in the air when the spell ends, the object falls.Heightened (3rd) You can target an unattended object with a Bulk of 1 or less.Heightened (5th) The range increases to 60 feet, and you can target an unattended object with a Bulk of 1 or less.Heightened (7th) The range increases to 60 feet, and you can target an unattended object with a Bulk of 2 or less.",
    range: '30 feet',
    targets: '1 unattended object of light Bulk or less',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '178': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 349',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "You alter the appearance of an item's magic aura. You can choose to have the target's aura appear as that of common magic item of twice magic aura's level or lower, or to have it register as being under the effects of a spell of your choice of magic aura's level or lower. If the target is magical, you can instead choose to have it appear as entirely non-magical. A caster using detect magic or study aura of an equal or higher spell level can attempt to disbelieve the illusion from magic aura. Magic aura doesn't mask the aura of spells that are 9th level or higher or of items that are 19th level or higher.Heightened (3rd) You can target a creature instead of an object. When you do, you can either conceal the auras of all magic items it has or have that creature's aura appear as if it were under the effect of a spell you know.",
    range: 'touch',
    targets: '1 object of 3 bulk or less',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '179': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 349',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Choose one of the target's unarmed attacks that deal one damage die. You cause that unarmed attack to shine with primal energy. The unarmed attack becomes a +1 striking unarmed attack, gaining a +1 item bonus to attack rolls and increasing the number of damage dice to two.",
    range: 'touch',
    targets: '1 willing ally',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '180': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 349',
    traditions: ['arcane', 'occult'],
    actions: 'Single Action',
    cast: ['to'],
    description:
      'You send a dart of force streaking toward a creature that you can see. It automatically hits and deals 1d4+1 force damage. For each additional action you use when Casting the Spell, increase the number of missiles you shoot by one, to a maximum of three missiles for 3 actions. You choose the target for each missile individually. If you shoot more than one missile at the same target, combine the damage before applying bonuses or penalties to damage, resistances, weaknesses, and so forth.Heightened (+2) You shoot one additional missile with each action you spend.',
    range: '120 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '181': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 349',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You specify a trigger (described on page 305) and a message up to 25 words long. When the specified trigger occurs within 30 feet of the target, an illusory mouth appears on the target and speaks the message, and the magic mouth spell ends.',
    range: 'touch',
    targets: '1 creature or object',
    savingThrow: '',
    duration: 'unlimited',
    area: ''
  },
  '182': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 349',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The weapon glimmers with magic and energy. The target becomes a +1 striking weapon, gaining a +1 item bonus to attack rolls and increasing the number of weapon damage dice to two.',
    range: 'touch',
    targets:
      '1 non-magical weapon that is unattended or wielded by you or a willing ally',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '183': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Extradimensional',
        description:
          'This effect or item creates an extradimensional space. An extradimensional effect placed inside another extradimensional space ceases to function until it is removed.',
        id: '67',
        url: 'Traits.aspx?ID=67'
      }
    ],
    source: 'Core Rulebook pg. 349',
    traditions: ['arcane', 'occult', 'plane shift', 'unseen servant'],
    cast: [''],
    description:
      "You conjure an extradimensional demiplane consisting of a spacious dwelling with a single entrance. The entrance connects to the plane where you Cast the Spell, appearing anywhere within the spell's range as a faint, shimmering, vertical rectangle 5 feet wide and 10 feet high. You designate who can enter when you cast the spell. Once inside, you can shut the entrance, making it invisible. You and the creatures you designated can reopen the door at will, just like opening a physical door. Inside, the demiplane appears to be a mansion featuring a magnificent foyer and numerous opulent chambers. The mansion can have any floor plan you imagine as you Cast the Spell, provided it fits within a space 40 feet wide, 40 feet deep, and 30 feet tall. While the entrance to the mansion is closed, effects from outside the mansion fail to penetrate it, and vice versa, except for plane shift, which can be used to enter the mansion. You can use scrying magic and similar effects to observe the outside only if they're capable of crossing planes. A staff of up to 24 servants attends to anyone within the mansion. These are like the servant created by the unseen servant spell, though they're visible, with an appearance you determine during casting. The mansion is stocked with enough food to serve a nine-course banquet to 150 people.",
    range: '30 feet',
    targets: '',
    savingThrow: '',
    duration: '24 hours',
    area: ''
  },
  '185': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Fear',
        description:
          'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
        id: '68',
        url: 'Traits.aspx?ID=68'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 350',
    traditions: ['arcane', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The target appears to be a gruesome and terrifying creature. The effect is unique to each observer, so a human viewing the target might see a demon with bloody fangs, but a demon observing the target might see a glowing angelic visage. When any creature attempts a hostile action against the target, the creature must attempt a Will save. It is then temporarily immune until the end of its next turn.Success The creature is unaffected.Failure The creature becomes frightened 2 before using its action.Critical Failure The creature becomes frightened 2, and its action fails and is wasted.Heightened (8th) You can target up to 5 creatures. If a creature uses a hostile action or reaction that affects multiple targets simultaneously, it needs to attempt only one save against mask of terror.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '186': {
    traits: [
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 350',
    traditions: ['arcane', 'divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You unleash a wave of necromantic energy to snuff out the life force of those in its path. Each creature of 17th level or lower in the line must attempt a Fortitude save. If the damage from massacre reduces a creature to 0 Hit Points, that creature dies instantly. If massacre doesn't kill even a single creature, the negative energy violently explodes back toward you, dealing an additional 30 negative damage to every creature in the line (even those above 17th level) and 30 negative damage to you.Critical Success The creature is unaffected.Success The creature takes 9d6 negative damage.Failure The creature takes 100 negative damage.Critical Failure The creature dies.Heightened (10th) The spell can affect creatures up to 19th level. Increase the damage to 10d6 on a success, and to 115 on a failure.",
    range: '',
    targets: '',
    savingThrow: 'Fortitude',
    duration: '',
    area: '60-foot line'
  },
  '187': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Extradimensional',
        description:
          'This effect or item creates an extradimensional space. An extradimensional effect placed inside another extradimensional space ceases to function until it is removed.',
        id: '67',
        url: 'Traits.aspx?ID=67'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 350',
    traditions: ['arcane', 'occult', 'plane shift'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You transport the target into an extradimensional maze of eldritch origin and trap it there. Once each turn, the target can spend 1 action to attempt a Survival check or Perception check against your spell DC to escape the maze. The possible outcomes are as follows.Teleportation magic doesn't help the creature escape unless the magic can transport across planes, such as plane shift. When the spell ends, either because the target escaped or the duration ran out, the target returns to the space it occupied when it was banished, or to the nearest space if the original is now filled.Critical Success The target escapes and the spell ends.Success The target is on the right path to the exit. If the target was already on the right path, it escapes the maze and the spell ends.Failure The target makes no progress toward escape.Critical Failure The target makes no progress toward escape, and if it was on the right path, it no longer is.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '188': {
    traits: [
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 350',
    traditions: ['arcane', 'primal', 'Passwall'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You merge with an adjacent block of stone with enough volume to fit you and your worn and held possessions. You must touch the stone when you Cast the Spell. You can hear, but not see, what's going on outside the stone, and you can cast spells while in the stone as long as they don't require line of effect beyond the stone. Significant physical damage to the stone while you are inside it expels you and deals 10d6 damage to you. Passwall expels you without dealing damage and ends meld into stone. You can Dismiss this spell.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '189': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 351',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    cast: [''],
    description:
      "You repair the target item. You restore 5 Hit Points per spell level to the target, potentially removing the broken condition if this repairs it past the item's Broken Threshold. You can't replace lost pieces or repair an object that's been completely destroyed.Heightened (2nd) You can target a non-magical object of 1 Bulk or less.Heightened (3rd) You can target a non-magical object of 2 Bulk or less, or a magical object of 1 Bulk or less.",
    range: 'touch',
    targets: 'non-magical object of light Bulk or less',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '190': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 351',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You mouth words quietly, but instead of coming out of your mouth, they're transferred directly to the ears of the target. While others can't hear your words any better than if you normally mouthed them, the target can hear your words as if they were standing next to you. The target can give a brief response as a reaction, or as a free action on their next turn if they wish, but they must be able to see you and be within range to do so. If they respond, their response is delivered directly to your ear, just like the original message.Heightened (3rd) The spell's range increases to 500 feet.",
    range: '120 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: 'see below',
    area: ''
  },
  '191': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 351',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You call down four meteors that explode in a fiery blast. Each meteor deals 6d10 bludgeoning damage to any creatures in the 10-foot burst at the center of its area of effect before exploding, dealing 14d6 fire damage to any creatures in its 40-foot burst. The meteors' central 10-foot bursts can't overlap, and a creature takes the same amount of fire damage no matter how many overlapping explosions it's caught in. The saving throw applies to both the bludgeoning and the fire damage.Heightened (+1) The bludgeoning damage increases by 1d10, and the fire damage increases by 2d6.",
    range: '500 feet',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '4 40-foot bursts'
  },
  '192': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 351',
    traditions: ['arcane', 'occult', 'detect magic'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Powerful wards hide a creature from divination magic. The target gains a +4 status bonus to saves against mental effects. Mind blank attempts to counteract any detection, revelation, and scrying effects as if its spell level were 1 higher than its actual level. On a success, the divination effect functions normally except that it detects nothing about the target and its possessions. For instance, detect magic would still detect other magic in the area, but not any magic on the target.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '193': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 351',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "You cast your thoughts through a creature's mind, sifting for information. You access the target's memories and knowledge unless it fends you off with a Will save.Success The target is unaffected.Failure Each round of the spell's duration, you can Sustain the Spell to ask a different question and attempt to uncover the answer. For each question, the target can attempt a Deception check against your spell DC; if the target succeeds, you don't learn the answer, and on a critical success, the target gives you a false answer that you believe is truthful Once you've asked the target a given question, asking it again, even with a separate casting of mind probe, produces the same result.Critical Failure As failure, and the target takes a –4 circumstance penalty to Deception checks against your questions.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '194': {
    traits: [
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 351',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "With a cursory mental touch, you attempt to read the target's mind. It must attempt a Will save. The target then becomes temporarily immune to your mind reading for 1 hour.Critical Success The target perceives vague surface thoughts from you when you Cast the Spell.Success You find out whether the target's Intelligence modifier is higher than, equal to, or lower than yours.Failure You perceive vague surface thoughts from the target when you Cast the Spell, and you find out whether its Intelligence modifier is higher than, equal to, or lower than yours.Critical Failure As failure, and for the duration of the spell, you can Sustain the Spell to detect the target's surface thoughts again. The target doesn't receive any additional saves.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: '1 round or sustained up to 1 minute',
    area: ''
  },
  '195': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 352',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You link your mind to the target's mind and mentally impart to that target an amount of information in an instant that could otherwise be communicated in 10 minutes.",
    range: 'touch',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '196': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 352',
    traditions: ['divine'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You request aid directly from your divine source. Your divine source always refuses a request out of line with its nature, and it might grant a different request (potentially more powerful or better fitting its nature) than the one you asked for. A casting of miracle can do any of the following things. Duplicate any divine spell of 9th level or lower. Duplicate any non-divine spell of 7th level or lower. Produce any effect whose power level is in line with the above effects. Reverse certain effects that refer to the wish spell. The GM might allow you to try using miracle to produce greater effects than these, but doing so may be dangerous, or the spell may have only a partial effect.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '197': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 352',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Three illusory images of you swirl about your space, potentially causing those who attack you to hit one of the images instead of you. Any attack that would hit you has a random chance of hitting one of your images instead of you. If all three images remain, there is a 1 in 4 chance of hitting you (1 on 1d4). With two images remaining, there is a 1 in 3 chance of hitting you (1–2 on 1d6). With only one image, the chances are 1 in 2 (1–3 on 1d6). Once an image is hit, it is destroyed. If an attack roll fails to hit your AC but doesn't critically fail, it destroys an image but has no additional effect (even if the attack would normally have an effect on a failure). If an attack roll is a critical success and would hit one of the images, one of the images is destroyed and the attack roll becomes a success against you. Once all the images are destroyed, the spell ends.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '198': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 352',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      'You reshape the magic aura of one creature or object to resemble that of another. You designate one target as the primary target and the other as the secondary target. Effects that would detect auras on the primary target instead detect the same types of auras from the secondary target. A creature reading the aura can attempt to disbelieve the illusion. You can Dismiss the spell from up to a mile away.',
    range: '30 feet',
    targets: '2 creatures or objects',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '199': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 352',
    traditions: ['arcane', 'occult', 'invisibility'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You turn yourself invisible and create an illusory duplicate of yourself. When you Sustain the Spell, you can mentally dictate a course of action for your duplicate to follow that round. Your duplicate acts as though it had your full number of actions, though it can't actually affect anything in the environment. Both the duplicate and your invisibility persist for the spell's duration. Performing a hostile action doesn't end mislead's invisibility, just like a 4th-level invisibility spell. A creature that determines the duplicate is an illusion doesn't necessarily know you're invisible, and one that can see your invisible form doesn't necessarily know your duplicate is an illusion. If you Cast a Spell, attack, or otherwise interact with another creature, as a part of that action you can attempt a Deception check against observers' Perception DCs to convince them your duplicate used that action. This doesn't fool anyone who's aware your duplicate is an illusion, nor does it work if the attack obviously couldn't have come from the duplicate. For instance, if you fired a ray, you could make it look like it came from the duplicate as long as the duplicate was positioned appropriately, but if you attacked with a sword and your duplicate was across the room from the target, your Deception check would automatically fail.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '200': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 352',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You alter the target's memories, either erasing a memory, enhancing a memory's clarity, altering a memory, or adding a false memory. The target can attempt a Will save to resist the spell.Any memories you've altered remain changed as long as the spell is active. If the target moves out of range before the 5 minutes is up, you can't alter any further memories.Critical Success The target is unaffected and realizes you tried to alter its memory.Success The target is unaffected but thinks your spell was something harmless instead of modify memory, unless it identifies the spell.Failure During the first 5 minutes of the spell's duration, you can Sustain the Spell to modify a memory once each round. When you do, you imagine up to 6 seconds of memory to modify, to a maximum of 5 continuous minutes of memory.Heightened (6th) You can cast the spell on a willing target to suppress all memory of a particular topic, detailed in 50 words or fewer. The effect is permanent, and it patches these omissions with an indistinct haze.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'unlimited',
    area: ''
  },
  '201': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 353',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The targets experience a day's worth of recovery in an instant. Any detrimental effects that would be gone after 24 hours end, though this doesn't shorten the duration of any active spells affecting the targets. The targets regain Hit Points and recover from conditions as if they had taken 24 hours of rest, but they do not make their daily preparations again or gain any benefits of rest other than healing. The targets are then temporarily immune for 1 day.",
    range: 'touch',
    targets: 'up to 6 creatures',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '202': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 353',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You transform into the shape of a legendary monster, assuming a Huge battle form. You must have enough space to expand into or the spell is lost. When you cast this spell, choose phoenix, purple worm, or sea serpent. While in this form, you gain the beast trait (for phoenix) or the animal trait (for purple worm or sea serpent). You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose: AC = 20 + your level. Ignore your armor's check penalty and Speed reduction. 20 temporary Hit Points. Darkvision. One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You're trained with them. Your attack modifier is +28, and you use the listed damage. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead. Athletics modifier of +30, unless your own modifier is higher. You also gain specific abilities based on the type of monster you choose:Phoenix Speed 30 feet, fly Speed 90 feet; Melee  beak (reach 15 feet), Damage 2d6+12 piercing plus 2d4 fire and 2d4 persistent fire; Melee  talon (agile, reach 15 feet), Damage 2d8+12 slashing; Shroud of Flame (aura, evocation, fire, primal) 20 feet. You gain an aura of fire that extends out from you. A creature that enters or ends its turn within the aura takes 2d6 fire damage. A creature can take this damage only once per turn. You can use a single action, which has the concentrate trait, to activate or deactivate this aura.Purple Worm Speed 40 feet, burrow Speed 30 feet, swim Speed 20 feet; Melee  jaws (reach 10 feet), Damage 2d12+20 piercing; Melee  stinger (agile, reach 10 feet), Damage 2d8+15 piercing plus 2d6 persistent poison; Melee  body (reach 10 feet) Damage 2d8+20 bludgeoning; Inexorable You automatically recover from the paralyzed, slowed, and stunned conditions at the end of each of your turns. You're also immune to being immobilized and ignore difficult terrain and greater difficult terrain.Sea Serpent Speed 20 feet, swim Speed 90 feet; Melee  jaws (reach 15 feet), Damage 2d12+20 piercing; Melee  tail (reach 25 feet), Damage 2d8+20 bludgeoning; Spine Rake  (move) You extend your spines and Swim or Stride. Each creature you're adjacent to at any point during your movement takes 4d8+10 slashing damage (basic Reflex against your spell DC).Heightened (9th) You instead gain AC = 22 + your level, 25 temporary HP, attack modifier +31, increase damage by one damage die, and Athletics +33.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '203': {
    traits: [
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 353',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A feral aspect overcomes the targets, making them tough and savage. Targets gain 5 temporary Hit Points, a +10-foot status bonus to their Speeds, and weakness 5 to silver. They also grow vicious fangs and claws, which are unarmed attacks. The fangs deal 2d8 piercing damage; the claws deal 2d6 slashing damage and have the agile and finesse traits. The targets use their highest weapon or unarmed attack proficiency with these attacks, and if they have weapon specialization or greater weapon specialization, they add this damage as well. On a critical hit with one of these unarmed attacks, the creature struck takes 1d4 persistent bleed damage. The targets can't use concentrate actions unless those actions also have the rage trait, with the exception of Seek. A creature can attempt to end the spell's effect on itself by using a single action, which has the rage trait, to attempt a Will save against your spell DC; on a success, it ends the spell's effect on itself. If a target is in the light of a full moon, it also grows by one size if it were Medium or smaller. This increases the reach of a Medium or Tiny creature by 5 feet.Heightened (6th) The temporary Hit Points increase to 10, the silver weakness to 10, and the damage dealt by the attacks to three dice.Heightened (10th) The temporary Hit Points increase to 20, the silver weakness to 20, and the damage dealt by the attacks to four dice.",
    range: '30 feet',
    targets: 'up to 5 willing creatures',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '204': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 354',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The primal power of the world flows through you. You transform into an incarnation of nature, either a green man or a kaiju. Your battle form is Medium for a green man or Gargantuan (30-foot-by-30-foot space) for a kaiju. You must have enough space to expand into or the spell is lost. While in this form, you gain the plant trait (for a green man) or the beast trait (for a kaiju). You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose: AC = 25 + your level. Ignore your armor's check penalty and Speed reduction. 30 temporary Hit Points. Darkvision. One or more attacks specific to the battle form you choose, which are the only attacks you can use. You're trained with them. Your attack modifier is +34, and you use the listed damage. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead. Athletics modifier of +36, unless your own modifier is higher. You also gain specific abilities based on the type of incarnation you choose:Green Man Speed 40 feet, climb Speed 40 feet; Melee  vines (reach 30 feet, versatile P), Damage 6d8+12 bludgeoning; Ranged  thorns (range 100 feet), Damage 6d6+6 piercing; Green Caress (aura, primal, transmutation) 60 feet. Enemies other than plants must succeed at a Fortitude save against your spell DC or become clumsy 1 for 1 round (clumsy 2 on a critical failure).Kaiju Speed 50 feet; resistance 5 to physical damage; Melee  jaws (reach 30 feet), Damage 6d10+10 piercing; Melee  claw s (agile, reach 30 feet), Damage 6d8+8 slashing; Melee  foot (agile , reach 15 feet), Damage 6d6+10 bludgeoning; Unstoppable You are immune to being immobilized and ignore difficult terrain and greater difficult terrain; Trample You move up to double your Speed and move through the spaces of Huge or smaller creatures, trampling each creature whose space you enter. A trampled creature takes foot damage with a basic Reflex save against your spell DC.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '206': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 354',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The target loses its odor, preventing creatures from passively noticing its presence via smell alone, even if the creatures have precise or imprecise scent. A creature attempting a Perception check to Seek with scent and other senses might notice the lack of natural scent. If the target has any abilities that result from its smell, such as an overpowering scent, those abilities are also negated.Heightened (5th) The range increases to 30 feet, and you can target up to 10 creatures.',
    range: 'touch',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '207': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 354',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You pour healing magic through the target in an attempt to cure one poison afflicting it. Attempt a counteract check against the poison.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '208': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 354',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      'You send disturbing nightmares to your target. The next time the target falls asleep, it must attempt a Will save. If you know the target only by name and have never met them, the target gets a +4 circumstance bonus to the Will save.Critical Success The target suffers no adverse effects and is temporarily immune for 1 week.Success The target experiences the nightmares but suffers no adverse effects other than unpleasant memories.Failure The target experiences the nightmares and awakens fatigued.Critical Failure The target experiences the nightmares, awakens fatigued, and is drained 2 until it is no longer fatigued.',
    range: 'planetary',
    targets: '1 creature you know by name',
    savingThrow: 'Will;',
    duration: '1 day',
    area: ''
  },
  '209': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 355',
    traditions: ['arcane', 'occult', 'primal'],
    cast: [''],
    description:
      "You erect protective wards that make the target difficult to detect via magic. Nondetection attempts to counteract all detection, revelation, and scrying divinations made against the target or the target's gear throughout the duration, counting cantrips as 1st-level spells for this purpose. Successfully counteracting a divination that targets an area or multiple targets negates the effects only for nondetection's target.",
    range: 'touch',
    targets: '1 creature or object',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '210': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 355',
    traditions: ['arcane', 'primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You call forth a cloud of mist. All creatures within the mist become concealed, and all creatures outside the mist become concealed to creatures within it. You can Dismiss the cloud.',
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '20-foot burst'
  },
  '212': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 356',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You surround yourself with supernatural splendor, appearing to be a god or similarly majestic being. You choose the aspects of your new majestic appearance. This causes the targets to pay tribute to you by bowing or using some other action in keeping with your appearance. The number of times a target must do this depends on the result of their Will save. Paying tribute is a manipulate action or move action, as chosen by the creature paying tribute. A creature under this effect must pay tribute to you at least once on each of its turns if possible. While affected by this spell, a creature is fascinated by you and can't use hostile actions against you. The target is then temporarily immune for 1 minute.Critical Success The target is unaffected.Success The target must pay tribute twice.Failure The target must pay tribute six times.Critical Failure As failure, and the target must spend all its actions paying tribute if possible.",
    range: '',
    targets: 'any number of creatures',
    savingThrow: 'Will;',
    duration: 'until full tribute is paid',
    area: '40-foot burst;'
  },
  '213': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 356',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You block the target's motor impulses before they can leave its mind, threatening to freeze the target in place. The target must attempt a Will save.Critical Success The target is unaffected.Success The target is stunned 1.Failure The target is paralyzed for 1 round.Critical Failure The target is paralyzed for 4 rounds. At the end of each of its turns, it can attempt a new Will save to reduce the remaining duration by 1 round, or end it entirely on a critical success.Heightened (7th) You can target up to 10 creatures.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '214': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 356',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You cause the target to see all other creatures as dire threats. The target is stricken by intense paranoia toward all creatures around it and must attempt a Will save.Critical Success The target is unaffected.Success The target believes everyone it sees is a potential threat. It becomes unfriendly to all creatures to which it wasn't already hostile, even those that were previously allies. It treats no one as an ally. The spell ends after 1 round.Failure As success, but the effect lasts 1 minute.Critical Failure As failure, except the target believes that everyone it sees is a mortal enemy. It uses its reactions and free actions against everyone, regardless of whether they were previously its allies, as determined by the GM. It otherwise acts as rationally as it normally does and likely prefers to attack creatures that are actively attacking or hindering it over those leaving it alone.Heightened (6th) You can target up to 5 creatures.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: ''
  },
  '215': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 356',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You obscure the tracks you leave behind and make it harder for others to find you. The DC of checks to Track you gains a +4 status bonus or is equal to your spell DC, whichever results in a higher DC. You can benefit from only one pass without trace spell at a time.Heightened (2nd) The duration increases to 8 hours.Heightened (4th) The duration increases to 8 hours. The spell has a range of 20 feet and an area of a 20-foot-emanation, affecting up to 10 creatures of your choice within that area.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '216': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      }
    ],
    source: 'Core Rulebook pg. 356',
    traditions: ['arcane', 'primal', 'true seeing'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create a visible tunnel through the wall in the chosen area, replacing the area with empty space. If the wall is thicker than 10 feet, the tunnel ends 10 feet in. Even a small layer of metal in the wall prevents this spell from functioning. This spell doesn't reduce the integrity of the structure. When the spell ends, anyone inside the tunnel is shunted to the nearest exit.Heightened (7th) The tunnel can be up to 20 feet deep. The areas of the wall that contain your tunnel's entrance appear completely normal (unless viewed with true seeing or a similar effect), despite the tunnel's existence. The tunnel's entrance functions as a solid wall, but you can specify a password or a trigger (page 305), allowing creatures to enter the tunnel freely.",
    range: 'touch',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area:
      '5-foot-wide, 10-foot-tall, 10-foot deep section of wooden, plaster, or stone wall'
  },
  '217': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 356',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You transform into a the battle form of a Tiny animal, such as a cat, insect, lizard, or rat. You can decide the specific type of animal (such as a rat or praying mantis), but this has no effect on the form's Size or statistics. While in this form, you gain the animal trait. You can Dismiss the spell. You gain the following statistics and abilities: AC = 15 + your level. Ignore your armor's check penalty and Speed reduction. Speed 10 feet. Weakness 5 to physical damage. (If you take physical damage in this form, you take 5 additional damage.) Low-light vision and imprecise scent 30 feet. Acrobatics and Stealth modifiers of +10, unless your own modifier is higher; Athletics modifier –4.Heightened (4th) You can turn into a flying creature, such as a bird, which grants you a fly Speed of 20 feet.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '218': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 357',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A vision of apocalyptic destruction fills the mind of each creature in the area. The vision deals 11d6 mental damage (basic Will save). On a critical failure, the creature must also succeed at a Reflex save or believe it's trapped (stuck in a fissure, adrift at sea, or some other fate in keeping with its vision). If it fails the second save, it's also stunned for 1 minute. It can attempt a new Will save at the end of each of its turns, and on a success, it disbelieves the illusion and recovers from the stunned condition.Heightened (+1) The damage increases by 2d6.",
    range: '500 feet',
    targets: '',
    savingThrow: 'Will',
    duration: '',
    area: '30-foot burst'
  },
  '219': {
    traits: [
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Fear',
        description:
          'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
        id: '68',
        url: 'Traits.aspx?ID=68'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 357',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create a phantasmal image of the most fearsome creature imaginable to the target. Only the spell's target can see the killer, though you can see the vague shape of the illusion as it races forth to attack. The effect of the killer is based on the outcome of the target's Will save.Critical Success The target is unaffected.Success The target takes 4d6 mental damage and is frightened 1.Failure The target takes 8d6 mental damage and is frightened 2.Critical Failure The target is so afraid it might die. It must attempt a Fortitude save; if the target fails, it dies. On a successful Fortitude save, the target takes 12d6 mental damage, is fleeing until the end of its next turn, and is frightened 4. This effect has the incapacitation trait.Heightened (+1) The damage increases by 2d6 on a failure and by 3d6 on a critical failure.",
    range: '120 feet',
    targets: '1 living creature',
    savingThrow: 'Will',
    duration: '',
    area: ''
  },
  '220': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Nonlethal',
        description:
          'Attacks with this weapon are nonlethal, and are used to knock creatures unconscious instead of kill them. You can use a nonlethal weapon to make a lethal attack with a –2 circumstance penalty.',
        id: '188',
        url: 'Traits.aspx?ID=188'
      }
    ],
    source: 'Core Rulebook pg. 357',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Illusory pain wracks the target, dealing 2d4 mental damage and 1d4 persistent mental damage. The target must attempt a Will save.Critical Success The target is unaffected.Success The target takes full initial damage but no persistent damage, and the spell ends immediately.Failure The target takes full initial and persistent damage, and the target is sickened 1. If the target recovers from being sickened, the persistent damage ends and the spell ends.Critical Failure As failure, but the target is sickened 2.Heightened (+1) The damage increases by 2d4 and the persistent damage by 1d4.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: ''
  },
  '221': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 357',
    traditions: ['arcane', 'occult', 'primal', 'air walk'],
    cast: [''],
    description:
      "You conjure a Large, magical, equine creature that only you (or another Medium or Small creature you choose) can ride. The horse is clearly phantasmal in nature, has 20 AC and 10 Hit Points, and automatically fails all saves. If it's reduced to 0 Hit Points, it disappears and the spell ends. The steed has a Speed of 40 feet and can hold its rider's body weight, plus 20 Bulk.Heightened (4th) The steed has a Speed of 60 feet, can walk on water, and ignores areas of natural difficult terrain.Heightened (5th) The steed has a Speed of 60 feet, can walk on water, and ignores areas of natural difficult terrain. It can also air walk but must end its turn on solid ground or fall.Heightened (6th) The steed can walk or fly at a Speed of 80 feet, can walk on water, and ignores natural difficult terrain.",
    range: '30 feet',
    targets: '',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '222': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 357',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    cast: [''],
    description:
      "You and your allies traverse the barriers between planes of existence. The targets move to another plane, such as the Plane of Fire, the Shadow Plane, or the Abyss. You must have specific knowledge of the destination plane and use a magic tuning fork created from material from that plane as a focus for the spell. While the tuning forks for most prominent planes are uncommon, just like the spell plane shift, more obscure planes and demiplanes often have rare tuning forks. The spell is highly imprecise, and you appear 1d20x25 miles from the last place one of the targets (of your choice) was located the last time that target traveled to the plane. If it's the first time traveling to a particular plane for all targets, you appear at a random location on the plane. Plane shift doesn't provide a means of return travel, though casting plane shift again allows you to return to your previous plane unless there are extenuating circumstances.",
    range: 'touch',
    targets: '1 willing creature, or up to 8 willing creatures joining hands',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '223': {
    traits: [
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      },
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 358',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Taking inspiration from verdant creatures, you transform into a Large plant battle form. You must have space to expand into or the spell is lost. When you cast this spell, choose arboreal, flytrap, or shambler. You can substitute a similar specific plant to turn into (such as a pitcher plant instead of a flytrap), but this has no effect on the form's Size or statistics. While in this form, you gain the plant trait. You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose: AC = 19 + your level. Ignore your armor's check penalty and Speed reduction. 12 temporary Hit Points. Resistance 10 to poison. Low-light vision. One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You're trained with them. Your attack modifier is +17, and your damage bonus is +11. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead. Athletics modifier of +19, unless your own modifier is higher. You also gain specific abilities based on the type of plant you choose:Arboreal Speed 30 feet; Melee  branch (reach 15 feet), Damage 2d10 bludgeoning; Melee  foot, Damage 2d8 bludgeoning; you can speak in this form, but you still can't Cast a Spell or supply verbal components.Flytrap Speed 15 feet; resistance 10 to acid; Melee  leaf (reach 10 feet), Damage 2d8 piercing, and you can spend an action after a hit to Grab the target.Shambler Speed 20 feet, swim Speed 20 feet; resistance 10 to electricity; Melee  vine (reach 15 feet), Damage 2d8 slashing.Heightened (6th) Your battle form is Huge, and the reach of your attacks increases by 5 feet. You instead gain AC = 22 + your level, 24 temporary HP, attack modifier +21, damage bonus +16, and Athletics +22.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '224': {
    traits: [
      {
        title: 'Cold',
        description:
          'Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.',
        id: '27',
        url: 'Traits.aspx?ID=27'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 358',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You fire a blue-white ray of freezing air and swirling sleet from your finger that can chill your target to the bones. You must succeed at a spell attack roll to affect the target, which then takes 10d8 cold damage and is drained 2.Heightened (+1) The damage increases by 2d8.',
    range: '120 feet',
    targets: '1 creature or object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '225': {
    traits: [
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Possession',
        description:
          'Effects with this trait allow a creature to project its mind and spirit into a target. A creature immune to mental effects can’t use a possession effect. While possessing a target, a possessor’s true body is unconscious (and can’t wake up normally), unless the possession effect allows the creature to physically enter the target. Whenever the target takes damage, the possessor takes half that amount of damage as mental damage.\n\n A possessor loses the benefits of any of its active spells or abilities that affect its physical body, though it gains the benefits of the target’s active spells and abilities that affect their body. A possessor can use any of the target’s abilities that are purely physical, and it can’t use any of its own abilities except spells and purely mental abilities. The GM decides whether an ability is purely physical or purely mental. A possessor uses the target’s attack modifier, AC, Fortitude save, Reflex save, Perception, and physical skills, and its own Will save, mental skills, spell attack roll, and spell DC; benefits of invested items apply where relevant (the possessor’s invested items apply when using its own values, and the target’s invested items apply when using the target’s values). A possessor gains no benefit from casting spells that normally affect only the caster, since it isn’t in its own body.\n\n The possessor must use its own actions to make the possessed creature act.\n\n If a possessor reaches 0 Hit Points through any combination of damage to its true body and mental damage from the possession, it is knocked out as normal and the possession immediately ends. If the target reaches 0 Hit Points first, the possessor can either fall unconscious with the body and continue the possession or end the effect as a free action and return to its body. If the target dies, the possession ends immediately and the possessor is stunned for 1 minute.',
        id: '129',
        url: 'Traits.aspx?ID=129'
      }
    ],
    source: 'Core Rulebook pg. 358',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You send your mind and soul into the target's body, attempting to take control. The target must attempt a Will save. You can choose to use the effects of a degree of success more favorable to the target if you prefer. While you're possessing a target, your own body is unconscious and can't wake up normally. You can sense everything the possessed target does. You can Dismiss this spell. If the possessed body dies, the spell ends and you must succeed at a Fortitude save against your spell DC or be paralyzed for 1 hour, or 24 hours on a critical failure. If the spell ends during an encounter, you act just before the possessed creature's initiative count.Critical Success The target is unaffected.Success You possess the target but can't control it. You ride along in the body while the spell lasts.Failure You possess the target and take partial control of it. You no longer have a separate turn; instead, you might control the target. At the start of each of the target's turns, it attempts another Will save. If it fails, it's controlled by you on that turn; if it succeeds, it chooses its own actions; and if it critically succeeds, it forces you out and the spell ends.Critical Failure You possess the target fully, and it can only watch as you manipulate it like a puppet. The target is controlled by you.Heightened (9th) The duration is 10 minutes, and you can physically enter the creature's body, protecting your physical body while the spell lasts.",
    range: '30 feet',
    targets: '1 living creature',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: ''
  },
  '226': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 358',
    traditions: ['arcane'],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You utter an arcane word of power that can make the target blinded upon hearing it. Once targeted, the target is then temporarily immune for 10 minutes. The effect of the spell depends on the target's level. 11th or Lower The target is blinded permanently. 12th–13th The target is blinded for 1d4 minutes. 14th or Higher The target is dazzled for 1 minute.Heightened (+1) The levels at which each outcome applies increase by 2.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: 'varies',
    area: ''
  },
  '227': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 358',
    traditions: ['arcane'],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You utter the most powerful arcane word of power. Once targeted, the target is then temporarily immune for 10 minutes. The effect of the spell depends on the target's level. 14th or Lower The target dies instantly. 15th If the target has 50 Hit Points or fewer, it dies instantly; otherwise, it drops to 0 Hit Points and becomes dying 1, or increases its dying condition by 1 if it's already dying. 16th or Higher The target takes 50 damage; if this brings the target to 0 Hit Points, the target dies instantly.Heightened (10th) The levels at which each outcome applies increase by 2.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: 'varies',
    area: ''
  },
  '228': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 359',
    traditions: ['arcane'],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You stun the target with an arcane word of power. Once targeted, the target is then temporarily immune for 10 minutes. The effect of the spell depends on the target's level. 13th or Lower The target is stunned for 1d6 rounds. 14th–15th The target is stunned for 1 round. 16th or Higher The target is stunned 1.Heightened (+1) The levels at which each outcome applies increase by 2.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: 'varies',
    area: ''
  },
  '229': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 359',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The simplest magic does your bidding. You can perform simple magical effects for as long as you Sustain the Spell. Each time you Sustain the Spell, you can choose one of four options. Cook Cool, warm, or flavor 1 pound of nonliving material. Lift Slowly lift an unattended object of light Bulk or less 1 foot off the ground. Make Create a temporary object of negligible Bulk, made of congealed magical substance. The object looks crude and artificial and is extremely fragile—it can't be used as a tool, weapon, or spell component. Tidy Color, clean, or soil an object of light Bulk or less. You can affect an object of 1 Bulk with 10 rounds of concentration, and a larger object a 1 minute per Bulk. Prestidigitation can't deal damage or cause adverse conditions. Any actual change to an object (beyond what is noted above) persists only as long as you Sustain the Spell.",
    range: '10 feet',
    targets: '1 object (cook, lift, or tidy only)',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '230': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 359',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Summoning the power of the natural world, you transform the targets into a herd of mammoths, and they each assume a Huge battle form. Each target must have enough space to expand into or the spell fails for that target. Each target gains the animal trait. Each target can Dismiss the spell’s effects on themself. Each target gains the following while transformed: AC = 22 + the target’s level. Ignore any armor check penalty and Speed reduction. 20 temporary Hit Points. Speed 40 feet. Low-light vision. The following unarmed melee attacks, which are the only attacks the target can use. They’re trained with them. When attacking with these attacks, the target uses their attack modifier with the proficiency and item bonuses of their most favorable weapon or unarmed Strike, and the damage is listed for each attack. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If the target’s unarmed attack modifier is higher, they can use it instead. Melee  tusk (reach 15 feet), Damage 4d8+19 piercing; Melee  trunk (agile, reach 15 feet), Damage 4d6+16 bludgeoning; Melee  foot (agile, reach 15 feet), Damage 4d6+13 bludgeoning. Athletics modifier of +30, unless the target’s own modifier is higher. Trample  yot move up to twice your Speed and move through the space of Large or smaller creatures, trampling each creature whose space you enter. A trampled creature takes damage from its foot Strike based on a basic Reflex save (DC = 19 + the target’s level).',
    range: '30 feet',
    targets: 'you and up to 5 willing targets',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '231': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 359',
    traditions: ['primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You request a direct intercession from the natural world. Nature always refuses unnatural requests and might grant a different request (potentially more powerful or better fitting its character) than the one you asked for. A primal phenomenon spell can do any of the following things. Duplicate any primal spell of 9th level or lower. Duplicate any non-primal spell of 7th level or lower. Produce any effect whose power level is in line with the above effects. Reverse certain effects that refer to the wish spell. At the GM's discretion, you can try to use primal phenomenon to produce greater effects than these, but doing so may be dangerous, or the spell may have only a partial effect.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '232': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 359',
    traditions: ['arcane', 'occult', 'prismatic wall'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create a seven-layered sphere to protect an area. This multicolored sphere functions like a prismatic wall but is shaped in a 10-foot burst centered on a corner of your space. You must form the sphere in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost.",
    range: '10 feet',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '233': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 360',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A spray of rainbow light beams cascades from your open hand. Each creature in the area must roll 1d8 on the table below to see which beam affects it, then attempt a saving throw of the indicated type. The table notes any additional traits that apply to each type of ray. If a creature is struck by multiple beams, it uses the same d20 result for all its saving throws. For all rays, a successful saving throw negates the effect for that creature.Prismatic Spray 1d8ColorSaveEffects (Traits) 1RedReflex50 fire damage (fire) 2OrangeReflex60 acid damage (acid) 3YellowReflex70 electricity damage (electricity) 4GreenFortitude30 poison damage and enfeebled 1 for 1 minute (poison) 5BlueFortitudeAffected as if by flesh to stone 6IndigoWillConfused, as the warp mind spell (mental) 7VioletWillSlowed for 1 minute; if a critical failure, sent to another plane, as plane shift (teleportation) 8Potent beam-Affected by two beams - roll twice, rerolling any duplicates or results of 8 ',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: '30-foot cone'
  },
  '234': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 360',
    traditions: ['arcane', 'occult', 'chromatic wall'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create an opaque wall of shimmering, multicolored light. The wall is straight and vertical, stretching 60 feet long and 30 feet high. You must form the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. You can pass through the wall and ignore its effects. The wall sheds bright light out to 20 feet on each side (and dim light to the next 20 feet). Creatures other than you that come into the wall's light must attempt a Will save; they're dazzled for 1 round on a success, blinded for 1 round on a failure, and blinded for 1 minute on a critical failure. They are then temporarily immune to the blinding effect for 1 hour. A prismatic wall has seven different layers, each a different color. Red, orange, yellow, and green have the effect of a 5th-level chromatic wall (page 323) spell of that color, and the others have the effect of a 7th-level chromatic wall spell of that color. A creature that tries to pass through the wall must attempt a saving throw against each component wall. The effects take place simultaneously, so a creature turned to stone by the blue wall is still treated as a creature for the indigo and violet walls. The wall as a whole is immune to counteracting effects of the wall's level or lower; each color must be counteracted by its specific spell, as described in chromatic wall. This must be done in order (red, orange, yellow, green, blue, indigo, then violet). A given color can't be affected until the previous color is counteracted. Counteracting a color wall removes that color's effect from the wall, and counteracting them all ends prismatic wall. You can Dismiss the spell.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '235': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 360',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "From outside, the area looks like a bank of impenetrable black fog. Sensory stimuli (such as sounds, smells, and light) don't pass from inside the area to outside the area. Scrying spells can't perceive any stimuli from the area, and mind-reading effects don't work in the area.",
    range: 'touch',
    targets: '',
    savingThrow: '',
    duration: '24 hours',
    area: '100-foot burst'
  },
  '236': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 360',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A small ball of flame appears in the palm of your hand, and you lash out with it either in melee or at range. Make a spell attack roll against your target's AC. This is normally a ranged attack, but you can also make a melee attack against a creature in your unarmed reach. On a success, you deal 1d4 fire damage plus your spellcasting ability modifier. On a critical success, the target takes double damage and 1d4 persistent fire damage.Heightened (+1) Increase the damage by 1d4 and the persistent damage on a critical hit by 1d4.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '237': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 360',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You project an illusory image of yourself. You must stay within range of the image, and if at any point you can't see the image, the spell ends. Whenever you Cast a Spell other than one whose area is an emanation, you can cause the spell effect to originate from either yourself or the image. Because the image is an illusion, it can't benefit from spells, though visual manifestations of the spell appear. The image has the same AC and saves as you. If it is hit by an attack or fails a save, the spell ends.Heightened (+2) The maximum duration you can Sustain the Spell increases to 10 minutes.",
    range: '30 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '238': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 361',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You ward a creature against a specified alignment. Choose chaotic, evil, good, or lawful when you cast this spell. The target gains a +1 status bonus to Armor Class and saving throws against creatures and effects of the chosen alignment. This bonus increases to +3 against effects from such creatures that would directly control the target and against attacks made by summoned creatures of the chosen alignment. This spell gains the trait that opposes the alignment you chose—if you choose chaos, this spell gains the lawful trait, and vice versa; if you choose evil, this spell gains the good trait, and vice versa.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '239': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Scrying',
        description:
          'A scrying effect lets you see, hear, or otherwise get sensory information from a distance using a sensor or apparatus, rather than your own eyes and ears.',
        id: '141',
        url: 'Traits.aspx?ID=141'
      }
    ],
    source: 'Core Rulebook pg. 361',
    traditions: ['arcane', 'divine', 'occult'],
    cast: [''],
    description:
      'You create an invisible, floating eye, 1 inch in diameter, at a location you can see within 500 feet. It sees in all directions with your normal visual senses and continuously transmits what it sees to you. The first time you Sustain the Spell each round, you can either move the eye up to 30 feet, seeing only things in front of the eye, or move it up to 10 feet, seeing everything in all directions around it. There is no limit to how far from you the eye can move, but the spell ends immediately if you and the eye ever cease to be on the same plane of existence. You can attempt Seek actions through the eye if you want to attempt Perception checks with it. Any damage dealt to the eye destroys it and ends the spell.',
    range: 'see text',
    targets: '',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '240': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 361',
    traditions: ['primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "Violent winds and a powerful downdraft fill the area, forming a cyclone. All flying creatures in the area descend 40 feet. The entire area is greater difficult terrain for Flying creatures, and difficult terrain for creatures on the ground or Climbing. Any creature that ends its turn Flying within the area descends 20 feet. Any creature pushed into a surface by this spell's winds takes bludgeoning damage as though it had fallen. The squares at the outside vertical edges of the cylinder prevent creatures from leaving. These squares are greater difficult terrain, and a creature attempting to push through must succeed at an Athletics check or Acrobatics check to Maneuver in Flight against your spell DC to get through. A creature that fails ends its current action but can try again.",
    range: '100 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: '30-foot radius, 100-foot-cylinder'
  },
  '241': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 362',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You remove toxins and contaminations from food and drink, making them safe to consume. This spell doesn't prevent future contamination, natural decay, or spoilage. One cubic foot of liquid is roughly 8 gallons.",
    range: 'touch',
    targets: '1 cubic foot of contaminated food or water',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '242': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Poison',
        description:
          'An effect with this trait delivers a poison or deals poison damage. An item with this trait is poisonous and might cause an affliction.',
        id: '126',
        url: 'Traits.aspx?ID=126'
      }
    ],
    source: 'Core Rulebook pg. 362',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You replicate the attack of a deadly purple worm. You deal 6d6 piercing damage to the touched creature and afflict it with purple worm venom. The target must attempt a Fortitude save.Purple Worm Venom (poison); Level 11; Maximum Duration 6 rounds. Stage 1 3d6 poison damage and enfeebled 2 (1 round); Stage 2 4d6 poison damage and enfeebled 2 (1 round); Stage 3 6d6 poison damage and enfeebled 2 (1 round).Critical Success The target is unaffected.Success The target takes 3d6 poison damage.Failure The target is afflicted with purple worm venom at stage 1.Critical Failure The target is afflicted with purple worm venom at stage 2.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: 'Fortitude',
    duration: '6 rounds.',
    area: ''
  },
  '243': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 362',
    traditions: ['divine', 'Pharasma'],
    cast: [''],
    description:
      "You attempt to call forth the dead creature's soul, requiring the creature's body to be present and relatively intact. The creature must have died within the past 3 days. If Pharasma has decided that the creature's time has come (at the GM's discretion), or if the creature doesn't wish to return to life, this spell automatically fails, but the diamonds aren't consumed in the casting. If the spell is successful, the creature returns to life with 1 Hit Point, no spells prepared or spell slots available, no points in any pools or any other daily resources, and still with any long-term debilitations of the old body. The time spent in the Boneyard leaves the target temporarily debilitated, making it clumsy 2, drained 2, and enfeebled 2 for 1 week; these conditions can't be removed or reduced by any means until the week has passed. The creature is also permanently changed by its time in the afterlife, such as a slight personality shift, a streak of white in the hair, or a strange new birthmark.Heightened (7th) The maximum level of the target increases to 15. The cost increases to the target's level (minimum 1) × 400 gp.Heightened (8th) The maximum level the target increases to 17. The cost increases to the target's level (minimum 1) × 800 gp.Heightened (9th) The maximum level of the target increases to 19. The cost increases to the target's level (minimum 1) × 1,600 gp.Heightened (10th) The maximum level the target increases to 21. The cost increases to the target's level (minimum 1) × 3,200 gp.",
    range: '10 feet',
    targets: '1 dead creature of 13th level or lower',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '244': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 362',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A ray with the power to sap a foe's strength flashes from your hand. Attempt a ranged spell attack against the target. If you succeed, that creature attempts a Fortitude save in order to determine the spell's effect. If you critically succeed on your attack roll, use the outcome for one degree of success worse than the result of its save.Critical Success The target is unaffected.Success The target becomes enfeebled 1.Failure The target becomes enfeebled 2.Critical Failure The target becomes enfeebled 3.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Fortitude;',
    duration: '1 minute',
    area: ''
  },
  '245': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Cold',
        description:
          'Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.',
        id: '27',
        url: 'Traits.aspx?ID=27'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 362',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You blast an icy ray. Make a spell attack roll. The ray deals cold damage equal to 1d4 + your spellcasting ability modifier.Critical Success The target takes double damage and takes a –10-foot status penalty to its Speeds for 1 round.Success The target takes normal damage.Heightened (+1) The damage increases by 1d4.',
    range: '120 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '246': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 362',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    cast: [''],
    description:
      "You focus on the target object, opening your mind to perceive magical auras. When the casting is complete, you know whether that item is magical, and if it is, you learn the school of magic (pages 297–298). If the object is illusory, you detect this only if the effect's level is lower than the level of your read aura spell.Heightened (3rd) You can target up to 10 objects.Heightened (6th) You can target any number of objects.",
    range: '30 feet',
    targets: '1 object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '247': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Prediction',
        description:
          'Effects with this trait determine what is likely to happen in the near future. Most predictions are divinations.',
        id: '132',
        url: 'Traits.aspx?ID=132'
      }
    ],
    source: 'Core Rulebook pg. 363',
    traditions: ['divine', 'occult'],
    cast: [''],
    description:
      'You peek into the future. Choose a particular goal, event, or activity that will occur within 1 week. You learn a cryptic clue or piece of advice that could help with the chosen event, often in the form of a rhyme or omen.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '248': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 363',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "An infusion of positive energy grants a creature continuous healing. The target temporarily gains regeneration 15, which restores 15 Hit Points to it at the start of each of its turns. While it has regeneration, the target can't die from damage and its dying value can't exceed 3, though if its wounded value becomes 4 or higher, it stays unconscious until its wounds are treated. If the target takes acid or fire damage, its regeneration deactivates until after the end of its next turn. Each time the creature regains Hit Points from regeneration, it also regrows one damaged or ruined organ (if any). During the spell's duration, the creature can also reattach severed body parts by spending an Interact action to hold the body part to the area it was severed from.Heightened (9th) The regeneration increases to 20.",
    range: 'touch',
    targets: '1 willing living creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '249': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 363',
    traditions: ['arcane', 'divine', 'occult', 'primal', 'disintegrate'],
    cast: [''],
    description:
      'You fully re-create an object from nothing, even if the object was destroyed. To do so, you must be able to picture the object in your mind. Additionally, the material component must be a remnant of the item, no matter how small or insignificant (even a speck of dust that remains from disintegrate is enough). The spell fails if your imagination relied on too much guesswork; if the object would be too large to fit in a 5-foot cube; if the object still exists and you were simply not aware of it; or if the object is an artifact, has a level over 20, or has similar vast magical power. The item reassembles in perfect condition. Even if your mental image was of a damaged or weathered object, the new one is in this perfected form. If the object was magical, this spell typically restores its constant magical properties, but not any temporary ones, such as charges or one-time uses. An item with charges or uses per day has all of its uses expended when remade, but it replenishes them normally thereafter.',
    range: '5 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '250': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 363',
    traditions: ['divine', 'occult'],
    cast: [''],
    description:
      "Your touch grants a reprieve to a cursed creature. You attempt to counteract one curse afflicting the target. If the curse comes from a cursed item or other external source, a success indicates that the target creature can rid itself of the cursed item, but it doesn't remove the curse from the item.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '251': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 363',
    traditions: ['divine', 'primal'],
    cast: [''],
    description:
      "Healing magic purges disease from a creature's body. You attempt to counteract one disease afflicting the target.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '252': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      }
    ],
    source: 'Core Rulebook pg. 363',
    traditions: ['divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "With a touch, you ease a creature's fears. You can attempt to counteract a single fear effect that the target suffers from. This frees only the target, not any other creatures under the fear effect.Heightened (6th) The spell's range increases to 30 feet, and you can target up to 10 creatures.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '253': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 363',
    traditions: ['divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A surge of energy frees a paralyzed creature. You can attempt to counteract a single effect imposing the paralyzed condition on the target. This does not cure someone who is paralyzed from some natural state or effect, such as paralysis caused by non-magical wounds or toxins.Heightened (6th) The spell's range increases to 30 feet, and you can target up to 10 creatures.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '254': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Aura',
        description:
          'An aura is an emanation that continually ebbs out from you, af ecting creatures within a certain radius. Aura can also refer to the magical signature of an item or a creature with a strong alignment.',
        id: '206',
        url: 'Traits.aspx?ID=206'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 363',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You manifest an aura that prevents creatures from approaching you. When casting the spell, you can make the area any radius you choose, up to 40 feet. A creature must attempt a Will save if it's within the area when you cast the spell or as soon as it enters the area while the spell is in effect. Once a creature has attempted the save, it uses the same result for that casting of repulsion. Any restrictions on a creature's movement apply only if it voluntarily moves toward you. For example, if you move closer to a creature, it doesn't then need to move away.Critical Success The creature's movement is not restricted.Success The creature treats each square in the area as difficult terrain when moving closer to you.Failure The creature can't move closer to you within the area.",
    range: 'emanation up to 40-feet',
    targets: '',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: ''
  },
  '255': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 364',
    traditions: ['arcane', 'occult', 'Disintegrate'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You create an immobile sphere of force to either trap or protect the target, blocking anything that would pass through the sphere. The sphere has AC 5, Hardness 10, and 40 Hit Points. It's immune to critical hits and precision damage. Disintegrate destroys the sphere instantly. If the target is unwilling, the effects of the sphere depend on the target's Reflex save.Critical Success The target disrupts the sphere's integrity, causing it to collapse entirely.Success The sphere functions normally but has only 10 Hit Points instead of 40.Failure The sphere has its normal effect.",
    range: '30 feet',
    targets: '1 Large or smaller creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '256': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 364',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A shield of elemental energy protects a creature against one type of energy damage. Choose acid, cold, electricity, fire, or sonic damage. The target and its gear gain resistance 5 against the damage type you chose.Heightened (4th) The resistance increases to 10, and you can target up to two creatures.Heightened (7th) The resistance increases to 15, and you can target up to five creatures.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '257': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 364',
    traditions: ['arcane', 'occult', 'magnificent mansion', 'alarm'],
    cast: [''],
    description:
      "You conjure a towering mansion up to four stories tall and up to 300 feet on a side. While Casting the Spell, you hold an image of the mansion and its desired appearance in your mind. The mansion can contain as many or as few rooms as you desire, and it is decorated as you imagine it. You can imagine a purpose for each room of the mansion, and the proper accouterments appear within. Any furniture or other mundane fixtures function normally for anyone inside the mansion, but they cease to exist if taken beyond its walls. No fixture created with this spell can create magical effects, but magical devices brought into the mansion function normally. Your mansion contains the same types and quantities of foodstuffs and servants as created by the magnificent mansion spell. Each of the mansion's exterior doorways and windows are protected by alarm spells. You choose whether each alarm is audible or mental as you Cast the Spell, and each has a different sound (for an audible alarm) or sensation (for a mental one), allowing you to instantly determine which portal has been used.",
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '258': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 364',
    traditions: ['divine', 'occult', 'primal'],
    cast: [''],
    description:
      "Restorative magic counters the effects of toxins or conditions that prevent a creature from functioning at its best. When you cast restoration, choose to either reduce a condition or lessen the effect of a toxin. A creature can benefit from only one restoration spell each day, and it can't benefit from restoration more than once to reduce the stage of the same exposure to a given toxin.Lessen a Toxin Reduce the stage of one toxin the target suffers from by one stage. This can't reduce the stage below stage 1 or cure the affliction.Reduce a Condition Reduce the value of the target's clumsy, enfeebled, or stupefied condition by 2. You can instead reduce two of the listed conditions by 1 each.Heightened (4th) Add drained to the list of conditions you can reduce. When you lessen a toxin, reduce the stage by two. You also gain a third option that allows you to reduce the target's doomed value by 1. You can't use this to reduce a permanent doomed condition.Heightened (6th) As the 4th-level restoration, but you can reduce a permanent doomed condition if you add a spellcasting action and a material component while Casting the Spell, during which you provide 100 gp worth of diamond dust as a cost.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '259': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 364',
    traditions: ['divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You attempt to counteract a single effect imposing the blinded or deafened conditions on the target, restoring its vision or hearing. This can counteract both temporary magic and permanent consequences of magic, but it doesn't cure someone who does not have the sense due to some natural state or effect, such as from birth or from a non-magical wound or toxin.Heightened (6th) The spell's range increases to 30 feet, and you can target up to 10 creatures. You can choose the effect to counteract separately for each selected creature.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '260': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 365',
    traditions: ['occult'],
    cast: [''],
    description:
      "Opening your mind to occult echoes, you gain impressions from past events that occurred in your current location. Retrocognition reveals psychic impressions from events that occurred over the course of the last day throughout the first minute of the duration, followed by impressions from the next day back the next minute, and so on. These echoes don't play out like a vision but instead reveal impressions of emotions and metaphors that provide cryptic clues and details of the past. If you witness a traumatic or turbulent event through an impression, the spell ends unless you succeed at a Will save with a DC of at least 30 and possibly as much as 50, depending on the severity of the event. The GM determines whether an event is traumatic and chooses the DC. Heightened (8th) You gain impressions of events that occurred over the previous year for each minute you concentrate, instead of the previous day, though the details diminish, making it harder to distinguish impressions from all but the most major events.Heightened (9th) You gain impressions of events that occurred over the previous century for each minute you concentrate, instead of the previous day, though the details diminish, making it almost impossible to distinguish impressions from all but the most major events.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '261': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 365',
    traditions: ['arcane', 'occult'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You reverse gravity in the area. Creatures and objects that aren't secured to the ground immediately fall upward to the top of the area. A creature might be able to Grab an Edge to arrest its fall if it falls past an appropriate surface. If a creature falls against a solid object (such as a ceiling), it takes the appropriate amount of falling damage and lands on the surface. Once an object or creature reaches the top of the area, it floats, caught between the normal and reversed gravity. The creature can move along the plane where the two forms of gravity meet. Creatures that can levitate or fly can use those abilities to mitigate the effects of reverse gravity.When reverse gravity ends, all creatures and objects caught in the area fall back down. Likewise, anything that moves beyond the spell's area is subjected to normal gravity again.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '20-foot radius, 40-foot-tall cylinder'
  },
  '262': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 366',
    traditions: ['divine', 'primal', 'raise dead', 'disintegrate'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A burst of healing energy soothes living creatures and temporarily rouses those recently slain. All living targets regain 10d8+40 Hit Points. In addition, you return any number of dead targets to life temporarily, with the same effects and limitations as raise dead. The raised creatures have a number of temporary Hit Points equal to the Hit Points you gave living creatures, but no normal Hit Points. The raised creatures can't regain Hit Points or gain temporary Hit Points in other ways, and once revival's duration ends, they lose all temporary Hit Points and die. Revival can't resurrect creatures killed by disintegrate or a death effect. It has no effect on undead.",
    range: '30 feet',
    targets: 'dead creatures and living creatures of your choice within range',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '263': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 366',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal;'],
    description:
      "You focus all your divine energy and transform yourself into a Medium battle form, similar to your normal form but armed with powerful divine armaments granted by your deity. While in this form, you gain the statistics and abilities listed below. You have hands in this battle form and can use manipulate actions. You can Dismiss the spell. You gain the following statistics and abilities: AC = 20 + your level. Ignore your armor's check penalty and Speed reduction. 10 temporary Hit Points. Speed 40 feet. Resistance 3 against physical damage. Darkvision. A special attack with a righteous armament version of your favored weapon, which is the only attack you can use. Your attack modifier with the special weapon is +21, and your damage bonus is +8 (or +6 for a ranged attack). If your attack modifier with your deity's favored weapon is higher, you can use it instead. You deal three of your weapon's normal damage dice, or three damage dice of one size larger if your weapon is a simple weapon with a d4 or d6 damage die. The weapon has one of the following properties that matches your deity's alignment: anarchic, axiomatic, holy, unholy. If your deity is true neutral, you instead deal an extra 1d6 precision damage. Athletics modifier of +23, unless your own modifier is higher.Heightened (8th) Your battle form is Large, and your attacks have 10-foot reach, or 15-foot reach if your deity's favored weapon has reach. You must have enough space to expand into or the spell is lost. You instead gain AC = 21 + your level, 15 temporary HP, resistance 4 against physical damage, attack modifier +28, damage bonus +15 (+12 for a ranged attack), and Athletics +29.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '264': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Extradimensional',
        description:
          'This effect or item creates an extradimensional space. An extradimensional effect placed inside another extradimensional space ceases to function until it is removed.',
        id: '67',
        url: 'Traits.aspx?ID=67'
      }
    ],
    source: 'Core Rulebook pg. 366',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "You cause the target rope to rise vertically into the air. Where it ends, an extradimensional space opens, connected to the top of the rope. This space can be reached only by climbing the rope.The entrance to the space can't be seen, and it can be pinpointed only by the presence of the rope. The rope can't be removed or hidden, though it can be detached from the extradimensional space by pulling it with 16,000 pounds of weight, critically succeeding at an Athletics check against the spell's DC, or destroying the rope. The space holds up to eight Medium creatures and their gear. A Large creature counts as two Medium creatures, a Huge creature counts as four Medium creatures, and a Gargantuan creature fills the space on its own.If the rope is detached or destroyed, or if a creature attempts to enter the space that would put it over its capacity, the space begins to unravel. It disappears in 1d4 rounds, depositing the creatures within safely on the ground below.",
    range: 'touch',
    targets: '1 touched piece of rope from 5 to 30 feet long',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '265': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Consecration',
        description:
          'A consecration spell enhances an area for an extended period of time. A given area can have only a single consecration effect at a time. The new effect attempts to counteract any existing one in areas of overlap.',
        id: '34',
        url: 'Traits.aspx?ID=34'
      }
    ],
    source: 'Core Rulebook pg. 366',
    traditions: ['divine'],
    cast: [''],
    description:
      'You sanctify the area, sprinkling it with holy water and warding it against your foes. Choose aberrations, celestials, dragons, fiends, monitors, or undead. All creatures in the area gain a +1 status bonus to AC, attack rolls, damage rolls, and saving throws against the chosen creatures.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: '30-foot burst centered on you'
  },
  '266': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 366',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You ward a creature with protective energy that deters enemy attacks. Creatures attempting to attack the target must attempt a Will save each time. If the target uses a hostile action, the spell ends.Critical Success Sanctuary ends.Success The creature can attempt its attack and any other attacks against the target this turn.Failure The creature can't attack the target and wastes the action. It can't attempt further attacks against the target this turn.Critical Failure The creature wastes the action and can't attempt to attack the target for the rest of sanctuary's duration.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '267': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 367',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['material', 'somatic'],
    description:
      "A field of cascading, ever-changing colors manifests in the air. Creatures are dazzled while inside the pattern, as are those within 20 feet of the pattern's area. A creature must attempt a Will save if it is inside the pattern when you cast it, enters the pattern, ends its turn within the pattern, or uses a Seek or Interact action on the pattern. A creature currently affected by the pattern doesn't need to attempt new saves.Success The creature is unaffected.Failure The creature is confused for 1d4 rounds.Critical Failure The creature is stunned for 1d4 rounds. After the stunned condition ends, the creature is confused for the remaining duration of the spell.",
    range: '120 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: 'sustained up to 1 minute',
    area: '20-foot burst'
  },
  '268': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Scrying',
        description:
          'A scrying effect lets you see, hear, or otherwise get sensory information from a distance using a sensor or apparatus, rather than your own eyes and ears.',
        id: '141',
        url: 'Traits.aspx?ID=141'
      }
    ],
    source: 'Core Rulebook pg. 367',
    traditions: ['arcane', 'occult', 'clairvoyance', 'teleport'],
    cast: [''],
    description:
      "You magically spy on a creature of your choice. Scrying works like clairvoyance, except that the image you receive is less precise, insuficient for teleport and similar spells. Instead of creating an eye in a set location within 500 feet, you instead create an eye that manifests just above the target. You can choose a target either by name or by touching one of its possessions or a piece of its body. If you haven't met the target in person, scrying's DC is 2 lower, and if you are unaware of the target's identity (perhaps because you found an unknown creature's fang at a crime scene), the DC is instead 10 lower. The effect of scrying depends on the target's Will save.Critical Success The spell fails and the target is temporarily immune for 1 week. The target also gains a glimpse of you and learns its rough distance and direction from you.Success The spell fails and the target is temporarily immune for 1 day.Failure The spell succeeds.Critical Failure The spell succeeds, and the eye follows the target if it moves, traveling up to 60 feet per round.",
    range: 'planetary',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'sustained up to 10 minutes',
    area: ''
  },
  '269': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      },
      {
        title: 'Good',
        description:
          'Good effects often manipulate energy from good-aligned Outer Planes and are antithetical to evil divine servants or divine servants of evil deities. A creature with this trait is good in alignment. An ability with this trait can be selected or used only by good creatures.',
        id: '83',
        url: 'Traits.aspx?ID=83'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 367',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You shoot a blazing ray of light tinged with holy energy. Make a ranged spell attack. The ray deals 5d6 fire damage. If the target is a fiend or undead, you deal an extra 5d6 good damage. If the light passes through an area of magical darkness or targets a creature affected by magical darkness, searing light attempts to counteract the darkness. If you need to determine whether the light passes through an area of darkness, draw a line between yourself and the spell's targetCritical Success The target takes double fire damage, as well as double good damage if a fiend or undead.Success The target takes full damageHeightened (+1) The fire damage increases by 2d6, and the good damage against fiends and undead increases by 2d6.",
    range: '120 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '270': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 367',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "You change the target's text to different text entirely. If the text is a spellbook or a scroll, you can change it to show a spell you know of secret page's level or lower. The replacement spell cannot be cast or used to prepare a spell. You can also transform the text into some other text you have written or have access to. You can specify a password that allows a creature touching the page to change the text back and forth. You must choose the replacement text and the password, if any, when you Cast the Spell.",
    range: 'touch',
    targets: '1 page up to 3 square feet in size',
    savingThrow: '',
    duration: 'unlimited',
    area: ''
  },
  '271': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Revelation',
        description: 'Effects with this trait see things as they truly are.',
        id: '138',
        url: 'Traits.aspx?ID=138'
      }
    ],
    source: 'Core Rulebook pg. 367',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You can see invisible creatures and objects. They appear to you as translucent shapes, and they are concealed to you.Heightened (5th) The spell has a duration of 8 hours.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '272': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 367',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You send the creature a mental message of 25 words or fewer, and it can respond immediately with its own message of 25 words or fewer.',
    range: 'planetary',
    targets: '1 creature with whom you are familiar',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '273': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Shadow',
        description:
          'This magic involves shadows or the energy of the Shadow Plane.',
        id: '143',
        url: 'Traits.aspx?ID=143'
      }
    ],
    source: 'Core Rulebook pg. 367',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You shape the quasi-real substance of the Shadow Plane into a blast. Choose acid, bludgeoning, cold, electricity, fire, force, piercing, slashing, or sonic damage, and choose a 30-foot cone, a 15-foot burst within 120 feet, or a 50-foot line. The blast deals 5d8 damage of the type you chose to each creature in the area.Heightened (+1) The damage increases by 1d8.',
    range: 'varies',
    targets: '',
    savingThrow: "basic Reflex or Will (target's choice)",
    duration: '',
    area: 'varies'
  },
  '274': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Shadow',
        description:
          'This magic involves shadows or the energy of the Shadow Plane.',
        id: '143',
        url: 'Traits.aspx?ID=143'
      }
    ],
    source: 'Core Rulebook pg. 368',
    traditions: ['arcane', 'occult'],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      "Exchanging material energy with that of the Shadow Plane, you transform the triggering spell into a partially illusory version of itself. Attempt to counteract the target spell. If the attempt is successful, any creatures that would be damaged by the spell instead take only half as much damage, but the spell otherwise works as normal. Treat shadow siphon's counteract level as 2 higher for this attempt.",
    range: '60 feet',
    targets: 'the triggering spell',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '275': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Shadow',
        description:
          'This magic involves shadows or the energy of the Shadow Plane.',
        id: '143',
        url: 'Traits.aspx?ID=143'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 368',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "You access the Shadow Plane, using its warped nature to spread your travels. The targets enter the edge of the Shadow Plane where it borders the Material Plane. Targets can't see the Material Plane while on the Shadow Plane (although elements of that plane can sometimes be a hazy reflection of the Material Plane). While on the Shadow Plane, the targets are exposed to potential encounters with that plane's denizens. The shadows on the border between the planes bend space, speeding up your movement with respect to the Material Plane. Every 3 minutes the targets travel along this border, they move as far as they would through the Material Plane in 1 hour. At any point, a target can Dismiss the spell's effects, although this affects only that target. The shadow bending is inexact, so when the spell ends, the targets appear roughly 1 mile from their intended location on the Material Plane (though those who are traveling together and Dismiss the spell at the same point on the Plane of Shadow appear together).",
    range: 'touch',
    targets: 'you and up to 9 willing creatures touched',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '276': {
    traits: [
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 368',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You shape the stone into a rough shape of your choice. The shaping process is too crude to produce intricate parts, fine details, moving pieces, or the like. Any creatures standing atop the stone when you reshape it must each attempt a Reflex save or Acrobatics check.Success The creature is unaffected.Failure The creature falls prone atop the stone.Critical Failure The creature falls off the stone (if applicable) and lands prone.',
    range: 'touch',
    targets: 'cube of stone 10 feet across or smaller',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '277': {
    traits: [
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 368',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You shape the wood into a rough shape of your choice. The shaping power is too crude to produce with intricate parts, fine details, moving pieces, or the like. You cannot use this spell to enhance the value of the wooden object you are shaping.',
    range: 'touch',
    targets: 'an unworked piece of wood up to 20 cubic feet in volume',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '278': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 368',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Harnessing your mastery of transformative magic, you take on a mutable form. You transform yourself into any form you could choose with a polymorph spell in your spell repertoire or that you could prepare of 8th level or lower (including any 8th-level or lower heightened versions of spells you know). You choose the type of creature as you Cast the Spell rather than when you prepare it. You can change your form to any other form you could choose with this spell by using a single action, which has the concentrate trait. You can Dismiss this spell.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '279': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Sonic',
        description:
          'An effect with the sonic trait functions only if it makes sound, meaning it has no effect in an area of silence or in a vacuum. This is different from an auditory spell, which is effective only if the target can hear it. A sonic effect might deal sonic damage.',
        id: '147',
        url: 'Traits.aspx?ID=147'
      }
    ],
    source: 'Core Rulebook pg. 368',
    traditions: ['occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A high-frequency sonic attack shatters a nearby object. You deal 2d10 sonic damage to the object, ignoring the object's Hardness if it is 4 or lower.Heightened (+1) The damage increases by 1d10, and the Hardness the spell ignores increases by 2.",
    range: '30 feet',
    targets: '1 unattended object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '280': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 369',
    traditions: ['arcane', 'divine', 'occult', 'Shield Block', 'magic missile'],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You raise a magical shield of force. This counts as using the Raise a Shield action, giving you a +1 circumstance bonus to AC until the start of your next turn, but it doesn't require a hand to use. While the spell is in effect, you can use the Shield Block reaction with your magic shield. The shield has Hardness 5. After you use Shield Block, the spell ends and you can't cast it again for 10 minutes. Unlike a normal Shield Block, you can use the spell's reaction against the magic missile spell. Heightening the spell increases the shield's Hardness.Heightened (3rd) The shield has Hardness 10.Heightened (5th) The shield has Hardness 15.Heightened (7th) The shield has Hardness 20.Heightened (9th) The shield has Hardness 25.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'until the start of your next turn',
    area: ''
  },
  '281': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 369',
    traditions: ['divine'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You forge a temporary link between the target's life essence and your own. The target takes half damage from all effects that deal Hit Point damage, and you take the remainder of the damage. When you take damage through this link, you don't apply any resistances, weaknesses, or other abilities you have to that damage; you simply take that amount of damage. The spell ends if the target is ever more than 30 feet away from you. If either you or the target is reduced to 0 Hit Points, any damage from this spell is resolved and then the spell ends.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '282': {
    traits: [
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 369',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The target grows vines and leaves, brimming with primal energy. The target becomes a +1 striking weapon while in your hands, gaining a +1 item bonus to attack rolls and increasing the number of weapon damage dice to two. Additionally, as long as you are on your home plane, attacks you make with the target against aberrations, extraplanar creatures, and undead increase the number of weapon damage dice to three.',
    range: 'touch',
    targets: '1 non-magical club or staff you hold',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '283': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Electricity',
        description:
          'Effects with this trait deal electricity damage. A creature with this trait has a magical connection to electricity.',
        id: '56',
        url: 'Traits.aspx?ID=56'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 369',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You shroud your hands in a crackling field of lightning. Make a melee spell attack roll. On a hit, the target takes 2d12 electricity damage. If the target is wearing metal armor or is made of metal, you gain a +1 circumstance bonus to your attack roll with shocking grasp, and the target also takes 1d4 persistent electricity damage on a hit. On a critical hit, double the initial damage, but not the persistent damage.Heightened (+1) The damage increases by 1d12, and the persistent electricity damage increases by 1.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '284': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 369',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You warp space to make a creature smaller. The target shrinks to become Tiny in size. Its equipment shrinks with it but returns to its original size if removed. The creature's reach changes to 0 feet. This spell has no effect on a Tiny creature.Heightened (6th) The spell can target up to 10 creatures.",
    range: '30 feet',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '5 minutes',
    area: ''
  },
  '285': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 369',
    traditions: ['arcane'],
    cast: [''],
    description:
      "You shrink the target to roughly the size of a coin. This reduces it to negligible Bulk. You can Dismiss the spell, and the spell ends if you toss the object onto a solid surface. The object can't be used to attack or cause damage during the process of it returning to normal size. If there isn't room for the object to return to normal size when the spell ends, the spell's duration continues until the object is in a location large enough to accommodate its normal size.",
    range: 'touch',
    targets:
      '1 non-magical object up to 20 cubic feet in volume and up to 80 Bulk',
    savingThrow: '',
    duration: '1 day',
    area: ''
  },
  '286': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 369',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You harmlessly place your unique magical sigil, which is about 1 square inch in size, on the targeted creature or object. The mark can be visible or invisible, and you can change it from one state to another by using an Interact action to touch the target. The mark can be scrubbed or scraped off with 5 minutes of work. If it's on a creature, it fades naturally over the course of a week. The time before the mark fades increases depending on your heightened level.Heightened (3rd) The sigil instead fades after 1 month.Heightened (5th) The sigil instead fades after 1 year.Heightened (7th) The sigil never fades.",
    range: 'touch',
    targets: '1 creature or object',
    savingThrow: '',
    duration: 'unlimited (see below)',
    area: ''
  },
  '287': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 369',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['material', 'somatic'],
    description:
      "The target makes no sound, preventing creatures from noticing it using hearing or other senses alone. The target can't use sonic attacks, nor can it use actions with the auditory trait. This prevents it from casting spells that include verbal components.Heightened (4th) The spell effect emanates from the touched creature, silencing all sound in or passing through a 10- foot radius and preventing any auditory and sonic effects in the affected area. While within the radius, creatures are subject to the same effects as the target. Depending upon the position of the effect, a creature might notice the lack of sound reaching it (blocking off the noise coming from a party, for example).",
    range: 'touch',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '288': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Sleep',
        description:
          'This effect can cause a creature to fall asleep or get drowsy.',
        id: '145',
        url: 'Traits.aspx?ID=145'
      }
    ],
    source: 'Core Rulebook pg. 370',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Each creature in the area becomes drowsy and might fall asleep. A creature that falls unconscious from this spell doesn't fall prone or release what it's holding. This spell doesn't prevent creatures from waking up due to a successful Perception check, limiting its utility in combat.Critical Success The creature is unaffected.Success The creature takes a –1 status penalty to Perception checks for 1 round.Failure The creature falls unconscious. If it's still unconscious after 1 minute, it wakes up automatically.Critical Failure The creature falls unconscious. If it's still unconscious after 1 hour, it wakes up automatically.Heightened (4th) The creatures fall unconscious for 1 round on a failure or 1 minute on a critical failure. They fall prone and release what they're holding, and they can't attempt Perception checks to wake up. When the duration ends, the creature is sleeping normally instead of automatically waking up.",
    range: '30 feet',
    targets: '',
    savingThrow: 'Will',
    duration: '',
    area: '5-foot burst'
  },
  '289': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 370',
    traditions: ['arcane', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You dilate the flow of time around the target, slowing its actions.Critical Success The target is unaffected.Success The target is slowed 1 for 1 round.Failure The target is slowed 1 for 1 minute.Critical Failure The target is slowed 2 for 1 minute.Heightened (6th) You can target up to 10 creatures.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Fortitude;',
    duration: '1 minute',
    area: ''
  },
  '290': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 370',
    traditions: ['arcane', 'primal', 'obscuring mist'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You conjure a bank of fog so thick it impedes movement as well as sight. This functions as obscuring mist, except that the area is also difficult terrain. You can Dismiss the spell.',
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '20-foot burst'
  },
  '291': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 370',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You grace the target's mind, boosting its mental defenses and healing its wounds. The target regains 1d10+4 Hit Points when you Cast the Spell and gains a +2 status bonus to saves against mental effects for the duration.Heightened (+1) The amount of healing increases by 1d10+4.",
    range: '30 feet',
    targets: '1 willing living creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '292': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Sonic',
        description:
          'An effect with the sonic trait functions only if it makes sound, meaning it has no effect in an area of silence or in a vacuum. This is different from an auditory spell, which is effective only if the target can hear it. A sonic effect might deal sonic damage.',
        id: '147',
        url: 'Traits.aspx?ID=147'
      }
    ],
    source: 'Core Rulebook pg. 370',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A cacophonous noise blasts out, dealing 2d10 sonic damage. Each creature must attempt a Fortitude save.Critical Success The creature is unaffected.Success The creature takes half damage.Failure The creature takes full damage and is deafened for 1 round.Critical Failure The creature takes double damage and is deafened and stunned 1 for 1 minute.Heightened (+1) The damage increases by 1d10.',
    range: '30 feet',
    targets: '',
    savingThrow: 'Fortitude',
    duration: '',
    area: '10-foot burst'
  },
  '293': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 370',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You can ask questions of, receive answers from, and use the Diplomacy skill with animals. The spell doesn't make them more friendly than normal. Cunning animals are likely to be terse and evasive, while less intelligent ones often make inane comments.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '294': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      }
    ],
    source: 'Core Rulebook pg. 370',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You can ask questions of and receive answers from plants, but the spell doesn't make them more friendly or intelligent than normal. Most normal plants have a distinctive view of the world around them, so they don't recognize details about creatures or know anything about the world beyond their immediate vicinity. Cunning plant monsters are likely to be terse and evasive, while less intelligent ones often make inane comments.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '295': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 370',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You create a semicorporeal hand out of your essence that delivers touch spells for you. Whenever you Cast a Spell with a range of touch, you can have the hand crawl to a target within range along the ground, touch it, and then crawl back to you. When making a melee spell attack with the hand, you use your normal bonuses. The hand can move as far as it needs to within range. The hand has your AC and saves, but any damage to the hand destroys it and causes you to take 1d6 damage.',
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '296': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 371',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You ward a creature against the effects of a single spell. Choose a spell and name it aloud as part of the verbal component. Spell immunity attempts to counteract that spell whenever spell immunity's target is the target of the named spell or in that spell's area. Successfully counteracting a spell that targets an area or multiple targets with spell immunity negates the effects only for the target affected by spell immunity.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '24 hours',
    area: ''
  },
  '297': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 371',
    traditions: ['arcane'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "This abjuration reflects spells cast at you back at their caster. When a spell targets you, you can spend a reaction to attempt to reflect it. This uses the rules for counteracting the spell, but if the spell is successfully counteracted, the effect is turned back on the caster. Whether or not the counteract attempt is successful, spell turning then ends. Spell turning can't affect spells that aren't targeted (such as area spells). If spell turning reflects a spell back at a caster who is also under the effect of spell turning, their spell turning can attempt to reflect their own spell back at you again; if they do so, their counteract attempt automatically succeeds.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '298': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Curse',
        description:
          'A curse is an effect that places some long-term affliction on a creature. Curses are always magical and are typically the result of a spell or trap.',
        id: '38',
        url: 'Traits.aspx?ID=38'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 371',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You cause any spells cast on the target to spill out their energy in harmful surges. The target must attempt a Will save.Critical Success The target is unaffected.Success Whenever the target becomes affected by a spell with a duration, the target takes 2d12 persistent force damage. Each time it takes persistent force damage from spellwrack, it reduces the remaining duration of spells affecting it by 1 round. Only a successful Arcana check against your spell DC can help the target recover from the persistent damage; the curse and the persistent damage end after 1 minute.Failure As success, but the curse and persistent damage do not end on their own.Critical Failure As failure, but the persistent force damage is 4d12.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will',
    duration: '',
    area: ''
  },
  '299': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 371',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Tiny clinging hairs sprout across the creature's hands and feet, offering purchase on nearly any surface. The target gains a climb Speed equal to its Speed.Heightened (5th) The duration increases to 1 hour.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '300': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Poison',
        description:
          'An effect with this trait delivers a poison or deals poison damage. An item with this trait is poisonous and might cause an affliction.',
        id: '126',
        url: 'Traits.aspx?ID=126'
      }
    ],
    source: 'Core Rulebook pg. 371',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You magically duplicate a spider's venomous sting. You deal 1d4 piercing damage to the touched creature and afflict it with spider venom. The target must attempt a Fortitude save. Spider Venom (poison); Level 1; Maximum Duration 4 rounds. Stage 1 1d4 poison damage and enfeebled 1 (1 round); Stage 2 1d4 poison damage and enfeebled 2 (1 round).Critical Success The target is unaffected.Success The target takes 1d4 poison damage.Failure The target is afflicted with spider venom at stage 1.Critical Failure The target is afflicted with spider venom at stage 2.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '301': {
    traits: [
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 371',
    traditions: ['divine', 'occult', 'project image'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You concentrate ethereal energy and attack a creature's spirit, dealing 16d6 force damage. Because spirit blast affects the creature's spirit, it can damage a target projecting its consciousness (such as via project image) or possessing another creature even if the target's body is elsewhere. The possessed creature isn't harmed by the blast. The blast doesn't harm creatures that have no spirit, such as constructs.Heightened (+1) The damage increases by 2d6.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: ''
  },
  '302': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 371',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You form a spiritual link with another creature, allowing you to take in its pain. When you Cast this Spell and at the start of each of your turns, if the target is below maximum Hit Points, it regains 2 Hit Points (or the difference between its current and maximum Hit Points, if that's lower). You lose as many Hit Points as the target regained. This is a spiritual transfer, so no effects apply that would increase the Hit Points the target regains or decrease the Hit Points you lose. This transfer also ignores any temporary Hit Points you or the target have. Since this effect doesn't involve positive or negative energy, spirit link works even if you or the target is undead. While the duration persists, you gain no benefit from regeneration or fast healing. You can Dismiss this spell, and if you're ever at 0 Hit Points, spirit link ends automatically.Heightened (+1) The number of Hit Points transferred each time increases by 2.",
    range: '30 feet',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '303': {
    traits: [
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 372',
    traditions: ['occult', 'project image'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Your eldritch song sends pulsing waves of ethereal energy to attack creatures' spirits in the area, dealing 18d6 force damage. Because spirit song affects creatures' spirits, it can damage a target projecting its consciousness (such as via project image) or possessing another creature even if the target's body is elsewhere. The vibrating waves of spiritual song penetrate into, but not through, solid barriers, damaging incorporeal creatures hiding in solid objects in the area but not passing onward to damage creatures in other rooms. Possessed creatures aren't harmed by the song. The song doesn't harm creatures that have no spirit, such as constructs.Heightened (+1) The damage increases by 2d6.",
    range: '',
    targets: '',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: '60-foot cone'
  },
  '304': {
    traits: [
      {
        title: 'Curse',
        description:
          'A curse is an effect that places some long-term affliction on a creature. Curses are always magical and are typically the result of a spell or trap.',
        id: '38',
        url: 'Traits.aspx?ID=38'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 372',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You curse the target, sapping its spirit and leaving a contagious trap in its essence. The target must attempt a Will save. Any creature that casts a divine or occult spell on the target while it's affected is targeted by spiritual epidemic and must also attempt a Will save. The curse continues to spread in this way.Critical Success The target is unaffected.Success The target is enfeebled 2 and stupefied 2 for 1 round.Failure The target is enfeebled 2 and stupefied 2 for 1 minute and enfeebled 1 and stupefied 1 permanently.Critical Failure The target is enfeebled 3 and stupefied 3 for 1 minute and enfeebled 2 and stupefied 2 permanently.",
    range: '120 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '305': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 373',
    traditions: ['divine', 'disintegrate'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal;'],
    description:
      "A Medium guardian made of magical force appears and attacks foes you designate within range. The spiritual guardian is translucent and appears to be holding your deity's favored weapon. When you Cast the Spell, the spiritual guardian appears in an unoccupied space next to a foe of your choice within range and makes a Strike against it. Each time you Sustain the Spell, you can move the spiritual guardian to an unoccupied space next to a target within range (if necessary) and make a Strike with it. The guardian uses and contributes to your multiple attack penalty. Alternatively, when you Sustain the Spell, you can have the guardian move adjacent to an ally and protect that ally. If you do, each time the ally would take damage, the guardian takes the first 10 damage instead of your ally. It continues to do so until you move the guardian to attack an enemy or defend a different ally, or until the guardian is destroyed (it has 50 Hit Points and can't recover Hit Points by any means). The guardian can't usually take damage except when protecting an ally, though disintegrate automatically destroys it if it hits the spiritual guardian's AC of 25. The guardian's Strikes are melee spell attacks. Regardless of the appearance of the guardian's weapon, the guardian deals force damage equal to 2d8 plus your spellcasting ability modifier, but you can deal damage of the type normally dealt by the weapon it holds instead of force damage. No other traits or statistics of the weapon apply, and even a ranged weapon attacks adjacent creatures only. Despite making a spell attack, the spiritual guardian's weapon is a weapon for the purposes of triggers, resistances, and so forth. The guardian takes up space and allies can use it when flanking, but it doesn't have any other attributes a creature would normally have aside from Hit Points, and creatures can move through its space without hindrance. The guardian can't make any attack other than its Strike, and feats or spells that affect weapons or enhance allies do not apply to the guardian.Heightened (+2) The guardian's damage increases by 1d8, and its Hit Points increase by 20.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '306': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 373',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal;'],
    description:
      "A weapon made of pure magical force materializes and attacks foes you designate within range. This weapon has a ghostly appearance and manifests as your deity's favored weapon. When you cast the spell, the weapon appears next to a foe you choose within range and makes a Strike against it. Each time you Sustain the Spell, you can move the weapon to a new target within range (if needed) and Strike with it. The spiritual weapon uses and contributes to your multiple attack penalty. The weapon's Strikes are melee spell attacks. Regardless of its appearance, the weapon deals force damage equal to 1d8 plus your spellcasting ability modifier. You can deal damage of the type normally dealt by the weapon instead of force damage (or any of the available damage types for a versatile weapon). No other statistics or traits of the weapon apply, and even a ranged weapon attacks adjacent creatures only. Despite making a spell attack, the spiritual weapon is a weapon for purposes of triggers, resistances, and so forth. The weapon doesn't take up space, grant flanking, or have any other attributes a creature would. The weapon can't make any attack other than its Strike, and feats or spells that affect weapons do not apply to it.Heightened (+2) The weapon's damage increases by 1d8.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '307': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 373',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Positive energy shuts death's door. The target loses the dying condition, though it remains unconscious at 0 Hit Points.",
    range: '30 feet',
    targets: '1 dying creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '308': {
    traits: [
      {
        title: 'Detection',
        description:
          'Effects with this trait attempt to determine the presence or location of a person, object, or aura.',
        id: '43',
        url: 'Traits.aspx?ID=43'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 373',
    traditions: ['divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "As long as you and the target are on the same plane of existence and both alive, you remain aware of its present state. You know the target's direction from you, distance from you, and any conditions affecting it.Heightened (4th) The spell's range increases to 30 feet, and you can target up to 10 creatures.",
    range: 'touch',
    targets: '1 willing living creature',
    savingThrow: '',
    duration: '1 day',
    area: ''
  },
  '309': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Poison',
        description:
          'An effect with this trait delivers a poison or deals poison damage. An item with this trait is poisonous and might cause an affliction.',
        id: '126',
        url: 'Traits.aspx?ID=126'
      }
    ],
    source: 'Core Rulebook pg. 373',
    traditions: ['arcane', 'primal', 'obscuring mist'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You create a cloud of putrid mist in the area. The cloud functions as obscuring mist except it sickens creatures that end their turns within the cloud. (The concealed condition is not a poison effect.)Critical Success The creature is unaffected.Success The creature is sickened 1.Failure The creature is sickened 1 and slowed 1 while in the cloud.Critical Failure The creature is sickened 2 and slowed 1 until it leaves the cloud.',
    range: '120 feet',
    targets: '',
    savingThrow: 'Fortitude;',
    duration: '1 minute',
    area: '20-foot burst'
  },
  '310': {
    traits: [
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 374',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You can ask questions of and receive answers from natural or worked stone. While stone is not intelligent, you speak with the natural spirits of the stone, which have a personality colored by the type of stone, as well as by the type of structure the stone is part of, for worked stone. A stone's perspective, perception, and knowledge give it a worldview different enough from a human's that it doesn't consider the same details important. Stones can mostly answer questions about creatures that touched them in the past and what is concealed beneath or behind them.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '311': {
    traits: [
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 374',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Manipulating the fundamental particles of matter, you convert stone into flesh and blood. You restore a petrified creature to its normal state or transform a stone object into a mass of inert flesh (without stone's Hardness) in roughly the same shape.",
    range: 'touch',
    targets: 'petrified creature or human-size stone object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '312': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      }
    ],
    source: 'Core Rulebook pg. 374',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target's skin hardens like stone. It gains resistance 5 to physical damage, except adamantine. Each time the target is hit by a bludgeoning, piercing, or slashing attack, stoneskin's duration decreases by 1 minute.Heightened (6th) The resistance increases to 10.Heightened (8th) The resistance increases to 15.Heightened (10th) The resistance increases to 20.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '20 minutes',
    area: ''
  },
  '313': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Electricity',
        description:
          'Effects with this trait deal electricity damage. A creature with this trait has a magical connection to electricity.',
        id: '56',
        url: 'Traits.aspx?ID=56'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 374',
    traditions: ['primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "A massive storm cloud forms in the air in a 360-foot burst. Beneath it, rain begins to fall, and gales impose a –4 circumstance penalty to physical ranged attacks and weapon ranged attacks, and the air in the area becomes greater difficult terrain for flying creatures. When you Cast this Spell and the first time each round you Sustain the Spell, you can choose one of the following storm effects. You can't choose the same effect twice in a row. Acid Rain Each creature in the storm takes 4d8 acid damage with no saving throw. Hail The storm deals 4d10 bludgeoning damage to creatures beneath it (basic Fortitude save). Lightning Up to 10 bolts of lightning strike down, targeting creatures of your choice in the storm. No more than one bolt can target any one creature. Each bolt deals 7d6 electricity damage (basic Reflex save). Rain and Wind Heavy rain and whipping wind reduce visibility and mobility, making the area under the storm cloud difficult terrain and making everything seen within or through the area concealed. Thunderclap Each creature in the storm must succeed at a Fortitude save or be deafened for 10 minutes. A creature that succeeds is temporarily immune to thunderclaps from storm of vengeance for 1 hour.Heightened (10th) The range increases to 2,200 feet, and the cloud is a 1,000-foot burst.",
    range: '800 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: '360-foot burst'
  },
  '314': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 374',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You implant a subconscious suggestion deep within the target's mind for them to follow when a trigger you specify occurs (as described on page 305). You suggest a course of action to the target. Your directive must be phrased in such a way as to seem like a logical course of action to the target, and it can't be self-destructive or obviously against the target's self-interest. The target must attempt a Will save.Critical Success The target is unaffected and knows you tried to control it.Success The target is unaffected and thinks you were talking to them normally, not casting a spell on them.Failure The suggestion remains in the target's subconscious until the next time you prepare. If the trigger occurs before then, the target immediately follows your suggestion. The effect has a duration of 1 minute, or until the target has completed a finite suggestion or the suggestion becomes self-destructive or has other obvious negative effects.Critical Failure As failure, but the duration is 1 hour.Heightened (9th) You can target up to 10 creatures.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '315': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 374',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Your honeyed words are difficult for creatures to resist. You suggest a course of action to the target, which must be phrased in such a way as to seem like a logical course of action to the target and can't be self-destructive or obviously against the target's self-interest. The target must attempt a Will save.Critical Success The target is unaffected and knows you tried to control it.Success The target is unaffected and thinks you were talking to them normally, not casting a spell on them.Failure The target immediately follows your suggestion. The spell has a duration of 1 minute, or until the target has completed a finite suggestion or the suggestion becomes self-destructive or has other obvious negative effects.Critical Failure As failure, but the base duration is 1 hour.Heightened (8th) You can target up to 10 creatures.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '316': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 375',
    traditions: ['arcane', 'primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You conjure an animal to fight for you. You summon a common creature that has the animal trait and whose level is –1. Heightening the spell increases the maximum level of creature you can summon.Heightened (2nd) Level 1Heightened (3rd) Level 2Heightened (4th) Level 3Heightened (5th) Level 5Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15',
    range: '30 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '317': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 375',
    traditions: ['divine', 'summon animal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You conjure a celestial to fight on your behalf. This works like summon animal, except you summon a common creature that has the celestial trait and whose level is 5 or lower. You can't summon a creature unless its alignment is one of your deity's preferred alignments (or, if you don't have a deity, is within one step of your alignment). At the GM's discretion, some deities might restrict specific types of celestials, even if their alignments match.Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '318': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 375',
    traditions: ['arcane', 'summon animal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You conjure a construct to fight for you. This works like summon animal, except you summon a common creature that has the construct trait and whose level is –1.Heightened (2nd) Level 1Heightened (3rd) Level 2Heightened (4th) Level 3Heightened (5th) Level 5Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '319': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 375',
    traditions: ['arcane', 'summon animal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You conjure a dragon to fight for you. This works like summon animal, except you summon a common creature that has the dragon trait and whose level is 5 or lower.Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '320': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 375',
    traditions: ['arcane', 'primal', 'summon animal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You conjure an elemental to fight for you. This works like summon animal, except you summon a common creature that has the elemental trait and whose level is 1 or lower.Heightened (3rd) Level 2Heightened (4th) Level 3Heightened (5th) Level 5Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '321': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 375',
    traditions: ['occult', 'summon animal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You conjure an aberration to fight for you. This works like summon animal, except you summon a common creature that has the aberration trait and whose level is 5 or lower.Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '322': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 375',
    traditions: ['occult', 'primal', 'summon animal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You conjure a fey to fight for you. This works like summon animal, except you summon a common creature that has the fey trait and whose level is –1.Heightened (2nd) Level 1Heightened (3rd) Level 2Heightened (4th) Level 3Heightened (5th) Level 5Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '323': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 375',
    traditions: ['divine', 'summon animal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You conjure a fiend to fight on your behalf. This works like summon animal, except you summon a common creature that has the fiend trait and whose level is 5 or lower. You can't summon a creature unless its alignment is one of your deity's preferred alignments (or, if you don't have a deity, is within one step of your alignment). At the GM's discretion, some deities might restrict specific types of fiends, even if their alignments match.Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '324': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 376',
    traditions: ['primal', 'summon animal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You conjure a giant to fight for you. This works like summon animal, except you summon a common creature that has the giant trait and whose level is 5 or lower.Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '325': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 376',
    traditions: ['primal', 'summon animal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You conjure a plant or fungus to fight for you. This works like summon animal, except you summon a common creature that has the plant or fungus trait and whose level is –1.Heightened (2nd) Level 1Heightened (3rd) Level 2Heightened (4th) Level 3Heightened (5th) Level 5Heightened (6th) Level 7Heightened (7th) Level 9Heightened (8th) Level 11Heightened (9th) Level 13Heightened (10th) Level 15',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '326': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 376',
    traditions: ['divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A powerful globe of searing sunlight explodes in the area, dealing 8d10 fire damage to creatures and objects in the area, plus 8d10 additional positive damage to undead creatures. Each creature and object in the area must attempt a Reflex save. If the globe overlaps with an area of magical darkness, sunburst attempts to counteract the darkness effect.Critical Success The creature or object is unaffected.Success The creature or object takes half damage.Failure The creature or object takes full damage.Critical Failure The creature or object takes full damage. If it's a creature, it becomes blinded permanently.Heightened (+1) The fire damage increases by 1d10, and the positive damage against undead increases by 1d10.",
    range: '500 feet',
    targets: '',
    savingThrow: 'Reflex',
    duration: '',
    area: '60-foot burst'
  },
  '327': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 376',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You emit a pulsating mental blast that penetrates the minds of all enemies in the area. Each creature in the area must attempt a Will save.Critical Success The creature is unaffected.Success The creature is stunned 1.Failure The creature is stunned 2.Critical Failure The creature is stunned for 1 round.',
    range: '30 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: '1 round',
    area: '30-foot emanation'
  },
  '328': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 376',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target's senses are suddenly rewired in unexpected ways, causing them to process noises as bursts of color, smells as sounds, and so on. This has three effects, and the target must attempt a Will save. Due to the distraction, the target must succeed at a DC 5 flat check each time it uses a concentrate action, or the action fails and is wasted. The target's difficulty processing visual input makes all creatures and objects concealed from it. The creature has trouble moving, making it clumsy 3 and giving it a –10-foot status penalty to its Speeds.Critical Success The target is unaffected.Success The target is affected for 1 round.Failure The target is affected for 1 minute.Critical Failure As failure, and the target is stunned 2 as it attempts to process the sensory shifts.Heightened (9th) You can target up to five creatures.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: ''
  },
  '329': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 376',
    traditions: ['divine', 'occult'],
    cast: [''],
    description:
      "You grant the target corpse a semblance of life, which it uses to speak the answers to three questions posed to it. This spell calls on the physical body's latent memories rather than summoning back the deceased's spirit, so the corpse must be mostly intact for the spell to function. The more damage the corpse has taken, the more inaccurate or patchwork its answers are, and it must have a throat and mouth to speak at all. If anyone has previously cast this spell on the corpse in the last week, the spell automatically fails. The corpse can attempt a Will save to resist answering the questions using the statistics of the original creature at its time of death, with the following effects.Critical Success The target can lie or refuse to answer your questions, and the target's spirit haunts you for 24 hours, bothering you and causing you to be unable to gain any rest for that time.Success The target can provide false information or refuse to answer your questions.Failure The target must answer truthfully, but its answers can be brief, cryptic, and repetitive. It can still mislead you or attempt to stall so that the spell's duration runs out before you can ask all your questions.Critical Failure As failure, but the target's answers are more direct and less repetitive, though still cryptic. It takes a –2 status penalty to Deception checks to deceive or mislead you.",
    range: 'touch',
    targets: '1 corpse',
    savingThrow: 'Will;',
    duration: '10 minutes',
    area: ''
  },
  '330': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      }
    ],
    source: 'Core Rulebook pg. 377',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A vine covered in sticky sap appears from thin air, flicking from your hand and lashing itself to the target. Attempt a spell attack against the target.Critical Success The target gains the immobilized condition and takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty and the immobilized condition.Success The target takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty.Failure The target is unaffected.Heightened (2nd) The effects last for 2 rounds.Heightened (4th) The effects last for 1 minute.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '331': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      }
    ],
    source: 'Core Rulebook pg. 377',
    traditions: ['primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'Dense, twitching creepers sprout from every surface and fill any bodies of water in the area. Any creature moving on the land, or Climbing or Swimming within the creepers, takes a –10- foot circumstance penalty to its Speeds while in the area. Once per round, you can make a vine lash out from any square within the expanse of creepers by using a single action, which has the concentrate trait. This vine has a 15-foot reach and makes a melee unarmed attack using your spell attack modifier. If the attack succeeds, the vine pulls the target into the creepers and makes it immobilized for 1 round or until the creature Escapes (against your spell DC), whichever comes first.',
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: '40-foot burst'
  },
  '332': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 377',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You move the target up to 20 feet, potentially suspending it in midair. When you Sustain the Spell, you can do so again, or you can choose a different eligible target to move.',
    range: '120 feet',
    targets: '1 object of up to 80 Bulk with no dimension longer than 20 feet',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '333': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 377',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'With a rush of telekinetic power, you move a foe or something they carry. You can attempt to Disarm, Shove, or Trip the target using a spell attack roll instead of an Athletics check.',
    range: '60 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '334': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 377',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You hurl a loose, unattended object that is within range and that has 1 Bulk or less at the target. Make a ranged attack against the target. If you hit, you deal bludgeoning, piercing, or slashing damage—as appropriate for the object you hurled—equal to 1d6 plus your spellcasting ability modifier. No specific traits or magic properties of the hurled item affect the attack or the damage.Critical Success You deal double damage.Success You deal full damage.Heightened (+1) The damage increases by 1d6.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '335': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 377',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      'The targets can communicate telepathically with any or all of the other targets from any point on the same planet.',
    range: 'touch',
    targets: 'you and up to 4 willing creatures touched',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '336': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 377',
    traditions: ['arcane', 'divine', 'occult', 'suggestion', 'telepathy'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You send the target a message of 25 words or fewer, and it can respond immediately with its own message of 25 words or fewer. Your message is insidious and has the effect of suggestion, with the message substituting for the spoken suggestion. On a successful save, the target is temporarily immune for 1 day, and on a critical success, the target is temporarily immune for 1 month. You can target a creature only if you have previously been in telepathic contact with it before, such as via the telepathy spell.',
    range: 'planetary',
    targets: "1 creature you've telepathically contacted before",
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '337': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 377',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You can communicate telepathically with creatures within 30 feet. Once you establish a connection by communicating with a creature, the communication is two-way. You can communicate only with creatures that share a language with you.Heightened (6th) Telepathy loses the linguistic trait. You can communicate telepathically with creatures using shared mental imagery even if you don't share a language.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '338': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 378',
    traditions: ['arcane', 'occult'],
    cast: [''],
    description:
      "You and the targets are instantly transported to any location within range, as long as you can identify the location precisely both by its position relative to your starting position and by its appearance (or other identifying features). Incorrect knowledge of the location's appearance usually causes the spell to fail, but it could instead lead to teleporting to an unwanted location or some other unusual mishap determined by the GM. Teleport is not precise over great distances. The targets appear at a distance from the intended destination equal to roughly 1 percent of the total distance traveled, in a direction determined by the GM. For short journeys, this lack of precision is irrelevant, but for long distances this could be up to 1 mile.Heightened (7th) You and the other targets can travel to any location within 1,000 miles.Heightened (8th) You and the other targets can travel to any location on the same planet. If you travel more than 1,000 miles, you arrive only 10 miles off target.Heightened (9th) You and the other targets can travel to any location on another planet within the same solar system. Assuming you have accurate knowledge of the location's position and appearance, you arrive on the new planet 100 miles off target.Heightened (10th) As the 9th-level version, but you and the other targets can travel to any planet within the same galaxy.",
    range: '100 miles',
    targets:
      'you and up to 4 targets touched, either willing creatures or objects roughly the size of a creature.',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '339': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 378',
    traditions: ['arcane', 'occult', 'wall of fire'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You temporarily stop time for everything but yourself, allowing you to use several actions in what appears to others to be no time at all. Immediately after casting time stop, you can use up to 9 actions in 3 sets of up to 3 actions each. After each set of actions, 1 round passes, but only for you, effects specifically targeting or affecting you, and effects you create during the stoppage. All other creatures and objects are invulnerable to your attacks, and you can't target or affect them with anything. Once you have finished your actions, time begins to flow again for the rest of the world. If you created an effect with a duration that extends beyond the time stop's duration, such as wall of fire, it immediately affects others again, but it doesn't have any of the effects that happen only when you first cast the spell.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '340': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 378',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target can understand all words regardless of language and also speak the languages of other creatures. When in a mixed group of creatures, each time the target speaks, it can choose a creature and speak in a language that creature understands, even if the target doesn't know what language that is.Heightened (7th) The duration is 8 hours.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '341': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 378',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You dull the target's mind; the target must attempt a Will save.Success The target is unaffected.Failure The target is stupefied 2.Critical Failure The target is stupefied 4.",
    range: 'touch',
    targets: '1 living creature',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: ''
  },
  '342': {
    traits: [
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      },
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 378',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You transform into a Large tree. Perception checks don't reveal your true nature, but a successful Nature or Survival check against your spell DC reveals that you appear to be a tree that is strangely new to the area. While in tree form, you can observe everything around you, but you can't act other than to end the spell, and your turn, by using a single action, which has the concentrate trait. As a tree, your AC is 20, and only status bonuses, status penalties, circumstance bonuses, and circumstance penalties affect you. Any successes and critical successes you roll on Reflex saves are failures.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '343': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 378',
    traditions: ['primal'],
    cast: [''],
    description:
      "You step into a living tree with a trunk big enough for you to fit inside it and instantly teleport to any tree of the same species within 5 miles that also has a sufficiently large trunk. Once you enter the first tree, you instantly know the rough locations of other sufficiently large trees of the same species within range and can exit from the original tree, if you prefer. You can't carry extradimensional spaces with you; if you attempt to do so, the spell fails.Heightened (6th) The tree you exit can be up to 50 miles away.Heightened (8th) The tree you exit can be up to 500 miles away.Heightened (9th) The tree you exit can be anywhere on the same planet.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '344': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Revelation',
        description: 'Effects with this trait see things as they truly are.',
        id: '138',
        url: 'Traits.aspx?ID=138'
      }
    ],
    source: 'Core Rulebook pg. 378',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You see things within 60 feet as they actually are. The GM rolls a secret counteract check against any illusion or transmutation in the area, but only for the purpose of determining whether you see through it (for instance, if the check succeeds against a polymorph spell, you can see the creature's true form, but you don't end the polymorph spell).",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '345': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      }
    ],
    source: 'Core Rulebook pg. 379',
    traditions: ['arcane', 'occult'],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'A glimpse into the future ensures your next blow strikes true. The next time you make an attack roll before the end of your turn, roll the attack twice and use the better result. The attack ignores circumstance penalties to the attack roll and any flat check required due to the target being concealed or hidden.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'until the end of your turn',
    area: ''
  },
  '346': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      },
      {
        title: 'Prediction',
        description:
          'Effects with this trait determine what is likely to happen in the near future. Most predictions are divinations.',
        id: '132',
        url: 'Traits.aspx?ID=132'
      }
    ],
    source: 'Core Rulebook pg. 379',
    traditions: ['arcane', 'occult'],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You delve into the possible futures of the next few seconds to understand all the ways your target might avoid harm, then cast out a vision of that future to those around you. On the first attack roll made against the target during true target's duration, the attacker rolls twice and uses the better result. The attacker also ignores circumstance penalties to the attack roll and any flat check required due to the target being concealed or hidden.",
    range: '60 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: 'until the start of your next turn',
    area: ''
  },
  '347': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 379',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target is overcome with an all-consuming urge to dance. For the duration of the spell, the target is flat-footed and can't use reactions. While affected, the creature can't use actions with the move trait except to dance, using the Stride action to move up to half its Speed.Critical Success The target is unaffected.Success The spell's duration is 3 rounds, and the target must spend at least 1 action each turn dancing.Failure The spell's duration is 1 minute, and the target must spend at least 2 actions each turn dancing.Critical Failure The spell's duration is 1 minute, and the target must spend all its actions each turn dancing.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '348': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 379',
    traditions: ['divine', 'occult'],
    cast: [''],
    description:
      'You shroud a creature in wards that hide its alignment. The target appears to be neutral to all effects that would detect its alignment.',
    range: 'touch',
    targets: '1 creature or object',
    savingThrow: '',
    duration: 'until the next time you make your daily preparations',
    area: ''
  },
  '349': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Fear',
        description:
          'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
        id: '68',
        url: 'Traits.aspx?ID=68'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 379',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Fleeting notes of a strange and unnatural song fill the air, overtaking the mind. Each target must attempt a Will save when you cast the spell, and again each time you Sustain the Spell. A creature needs to attempt only one save against the song each round, and you have to keep the same targets when you Sustain the Spell.Critical Success The target is unaffected, can't be affected on subsequent rounds, and is temporarily immune for 1 minute.Success The target is unaffected this round, but it can be affected on subsequent rounds.Failure Roll 1d4 on the table below.Critical Failure Roll 1d4+1 on the table below. Unfathomable Song ResultEffect 1The target is frightened 2. 2The target is confused for 1 round. 3The target is stupefied 4 for 1 round. 4The target is blinded for 1 round. 5The target is stunned for 1 round and stupefied 1 for an unlimited duration. ",
    range: '120 feet',
    targets: 'up to 5 creatures',
    savingThrow: 'Will;',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '350': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Core Rulebook pg. 379',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You free those who travel alongside you from environmental hindrances. Targets don't take circumstance penalties to Speed from vegetation, rubble, winds, or other properties of the environment, whether or not the environment is magical, and they ignore difficult terrain from such environmental properties.Heightened (9th) The targets also ignore greater difficult terrain from environmental properties.",
    range: '30 feet',
    targets: 'up to 10 creatures',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '351': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Scrying',
        description:
          'A scrying effect lets you see, hear, or otherwise get sensory information from a distance using a sensor or apparatus, rather than your own eyes and ears.',
        id: '141',
        url: 'Traits.aspx?ID=141'
      }
    ],
    source: 'Core Rulebook pg. 379',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "This spell grants perfect sight based on scrying, allowing several willing targets to track the exact movements or position of one creature or object. Choose one target creature or object in the area to be tracked. It becomes the sensor for the spell. Up to five willing creatures of your choice in the area can see a ghostly image of this creature or object when it's out of their sight. They can perceive the creature or object perfectly, allowing them to ignore the concealed or invisible condition, though physical barriers still provide cover. The tracking creatures can see the tracked creature or object through all barriers other than lead or running water, which block their vision. Distance doesn't matter, though the creature or object might move so far away it becomes too small to perceive. The tracking creatures don't see any of the environment around the target, though they do see any gear a creature is wearing or holding, and they can tell if it removes objects from its person. If the target to be tracked is willing, the duration is 1 hour. If you try to track an unwilling creature, the target must attempt a Will save.Critical Success The creature or object is unaffected.Success As described, and the duration is 1 minute.Failure As described, and the duration is 1 hour.",
    range: '100 feet',
    targets: '1 creature or object tracked and up to 5 other willing creatures',
    savingThrow: '',
    duration: 'varies',
    area: '20-foot burst;'
  },
  '352': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Mindless',
        description:
          'A mindless creature has either programmed or rudimentary mental attributes. Most, if not all, of their mental ability modifiers are –5. They are immune to all mental effects.',
        id: '108',
        url: 'Traits.aspx?ID=108'
      }
    ],
    source: 'Core Rulebook pg. 380Core Rulebook pg. 380',
    traditions: ['arcane', 'occult', 'Core Rulebook pg. 380', 'Stealth'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You summon an unseen servant, which you can command as part of Sustaining the Spell. It serves you until its Hit Points are reduced to 0, at which point the spell ends, or until you stop Sustaining the Spell. The unseen servant gains the summoned trait.Unseen ServantCreature -1No AlignmentMediumMindlessSource Core Rulebook pg. 380Perception +0Languages understands its creatorSkills Stealth +8Str -4, Dex +2, Con +0, Int -5, Wis +0, Cha +0Invisible  An unseen servant is invisible, though it normally doesn’t Sneak, so it is usually only hidden.AC 13, Fort +0, Ref +4, Will +0HP 4; Immunities disease, mental, non-magical attacks, paralysis, poison, precision, unconscious;\n; Resistances all damage 5 (except force or ghost touch)Speed fly 30 feetForce Body An unseen servant’s physical body is made of force. It can’t use attack actions. It can move and use Interact actions to do things such as fetch objects, open unstuck or unlocked doors, hold chairs, and clean. It can’t pass through solid objects.',
    range: '60 feet',
    targets: '',
    savingThrow: '',
    duration: 'sustained',
    area: ''
  },
  '353': {
    traits: [
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 380',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You draw in the blood and life force of other creatures through your outstretched arms. You deal 12d6 negative damage to living creatures in the area. You gain temporary Hit Points equal to half the damage a single creature takes from this spell; calculate these temporary Hit Points using the creature that took the most damage. You lose any remaining temporary Hit Points after 1 minute.Heightened (+1) The damage increases by 2d6.',
    range: '',
    targets: '',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: '30-foot cone'
  },
  '354': {
    traits: [
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 380',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Your touch leeches the lifeblood out of a target to empower yourself. You deal 6d6 negative damage to the target. You gain temporary Hit Points equal to half the negative damage the target takes (after applying resistances and the like). You lose any remaining temporary Hit Points after 1 minute.Heightened (+1) The damage increases by 2d6.',
    range: 'touch',
    targets: '1 living creature',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: ''
  },
  '355': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 380',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You disguise the targets as other creatures of the same body shape and roughly similar height (within 6 inches) and weight (within 50 pounds). The disguise can hide the targets' identities or let them appear to be of another ancestry, but it's not precise enough to impersonate specific individuals. The spell doesn't change voice, scent, or mannerisms. You choose the disguise for each target; for example, you could make one target appear to be a dwarf and another an elf. Casting veil counts as setting up a disguise for the purpose of the Impersonate action. It allows the target to ignore any circumstance penalties they might take for being disguised as dissimilar creatures, and it gives the targets a +4 status bonus to Deception checks to prevent others from seeing through their disguises, and add their level even if untrained. You can Dismiss any or all of these disguises.Heightened (5th) The spell also disguises the targets' voices and scents; it gains the auditory trait.Heightened (7th) The targets can appear as any creature of the same size, even specific individuals. You must have seen an individual to reproduce their appearance. The spell also disguises the targets' voices and scents; it gains the auditory trait.",
    range: '30 feet',
    targets: 'up to 10 creatures',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '356': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 381',
    traditions: ['arcane', 'divine', 'occult', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Whenever you speak or make any other sound vocally, you can make your vocalization seem to originate from somewhere else within 60 feet, and you can change that apparent location freely as you vocalize. Any creature that hears the sound can attempt to disbelieve your illusion.Heightened (2nd) The spell's duration increases to 1 hour, and you can also change the tone, quality, and other aspects of your  voice. Before a creature can attempt to disbelieve your illusion, it must actively attempt a Perception check or otherwise use actions to interact with the sound.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '357': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 381',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['material', 'somatic'],
    description:
      "You create a pattern of lights that pulses with intensity. Creatures are dazzled while inside the pattern. In addition, a creature must attempt a Will saving throw if it's inside the pattern when you cast it, enters the pattern, ends its turn within the pattern, or uses a Seek or Interact action on the pattern. A creature currently blinded by the pattern doesn't need to attempt new saving throws.Success The creature is unaffected.Failure The creature is blinded by the pattern. If it exits the pattern, it can attempt a new save to recover from the blinded condition at the end of each of its turns, to a maximum duration of 1 minute.Critical Failure The creature is blinded for 1 minute.",
    range: '120 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: 'sustained up to 1 minute',
    area: '10-foot burst'
  },
  '358': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 381',
    traditions: ['occult'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "An illusion of horrific creatures fills the spell's area. The creatures look like Tiny swarming monsters with a specific appearance of your choice, such as Hellish flies or animated saw blades. The burst deals 8d8 mental damage to each creature that's inside the burst when it's created, enters the burst, or starts its turn inside the burst. A creature that critically succeeds at its will save can immediately attempt to disbelieve the illusion. A creature that tries to Interact with the monsters or observes one with a Seek action can attempt to disbelieve the illusion. Creatures that disbelieve the illusion take no damage from the illusion thereafter.Heightened (+1) The mental damage increases by 1d8.",
    range: '500 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: '30-foot burst'
  },
  '359': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 382',
    traditions: ['divine', 'primal'],
    cast: [''],
    description:
      'Vitality radiates outward from you, allowing others to supplicate and receive healing. Once per round, either you or an ally can use an Interact action to supplicate and lay hands upon you to regain Hit Points. Each time the beacon heals someone, it decreases in strength. It restores 4d10 Hit Points to the first creature, 4d8 Hit Points to the second, 4d6 Hit Points to the third, and 4d4 Hit Points to the fourth, after which the spell ends. You can have only one vital beacon active at a time.Heightened (+1) The beacon restores one additional die of Hit Points each time it heals, using the same die size as the others for that step.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'until your next daily preparations',
    area: ''
  },
  '360': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 382',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The ground opens up, spraying a column of lava high into the air in a vertical cylinder, dealing 14d6 fire damage to creatures in the area. The lava rapidly cools and encases creatures in the area. A creature encased in rock is clumsy 1 and takes a –10-foot status penalty to its Speeds. All normal terrain is difficult terrain to a flying creature, and such creatures immediately descend 20 feet the moment they're encased, but they don't take damage from this fall. A creature encased in rock can attempt to Escape against your spell DC to end the effect. Otherwise, the creature remains encased until it takes a total of 50 damage, freeing it from the rock. Additionally, creatures in the area and those within 5 feet of the lava column automatically take 3d6 fire damage from the intense heat, regardless of the results of their saving throws.Critical Success The creature is unaffected.Success The creature takes half damage.Failure The creature takes full damage and is encased.Critical Failure The creature takes double damage and is encased.Heightened (+1) The damage in the area increases by 2d6, and the damage from the intense heat increases by 1d6.",
    range: '120 feet',
    targets: '',
    savingThrow: 'Reflex',
    duration: '',
    area: '5-foot radius, 80-foot tall cylinder'
  },
  '361': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 382',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Your scream chills the souls of enemies that hear it. Each living enemy in the area takes 8d10 negative damage and must attempt a Fortitude save.Critical Success The target is unaffected.Success The target takes full damage.Failure The target takes full damage and is drained 1d4.Critical Failure The target takes double damage and is drained 4.',
    range: '',
    targets: 'any number of creatures',
    savingThrow: 'Fortitude',
    duration: '',
    area: '40-foot emanation;'
  },
  '362': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 382',
    traditions: ['arcane', 'primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You raise a blazing wall that burns creatures passing through it. You create either a 5-foot-thick wall of flame in a straight line up to 60 feet long and 10 feet high, or a 5-foot-thick, 10-foot-radius ring of flame with the same height. The wall stands vertically in either form; if you wish, the wall can be of a shorter length or height. Everything on each side of the wall is concealed from creatures on the opposite side. Any creature that crosses the wall or is occupying the wall's area at the start of its turn takes 4d6 fire damage.Heightened (+1) The fire damage increases by 1d6.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '363': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 382',
    traditions: ['arcane', 'occult', 'disintegrate'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You form an invisible wall of pure magical force up to 50 feet long and up to 20 feet high. The wall has no discernible thickness. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. The wall has AC 10, Hardness 30, and 60 Hit Points, and it's immune to critical hits and precision damage. The wall blocks physical effects from passing through it, and because it's made of force, it blocks incorporeal and ethereal creatures as well. Teleportation effects can pass through the barrier, as can visual effects (since the wall is invisible). Wall of force is immune to counteracting effects of its level or lower, but the wall is automatically destroyed by a disintegrate spell of any level or by contact with a rod of cancellation or sphere of annihilation.Heightened (+2) The Hit Points of the wall increases by 20.",
    range: '30 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '364': {
    traits: [
      {
        title: 'Cold',
        description:
          'Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.',
        id: '27',
        url: 'Traits.aspx?ID=27'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 382',
    traditions: ['arcane', 'primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You sculpt a barrier of ice that blocks sight and, once shattered, freezes foes. You create either a 1-foot-thick wall of ice in a straight line up to 60 feet long and 10 feet high (the wall doesn't have to be vertical, but it must be anchored on both sides to a solid surface) or a 1-foot-thick, 10-foot radius hemisphere of ice. The ice that makes up the wall is opaque. If you wish, the wall can be of a smaller length, height, or radius. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. Each 10-foot-by-10-foot section of the wall has AC 10, Hardness 10, and 40 Hit Points, and it's immune to critical hits, cold damage, and precision damage. A section also has weakness to fire 15; a section of the wall destroyed by fire melts, evaporating into water and steam. A section destroyed by means other than fire leaves behind a chilling mass of ice that is difficult terrain and deals 2d6 cold damage to any creature passing through it.Heightened (+2) The Hit Points of each section of the wall increase by 10, and the cold damage dealt to creatures crossing a destroyed section increases by 1d6.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '365': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      }
    ],
    source: 'Core Rulebook pg. 383',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You shape a wall of solid stone. You create a 1-inch-thick wall of stone up to 120 feet long, and 20 feet high. You can shape the wall's path, placing each 5 feet of the wall on the border between squares. The wall doesn't need to stand vertically, so you can use it to form a bridge or set of stairs, for example. You must conjure the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. Each 5-foot-by-5-foot section of the wall has AC 10, Hardness 14, and 50 Hit Points, and it's immune to critical hits and precision damage. A destroyed section of the wall can be moved through, but the rubble created from it is difficult terrain.Heightened (+2) The Hit Points of each section of the wall increase by 15.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '366': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      }
    ],
    source: 'Core Rulebook pg. 383',
    traditions: ['primal'],
    actions: 'Two Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "Over the course of a minute, you cause a thick wall of thorny brambles to grow from the ground. You create a 5-foot-thick wall of brambles and thorns in a straight line up to 60 feet long and 10 feet high. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. The wall stands vertically. If you wish, the wall can be of a shorter length or height. Everything on each side of the wall has cover from creatures on the opposite side, and the wall's spaces are difficult terrain. For every move action a creature uses to enter at least one of the wall's spaces, that creature takes 3d4 piercing damage. Each 5-foot-by-5-foot section of the wall has AC 10, Hardness 10, and 20 Hit Points. It's immune to critical hits and precision damage. A destroyed section can be moved through freely.Heightened (+1) The Hit Points of each section of the wall increase by 5, and the piercing damage increases by 1d4.",
    range: '60 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '367': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 383',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You create a barrier of gusting winds that hinders anything moving through it. The wall of swirling winds is 5 feet thick, 60 feet long, and 30 feet high. The wall stands vertically, but you can shape its path. Though the wall of wind distorts the air, it does not hamper sight. The wall has the following effects. Ammunition from physical ranged attacks—such as arrows, bolts, sling bullets, and other objects of similar size—can't pass through the wall. Attacks with bigger ranged weapons, such as javelins, take a –2 circumstance penalty to their attack rolls if their paths pass through the wall. Massive ranged weapons and spell effects that don't create physical objects pass through the wall with no penalty. The wall is difficult terrain to creatures attempting to move overland through it. Gases, including creatures in gaseous form, can't pass through the wall. A creature that attempts to fly through the wall using a move action must attempt a Fortitude save.Critical Success The creature can move through the wall normally this turn.Success The flying creature can move through the wall this turn, but the wall is difficult terrain.Failure The wall stops the movement of the flying creature, and any remaining movement from its current action is wasted.Critical Failure As failure, and the creature is pushed 10 feet away from the wall.",
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '369': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 383',
    traditions: [
      'arcane',
      'occult',
      'dispel magic',
      'alter reality',
      'miracle',
      'primal phenomenon',
      'restoration',
      'wish'
    ],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You scramble a creature's mental faculties and sensory input. The target must attempt a Will saving throw. Regardless of the result of that save, the target is then temporarily immune for 10 minutes. Warp mind's effects happen instantly, so dispel magic and other effects that counteract spells can't counteract them. However, alter reality, miracle, primal phenomenon, restoration, or wish can still counteract the effects.Critical Success The target is unaffected.Success The target spends the first action on its next turn with the confused condition.Failure The target is confused for 1 minute.Critical Failure The target is confused permanently.",
    range: '120 feet',
    targets: '1 creature',
    savingThrow: 'Will',
    duration: '',
    area: ''
  },
  '370': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 384',
    traditions: ['arcane', 'divine', 'primal'],
    cast: [''],
    description:
      'The targets can breathe underwater.Heightened (3rd) The duration increases to 8 hours.Heightened (4th) The duration increases to until your next daily preparations.',
    range: '30 feet',
    targets: 'up to 5 creatures',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '371': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 384',
    traditions: ['arcane', 'divine', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "The target can walk on the surface of water and other liquids without falling through. It can go underwater if it wishes, but in that case it must Swim normally. This spell doesn't grant the ability to breathe underwater.Heightened (4th) The spell's range increases to 30 feet, the duration increases to 1 hour, and you can target up to 10 creatures.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '372': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      }
    ],
    source: 'Core Rulebook pg. 384',
    traditions: ['divine', 'fireball', 'Whirlwind Strike'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal;'],
    description:
      "An immense weapon of force appears, hovering in the air above the target. The weapon has the ghostly visual appearance of your deity's favored weapon. Name war or peace when you cast this spell. If you name “war,” mentally choose one creature. This must be a creature both you and the target can see. The target instinctively knows which creature this is. At the end of each of the target's turns, if the target did not use a hostile action against the creature you chose during that turn, the weapon Strikes the target. If you name “peace,” mentally choose up to five allies. The target instinctively knows who those allies are. The weapon Strikes the target each time the target uses a hostile action against you or one of your allies. The weapon Strikes only once per action, even if the action targets multiple allies (such as for a fireball or a Whirlwind Strike). Strikes with the weapon are melee weapon attacks, but they use your spell attack modifier. Regardless of its appearance, the weapon deals force damage equal to 3d10 plus your spellcasting ability modifier. The weapon takes a multiple attack penalty, which increases throughout the target's turn, but its penalty is separate from yours. When the weapon Strikes, you can deal damage of the normal damage type of the weapon instead of force damage (or any of the available damage types, for a versatile weapon). No other statistics or attributes of the weapon apply, and even a ranged weapon attacks adjacent creatures only. A weapon of judgment is a weapon for the purposes of triggers, resistances, and so forth. The weapon doesn't take up space, grant flanking, or have any other attributes a creature would. The weapon can't make any attack other than its Strike, and feats or spells that affect weapons do not apply to this weapon.Heightened (10th) The force damage increases by 1d10.",
    range: '100 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '373': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 384',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You swing a weapon you're holding, and the weapon magically multiplies into duplicates that swipe at all creatures in either a cone or an emanation. This flurry deals four dice of damage to creatures in the area. This damage has the same type as the weapon and uses the same die size. Determine the die size as if you were attacking with the weapon; for instance, if you were wielding a two-hand weapon in both hands, you'd use its two-hand damage die.Critical Success The creature is unaffected.Success The target takes half damage.Failure The target takes full damage.Critical Failure The target takes double damage and is subject to the weapon's critical specialization effect.Heightened (+1) Add another damage die.",
    range: '',
    targets: '',
    savingThrow: 'Reflex',
    duration: '',
    area: '30-foot cone or 10-foot emanation'
  },
  '374': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 384',
    traditions: ['arcane', 'primal'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "You create a sticky web in the area that impedes creatures' movement each time they try to move through it. Squares filled with the web are difficult terrain. Each square can be cleared of the web by a single attack or effect that deals at least 5 slashing damage or 1 fire damage. A square has AC 5, and it automatically fails its saving throws. Each time a creature in the web begins to use a move action or enters the web during a move action, it must attempt an Athletics check or Reflex save against your spell DC to avoid taking a circumstance penalty to its Speeds or becoming immobilized. A creature that gets out of the web ceases to take a circumstance penalty to its Speed from the web.Critical Success The creature is unaffected, and it doesn't need to attempt further Athletics checks or saving throws against the web this turn. If it used an Athletics check, it clears the web from every square it leaves after leaving the square.Success The creature is unaffected during its action. If it used an Athletics check, it clears the web from every square it leaves after leaving the square.Failure The creature takes a –10-foot circumstance penalty to its Speeds until the start of its next turn.Critical Failure The creature is immobilized until the start of its next turn, after which it takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape to remove its immobilized condition.Heightened (4th) The spell's area increases to a 20-foot burst, and its range increases to 60 feet.",
    range: '30 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '10-foot burst'
  },
  '375': {
    traits: [
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Fear',
        description:
          'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
        id: '68',
        url: 'Traits.aspx?ID=68'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 385',
    traditions: ['arcane', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You fill the targets' minds with terrifying images of fearsome creatures, each drawn from the targets' worst fears. Only the targets can see their assailants. Each target takes 16d6 mental damage and must attempt a Will save.Critical Success The target is unaffected.Success The target takes half damage and is frightened 1.Failure The target takes full damage and is frightened 2.Critical Failure The target is so afraid, it might instantly die. It must attempt a Fortitude saving throw. If the target succeeds, it takes double damage and is frightened 2, and it's also fleeing until the end of its next turn unless it critically succeeded. If it fails, it is reduced to 0 Hit Points and dies.",
    range: '120 feet',
    targets: 'any number of creatures',
    savingThrow: 'Will',
    duration: '',
    area: ''
  },
  '376': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 385',
    traditions: ['primal'],
    cast: [''],
    description:
      "When you cast this spell, each target transforms into a vaguely cloud-like form and is picked up by a wind moving in the direction of your choice. You can change the wind's direction by using a single action, which has the concentrate trait. The wind carries the targets at a Speed of 20 miles per hour, but if any of the targets make an attack, Cast a Spell, come under attack, or otherwise enter encounter mode, the spell ends for all targets just after they roll initiative, and they drift gently to the ground.",
    range: 'touch',
    targets: 'you and up to five creatures touched',
    savingThrow: '',
    duration: '8 hours',
    area: ''
  },
  '377': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 385',
    traditions: ['arcane'],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You state a wish, making your greatest desire come true. A wish spell can produce any one of the following effects. Duplicate any arcane spell of 9th level or lower. Duplicate any non-arcane spell of 7th level or lower. Produce any effect whose power level is in line with the above effects. Reverse certain effects that refer to the wish spell. The GM might allow you to try using wish to produce greater effects than these, but doing so might be dangerous or the spell might have only a partial effect.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '378': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      }
    ],
    source: 'Core Rulebook pg. 385',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You bypass your targets' rational minds, instilling them with unshakable conviction and zeal. The targets each gain 12 temporary Hit Points and a +2 status bonus to Will saves against mental effects, as their faith overrides the signals from their own bodies and minds. If you tell a target to do something, it must comply with your request, though if it would normally find the task repugnant, it can attempt a Will save at the end of its turn each round due to the cognitive dissonance. On a success, it ends the spell's effects on itself entirely.",
    range: '30 feet',
    targets: 'up to 10 willing creatures',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '379': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 385',
    traditions: ['divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You designate an area in which creatures are compelled to speak only truth. Creatures within or entering the area have difficulty lying. Each potentially affected creature must attempt a Will save when the spell is cast or when the creature first enters the area. It uses the results of this initial save if it leaves and reenters the area. Affected creatures are aware of this enchantment; therefore, they can avoid answering questions to which they would normally respond with a lie, or they can be evasive as long as they remain within the boundaries of the truth.Critical Success The target is unaffected.Success The target takes a –2 status penalty to Deception checks.Failure The target can't speak any deliberate and intentional lies, and it takes a –2 status penalty to Deception checks.Critical Failure The target can't speak any deliberate and intentional lies and takes a –4 status penalty to Deception checks.",
    range: '30 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: '10 minutes',
    area: '20-foot burst'
  },
  '380': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 386',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You perform rapidly, speeding up your ally. The ally becomes quickened and can use the additional action to Strike, Stride, or Step.',
    range: '30 feet',
    targets: '1 ally',
    savingThrow: '',
    duration: '1 round',
    area: ''
  },
  '381': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 386',
    traditions: [],
    actions: 'Reaction',
    cast: ['somatic or verbal;'],
    description:
      'Your performance protects you and your allies. Roll a Performance check for a type you know: an auditory performance if the trigger was auditory, or a visual one for a visual trigger. You and allies in the area can use the better result between your Performance check and the saving throw.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: '60-foot emanation'
  },
  '382': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Fear',
        description:
          'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
        id: '68',
        url: 'Traits.aspx?ID=68'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 386',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "Foes within the area are frightened 1. They can't reduce their frightened value below 1 while they remain in the area.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 round',
    area: '30-foot emanation'
  },
  '383': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Death',
        description:
          'An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP.',
        id: '40',
        url: 'Traits.aspx?ID=40'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 386',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You perform music so perfect that the target may die of joy or sorrow. Once targeted, the creature becomes temporarily immune for 1 minute. The effect of the spell depends on the target's level and current Hit Points. 16th or Lower The target dies instantly. 17th If the target has 50 Hit Points or fewer, it dies instantly; otherwise, it drops to 0 Hit Points and becomes dying 1. 18th or Higher The target takes 50 damage. If this brings it to 0 Hit Points, it dies instantly.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '384': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 386',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You mime creating an invisible 10-foot-by-10-foot stretch of wall adjacent to you and within your reach. The wall is solid to those creatures that don't disbelieve it, even incorporeal creatures. You and your allies can voluntarily believe the wall exists to continue to treat it as solid, for instance to climb onto it. A creature that disbelieves the illusion is temporarily immune to your house of imaginary walls for 1 minute. The wall doesn't block creatures that didn't see your visual performance, nor does it block objects. The wall has AC 10, Hardness equal to double the spell's level, and HP equal to quadruple the spell's level.",
    range: 'touch',
    targets: '',
    savingThrow: '',
    duration: '1 round',
    area: ''
  },
  '385': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 386',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "Your encouragement inspires your ally to succeed at a task. This counts as having taken sufficient preparatory actions to Aid your ally on a skill check of your choice, regardless of the circumstances. When you later use the Aid reaction, you can roll Performance instead of the normal skill check, and if you roll a failure, you get a success instead. If you are legendary in Performance, you automatically critically succeed. The GM might rule that you can't use this ability if the act of encouraging your ally would interfere with the skill check (such as a check to Sneak quietly or maintain a disguise).",
    range: '60 feet',
    targets: '1 ally',
    savingThrow: '',
    duration: '1 round',
    area: ''
  },
  '386': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 386',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You inspire your allies with words or tunes of encouragement. You and all allies in the area gain a +1 status bonus to attack rolls, damage rolls, and saves against fear effects.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 round',
    area: '60-foot emanation'
  },
  '387': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 386',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You inspire your allies to protect themselves more effectively. You and all allies in the area gain a +1 status bonus to AC and saving throws, as well as resistance equal to half the spell's level to physical damage.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 round',
    area: '60-foot emanation'
  },
  '388': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      }
    ],
    source: 'Core Rulebook pg. 387',
    traditions: [],
    actions: 'Free Action',
    cast: ['verbal'],
    description:
      "You call upon your muse to greatly increase the benefits you provide to your allies with your inspire courage or inspire defense composition. If your next action is to cast inspire courage or inspire defense, attempt a Performance check. The DC is usually a very hard DC of a level equal to that of the highest-level target of your composition, but the GM can assign a different DC based on the circumstances. The effect of your inspire courage or inspire defense composition depends on the result of your check.Critical Success The status bonus from your inspire courage or inspire defense increases to +3.Success The status bonus from inspire courage or inspire defense increases to +2.Failure Your inspire courage or inspire defense provides only its normal bonus of +1, but you don't spend the Focus Point for casting this spell.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '389': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      }
    ],
    source: 'Core Rulebook pg. 387',
    traditions: [],
    actions: 'Free Action',
    cast: ['verbal'],
    description:
      "You add a flourish to your composition to extend its benefits. If your next action is to cast a cantrip composition with a duration of 1 round, attempt a Performance check. The DC is usually a standard-difficulty DC of a level equal to the highest-level target of your composition, but the GM can assign a different DC based on the circumstances. The effect depends on the result of your check.Critical Success The composition lasts 4 rounds.Success The composition lasts 3 rounds.Failure The composition lasts 1 round, but you don't spend the Focus Point for casting this spell.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '391': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 387',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You draw upon your muse to soothe your allies. Choose one of the following three effects: The spell attempts to counteract fear effects on the targets. The spell attempts to counteract effects imposing paralysis on the targets. The spell restores 7d8 Hit Points to the targets.Heightened (+1) When used to heal, soothing ballad restores 1d8 more Hit Points.',
    range: '30 feet',
    targets: 'you and up to 9 allies',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '392': {
    traits: [
      {
        title: 'Bard',
        description: 'This indicates abilities from the bard class.',
        id: '19',
        url: 'Traits.aspx?ID=19'
      },
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Composition',
        description:
          'To cast a composition cantrip or focus spell, you usually use a type of Performance. If the spell includes a verbal component, you must use an auditory performance, and if it includes a somatic component, you must use a visual one. The spell gains all the traits of the performance you used. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately.',
        id: '31',
        url: 'Traits.aspx?ID=31'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 387',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You dance at a lively tempo, speeding your allies' movement. You and all allies in the area gain a +10-foot status bonus to all Speeds for 1 round.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 round',
    area: '60-foot emanation'
  },
  '395': {
    traits: [
      {
        title: 'Champion',
        description: 'This indicates abilities from the champion class.',
        id: '24',
        url: 'Traits.aspx?ID=24'
      },
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 387',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'Your hands become infused with positive energy, healing a living creature or damaging an undead creature with a touch. If you use lay on hands on a willing living target, you restore 6 Hit Points; if the target is one of your allies, they also gain a +2 status bonus to AC for 1 round. Against an undead target, you deal 1d6 damage and it must attempt a basic Fortitude save; if it fails, it also takes a –2 status penalty to AC for 1 round.Heightened (+1) The amount of healing increases by 6, and the damage to an undead target increases by 1d6.',
    range: 'touch',
    targets: '1 willing living creature or 1 undead creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '396': {
    traits: [
      {
        title: 'Champion',
        description: 'This indicates abilities from the champion class.',
        id: '24',
        url: 'Traits.aspx?ID=24'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Good',
        description:
          'Good effects often manipulate energy from good-aligned Outer Planes and are antithetical to evil divine servants or divine servants of evil deities. A creature with this trait is good in alignment. An ability with this trait can be selected or used only by good creatures.',
        id: '83',
        url: 'Traits.aspx?ID=83'
      },
      {
        title: 'Litany',
        description:
          'Litanies are special devotion spells, typically used by champions and requiring a single action, that usually give temporary immunity to further litanies.',
        id: '102',
        url: 'Traits.aspx?ID=102'
      }
    ],
    source: 'Core Rulebook pg. 388',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "Your litany rails against the sin of sloth, interfering with the target's ability to react. The target must attempt a Will save. A particularly slothful creature, such as a sloth demon, uses the outcome one degree of success worse than the result of its saving throw. The target becomes temporarily immune to all of your litanies for 1 minute.Critical Success The target is unaffected.Success The target can't use reactions.Failure The target can't use reactions and is slowed 1.Critical Failure The target can't use reactions and is slowed 2.",
    range: '30 feet',
    targets: '1 evil creature',
    savingThrow: 'Will;',
    duration: '1 round',
    area: ''
  },
  '397': {
    traits: [
      {
        title: 'Champion',
        description: 'This indicates abilities from the champion class.',
        id: '24',
        url: 'Traits.aspx?ID=24'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Good',
        description:
          'Good effects often manipulate energy from good-aligned Outer Planes and are antithetical to evil divine servants or divine servants of evil deities. A creature with this trait is good in alignment. An ability with this trait can be selected or used only by good creatures.',
        id: '83',
        url: 'Traits.aspx?ID=83'
      },
      {
        title: 'Litany',
        description:
          'Litanies are special devotion spells, typically used by champions and requiring a single action, that usually give temporary immunity to further litanies.',
        id: '102',
        url: 'Traits.aspx?ID=102'
      }
    ],
    source: 'Core Rulebook pg. 388',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'Your litany rails against the sin of wrath, punishing the target for attacking good creatures. The target must attempt a Will save. A particularly wrathful creature, such as a wrath demon, uses the outcome one degree of success worse than the result of its saving throw. The target then becomes temporarily immune to all of your litanies for 1 minute.Critical Success The target is unaffected.Success The first time the target uses an action that deals damage to at least one good creature, the target takes 3d6 good damage.Failure Each time the target uses an action that deals damage to at least one good creature, the target takes 3d6 good damage.Critical Failure The target is enfeebled 2. Each time it uses an action that deals damage to at least one good creature, the target takes 3d6 good damage.Heightened (+1) The damage increases by 1d6.',
    range: '30 feet',
    targets: '1 evil creature',
    savingThrow: 'Will;',
    duration: '1 round',
    area: ''
  },
  '398': {
    traits: [
      {
        title: 'Champion',
        description: 'This indicates abilities from the champion class.',
        id: '24',
        url: 'Traits.aspx?ID=24'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Good',
        description:
          'Good effects often manipulate energy from good-aligned Outer Planes and are antithetical to evil divine servants or divine servants of evil deities. A creature with this trait is good in alignment. An ability with this trait can be selected or used only by good creatures.',
        id: '83',
        url: 'Traits.aspx?ID=83'
      },
      {
        title: 'Litany',
        description:
          'Litanies are special devotion spells, typically used by champions and requiring a single action, that usually give temporary immunity to further litanies.',
        id: '102',
        url: 'Traits.aspx?ID=102'
      }
    ],
    source: 'Core Rulebook pg. 388',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'Your litany denounces an evildoer, rendering it susceptible to the powers of good. The target gains weakness 7 to good. The target then becomes temporarily immune to all of your litanies for 1 minute.Heightened (+1) The weakness increases by 1.',
    range: '30 feet',
    targets: '1 evil creature',
    savingThrow: '',
    duration: '1 round',
    area: ''
  },
  '399': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 389',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'The blessings of your god make your feet faster and your movements more fluid. You gain a +5-foot status bonus to your Speed and ignore difficult terrain. As part of casting agile feet, you can Stride or Step; you can instead Burrow, Climb, Fly, or Swim if you have the appropriate Speed.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'until the end of the current turn',
    area: ''
  },
  '400': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 389',
    traditions: [],
    actions: 'Two Actions',
    cast: ['material', 'verbal'],
    description:
      "You create a brief vision of immense wealth filling the spell's area. Each creature within 20 feet of the area that could be enticed by material wealth must attempt a Will saving throw. A creature that enters the area automatically disbelieves the illusion, and disbelieving the illusion ends any fascinated condition imposed by the spell. As long as you Sustain the Spell, other creatures react to the treasure like they would any other illusion, but they are not at risk of becoming fascinated.Critical Success The creature disbelieves the illusion and is unaffected by it.Success The creature is fascinated by the wealth until it has completed its first action on its next turn.Failure The creature is fascinated by the illusion.",
    range: '30 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: 'sustained up to 1 minute',
    area: '5-foot burst'
  },
  '401': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 389',
    traditions: [],
    actions: 'Two Actions',
    cast: ['material', 'verbal'],
    description:
      "You transform the target to make it match your artisanal and artistic vision. If you have expert proficiency in Crafting, the item grants a +1 item bonus to attack rolls if it's a weapon or skill checks if it's a skill tool. The target is a beautiful and impressive piece for its new quality, but the effect is obviously temporary, so its monetary value doesn't change. When you cast this spell, any previous artistic flourish you had cast ends.Heightened (7th) If you have master proficiency in Crafting, the item grants a +2 item bonus instead.Heightened (10th) If you have legendary proficiency in Crafting, the item grants a +3 item bonus instead.",
    range: '15 feet',
    targets: '1 item or work of art that fits entirely within the range',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '402': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 389',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "Your body fills with physical power and skill. You gain a +10-foot status bonus to Speed and a +2 status bonus to Athletics checks. As a part of Casting this Spell, you can use a Stride, Leap, Climb, or Swim action. The spell's bonuses apply during that action.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 round',
    area: ''
  },
  '403': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      }
    ],
    source: 'Core Rulebook pg. 389',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You tilt the scales of luck slightly to protect a creature from disaster. When the target would attempt a saving throw, it can roll twice and use the better result. Once it does this, the spell ends. If you cast bit of luck again, any previous bit of luck you cast that's still in effect ends. After a creature has been targeted with bit of luck, it becomes temporarily immune for 24 hours.",
    range: '30 feet',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '404': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 389',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You strengthen a target's ambition, increase its resentment of allies, and make its allegiances more susceptible to change. The target must attempt a Will save.Critical Success The target is unaffected.Success The target takes a –1 status penalty to its saving throws and other defenses against attempts to Coerce it, Request something of it, or use mental effects to convince it to do something (such as a suggestion spell). This penalty applies only if the target is being encouraged to advance its own ambitions.Failure As success, but the penalty is –2.Critical Failure The target is overcome with ambition, taking whatever actions would advance its own agenda over those of anyone else, even without attempts to convince it.",
    range: '60 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: '10 minutes',
    area: ''
  },
  '405': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 389',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You become intensely entrancing, and creatures are distracted by you as long as they remain within the area. You can exclude any creatures you choose from the effects. When a creature enters the area for the first time, it must attempt a Will saving throw. If a creature leaves and reenters, it uses the results of its original save.Critical Success The creature is unaffected and temporarily immune for 1 hour.Success The creature is fascinated with you for its next action, then is temporarily immune for 1 hour.Failure The creature is fascinated with you.Critical Failure The creature is fascinated with you, and its attitude toward you improves by one step.Heightened (+1) Increase the size of the emanation by 15 feet.',
    range: '',
    targets: '',
    savingThrow: 'Will;',
    duration: '1 minute',
    area: '15-foot emanation'
  },
  '406': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 390',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You infuse your target with attraction, causing it to act friendlier toward you. The target attempts a Will save. It gains a +4 circumstance bonus to this save if you or your allies recently threatened or were hostile to it. You can Dismiss the spell. If you use hostile actions against the target, the spell ends. After the spell ends, the target doesn't necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations, which could potentially allow you to convince the target to continue being your friend via mundane means.Critical Success The target is unaffected and aware you tried to charm it.Success The target is unaffected but thinks your spell was something harmless instead of charming touch, unless it identifies the spell (usually with Identify Magic).Failure The target's attitude becomes friendly toward you. If it was friendly, it becomes helpful. It can't use hostile actions against you.Critical Failure The target is helpful and can't use hostile actions against you.Heightened (4th) You can target any type of creature, not just humanoids, as long as it could find you attractive.",
    range: 'touch',
    targets: '1 humanoid creature that could find you attractive',
    savingThrow: 'Will;',
    duration: '10 minutes',
    area: ''
  },
  '407': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Darkness',
        description:
          'Darkness effects extinguish non-magical light in the area, and can counteract less powerful magical light. You must usually target light magic with your darkness magic directly to counteract the light, but some darkness spells automatically attempt to counteract light.',
        id: '39',
        url: 'Traits.aspx?ID=39'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Shadow',
        description:
          'This magic involves shadows or the energy of the Shadow Plane.',
        id: '143',
        url: 'Traits.aspx?ID=143'
      }
    ],
    source: 'Core Rulebook pg. 390',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You drape the target in a mantle of swirling shadows that make it harder to see. The cloak reduces bright light within a 20-foot emanation to dim light. This is a form of magical darkness and can therefore overcome non-magical light or attempt to counteract magical light as described on page 458. The target can use concealed condition gained from the shadows to Hide, though observant creatures can still follow the moving aura of shadow, making it difficult for the target to become completely undetected. The target can use an Interact action to remove the cloak and leave it behind as a decoy, where it remains, reducing light for the rest of the spell's duration. If anyone picks up the cloak after it's been removed by the original target, the cloak evaporates and the spell ends.",
    range: 'touch',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '408': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 390',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal;'],
    description:
      "With the threat of more pain, you compel a creature you've recently harmed. You issue a command to the target, with the effects of the spell command.",
    range: '100 feet',
    targets: 'A creature you dealt damage to on your most recent action.',
    savingThrow: 'Will;',
    duration: "until the end of your target's next turn",
    area: ''
  },
  '409': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 390',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'Your competitiveness drives you to prove yourself against the opposition. You gain a +1 status bonus to attack rolls and skill checks. If an enemy within 20 feet critically succeeds at an attack roll or skill check, your status bonus increases to +3 attack rolls or that specific skill check (whichever the foe critically succeeded at) for 1 round.Heightened (7th) Increase the base bonus to +2 and the increased bonus after an enemy critically succeeds to +4.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '410': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Sonic',
        description:
          'An effect with the sonic trait functions only if it makes sound, meaning it has no effect in an area of silence or in a vacuum. This is different from an auditory spell, which is effective only if the target can hear it. A sonic effect might deal sonic damage.',
        id: '147',
        url: 'Traits.aspx?ID=147'
      }
    ],
    source: 'Core Rulebook pg. 390',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Your voice booms, smashing what's in front of you. Each creature and unattended object in the area takes 1d8 sonic damage. If you already dealt damage to an enemy this turn with a Strike or spell, increase the damage dice from this spell to d12s.Heightened (+1) The damage increases by 1d8.",
    range: '',
    targets: '',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: '15-foot cone'
  },
  '411': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Darkness',
        description:
          'Darkness effects extinguish non-magical light in the area, and can counteract less powerful magical light. You must usually target light magic with your darkness magic directly to counteract the light, but some darkness spells automatically attempt to counteract light.',
        id: '39',
        url: 'Traits.aspx?ID=39'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 390',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You infuse a creature's vision with darkness. After attempting its save, the target becomes temporarily immune for 24 hours.Critical Success The target is unaffected.Success The target's darkvision or low-light vision is suppressed for 1 round.Failure As success, but the duration is 1 minute.Critical Failure As success, but the duration is 1 minute, and the target is also blinded for the duration. It can attempt a new save at the end of each of its turns. If it succeeds, it's no longer blinded, but its darkvision or low-light vision remains suppressed.",
    range: '60 feet',
    targets: '1 creature',
    savingThrow: 'Fortitude;',
    duration: 'varies',
    area: ''
  },
  '412': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 391',
    traditions: [],
    actions: 'Two Actions',
    cast: ['material', 'verbal'],
    description:
      'You raise your religious symbol and create a blinding flash of light. Each creature in the area must attempt a Fortitude save.Critical Success The creature is unaffected.Success The creature is dazzled for 1 round.Failure The creature is blinded for 1 round and dazzled for 1 minute. The creature can spend an Interact action rubbing its eyes to end the blinded condition.Critical Failure The creature is blinded for 1 round and dazzled for 1 hour.Heightened (3rd) The area increases to a 30-foot cone.',
    range: '',
    targets: '',
    savingThrow: 'Fortitude',
    duration: '',
    area: '15-foot cone'
  },
  '414': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 391',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You make the target overconfident, leading it to ascribe failure to external factors. If the target fails at an attack roll or skill check, it takes a –1 status penalty to attack rolls and skill checks until the end of its turn (or the end of its next turn, if it attempted the roll outside its turn). If the creature fails a second time while taking this penalty, the penalty increases to –2. The duration depends on the target's Will save. After attempting its save, the creature becomes temporarily immune for 24 hours.Critical Success The target is unaffected.Success The duration is 1 round.Failure The duration is 10 minutes.Critical Failure The duration is 24 hours.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '415': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 391',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Swirling sands of divine devastation surround you, weakening the defenses of all they touch. Reduce the resistances of creatures in the area (including yourself) by 2.Heightened (+2) Swirling sands of divine devastation surround you, weakening the defenses of all they touch. Reduce the resistances of creatures in the area (including yourself) by 2.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '15-foot emanation'
  },
  '416': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 391',
    traditions: [],
    actions: 'Reaction',
    cast: ['somatic;'],
    description:
      "After taking the triggering damage, you transform into air. Until the end of the current turn, you can't be attacked or targeted, you don't take up space, you can't act, and any auras or emanations you have are suppressed. At the end of the turn, you re-form in any space you can occupy within 15 feet of where you were when you dispersed. Any auras or emanations you had are restored as long as their duration didn't run out while you were dispersed.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '417': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 391',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You call forth a torrential downpour, which extinguishes nonmagical flames. Creatures in the area are concealed and gain fire resistance 10. Creatures outside the area are concealed to those inside the area. Creatures with weakness to water that end their turns in the area take damage equal to their weakness.Heightened (+1) The fire resistance increases by 2.',
    range: '120 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '30-foot burst'
  },
  '419': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      }
    ],
    source: 'Core Rulebook pg. 392',
    traditions: [],
    actions: 'Reaction',
    cast: ['somatic;'],
    description:
      'Your own might mingles with divine power to protect you. You gain resistance equal to 8 plus your Strength modifier against all damage from the triggering attack or effect.Heightened (+1) The resistance increases by 2.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '420': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 392',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A massive deluge of life energy causes the undead to fall apart. Each undead creature in the area takes 4d12 positive damage.Heightened (+1) The damage increases by 1d12.',
    range: '',
    targets: '',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: '30-foot cone'
  },
  '421': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 392',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'While in a crowd of roughly similar creatures, your appearance becomes bland and nondescript. You gain a +2 status bonus to Deception and Stealth checks to go unnoticed among the crowd, and you ignore difficult terrain caused by the crowd.Heightened (3rd) The spell gains a range of 10 feet and can target up to 10 creatures.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '422': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      }
    ],
    source: 'Core Rulebook pg. 392',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "A blazing band of fire arcs through the air. Make a spell attack roll. The ray deals 2d6 fire damage.Critical Success The ray deals double damage and 1d4 persistent fire damage.Success The ray deals full damage.Heightened (+1) The ray's initial damage increases by 2d6, and the persistent fire damage on a critical success increases by 1d4.",
    range: '60 feet',
    targets: '1 creature or object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '423': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      }
    ],
    source: 'Core Rulebook pg. 392',
    traditions: [],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      'You swiftly deflect incoming flames. The target gains fire resistance 15 against the triggering effect.Heightened (+2) The resistance increases by 5.',
    range: '30 feet',
    targets: 'the creature that would take fire damage',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '424': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      }
    ],
    source: 'Core Rulebook pg. 393',
    traditions: [],
    actions: 'Two Actions',
    cast: ['material', 'somatic'],
    description:
      "You quiet the target's voice, preventing it from giving away valuable secrets. This doesn't prevent the target from talking or providing verbal spell components, but no creature more than 10 feet away can hear its whispers without succeeding at a Perception check against your spell DC, which might interfere with auditory or linguistic effects as well as communication. The spell's duration depends on the target's Fortitude save. After attempting its save, the target becomes temporarily immune for 24 hours.Critical Success The target is unaffected.Success The duration is 1 round.Failure The duration is 1 minute.Critical Failure The duration is 10 minutes.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Fortitude;',
    duration: 'varies',
    area: ''
  },
  '425': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Revelation',
        description: 'Effects with this trait see things as they truly are.',
        id: '138',
        url: 'Traits.aspx?ID=138'
      }
    ],
    source: 'Core Rulebook pg. 393',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "Divine insight lets you see things as they truly are. The GM attempts a secret counteract check against each illusion that is at least partially within the area. Instead of counteracting the illusion, you see through it (for instance, if the check succeeds against an illusory disguise spell, you see the creature's true form but illusory disguise doesn't end). The area moves with you for the duration of the spell, and the GM attempts a secret counteract check each time a new illusion is within the area.Heightened (7th) You can allow everyone to see through illusions you succeed against, not just yourself.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 round',
    area: '30-foot emanation'
  },
  '427': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 393',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You evoke a magical stone and throw it, with your god's presence guiding your aim. Make a spell attack roll against the target. The stone deals bludgeoning damage equal to 1d6 plus your Strength modifier.Critical Success The stone deals double damage.Success The stone deals full damage.Heightened (+1) The stone's damage increases by 1d6.",
    range: '60 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '428': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      }
    ],
    source: 'Core Rulebook pg. 393',
    traditions: [],
    actions: 'Reaction',
    cast: ['somatic;'],
    description:
      "Use a Recall Knowledge action, rolling the appropriate skill check to identify the triggering creature's abilities. You can roll your check twice and use the better result.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '429': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Earth',
        description:
          'Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a magical connection to that element.',
        id: '55',
        url: 'Traits.aspx?ID=55'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 393',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You shake the earth, toppling nearby creatures. Choose whether the spell's area is a 15-foot emanation or a 15-foot cone when you cast it. Each creature in the area standing on solid ground may take 4d6 bludgeoning damage and must attempt a Reflex saving throw.Critical Success The creature is unaffected.Success The creature takes half damage.Failure The creature takes full damage and falls prone.Critical Failure The creature takes full damage and falls prone.Heightened (+1) Increase the damage by 2d6.",
    range: '',
    targets: '',
    savingThrow: 'Reflex',
    duration: '',
    area: '15-foot emanation or 15-foot cone'
  },
  '430': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      }
    ],
    source: 'Core Rulebook pg. 393',
    traditions: [],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      'Reroll the saving throw and use the better result. You then become temporarily immune for 10 minutes.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '432': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      }
    ],
    source: 'Core Rulebook pg. 394',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You embed a seed of negative energy in an undead creature, restoring its unnatural vigor. The target gains fast healing 7. This healing comes from negative energy, so it heals the undead rather than damaging it.Heightened (+1) The fast healing increases by 2.',
    range: 'touch',
    targets: '1 willing undead creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '433': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 394',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You shine a ray of moonlight. Make a spell attack roll. The beam of light deals 1d6 fire damage. Moonbeam deals silver damage for the purposes of weaknesses, resistances, and the like.Critical Success The beam deals double damage, and the target is dazzled for 1 minute.Success The beam deals full damage, and the target is dazzled for 1 round.Heightened (+1) The ray's damage increases by 1d6.",
    range: '120 feet',
    targets: '1 creature or object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '434': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 394',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'The next damaging or healing spell the target casts before the start of your next turn deals damage or restores Hit Points as if the spell were heightened 1 level higher than its actual level. The spell otherwise functions at its actual level. Once the target casts the spell, mystic beacon ends.',
    range: '30 feet',
    targets: '1 willing creature',
    savingThrow: '',
    duration: 'until the start of your next turn',
    area: ''
  },
  '436': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 394',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Huge amounts of food and drink fill the target. It receives a full meal's worth of nourishment and must attempt a Fortitude save. A target sickened by this spell takes a –10-foot status penalty to its Speed until it's no longer sickened.Critical Success The target is unaffected.Success The target is sickened 1, but if it spends an action to end the condition, it succeeds automatically.Failure The target is sickened 1.Critical Failure The target is sickened 2.",
    range: '30 feet',
    targets: '1 living creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '437': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      }
    ],
    source: 'Core Rulebook pg. 394',
    traditions: [],
    actions: 'Reaction',
    cast: ['somatic;'],
    description: 'Reroll the saving throw and use the better result.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '438': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      }
    ],
    source: 'Core Rulebook pg. 394',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You meditate upon perfection to remove all distractions from your mind. Attempt a new Will save against one mental effect currently affecting you that required a Will save. Use the result of this new save to determine the outcome of the mental effect, unless the new save would have a worse result than the original save, in which case nothing happens. You can use perfected mind against a given effect only once.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '439': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 394',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "Drawing life force into yourself, you become a beacon of positive energy. You glow with bright light in a 10-foot emanation, and you gain an internal pool of light called a luminance reservoir, which begins with a value of 4. At the start of each of your turns, you can use a free action to increase the luminance reservoir by 4. If you do, the radius of your light increases by 10 feet. If an undead creature damages you with an attack or spell while it's within the area of your light, that creature takes positive damage equal to half your luminance reservoir value. It takes this damage only the first time it damages you in a round. You can Dismiss this Spell. When you do, you can target a creature within your light and direct the positive energy into it. The target must be a willing living creature or an undead creature. This heals a living target or damages an undead target by an amount equal to your luminance reservoir's value. When you cast positive luminance, any other positive luminance spell you already had in effect ends.Heightened (+1) Both the initial value of your luminance reservoir and the amount you gain each turn increase by 1.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '440': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 395',
    traditions: [],
    actions: 'Single Action',
    cast: ['material'],
    description:
      "Your deity blesses base metals to transform them into precious materials. The target item transforms from its normal metal into cold iron, copper, gold, iron, silver, or steel (the details for these metals are found on pages 577–579). An item transmuted in this way deals damage according to its new material. For example, a steel sword transmuted to cold iron would deal additional damage to a creature with a weakness to cold iron. This change is clearly magical and temporary, so the item's monetary value doesn't change; you couldn't transmute copper coins to gold and use those coins to purchase something or as a cost for a spell.Heightened (8th) Add adamantine (page 578) and mithral (page 579) to the list of metals you can transform the item into.",
    range: 'touch',
    targets:
      '1 metal weapon, up to 10 pieces of metal or metal-tipped ammunition, 1 suit of metal armor, or up to 1 bulk of metal material (such as coins)',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '443': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Scrying',
        description:
          'A scrying effect lets you see, hear, or otherwise get sensory information from a distance using a sensor or apparatus, rather than your own eyes and ears.',
        id: '141',
        url: 'Traits.aspx?ID=141'
      }
    ],
    source: 'Core Rulebook pg. 395',
    traditions: [],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      'You tap into the zeitgeist of the nearest settlement in range (if any). You learn the name of the settlement, and you can utter a special word to learn a brief summary of one significant event happening in the settlement. Choose one of the following words, which indicates the type of people involved and type of event you learn about. Wardens city guards, barristers, and judges (criminal reports, busts, changes in routines, legal trials) Titles nobles and politicians (high society weddings, elite soirees, political rallies) Masses common folk and merchants (gathering mobs, major sales) When uttering your word, you can exclude events you already know about, whether you know about them from this spell or from other experiences. If you cast pulse of the city again within 24 hours, you can say “echo” instead of another word to get an update on the event you learned about the last time you Cast the Spell. Pulse of the city reveals only publicly available or observable information. You never learn clandestine movements or other details people are specifically trying to hide. The spell is also notoriously bad at overcoming magic meant to avoid detection; it automatically fails to reveal information about events involving creatures, places, or objects affected by spells that could prevent or counteract pulse of the city (such as nondetection).Heightened (5th) The range increases to 100 miles.',
    range: '25 miles',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '444': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      }
    ],
    source: 'Core Rulebook pg. 395',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Giving the air a push, you buffet the target with a powerful gust of wind; it must attempt a Fortitude save.Critical Success The target is unaffected.Success The target is pushed 5 feet away from you.Failure The target is pushed 10 feet away from you.Critical Failure The target is pushed 10 feet away from you and knocked prone.',
    range: '500 feet',
    targets: '1 creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '445': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Prediction',
        description:
          'Effects with this trait determine what is likely to happen in the near future. Most predictions are divinations.',
        id: '132',
        url: 'Traits.aspx?ID=132'
      }
    ],
    source: 'Core Rulebook pg. 395',
    traditions: [],
    cast: [''],
    description:
      "You attempt to learn more about the target's fate in the short term, usually within the next day for most prosaic creatures, or the next hour or less for someone likely to have multiple rapid experiences, such as someone actively adventuring. You learn a single enigmatic word connected to the creature's fate in that time frame. Fate is notoriously inscrutable, and the word isn't necessarily meant to be taken at face value, so the meaning is often clear only in hindsight. The GM rolls a secret DC 6 flat check. If the creature's fate is too uncertain, or on a failed flat check, the spell yields the word “inconclusive.” Either way, the creature is then temporarily immune for 24 hours.",
    range: '10 feet',
    targets: '1 creature other than you',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '446': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 396',
    traditions: [],
    actions: 'Single Action',
    cast: ['to'],
    description:
      "You snatch creatures from the jaws of death. You can spend 1 to 3 actions Casting this Spell, and you can target a number of creatures equal to the actions spent. Each target regains 3d6 Hit Points. If the target had the dying condition, coming back from dying due to this healing doesn't increase its wounded condition.Heightened (+1) Increase the healing by 1d6.",
    range: '',
    targets: '1 living creature per action spent to cast this spell',
    savingThrow: '',
    duration: '',
    area: '20-foot emanation;'
  },
  '447': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Nonlethal',
        description:
          'Attacks with this weapon are nonlethal, and are used to knock creatures unconscious instead of kill them. You can use a nonlethal weapon to make a lethal attack with a –2 circumstance penalty.',
        id: '188',
        url: 'Traits.aspx?ID=188'
      }
    ],
    source: 'Core Rulebook pg. 396',
    traditions: [],
    actions: 'Reaction',
    cast: ['somatic;'],
    description:
      'You vengefully reflect your pain upon your tormentor. The target takes mental damage equal to half the amount it dealt to you when it triggered the spell.',
    range: '30 feet',
    targets: 'the triggering creature',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: ''
  },
  '448': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 396',
    traditions: [],
    cast: [''],
    description:
      'You ensure a secret remains safe from prying spies. Choose one piece of information that at least some of the targets know; you can target a creature only if it remains within range for the full minute during which you Cast the Spell. The spell grants those who know the piece of knowledge you have chosen a +4 status bonus to skill checks (typically Deception checks) to conceal this knowledge and to saving throws against spells that specifically attempt to obtain this knowledge from them and effects that would force them to reveal it. If you Cast this Spell again, any previous safeguard secret you had cast ends.',
    range: '10 feet',
    targets: 'you and any number of willing allies',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '449': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Nonlethal',
        description:
          'Attacks with this weapon are nonlethal, and are used to knock creatures unconscious instead of kill them. You can use a nonlethal weapon to make a lethal attack with a –2 circumstance penalty.',
        id: '188',
        url: 'Traits.aspx?ID=188'
      }
    ],
    source: 'Core Rulebook pg. 396',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'You inflict pain upon the target and revel in their anguish. This deals 1d4 mental damage and 1d4 persistent mental damage; the target must attempt a Will save. As long as the target is taking persistent damage from this spell, you gain a +1 status bonus to attack rolls and skill checks against the target.Critical Success The target is unaffected.Success The target takes half damage and no persistent damage.Failure The target takes full initial and persistent damage.Critical Failure The target takes double initial and persistent damage.Heightened (+1) The initial damage increases by 1d4 and the persistent damage increases by 1d4.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: 'Will',
    duration: '',
    area: ''
  },
  '450': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      }
    ],
    source: 'Core Rulebook pg. 396',
    traditions: [],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      "Speaking a short prayer as you gather your thoughts, you're blessed to find that your deity gave you just the right bit of information for your situation. Roll the triggering check twice and use the better result.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '452': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 396',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You attempt to calm the target by uttering soothing words in a calm and even tone. The target gains a +1 status bonus to Will saving throws. This bonus increases to +2 against emotion effects. In addition, when you Cast this Spell, you can attempt to counteract one emotion effect on the target.Heightened (5th) The bonus to saves increases to +2, or +3 against emotion effects.',
    range: '30 feet',
    targets: '1 ally',
    savingThrow: '',
    duration: '1 round',
    area: ''
  },
  '453': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 397',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'A deluge of colorful illusory paint, tools, or other symbols of art and artisanship drift down in the area. Roll 1d4 to determine the color of the illusion. Each creature in the area must attempt a Will save. A creature is unaffected on a success. On a failure or critical failure, the creature takes the results listed on the table relevant to the color.Splash of Art1d4ColorFailureCritical Failure1WhiteDazzled 1 roundDazzled 1 minute2RedEnfeebled 1 for 1 roundEnfeebled 2 for 1 round3YellowFrightened 1Frightened 24BlueSluggish 1 for 1 roundSluggish 2 for 1 round',
    range: '30 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: 'varies',
    area: '5-foot burst'
  },
  '454': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      }
    ],
    source: 'Core Rulebook pg. 397',
    traditions: [],
    actions: 'Reaction',
    cast: ['somatic;'],
    description:
      'You swiftly move from a dangerous spot and veil yourself. You Step and become concealed.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'until the end of your next turn',
    area: ''
  },
  '455': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Sleep',
        description:
          'This effect can cause a creature to fall asleep or get drowsy.',
        id: '145',
        url: 'Traits.aspx?ID=145'
      }
    ],
    source: 'Core Rulebook pg. 397',
    traditions: [],
    actions: 'Three Actions',
    cast: ['material', 'somatic', 'verbal'],
    description:
      "With soothing song or tales, you lull the target into an enchanting dream. When you cast the spell, the target falls unconscious if it wasn't already. While unconscious, it experiences a dream of your choice. If it sleeps for at least 1 minute, it gains the benefit of the dream for the remainder of the spell's duration. Dream of Insight +1 status bonus to Intelligence-based skill checks Dream of Glamour +1 status bonus to Charisma-based skill checks Dream of Voyaging +5-foot status bonus to Speed If you Cast this Spell again, the effects of any previous sweet dream you cast end.",
    range: '30 feet',
    targets: '1 willing creature',
    savingThrow: '',
    duration: '10 minutes',
    area: ''
  },
  '456': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 397',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "When someone has overindulged, you can hasten them past the worst of their affliction or intensify their misery. This spell attempts to progress a disease affliction, a poison affliction, or persistent poison damage affecting the target. If the target is affected by more than one of these, you can choose from among those you are aware of; otherwise the GM chooses randomly. An unwilling target can attempt a Will save to negate take its course. The effect of this spell depends on whether you're attempting to end an affliction or persistent poison damage, and whether you are attempting to help or hinder the target's recovery. Affliction The target immediately attempts its next saving throw against the affliction. You can grant the creature your choice of a +2 status bonus or a –2 status penalty to its saving throw against the affliction. Persistent Poison You can cause the target take the persistent poison damage immediately when you Cast this Spell (in addition to taking it at the end of its next turn). Whether or not you do so, the target attempts an additional flat check against the persistent poison damage. You can set the DC of that flat check to 5 or 20 instead of the normal DC.Heightened (7th) You can attempt to progress any number of the target's eligible afflictions and persistent poison damage.",
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '457': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      }
    ],
    source: 'Core Rulebook pg. 397',
    traditions: [],
    actions: 'Reaction',
    cast: ['somatic;'],
    description:
      "You twist the forces of fate to make a moment dire or uneventful, with no in-between. The target gains a +1 status bonus to the triggering saving throw. If the saving throw's result is a success, it becomes a critical success. If it's a failure, it becomes a critical failure, and the critical failure can't be reduced by abilities that usually reduce critical failure, such as improved evasion. If the triggering ability did not have both a critical success and critical failure condition, tempt fate fails, but you don't expend the Focus Point for Casting this Spell.Heightened (8th) The bonus on the saving throw is +2.",
    range: '120 feet',
    targets: 'the triggering creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '458': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Core Rulebook pg. 397',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'You call forth a tremendous wave to move the target either in a body of water or on the ground. The target must attempt a Fortitude save.Failure You move the target 5 feet in any direction along the ground or 10 feet in any direction through a body of water.Critical Failure You move the target up to 10 feet in any direction along the ground or 20 feet in any direction through a body of water.',
    range: '60 feet',
    targets: '1 creature',
    savingThrow: 'Fortitude',
    duration: '',
    area: ''
  },
  '459': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 398',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "Your imperious touch erodes the target's willpower, making it easier to control. The target attempts a Will save.Critical Success The target is unaffected.Success The target is stupefied 1 until the end of your current turn.Failure The target is stupefied 1 until the end of your next turn.Critical Failure The target is stupefied 1 for 1 minute.",
    range: 'touch',
    targets: '1 living creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '460': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      }
    ],
    source: 'Core Rulebook pg. 398',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'When you touch the target, a symbol of the moon appears on its forehead, glowing with soft moonlight. The target glows with dim light in a 20-foot radius. It also gets a benefit based on a phase of the moon, starting with the new moon and changing to the next phase at the end of each of its turns. New Moon The target receives no benefit. Waxing Moon The target gains a +1 status bonus to attack rolls and a +4 status bonus to damage rolls. Full Moon The target gains a +1 status bonus to attack rolls, AC, and saving throws and a +4 status bonus to damage rolls. Waning Moon The target gains a +1 status bonus to AC and saving throws. After this phase, return to the new moon.',
    range: 'touch',
    targets: '1 creature',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '464': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 398',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'Nothing can hold you in place. You immediately escape from every magical effect that has you immobilized or grabbed unless the effect is of a higher level than your unimpeded stride spell. You then Stride. During this movement, you ignore difficult terrain and any circumstance or status penalties to your Speed.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '465': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      }
    ],
    source: 'Core Rulebook pg. 398',
    traditions: [],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      'You put up a united defense. Each ally can use your saving throw modifier instead of its own against the triggering spell. Each ally decides individually which modifier to use.',
    range: '30 feet',
    targets: 'each ally targeted by the triggering spell',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '466': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 398',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You surround yourself in a veil of confidence. You reduce your current frightened condition by 1, and whenever you would become frightened during the duration, reduce the amount by 1. If you critically fail a save against fear, veil of confidence ends immediately, and you increase any frightened condition you gain from the critical failure by 1 instead of decreasing it.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '467': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 399',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'Your body sprouts a coat of brambly thorns that harm those that strike you and thrive on life magic. Adjacent creatures that hit you with a melee attack, as well as creatures that hit you with unarmed attacks, take 1 piercing damage each time they do. Anytime you cast a positive spell, the damage from your thorns increases to 1d6 until the start of your next turn.Heightened (+1) The damage increases by 1, or 1d6 after you cast a positive spell.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '468': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Fear',
        description:
          'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
        id: '68',
        url: 'Traits.aspx?ID=68'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 399',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You fill the creature's mind with a terrifying vision out of its nightmares. The target must attempt a Will save. If the target is unconscious when you Cast this Spell on it, it immediately wakes up before attempting its save, and if it fails its save, it gains the fleeing condition for 1 round in addition to the effects noted above.Critical Success The target is unaffected.Success The target is frightened 1.Failure The target is frightened 2.Critical Failure The target is frightened 3.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '469': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 399',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'Holding your weapon aloft, you fill it with divine energy. On your next Strike with that weapon before the start of your next turn, you gain a +1 status bonus to the attack roll and the weapon deals an additional die of damage. If the weapon has a striking rune, this instead increases the number of dice from the striking rune by 1 (to a maximum of 3 extra weapon dice).If the target weapon leaves your possession, weapon surge immediately ends.',
    range: 'touch',
    targets: "1 weapon you're wielding",
    savingThrow: '',
    duration: '',
    area: ''
  },
  '471': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Core Rulebook pg. 399',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You speak a statement you believe to be true and that is free of any attempt to deceive through twisting words, omission, and so on. The statement must be 25 words or fewer. A symbol of your deity glows above your head, and anyone who sees you and hears your statement knows that you believe it to be true. Each time you Sustain this Spell, you can repeat this effect.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: ''
  },
  '472': {
    traits: [
      {
        title: 'Cleric',
        description: 'This indicates abilities from the cleric class.',
        id: '26',
        url: 'Traits.aspx?ID=26'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Core Rulebook pg. 399',
    traditions: [],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      'You stoke the righteous anger within yourself and an ally. You and the target ally each roll a d20 and use the higher result for both your initiative rolls. You each still use your own Perception modifier or other statistic to determine your results.',
    range: '10 feet',
    targets: 'you and the triggering ally',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '473': {
    traits: [
      {
        title: 'Druid',
        description: 'This indicates abilities from the druid class.',
        id: '52',
        url: 'Traits.aspx?ID=52'
      },
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 399',
    traditions: [],
    cast: [''],
    description:
      "You imbue the target berry with the bounty of nature, allowing it to heal and sustain far beyond its normal capacity. A living creature that eats the berry with an Interact action gains as much nourishment as from a square meal for a typical human and regains 1d8+5 Hit Points. If it's not consumed during the duration, or if you cast goodberry again, the berry withers away.Heightened (+1) You can target an additional berry.",
    range: 'touch',
    targets: '1 freshly picked berry',
    savingThrow: '',
    duration: '1 day',
    area: ''
  },
  '474': {
    traits: [
      {
        title: 'Druid',
        description: 'This indicates abilities from the druid class.',
        id: '52',
        url: 'Traits.aspx?ID=52'
      },
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 399',
    traditions: [],
    actions: 'Single Action',
    cast: ['or'],
    description:
      "You heal an animal's wounds, restoring 1d8 Hit Points to the target. The number of actions spent Casting this Spell determines its effect.   somatic Th e spell has a range of touch.  somatic, verbal The spell has a range of 30 feet and restores an additional 8 Hit Points to the target.Heightened (+1) The amount of healing increases by 1d8, and the additional healing for the 2-action version increases by 8.",
    range: 'touch or 30 feet (see text)',
    targets: '1 willing living animal creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '475': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Druid',
        description: 'This indicates abilities from the druid class.',
        id: '52',
        url: 'Traits.aspx?ID=52'
      },
      {
        title: 'Plant',
        description:
          'Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Those that manipulate plants have no effect in an area with no plants.',
        id: '125',
        url: 'Traits.aspx?ID=125'
      }
    ],
    source: 'Core Rulebook pg. 400',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'The ground within the area transforms into a mass of dangerous briars that assault and impede your foes. Each round when you Sustain the Spell, you can select one of the following effects to occur in the area. Ensnare The briars clump around your foes, attempting to hold them in place. A foe within the area (or flying at most 20 feet above the area) must attempt a Reflex save. On a failure, it takes a –10-foot circumstance penalty to all Speeds for 1 round, and on a critical failure, it is immobilized for 1 round unless it Escapes. Impede The briars twist and writhe, making the entire area difficult terrain. Wall A wall of thorns appears in the area, lasting for 1 round. The wall is greater difficult terrain instead of difficult terrain. In addition, once per round you can direct the briars to impale any target in the area (or flying up to 20 feet above the area) that you can see by using a single action, which has the concentrate and manipulate traits. Make a spell attack roll. On a success, the target takes 10d6 piercing damage and takes a –10-foot circumstance penalty to all Speeds for 1 round; on a critical success, the target is immobilized for 1 round unless it Escapes.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: 'ground within a 100-foot emanation'
  },
  '476': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Druid',
        description: 'This indicates abilities from the druid class.',
        id: '52',
        url: 'Traits.aspx?ID=52'
      }
    ],
    source: 'Core Rulebook pg. 400',
    traditions: [],
    actions: 'Free Action',
    cast: ['verbal'],
    description:
      "You enhance a summoned creature with the power of the elements. If your next action is to cast either summon animal or summon plant or fungus, choose air, earth, fire, or water, and the creature you summon gains the corresponding abilities. Air The creature gains a fly Speed of 60 feet. Earth The creature gains a burrow Speed of 20 feet, reduces its land Speed by 10 feet (minimum 5 feet), and gains resistance 5 to physical damage. Fire The creature's attacks deal 1d6 extra fire damage, and it gains resistance 10 to fire and weakness 5 to cold and water. Water The creature gains a swim Speed of 60 feet, can spend 1 action after a melee attack to attempt a Shove (ignoring multiple attack penalty), and gains resistance 5 to fire.\n\n\t\t\t\t\t",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '477': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Druid',
        description: 'This indicates abilities from the druid class.',
        id: '52',
        url: 'Traits.aspx?ID=52'
      },
      {
        title: 'Electricity',
        description:
          'Effects with this trait deal electricity damage. A creature with this trait has a magical connection to electricity.',
        id: '56',
        url: 'Traits.aspx?ID=56'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 400',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal;'],
    description:
      'The sky above you darkens in a matter of moments, swirling with ominous clouds punctuated by flashes of lighting. Each round when you Sustain the Spell, you can select one of the following effects to occur in the area. Calm No additional effect.Fog Heavy fog rolls in, concealing the area with the effects of obscuring mist.Rain Torrential rain falls from the sky, dousing ordinary flames. Creatures in the area take a –2 circumstance penalty to Acrobatics and Perception checks. Wind Powerful winds buffet the area in all directions. Ranged attacks take a –4 circumstance penalty, and all flying is against the wind and counts as moving through difficult terrain. In addition, once per round you can use a single action, which has the concentrate and manipulate traits, to call down a bolt of lightning, striking any target in range that you can see. You deal 10d6 electricity damage to the target; it must attempt a basic Reflex save. On a failure, it is also deafened for 1 round.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: '100-foot emanation'
  },
  '478': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Druid',
        description: 'This indicates abilities from the druid class.',
        id: '52',
        url: 'Traits.aspx?ID=52'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 400',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Powerful winds carry you smoothly through the air, giving you a fly Speed equal to your Speed. When this spell's duration would end, if you're still flying, you float to the ground, as feather fall.Heightened (6th) When you fly using stormwind flight, you don't count flying against the wind as difficult terrain.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '479': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Druid',
        description: 'This indicates abilities from the druid class.',
        id: '52',
        url: 'Traits.aspx?ID=52'
      },
      {
        title: 'Electricity',
        description:
          'Effects with this trait deal electricity damage. A creature with this trait has a magical connection to electricity.',
        id: '56',
        url: 'Traits.aspx?ID=56'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Core Rulebook pg. 400',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You surround a foe in a swirling storm of violent winds, roiling clouds, and crackling lightning. The storm deals 1d12 electricity damage. The target must attempt a basic Reflex save. On a failure, the target also is clumsy 2 for 1 round and takes 1 persistent electricity damage.Heightened (+1) The initial damage increases by 1d12, and the persistent electricity damage on a failure increases by 1.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Reflex',
    duration: '',
    area: ''
  },
  '480': {
    traits: [
      {
        title: 'Druid',
        description: 'This indicates abilities from the druid class.',
        id: '52',
        url: 'Traits.aspx?ID=52'
      },
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 400',
    traditions: [],
    actions: 'Single Action',
    cast: ['or'],
    description:
      "You morph your body based on your training, choosing one of the following effects based on your wild order feats. If you have Wild Shape, you can morph your hands into wild claws. Your hands transform into incredibly sharp claws. These claws are an unarmed attack you're trained in and deal 1d6 slashing damage each (agile, finesse). You can still hold and use items with your hands while they're transformed by this spell, but you cannot hold an item while attacking. If you have Insect Shape, you can instead transform your mouth into wild jaws, an unarmed attack you're trained in that deals 1d8 piercing damage. If you have Elemental Shape, you can morph your body to be partially composed of elemental matter, granting you resistance 5 to critical hits and precision damage. If you have Plant Shape, you can morph your arms into long vines, increasing your reach to 10 feet (or 15 feet with a reach weapon). If you have Soaring Shape, you can cast the spell as a two-action activity ( somatic, verbal) to grow wings from your back. These wings allow you to fly with a fly Speed of 30 feet.Heightened (6th) You can choose up to two of the effects from the list. Wild claws leave terrible, ragged wounds that also deal 2d6 persistent bleed damage on a hit, and wild jaws are envenomed, also dealing 2d6 persistent poison damage on a hit.Heightened (10th) You can choose up to three of the effects from the list. Wild claws deal 4d6 persistent bleed damage on a hit, and wild jaws deal 4d6 persistent poison damage on a hit.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '481': {
    traits: [
      {
        title: 'Druid',
        description: 'This indicates abilities from the druid class.',
        id: '52',
        url: 'Traits.aspx?ID=52'
      },
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 401',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You infuse yourself with primal essence and transform yourself into another form. You can polymorph into any form listed in pest form, which lasts 10 minutes. All other wild shape forms last 1 minute. You can add more forms to your wild shape list with druid feats; your feat might grant you some or all of the forms from a given polymorph spell. When you transform into a form granted by a spell, you gain all the effects of the form you chose from a version of the spell heightened to wild shape's level. Wild shape allows you to use your own shapeshifting training more easily than most polymorph spells. When you choose to use your own attack modifier while polymorphed instead of the form's default attack modifier, you gain a +2 status bonus to your attack rolls.Heightened (2nd) You can also wild shape into the forms listed in animal form.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute (or longer)',
    area: ''
  },
  '482': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Monk',
        description:
          'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.',
        id: '112',
        url: 'Traits.aspx?ID=112'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 401',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'You move so fast you blur across planar boundaries. You teleport up to a distance equal to your Speed within your line of sight.',
    range: '15 feet or more',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '483': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Monk',
        description:
          'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.',
        id: '112',
        url: 'Traits.aspx?ID=112'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      }
    ],
    source: 'Core Rulebook pg. 401',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You turn ethereal, with the effects of ethereal jaunt, but you don't need to concentrate.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '484': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      },
      {
        title: 'Monk',
        description:
          'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.',
        id: '112',
        url: 'Traits.aspx?ID=112'
      }
    ],
    source: 'Core Rulebook pg. 401',
    traditions: [],
    actions: 'Single Action',
    cast: ['to'],
    description:
      'You unleash your ki as a powerful blast of force that deals 2d6 force damage. If you use 2 actions to cast ki blast, increase the size of the cone to 30 feet and the damage to 3d6. If you use 3 actions to cast ki blast, increase the size of the cone to 60 feet and the damage to 4d6. Each creature in the area must attempt a Fortitude saving throw.Critical Success The creature is unaffected.Success The creature takes half damage.Failure The creature takes full damage and is pushed 5 feet.Critical Failure The creature takes double damage and is pushed 10 feet.Heightened (+1) The damage increases by 1d6, or by 2d6 if you use 2 or 3 actions.',
    range: '',
    targets: '',
    savingThrow: 'Fortitude',
    duration: '',
    area: '15-foot cone or more'
  },
  '485': {
    traits: [
      {
        title: 'Monk',
        description:
          'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.',
        id: '112',
        url: 'Traits.aspx?ID=112'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 401',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'Accelerated by your ki, you move with such speed you become a blur. Move two times: two Strides, two Steps, or one Stride and one Step (in either order). You gain the concealed condition during this movement and until the start of your next turn.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '486': {
    traits: [
      {
        title: 'Monk',
        description:
          'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.',
        id: '112',
        url: 'Traits.aspx?ID=112'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 401',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You focus your ki into magical attacks. Make an unarmed Strike or Flurry of Blows (this doesn't change the limit on using only one flourish per turn). You gain a +1 status bonus to your attack rolls with the Strikes, and the Strikes deal 1d6 extra damage. This damage can be any of the following types of your choice, chosen each time you Strike: force, lawful (only if you're lawful), negative, or positive.Heightened (+4) The extra damage increases by 1d6.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '487': {
    traits: [
      {
        title: 'Monk',
        description:
          'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.',
        id: '112',
        url: 'Traits.aspx?ID=112'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Core Rulebook pg. 401',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Make a melee unarmed Strike. If you hit and the target is alive, anytime during the duration, you can spend a single action, which has the auditory and concentrate traits, to speak a word of death that could instantly slay it. The target must attempt a Fortitude save.If you cast quivering palm again, the effects of any quivering palm you had previously cast end.Critical Success The target survives, the spell ends, and the target is then temporarily immune for 24 hours.Success The target is stunned 1 and takes 40 damage, the spell ends, and the target is then temporarily immune for 24 hours.Failure The target is stunned 3 and takes 80 damage. The spell's duration continues, but the target is then temporarily immune for 24 hours against being killed by quivering palm.Critical Failure The target dies.Heightened (+1) The damage increases by 10 on a failure, or 5 on a success.",
    range: '',
    targets: '',
    savingThrow: 'Fortitude;',
    duration: '1 month',
    area: ''
  },
  '488': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Monk',
        description:
          'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.',
        id: '112',
        url: 'Traits.aspx?ID=112'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Positive',
        description:
          'Effects with this trait heal living creatures with positive energy, deal positive energy damage to undead, or manipulate positive energy.',
        id: '128',
        url: 'Traits.aspx?ID=128'
      }
    ],
    source: 'Core Rulebook pg. 402',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You heal yourself in one of the following ways, chosen by you when you cast the spell. You regain 8 Hit Points. You attempt to cure one poison or disease afflicting you; attempt to counteract the affliction.Heightened (+1) If you choose to regain Hit Points, the Hit Points regained increase by 8.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '489': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Monk',
        description:
          'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.',
        id: '112',
        url: 'Traits.aspx?ID=112'
      },
      {
        title: 'Stance',
        description:
          'A stance is a general combat strategy that you enter by using an action with the stance trait, and that you remain in for some time. A stance lasts until you get knocked out, until its requirements (if any) are violated, until the encounter ends, or until you enter a new stance, whichever comes first. After you use an action with the stance trait, you can’t use another one for 1 round. You can enter or be in a stance only in encounter mode.',
        id: '152',
        url: 'Traits.aspx?ID=152'
      }
    ],
    source: 'Core Rulebook pg. 402',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'You take on the stance of the flowing winds, sending out waves of energy at a distance. You can make wind crash unarmed Strikes as ranged Strikes against targets within 30 feet. These deal 1d6 bludgeoning damage, use the brawling group, and have the agile, nonlethal, propulsive, and unarmed traits. Wind crash Strikes ignore concealment and all cover. While in wild winds stance, you gain a +2 circumstance bonus to AC against ranged attacks.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'until you leave the stance',
    area: ''
  },
  '490': {
    traits: [
      {
        title: 'Air',
        description:
          'Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a magical connection to that element.',
        id: '5',
        url: 'Traits.aspx?ID=5'
      },
      {
        title: 'Monk',
        description:
          'Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks.',
        id: '112',
        url: 'Traits.aspx?ID=112'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 402',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You gain a fly Speed equal to your Speed. You must end your turn on solid ground, or you fall.Heightened (6th) At the end of your turn, you can attempt a DC 30 Acrobatics check to find purchase in midair. If you succeed, you don't fall.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '491': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 402',
    traditions: [],
    actions: 'Single Action',
    cast: ['to'],
    description:
      "You utter phrases in an unknown tongue, assaulting the minds of those nearby. Each target must attempt a Will save. Regardless of the result of its save, each target is then temporarily immune for 1 minute. You can increase the number of actions it takes to Cast the Spell (to a maximum of 3 actions total). For each additional action, increase the emanation's radius by 5 feet, to a maximum of 10 extra feet for 3 actions.Success The target is unaffected.Failure The target is stupefied 2.Critical Failure The target is confused.Heightened (+3) The initial radius increases by 5 feet.",
    range: '',
    targets: 'each foe in the area',
    savingThrow: 'Will;',
    duration: '1 round',
    area: '5-foot emanation or more;'
  },
  '492': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 402',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You evoke the energy of an Abyssal realm. The damage types of the spell (one energy and one physical) are based on the result of rolling on the table below. Abyssal Wrath 1d4RealmManifestationDamage Type 1SkiesBolts and lightning and flying debrisBludgeoning and electricity 2DepthsAcid and demonic shellsAcid and slashing 3FrozenFrigid air and iceBludgeoning and cold 4VolcanicJagged volcanic rocks and magmaFire and piercing  You deal 4d6 damage of each of the corresponding damage types to each creature in the cone (8d6 total damage).Heightened (+1) The damage for each type increases by 1d6.',
    range: '',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '60-foot cone'
  },
  '493': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 402',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "The memories of long-dead spellcasters grant you knowledge in a specific skill. Choose any non-Lore skill, or a Lore skill related to the ancient empire from which your bloodline sprang. You temporarily become trained in that skill and might gain other memories associated with an ancestor who was trained in that skill. If you attempt a task or activity that lasts beyond this spell's duration, use the lower proficiency modifier.Heightened (6th) You temporarily become an expert in the skill you choose.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '494': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Good',
        description:
          'Good effects often manipulate energy from good-aligned Outer Planes and are antithetical to evil divine servants or divine servants of evil deities. A creature with this trait is good in alignment. An ability with this trait can be selected or used only by good creatures.',
        id: '83',
        url: 'Traits.aspx?ID=83'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 402',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You gain an angelic halo with an aura that increases allies' healing from the heal spell. Heal spells gain a +2 status bonus to Hit Points healed to your allies in the area.Heightened (+1) The status bonus increases by 2.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '15-foot emanation'
  },
  '495': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Light',
        description:
          'Light effects overcome non-magical darkness in the area, and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness.',
        id: '100',
        url: 'Traits.aspx?ID=100'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 403',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Wings of pure light spread out from your back, granting you a fly Speed equal to your Speed. Your wings cast bright light in a 30-foot radius. When this spell's duration would end, if you're still flying, you float to the ground, as feather fall.Heightened (5th) The duration increases to 1 minute.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '3 rounds',
    area: ''
  },
  '496': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 403',
    traditions: [],
    actions: 'Reaction',
    cast: ['somatic;'],
    description:
      "You undermine the target spell, making it easier to defend against. You reduce the spell's level by 1, and targets of the spell gain a +2 status bonus to any saving throws, skill checks, AC, or DC against it. You can't reduce the spell's level below its minimum. For example, a 5th-level cone of cold would remain 5th-level, but a 5th-level fireball would become 4th-level. Targets still gain all the other benefits, even if you don't reduce the spell's level.",
    range: '120 feet',
    targets: 'the spell cast by the triggering creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '497': {
    traits: [
      {
        title: 'Curse',
        description:
          'A curse is an effect that places some long-term affliction on a creature. Curses are always magical and are typically the result of a spell or trap.',
        id: '38',
        url: 'Traits.aspx?ID=38'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 403',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'A blazing symbol appears on the target, marking it for divine justice. You and your allies receive a +1 status bonus to your attack rolls and skill checks against it. Anytime a good creature damages it, the good creature deals an additional 1d4 good damage. The target is then temporarily immune for 1 minute.Heightened (+2) The good damage increases by 1.',
    range: '30 feet',
    targets: '1 evil creaeture',
    savingThrow: '',
    duration: '1 round',
    area: ''
  },
  '498': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 403',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You issue a diabolic edict, demanding the target perform a particular task and offering rewards for its fulfillment. It gains a +1 status bonus to attack rolls and skill checks related to performing the task. If it refuses to perform the task you proclaimed, it instead takes a –1 status penalty to all its attack rolls and skill checks.',
    range: '30 feet',
    targets: '1 willing living creature',
    savingThrow: '',
    duration: '1 round',
    area: ''
  },
  '499': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 403',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You spew energy from your mouth, dealing 5d6 damage. The area, damage type, and save depend on the dragon type in your bloodline.Dragon Breath Dragon TypeArea and Damage TypeSaving Throw Black and copper60-foot line of acidReflex Blue and bronze60-foot line of electricityReflex Brass60-foot line of fireReflex Green30-foot cone of poisonFortitude Gold or red30-foot cone of fireReflex Silver or white30-foot cone of coldReflex Heightened (+1) The damage increases by 2d6.',
    range: '',
    targets: '',
    savingThrow: 'basic Reflex or Fortitude',
    duration: '',
    area: '30-foot cone or 60-foot line originating from you'
  },
  '500': {
    traits: [
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 403',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'Vicious claws grow from your fingers. They are finesse unarmed attacks that deal 1d4 slashing damage and 1d6 extra damage of a type determined by the dragon in your bloodline. Dragon Claws Dragon TypeArea and Damage TypeSaving Throw Black and copper60-foot line of acidReflex Blue and bronze60-foot line of electricityReflex Brass60-foot line of fireReflex Green30-foot cone of poisonFortitude Gold or red30-foot cone of fireReflex Silver or white30-foot cone of coldReflex  Your scales from blood magic glow with faint energy, giving you resistance 5 to the same damage type.Heightened (5th) The extra damage increases to 2d6, and the resistance increases to 10.Heightened (9th) The extra damage increases to 3d6, and the resistance increases to 15.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '501': {
    traits: [
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 403',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "Leathery wings sprout from your back, giving you a fly Speed of 60 feet or your Speed, whichever is faster. When this spell's duration would end, if you're still flying, you float to the ground, as feather fall. You can increase the Focus Point cost by 1 to gain the effects of dragon claws as long as the wings last.Heightened (8th) The duration increases to 10 minutes.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '502': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Negative',
        description:
          'Effects with this trait heal undead creatures with negative energy, deal negative damage to living creatures, or manipulate negative energy.',
        id: '118',
        url: 'Traits.aspx?ID=118'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 403',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You close your hand and pull life energy from another creature into yourself. This deals 3d4 negative damage; the target must attempt a basic Fortitude save. You gain temporary Hit Points equal to the damage the target takes, after resolving its save and applying your blood magic if applicable. If the target's Hit Points were lower than the damage you dealt, you gain temporary Hit Points equal to their remaining Hit Points instead. The temporary Hit Points last for 1 minute.Heightened (+1) The damage increases by 1d4.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'basic Fortitude',
    duration: '',
    area: ''
  },
  '503': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 404',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You gather elemental energy and blast your foes in one of the various listed shapes of your choosing, dealing 8d6 bludgeoning damage (or fire damage if your element is fire). This spell has your element's trait.Heightened (+1) The damage increases by 2d6.",
    range: '30 feet (burst only)',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '10-foot-radius burst, 30-foot cone, or 60-foot line'
  },
  '504': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 404',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You call upon your element to propel you, improving your Speed depending on your element. This spell has your element's trait. Air You gain a fly Speed equal to your Speed. Earth You gain a burrow Speed of 10 feet. Fire You gain a fly Speed equal to your Speed. Water You gain a swim Speed equal to your Speed and can breathe underwater.Heightened (6th) You also gain a +10-foot status bonus to your Speeds.Heightened (9th) The status bonus increases to +20 feet.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '505': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 404',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "With a flick of your wrist, you fling a chunk of your elemental matter at your foe. Make a spell attack roll, dealing 1d8 bludgeoning damage (or fire damage if your element is fire) on a success, and double damage on a critical success. This spell has your element's trait.Heightened (+1) The damage increases by 1d8.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '506': {
    traits: [
      {
        title: 'Evil',
        description:
          'Evil effects often manipulate energy from evil-aligned Outer Planes and are antithetical to good divine servants or divine servants of good deities. A creature with this trait is evil in alignment. An ability with this trait can be selected or used only by evil creatures.',
        id: '64',
        url: 'Traits.aspx?ID=64'
      },
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 404',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "Devil horns grow from your skull, and your skin takes on features of the devil responsible for your diabolic bloodline. You gain resistance 5 to evil, fire, and poison, and resistance 1 to physical damage (except silver). You can take good damage, even if you aren't evil, and you gain weakness 5 to good damage.Heightened (+1) The resistance to evil, fire, and poison increases by 5, the resistance to physical damage (except silver) by 2, and the weakness to good damage by 5.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '507': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Metamagic',
        description:
          'Actions with the metamagic trait, usually from metamagic feats, tweak the properties of your spells. You must use a metamagic action directly before Casting the Spell you want to alter. If you use any action (including free actions and reactions) other than Cast a Spell directly after, you waste the benefits of the metamagic action. Any additional effects added by a metamagic action are part of the spell’s effect, not of the metamagic action itself.',
        id: '107',
        url: 'Traits.aspx?ID=107'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 404',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You call upon your blood's knowledge of the ancients to extend your magic. If your next action is to Cast a Spell with a duration of 1 minute on a single target, and the spell isn't of the highest spell level you can cast, the spell instead lasts 10 minutes. You can have only one active spell at a time extended in this way.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '508': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 404',
    traditions: [],
    actions: 'Single Action',
    cast: ['or more somatic', 'verbal'],
    description:
      "You sprinkle magical dust in the spell's area, making those within easier to trick. Each creature in the area must attempt a Will save. For each additional action you use Casting the Spell, the burst's radius increases by 5 feet.Success The creature is unaffected.Failure The creature can't use reactions and takes a –2 status penalty to Perception checks and Will saves.Critical Failure As failure, and the creature also takes a –1 status penalty to Perception checks and Will saves for 1 minute.Heightened (+3) The initial radius increases by 5 feet.",
    range: '30 feet',
    targets: '',
    savingThrow: 'Will;',
    duration: '1 round',
    area: '5-foot burst or more'
  },
  '509': {
    traits: [
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 404',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You become invisible and ignore natural difficult terrain (such as underbrush). Any hostile action you use ends this invisibility, but you still ignore natural difficult terrain.Heightened (5th) If you use a hostile action, the invisibility doesn't end.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'until the end of your next turn',
    area: ''
  },
  '510': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 404',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You call upon fey glamours to cloak an area or the targets in illusion. This has the effect of either illusory scene on the area or veil on the creatures, as if heightened to a level 1 level lower than fey glamour, using fey glamour's range and duration.",
    range: '30 feet',
    targets: 'up to 10 creatures',
    savingThrow: '',
    duration: '10 minutes',
    area: '30-foot burst or;'
  },
  '512': {
    traits: [
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 404',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Hundreds of skeletal arms erupt from the ground in the area, clawing at creatures within and attempting to hold them in place. The skeletal arms deal 6d6 slashing damage. Each creature in the area must attempt a Reflex save.Critical Success The creature is unaffected.Success The creature takes half damage.Failure The creature takes full damage and a –10-foot circumstance penalty to its Speeds for 1 round.Critical Failure The creature takes double damage and is immobilized for 1 round or until it Escapes.Heightened (+1) The damage increases by 2d6.',
    range: '60 feet',
    targets: '',
    savingThrow: 'Reflex',
    duration: '',
    area: '20-foot radius on the ground'
  },
  '513': {
    traits: [
      {
        title: 'Evil',
        description:
          'Evil effects often manipulate energy from evil-aligned Outer Planes and are antithetical to good divine servants or divine servants of good deities. A creature with this trait is evil in alignment. An ability with this trait can be selected or used only by evil creatures.',
        id: '64',
        url: 'Traits.aspx?ID=64'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Fire',
        description:
          'Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a magical connection to that element.',
        id: '72',
        url: 'Traits.aspx?ID=72'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 405',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You call forth a plume of hellfire that erupts from below, dealing 4d6 fire damage and 4d6 evil damage.Heightened (+1) The fire damage increases by 1d6, and the evil damage increases by 1d6.',
    range: '60 feet',
    targets: '',
    savingThrow: 'basic Reflex',
    duration: '',
    area: '10-foot radius, 60-foot-tall cylinder'
  },
  '514': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Fear',
        description:
          'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
        id: '68',
        url: 'Traits.aspx?ID=68'
      },
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Core Rulebook pg. 405',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You briefly transform your features into the horrific visage of a hag, striking fear into your enemies. Foes in the area must attempt a Will save.Success The foe is unaffected.Failure The foe is frightened 1.Critical Failure The foe is frightened 2.Heightened (5th) Foes in the area are frightened 1 on a success, frightened 2 on a failure, and frightened 3 and fleeing for 1 round on a critical failure. They are still unaffected on a critical success.',
    range: '',
    targets: '',
    savingThrow: 'Will',
    duration: '',
    area: '30-foot-radius emanation centered on you'
  },
  '515': {
    traits: [
      {
        title: 'Curse',
        description:
          'A curse is an effect that places some long-term affliction on a creature. Curses are always magical and are typically the result of a spell or trap.',
        id: '38',
        url: 'Traits.aspx?ID=38'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 405',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You draw forth a hag's innate jealousy to deny a target its greatest attribute. The target gains an adverse condition depending on its highest ability modifier: Strength (enfeebled); Dexterity (clumsy); Constitution (drained); or Intelligence, Wisdom, or Charisma (stupefied). On a tie, the creature decides which of the conditions associated with the tied ability modifiers to take. The target must attempt a Will save.At the start of each of your turns, the target can attempt another Will save, ending the effect on a success.Success The target is unaffected.Failure The condition's value is 1.Critical Failure The condition's value is 2.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'up to 1 minute',
    area: ''
  },
  '516': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      }
    ],
    source: 'Core Rulebook pg. 405',
    traditions: [],
    actions: 'Single Action',
    cast: ['to'],
    description:
      "Ground in the area turns swampy and fetid. The area is difficult terrain. The sludge at the bottom of the morass animates into diminutive sludge beasts that have a demonic appearance. These don't function as normal creatures, but they swarm over creatures in the swamp and exude a noxious stench. The swamp deals 1d6 poison damage; creatures that end their turn in the area must attempt a basic Fortitude save. You can increase the number of actions it takes to Cast the Spell. For each additional action, increase the burst's radius by 5 feet.Heightened (+2) The damage increases by 1d6, and the initial radius increases by 5 feet.",
    range: '120 feet',
    targets: '',
    savingThrow: 'basic Fortitude;',
    duration: '1 minute',
    area: '5-foot burst or more'
  },
  '517': {
    traits: [
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 405',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "Your arms turn into long, pliable tentacles, increasing your reach when you're delivering touch range spells and making unarmed Strikes with your arms (such as fist and claw Strikes) to 10 feet. This doesn't change the reach of your melee weapon attacks. During the duration, whenever you Cast a Spell, you can add an additional action to that spell's casting to temporarily extend your reach to 20 feet to deliver that spell.Heightened (+2) When you add an additional action to a spell to temporarily extend your reach, your reach increases by an additional 10 feet to deliver that spell.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '519': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Sorcerer',
        description: 'This indicates abilities from the sorcerer class.',
        id: '148',
        url: 'Traits.aspx?ID=148'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Core Rulebook pg. 405',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You transform your flesh and organs into a bizarre amalgam of glistening skin, rough scales, tufts of hair, and tumorous protuberances. This has three effects: You gain resistance 10 to precision damage and resistance 10 to extra damage from critical hits. If the resistance is greater than the extra damage, it reduces the extra damage to 0 but doesn't reduce the attack's normal damage. You gain darkvision. Acid oozes from your skin. Any creature that hits you with an unarmed attack or with a non-reach melee weapon takes 2d6 acid damage.Heightened (+2) The resistances increase by 5, and the acid damage increases by 1d6.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '521': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 406',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You augment the abilities of a summoned creature. The target gains a +1 status bonus to all checks (this also applies to the creature's DCs, including its AC) for the duration of its summoning, up to 1 minute.",
    range: '30 feet',
    targets: '1 creature you summoned',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '522': {
    traits: [
      {
        title: 'Arcane',
        description:
          'This magic comes from the arcane tradition, which is built on logic and rationality. Anything with this trait is magical.',
        id: '11',
        url: 'Traits.aspx?ID=11'
      },
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 406',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      "You fire a ray of sickening energy. Make a spell attack roll.Critical Success The target becomes sickened 2 and slowed 1 as long as it's sickened.Success The target becomes sickened 1.Failure The target is unaffected.",
    range: '30 feet',
    targets: '1 living creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '523': {
    traits: [
      {
        title: 'Auditory',
        description:
          'Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can’t hear it (such as deaf targets) as long as the effect itself makes sound.',
        id: '16',
        url: 'Traits.aspx?ID=16'
      },
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Incapacitation',
        description:
          'An ability with this trait can take a character completely out of the fight or even kill them, and it’s harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell’s level treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits.',
        id: '93',
        url: 'Traits.aspx?ID=93'
      },
      {
        title: 'Linguistic',
        description:
          'An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using.',
        id: '101',
        url: 'Traits.aspx?ID=101'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 406',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You whisper enchanting words to deflect your foe's ire. The target must attempt a Will save.Critical Success The target is unaffected.Success The target takes a –1 circumstance penalty to attack rolls and damage rolls against you.Failure The target can't use hostile actions against you.Critical Failure The target is stunned 1 and can't use hostile actions against you.",
    range: '30 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'until the start of your next turn',
    area: ''
  },
  '524': {
    traits: [
      {
        title: 'Conjuration',
        description:
          'Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place.',
        id: '33',
        url: 'Traits.aspx?ID=33'
      },
      {
        title: 'Teleportation',
        description:
          'Teleportation effects allow you to instantaneously move from one point in space to another. Teleportation does not usually trigger reactions based on movement.',
        id: '156',
        url: 'Traits.aspx?ID=156'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 406',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'You teleport to a location up to 20 feet away within your line of sight.Heightened (+1) You teleport to a location up to 20 feet away within your line of sight.',
    range: '20 feet',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '526': {
    traits: [
      {
        title: 'Emotion',
        description:
          'This effect alters a creature’s emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects.',
        id: '60',
        url: 'Traits.aspx?ID=60'
      },
      {
        title: 'Enchantment',
        description:
          'Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects.',
        id: '61',
        url: 'Traits.aspx?ID=61'
      },
      {
        title: 'Fear',
        description:
          'Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well.',
        id: '68',
        url: 'Traits.aspx?ID=68'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 406',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You emit an aura of terror. Foes in the area are frightened 1 and unable to reduce the condition.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: '30-foot-radius emanation centered on you'
  },
  '527': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Metamagic',
        description:
          'Actions with the metamagic trait, usually from metamagic feats, tweak the properties of your spells. You must use a metamagic action directly before Casting the Spell you want to alter. If you use any action (including free actions and reactions) other than Cast a Spell directly after, you waste the benefits of the metamagic action. Any additional effects added by a metamagic action are part of the spell’s effect, not of the metamagic action itself.',
        id: '107',
        url: 'Traits.aspx?ID=107'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 406',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "Your spellcasting surrounds you in a storm of elemental energy. If the next action you take is to Cast a Spell from your wizard spell slots that's an evocation spell dealing acid, cold, electricity, or fire damage, a 10-foot emanation of energy surrounds you as you cast the spell. Foes in the area take 1d6 damage per spell level of the spell you just cast of the same damage type the spell deals (choose one if it deals multiple types). Combine the damage from both elemental tempest and the other spell against foes who take damage from both before applying bonuses, penalties, resistance, weakness, and the like.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '528': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      "You gain resistance 15 to acid, cold, electricity, or fire damage from the triggering effect (one type of your choice). The resistance applies only to the triggering effect's initial damage.Heightened (+1) The resistance increases by 5.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '529': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Force',
        description:
          'Effects with this trait deal force damage or create objects made of pure magical force.',
        id: '75',
        url: 'Traits.aspx?ID=75'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'You fire an unerring dart of force from your fingertips. It automatically hits and deals 1d4+1 force damage to the target.Heightened (+2) The damage increases by 1d4+1.',
    range: '30 feet',
    targets: '1 creature or object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '530': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You hurl a held melee weapon with which you are trained at the target, making a spell attack roll. On a success, you deal the weapon's damage as if you had hit with a melee Strike, but adding your spellcasting ability modifier to damage, rather than your Strength modifier. On a critical success, you deal double damage, and you add the weapon's critical specialization effect. Regardless of the outcome, the weapon flies back to you and returns to your hand.",
    range: '500 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '531': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic'],
    description:
      'You become invisible, with the same restrictions as the 2nd-level invisibility spell.Heightened (6th) The duration increases to 10 minutes.Heightened (8th) The duration increases to 1 hour.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '532': {
    traits: [
      {
        title: 'Healing',
        description:
          'A healing effect restores a creature’s body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects.',
        id: '89',
        url: 'Traits.aspx?ID=89'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      "You use some of the spell's magic to heal yourself, regaining 1d8 Hit Points per level of the spell.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '533': {
    traits: [
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      "You temporarily improve the target's physique. The target gains a +2 status bonus to the next Acrobatics check, Athletics check, Fortitude save, or Reflex save it attempts.",
    range: 'touch',
    targets: '1 living creature',
    savingThrow: '',
    duration: "until the end of the target's next turn",
    area: ''
  },
  '534': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You emanate a shimmering aura of protective magic. You and any allies in the area gain a +1 status bonus to AC. Each time you Sustain the Spell, the emanation's radius increases by 5 feet, to a maximum of 30 feet.",
    range: '',
    targets: '',
    savingThrow: '',
    duration: 'sustained up to 1 minute',
    area: '5-foot-radius emanation centered on you'
  },
  '535': {
    traits: [
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'You gain one of the following abilities of your choice. You can Dismiss this spell. You gain a 20-foot status bonus to your Speed. You gain a climb or swim Speed equal to half your Speed. You gain darkvision. You gain a pair of claws. These are agile finesse unarmed attacks that deal 1d8 slashing damage. You gain scent 60 feet (imprecise).',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '536': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      "You create an invisible eye sensor, as clairvoyance. When created, this eye must be in your line of sight. When the spell's duration ends, you can spend 1 Focus Point as a free action to extend the duration for another hour, though as normal, it ends immediately during your next daily preparations.",
    range: '500 feet',
    targets: '',
    savingThrow: '',
    duration: '1 hour',
    area: ''
  },
  '537': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      },
      {
        title: 'Wizard',
        description: 'This indicates abilities from the wizard class.',
        id: '166',
        url: 'Traits.aspx?ID=166'
      }
    ],
    source: 'Core Rulebook pg. 407',
    traditions: [],
    actions: 'Single Action',
    cast: ['to'],
    description:
      "You create illusory hazards that cover all surfaces in the area (typically the ground). Any creature moving through the illusion treats the squares as difficult terrain. A creature can attempt to disbelieve the effect as normal after using a Seek action or otherwise spending actions interacting with the illusion. If it successfully disbelieves, it ignores the effect for the remaining duration. For each additional action you use casting the spell, the burst's radius increases by 5 feet, to a maximum of 10 extra feet for 3 actions.Heightened (4th) You can make the illusion appear in the air rather than on a surface, causing it to function as difficult terrain for flying creatures.",
    range: '60 feet',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: '5-foot burst or more'
  },
  '540': {
    traits: [
      {
        title: 'Attack',
        description:
          'An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty.',
        id: '15',
        url: 'Traits.aspx?ID=15'
      },
      {
        title: 'Cold',
        description:
          'Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold.',
        id: '27',
        url: 'Traits.aspx?ID=27'
      },
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Lost Omens World Guide pg. 112',
    traditions: ['arcane', 'primal'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You throw a magically propelled and chilled ball of dense snow. The target takes 2d4 cold\ndamage and potentially other effects, depending on the result of your spell attack roll.Critical Success The target takes double damage and a –10-foot status penalty to its Speeds for 1 round.Success  The target takes full damage and a –5-foot status penalty to its Speeds for 1 round.Failure No effect.Heightened (+1)  The damage increases by 2d4.',
    range: '30 feet',
    targets: '1 creature',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '541': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Lost Omens World Guide pg. 71',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You become a mantis. You gain the effects of insect form, heightened to mantis form’s level, and you can only transform into a mantis.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '542': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Fortune',
        description:
          'A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally.',
        id: '76',
        url: 'Traits.aspx?ID=76'
      }
    ],
    source: 'Lost Omens World Guide pg. 83',
    traditions: [],
    actions: 'Reaction',
    cast: ['verbal;'],
    description:
      'You call upon insight from your training to recover accuracy. Reroll the missed attack roll and keep the new result.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '543': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Lost Omens World Guide pg. 83',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal;'],
    description:
      'You light your foe with revealing flame. The GM attempts a secret counteract check against each illusion affecting the creature; on a success, you suppress the illusion for the duration, rather than end the effect.',
    range: '',
    targets: 'the creature you hit',
    savingThrow: '',
    duration: '2 rounds',
    area: ''
  },
  '544': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      },
      {
        title: 'Water',
        description:
          'Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a magical connection to the element.',
        id: '165',
        url: 'Traits.aspx?ID=165'
      }
    ],
    source: 'Lost Omens World Guide pg. 83',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You unleash a mighty wave from your hand that buffets back your foes. Each creature in the area must attempt a Fortitude saving throw. If a creature pushed by unbreaking wave advance would be pushed into a solid barrier or another creature, it stops at that point and takes 3d6 damage.Success The creature is unaffected.Failure The creature is pushed 10 feet.Critical Failure The creature is pushed 20 feet.Heightened (+1) The damage for pushing a creature into a solid barrier increases by 1d6.',
    range: '',
    targets: '',
    savingThrow: 'Fortitude',
    duration: '',
    area: '15-foot cone'
  },
  '545': {
    traits: [
      {
        title: 'Evocation',
        description:
          'Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces.',
        id: '65',
        url: 'Traits.aspx?ID=65'
      }
    ],
    source: 'Lost Omens World Guide pg. 83',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You travel on a rushing wind. Move two times: two Strides, two Steps, or one Stride and one Step (in either order). You can Stride or Step into the air during this movement, moving upward at a 45-degree angle at most; if you end your movement in the air, you fall after taking one action or when your turn ends, whichever comes first. A wall of wind appears in all the spaces you left during this movement, lasting for 1 round.Heightened (5th) The wall of wind lasts 3 rounds.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '546': {
    traits: [
      {
        title: 'Abjuration',
        description:
          'Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards.',
        id: '2',
        url: 'Traits.aspx?ID=2'
      }
    ],
    source: 'Lost Omens World Guide pg. 83',
    traditions: [],
    actions: 'Single Action',
    cast: ['verbal'],
    description:
      'You send currents of protective ki to the surface of your body that protect you from harm, at least until your enemies dissipate them. You gain 15 temporary Hit Points, which last for up to 3 rounds.Heightened (+1) The temporary Hit Points increase by 5.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '547': {
    traits: [
      {
        title: 'Morph',
        description:
          'Effects that slightly alter a creature’s form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).\n\nYour morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can’t.',
        id: '113',
        url: 'Traits.aspx?ID=113'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Lost Omens World Guide pg. 95',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You call upon the aspect of the animal from your mask, gaining physical features reminiscent of that animal. You morph slightly into that creature, gaining the Speeds and senses you would gain from using animal form to turn into the type of animal your mask represents; these special Speeds can’t be increased by status bonuses or item bonuses.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '5 minutes',
    area: ''
  },
  '548': {
    traits: [
      {
        title: 'Polymorph',
        description:
          'These effects transform the target into a new form. A target can’t be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don’t allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\n If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there’s doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can’t activate any items.',
        id: '127',
        url: 'Traits.aspx?ID=127'
      },
      {
        title: 'Transmutation',
        description:
          'Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something’s form.',
        id: '157',
        url: 'Traits.aspx?ID=157'
      }
    ],
    source: 'Lost Omens World Guide pg. 95',
    traditions: [],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You transform into the animal from your mask. You gain the effects of animal form, heightened to magic warrior transformation’s level, and you can transform into only the type of animal your mask represents.',
    range: '',
    targets: '',
    savingThrow: '',
    duration: '1 minute',
    area: ''
  },
  '549': {
    traits: [
      {
        title: 'Illusion',
        description:
          'Effects and magic items with this trait are associated with the illusion school of magic, typically involving false sensory stimuli.',
        id: '92',
        url: 'Traits.aspx?ID=92'
      },
      {
        title: 'Visual',
        description:
          'A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM.',
        id: '163',
        url: 'Traits.aspx?ID=163'
      }
    ],
    source: 'Pathfinder #147: Tomorrow Must Burn pg. 73',
    traditions: [
      'arcane',
      'occult',
      'humanoid',
      'illusory disguise',
      'Dismiss'
    ],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal;'],
    description:
      'To mislead pursuers, the Lacunafex developed the means to swap visages. You trade appearances with the target, with the effects depending on the result of the target’s Will saving throw. Willing and unconscious targets automatically critically fail this saving throw.Critical Success No effect.Success You take on the target’s appearance, and they take yours. This has the same effects as a 1st-level illusory disguise spell, except that the target can’t Dismiss the disguise. The duration is 1 minute or until Dismissed.Failure As success, but the duration is 1 hour or until Dismissed.Critical Failure As success, but the duration is 24 hours.',
    range: 'touch',
    targets: 'you and 1 other humanoid',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  },
  '550': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Pathfinder #147: Tomorrow Must Burn pg. 73',
    traditions: ['arcane', 'divine', 'occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Members of the Lacunafex and other allies use this spell to restore material that Thrune agents have redacted from historical or otherwise valuable texts. You learn one piece of information that was removed from the target text after its creation. You can instead learn one piece of information from a text that had been destroyed, but you must have a fragment of the text, such as a piece of the cover, a page, or even a clasp or metal fittings.Heightened (6th) The spell reconstructs all missing information regarding a specific topic of your choice.Heightened (9th) The spell also reveals information the writer self-censored and didn’t commit to paper.',
    range: 'touch',
    targets: '1 text or remnants thereof',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '551': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Pathfinder #147: Tomorrow Must Burn pg. 73',
    traditions: ['occult', 'object reading', 'retrocognition', 'read aura'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You project psychic vibrations onto the target object, imprinting it with a short message or emotional theme of your design. This imprinted sensation is revealed to anyone casting object reading on the target object, replacing any emotional events the item was present for. If the object is in the area of a retrocognition spell, the imprinted messages appear as major events in the timeline, but they don’t interfere with any other visions. If the object is targeted with read aura of a higher spell level than imprint message, the caster learns that the object has been modified. When you Cast this Spell, any prior vibrations placed in an object by previous castings of imprint message fade.',
    range: 'touch',
    targets: '1 object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '552': {
    traits: [
      {
        title: 'Cantrip',
        description:
          'A spell you can cast at will that is automatically heightened to half your level rounded up.',
        id: '22',
        url: 'Traits.aspx?ID=22'
      },
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      },
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      }
    ],
    source: 'Pathfinder #147: Tomorrow Must Burn pg. 73',
    traditions: ['occult', 'Recall Knowledge', 'Aid', 'Lore'],
    actions: 'Single Action',
    cast: ['somatic'],
    description:
      'With touches to the targets’ foreheads, you bring them into mental communion. The targets can share thoughts and experiences, but not words. When one target attempts to Recall Knowledge, the other can Aid the first target’s skill check, using any Lore skill (even if that Lore wouldn’t normally apply) without having made any preparations to Aid.Heightened (+1) You can touch one additional target t  include them in the spell’s effects. Multiple targets can attempt checks to Aid the target who is attempting to Recall Knowledge.',
    range: 'touch',
    targets: '2 willing creatures',
    savingThrow: '',
    duration: '1 round',
    area: ''
  },
  '553': {
    traits: [
      {
        title: 'Divination',
        description:
          'The divination school of magic typically involves obtaining or transferring information, or predicting events.',
        id: '47',
        url: 'Traits.aspx?ID=47'
      }
    ],
    source: 'Pathfinder #147: Tomorrow Must Burn pg. 73',
    traditions: ['occult'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'You place a hand on an object to learn a piece of information about an emotional event that occurred involving the object within the past week, determined by the GM. If you cast object reading on the same item multiple times, you can either concentrate on a single event to gain additional pieces of information about that event, or you can gain a piece of information about another emotional event in the applicable time frame.Heightened (2nd) You can learn about an event that occurred within the last monthHeightened (4th) You can learn about an event that occurred within the last year.Heightened (6th) You can learn about an event that occurred within the last decade.Heightened (8th) You can learn about an event that occurred within the last century.Heightened (9th) You can learn about an event that occurred within the entirety of the object’s history.',
    range: 'touch',
    targets: '1 object',
    savingThrow: '',
    duration: '',
    area: ''
  },
  '554': {
    traits: [
      {
        title: 'Mental',
        description:
          'A mental effect can alter the target’s mind. It has no effect on an object or a mindless creature.',
        id: '106',
        url: 'Traits.aspx?ID=106'
      },
      {
        title: 'Necromancy',
        description:
          'Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death.',
        id: '117',
        url: 'Traits.aspx?ID=117'
      }
    ],
    source: 'Pathfinder #147: Tomorrow Must Burn pg. 73',
    traditions: ['divine', 'occult', 'slowed', 'stunned'],
    actions: 'Two Actions',
    cast: ['somatic', 'verbal'],
    description:
      'Memories of a past life that seem incredibly real (and may even be) overwhelm the target’s mind. This is especially disorienting for undead and creatures that have lived a previous life (such as celestials, fiends, monitors, and many other extraplanar creatures); if such creatures roll a critical success on their save, they get a success instead, and if they roll a failure, they get a critical failure instead.Critical Success The creature is unaffected.Success The creature is slowed 1 for 1 round.Failure The target is slowed 1 for 1 minute and babbles about the visions, possibly providing information about what they saw.Critical Failure As failure, but the target is also stunned 3.',
    range: '60 feet',
    targets: '1 creature',
    savingThrow: 'Will;',
    duration: 'varies',
    area: ''
  }
};

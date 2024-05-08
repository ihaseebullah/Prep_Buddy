const questions = `[
    {
      "question": "me, I would be happy to dedicate a few extra hours for the humanitarian cause.",
      "options": ["As of", "As for", "As from", "As to"],
      "correct": "B",
      "explanation": "“As for me” here means that as long as I am concerned."
    },
    {
      "question": "Choose the correct possessive form of the noun: “The book belongs to ",
      "options": ["lt's", "It", "Its’", "Its"],
      "correct": "B",
      "explanation": "“It” is the only correct objective pronoun, as it is the object of the sentence."
    },
    {
      "question": "Are we __ to leave on vacation?",
      "options": ["already", "altogether", "all together", "all ready"],
      "correct": "D",
      "explanation": "“All ready” is the most appropriate option."
    },
    {
      "question": "He is very careful. He his children to drive his car in rush hour traffic.",
      "options": ["does not allow", "did not allow", "allowed", "allow"],
      "correct": "A",
      "explanation": "The first sentence is in present simple tense (sub+ 1st verb+ object). Therefore the other part of the sentence also takes simple present tense. “does not allow” follows the present simple tense according to a singular subject “he”."
    },
    {
      "question": "The coach’s insistence on fitness has become ____.Heyells at players all the time.",
      "options": ["Emotional", "dilatory", "obsessive", "rational"],
      "correct": "C",
      "explanation": "According to the context of the sentence, “obsessive” is the most appropriate option. Obsessive means to be too attached to something."
    },
    {
      "question": "What is the meaning of the idiom “Break a leg”?",
      "options": [
        "Literally breaks aleg",
        "Bad luck",
        "Good luck",
        "Running fast"
      ],
      "correct": "C",
      "explanation": "Break a leg means to wish someone good luck."
    },
    {
      "question": "What is the antonym for “generous”?",
      "options": ["Giving", "Stingy", "Kind", "Selfish"],
      "correct": "D",
      "explanation": "Generous means “selfless, giving”. The opposite of generous is “selfish”."
    },
    {
      "question": "Which of the following is a synonym of “Exquisite”?",
      "options": ["Beautiful", "Ugly", "Mediocre", "Boring"],
      "correct": "A",
      "explanation": "Exquisite means “beautiful”."
    },
    {
      "question": "CHUCKLE means:",
      "options": [
        "Bouquet of flowers",
        "Suppressed laughter",
        "Displeasing manner",
        "Religious manner"
      ],
      "correct": "C",
      "explanation": "Chuckle is a quiet or suppressed laughter."
    },
    {
      "question": "BRILLIANT implies:",
      "options": ["Sparking", "Glorious", "Talented", "Slowly"],
      "correct": "A",
      "explanation": "Brilliant is closest in meaning to “sparkling, shining’-"
    },
    {
      "question": "There are fishes in the pond.",
      "options": ["Much", "Any", "More", "Many"],
      "correct": "D",
      "explanation": "Many fishes in the pond” means there are many opportunities in the world."
    },
  
    {
      "question": "We are eager the scientist.",
      "options": ["To meet", "Meet", "To have meet", "Meeting"],
      "correct": "A",
      "explanation": "‘To meet’ is the most appropriate option. The others are grammatically incorrect in this context."
    },
    {
      "question": "Two and two four.",
      "options": ["Can be", "Makes", "Make", "Is equal to"],
      "correct": "C",
      "explanation": "Compound subjects having “and/or” take a plural verb, here “make”."
    },
    {
      "question": "Don’t poke your nose _______my affairs.",
      "options": ["In", "On", "Into", "Onto"],
      "correct": "C",
      "explanation": "‘Poking nose into someone’s business’ is a famous idiom that means to meddle in someone else’s affairs."
    },
    {
      "question": "I was tired I went to bed.",
      "options": ["So", "For", "Since", "Yet"],
      "correct": "A",
      "explanation": "‘So’ is the most appropriate preposition, showing cause and effect according to the context."
    },
    {
      "question": "1use my umbrella it rains.",
      "options": ["When", "Whenever", "Unless", "Until"],
      "correct": "B",
      "explanation": "‘Whenever’ is most suitable according to the context of the sentence which is in present tense."
    },
    {
      "question": "He is good chess.",
      "options": ["In", "At", "With", "By"],
      "correct": "B",
      "explanation": "‘At’ preposition is used when talking about being good at games and sports."
    },
    {
      "question": "She writes ink.",
      "options": ["With", "Of", "In", "From"],
      "correct": "C",
      "explanation": "When we use ( pen) to write, we use ( ink) instead of (pen). Then we have to use the preposition (in ) but not ( with)."
    },
    {
      "question": "When we use pencil, we have to use ( with) but not ( in).",
      "options": ["With", "In"],
      "correct": "A",
      "explanation": "‘With’ is used when we talk about instruments."
    },
    {
      "question": "We have to get up early",
      "options": ["On", "In", "At", "During"],
      "correct": "C",
      "explanation": "We use ‘in’ with morning, afternoon, evening and night, but we use ‘on’ when we talk about a specific morning, afternoon, etc."
    },
    {
      "question": "She speaks Pashto.",
      "options": ["May", "Can", "Might", "Ought"],
      "correct": "B",
      "explanation": "‘Can’ shows the ability to do something, it is the most suitable auxiliary."
    },
    {
      "question": "This house is her house. The house is",
      "options": ["Hers", "Her", "She", "She’s"],
      "correct": "A",
      "explanation": "Among these options, ‘hers’ is the only correct possessive pronoun."
    },
    {
      "question": "The railway system is very efficient as the train always arrives __time.",
      "options": ["Up", "For", "At", "On"],
      "correct": "D",
      "explanation": "We use ‘at’ before time when we mention a specific time. As in — at 5 o’ clock."
    },
    {
      "question": "What is a figure of speech in which two unlike things are compared using ‘like’ or ‘as’?",
      "options": ["Metaphor", "Simile", "Personification", "Hyperbole"],
      "correct": "B",
      "explanation": "Similes use words ‘like’ or ‘as’ e.g cool as a cucumber."
    },
    {
      "question": "What is the name for a group of words that contains a subject and a verb but does not express a complete thought?",
      "options": ["Phrase", "Clause", "Sentence", "Imperative"],
      "correct": "A",
      "explanation": "Phrase is a group of words that doesn’t express a complete thought."
    },
    {
      "question": "What is the term for a sentence that gives a command to make a request?",
      "options": ["Statement", "Question", "Exclamation", "Imperative"],
      "correct": "D",
      "explanation": "An imperative sentence is a sentence that expresses a direct command, request, invitations, warning, or instruction."
    },
    {
      "question": " what is the term for a sentence that expresses strong emotion or surprise?",
      "options": ["Statement", "Question", "Exclamation", "Imperative"],
      "correct": "C",
      "explanation": "An exclamatory sentence conveys a strong emotion and ends with an exclamation mark."
    },
    {
      "question": "Select the synonym for ‘ubiquitous’",
      "options": ["Rare", "Common", "Unique", "Extravagant"],
      "correct": "B",
      "explanation": "Ubiquitous means something that is present, appearing, or found everywhere."
    },
    {
      "question": "What is the synonym for the word ‘ephemeral’?",
      "options": ["Eternal", "Temporary", "Permanent", "Endless"],
      "correct": "B",
      "explanation": "Ephemeral means something that is temporary or lasts for a very short time."
    },
    {
      "question": "Which figure of speech involves the use of exaggeration for emphasis or effect?",
      "options": ["Metaphor", "Simile", "Hyperbole", "Personification"],
      "correct": "C",
      "explanation": "Hyperboles are exaggerated statements or claims not meant to be taken literally."
    },
    {
      "question": "Which part of speech is used to describe a noun or pronoun?",
      "options": ["Verb", "Conjunction", "Adverb", "Adjective"],
      "correct": "D",
      "explanation": "Adjectives modify or describe nouns and pronouns."
    },
  
    {
      "question": "explanation:D  Break the ice means to do or say something that makes people who do not know each other feel more comfortable:e.g I tried to break the ice by talking to the people",
      "options": [
        "A.Not surprising",
        "B.Traffic mishap",
        "C.Nothing weird",
        "D.Seeing strange"
      ],
      "correct": "A",
      "explanation": "No wonder is a phrase that means “it is not surprising”."
    },
    {
      "question": "37.ACQUAINTANCE mean a person whom:",
      "options": [
        "A.One love but whom one can’t marry",
        "B.One knows but who isn’t a close friend",
        "C.One can depend on for help in hour of need",
        "D.One can hire for attempting a question paper"
      ],
      "correct": "B",
      "explanation": "An acquaintance is a person one knows slightly, but who is not a close friend."
    },
    {
      "question": "38.“no wonder” implies:",
      "options": [
        "A.Not surprising",
        "B.Traffic mishap",
        "C.Nothing weird",
        "D.Seeing strange"
      ],
      "correct": "A",
      "explanation": "No wonder is a phrase that means “it is not surprising”."
    },
    {
      "question": "39. AMICABLE is nearly opposite in meaning to:",
      "options": ["A.Amiable", "B. Hostile", "C. Indispensable", "D. Inimical"],
      "correct": "B",
      "explanation": "Amicable is an adjective used for someone who is friendly. Its opposite is hateful or hostile (aggressive)."
    },
    {
      "question": "40. He’s grieving his deceased father.",
      "options": ["A At", "B. For", "C.On", "D. Over"],
      "correct": "B",
      "explanation": "Grieve means “to feel very sad, especially because somebody has died”. “For” is used when grieving for people. “over” is used when grieving for things."
    },
    {
      "question": "41. The boys got __the bus at the terminal.",
      "options": ["A. From", "B.Of", "C. Off", "D. All"],
      "correct": "C",
      "explanation": "Get off means to leave a place."
    },
    {
      "question": "42. The thief ran the street to the other side and hide under the bridge.",
      "options": ["A. Over", "B. Across", "C. Along", "D. Beside"],
      "correct": "B",
      "explanation": "When talking about going from one side of the street to the other, we use the preposition “across”."
    },
    {
      "question": "43. He was seen to school:",
      "options": ["A. went", "B. going", "C.go", "D. gone"],
      "correct": "B",
      "explanation": "This is a sentence of Past continuous tense, which always uses 4t form of verb, here “going”. Sub + was/were + 4th form of verb+ object."
    },
    {
      "question": "44. linsist statement.",
      "options": ["A. For", "B. At", "C.On", "D.In"],
      "correct": "C",
      "explanation": "The standard preposition to use after insist is “on”. For example “I insist on knowing the truth”"
    },
    {
      "question": "45. The president on TV tonight.",
      "options": [
        "A. Speaks",
        "B. Will speak",
        "C. Has spoken",
        "D. Is speaking"
      ],
      "correct": "B",
      "explanation": "We use “will” for future events that have not happened yet."
    },
    {
      "question": "46.You are called names by him.",
      "options": [
        "A.He’s calling your name",
        "B. He called your name.",
        "C. He calls your names",
        "D. He has been calling your names",
        "E. Not change"
      ],
      "correct": "C",
      "explanation": "The question statement is of present simple tense in passive voice, we have to change in to active voice. In the present simple, the passive is: am / is / are + past participle (34 form of the verb). We have to simple convert it into active version of present simple tense (subject + 1sr form of verb + object)."
    },
    {
      "question": "47.Why have you broken this jug?",
      "options": [
        "A. Why this jug has been broken by you?",
        "B. Why has this jug been broken by you?",
        "C. Why have this jug been broken by you?",
        "D. Why had this jug been broken by you?",
        "E.Not change"
      ],
      "correct": "B",
      "explanation": "1) Convert the object of the Assertive Sentence into the subject of the Passive Voice Sentence.  2) Use the helping verb have been/ has been according to the subject of the Passive Voice Sentence.  3) Use 3t form of the Verb.  4) Then use the word “by”, to show the doer. 5) Then convert the subject of the Active Voice sentence into the object of the Passive Voice sentence.  6) In the end, add the remaining words if there are any in the Active Voice Sentence."
    },
    {
      "question": "48. The principal has forbidden smoking on the campus.",
      "options": [
        "A. Smoking has been forbidden on the campus by the principal",
        "B. Smoking had been forbidden on the campus by the principal",
        "C. Smoking was being forbidden on the campus by the principal",
        "D.Itis forbidden by the principal to smoke in the camps",
        "E. Not change"
      ],
      "correct": "A",
      "explanation": "In the present perfect form with the passive, we always use ‘has/have been’ + the past participle form”."
    },
    {
      "question": "49. The students will go camping _ the vacations.",
      "options": ["A At", "B. During", "C. For", "D.In"],
      "correct": "B",
      "explanation": "The preposition “during” is used for talking about going somewhere in the middle of vacation or holidays"
    },
    {
      "question": "50. When she comes senses, she asked to see her son.",
      "options": ["A.In", "B.To", "C. At", "D. Into"],
      "correct": "B",
      "explanation": "The phrase “coming to senses” means regaining consciousness or waking up."
    },
    {
      "question": "51. She is very nice to look:",
      "options": ["A. At", "B.By", "C. Beside", "D. On"],
      "correct": "A",
      "explanation": "“nice to look at” is a phrase used it to describe something that is pleasing to the eye, or generally attractive"
    },
    {
      "question": "52. Allah, The Almighty, has blessed him a son.",
      "options": ["A. By", "B. Along", "C.From", "D.With"],
      "correct": "D",
      "explanation": "Blessed with means “granted a good thing”"
    },
    {
      "question": "Seeing you again.",
      "options": ["On", "By", "To", "At"],
      "correct": "D",
      "explanation": "“Looking forward to” is followed by “to”."
    },
    {
      "question": "CEMETERY most nearly means?",
      "options": ["Graveyard", "Factory", "System", "Pattern"],
      "correct": "A",
      "explanation": "A cemetery is a graveyard where dead people are buried."
    },
    {
      "question": "He was lying",
      "options": ["Laying", "Lying", "Lieing", "Lied"],
      "correct": "B",
      "explanation": "Lying in bed or on the bed is correct. The verb is ‘to lie’ and its gerund form is lying."
    },
    {
      "question": "In grammatical context ARTICLES allude to?",
      "options": ["A, An, the", "Since & for", "Lexical verb", "Word classes"],
      "correct": "D",
      "explanation": "Articles are used to indicate whether a noun in a sentence is specific or general. In this context, articles allude or suggest word classes, whether they are specific or general words."
    },
    {
      "question": "He waited",
      "options": ["Beyond", "Before", "Until", "Unless"],
      "correct": "C",
      "explanation": "Until is a preposition which means ‘up to the point in time mentioned'."
    },
    {
      "question": "I enjoy tennis",
      "options": ["To play", "Plays", "Playing", "To playing"],
      "correct": "C",
      "explanation": "The part of the sentence “I enjoy to play” is not grammatically correct in written English. Instead, you would need to use the correct structure: “I enjoy playing”."
    },
    {
      "question": "Which one is an auxiliary?",
      "options": ["Did", "At", "On", "By"],
      "correct": "A",
      "explanation": "Did is an auxiliary verb, the rest are prepositions."
    },
    {
      "question": "It's raining cats and dogs",
      "options": ["Few", "A few", "A big number of", "A great deal of"],
      "correct": "A",
      "explanation": "Few” and “a few” are not the same—'few' means “a small number,” and “a few” means “some.” Option A is the most appropriate."
    },
    {
      "question": "Most people agree that kindergarten contributes",
      "options": ["On", "To", "Among", "Of"],
      "correct": "B",
      "explanation": "We use the preposition “to” after the word contribute or contributes."
    },
    {
      "question": "Do you have calculator?",
      "options": ["A", "An", "The", "No article"],
      "correct": "A",
      "explanation": "The indefinite article “ A” should be used in this sentence to talk about a non specific common calculator."
    },
    {
      "question": "The train leaves 7 O'clock, hurry up!",
      "options": ["At", "In", "Around", "Under"],
      "correct": "A",
      "explanation": "We usually use at with clock times and mealtimes."
    },
    {
      "question": "I lived on",
      "options": ["A", "An", "The", "No article"],
      "correct": "D",
      "explanation": "As a rule do not use Article with the names of streets, avenues, lanes, roads, and boulevards."
    },
    {
      "question": "Sher khan is playing",
      "options": ["In", "On", "At", "Off"],
      "correct": "B",
      "explanation": "Use on with days of the week (e.g., on Sunday, on Monday, and so on)."
    },
    {
      "question": "Identify error in the given sentence",
      "options": ["No error", "At everything", "I1do", "He finds fault"],
      "correct": "B",
      "explanation": "The wrong preposition “at” is used."
    },
    {
      "question": "I bought",
      "options": ["A", "An", "The", "No article"],
      "correct": "A",
      "explanation": "Words beginning with consonant sounds take the indefinite article “A”."
    },
    {
      "question": "Identify errors from the given sentence",
      "options": [
        "If your hear",
        "Engaged tone",
        "Replace the receiver and dial again",
        "No error"
      ],
      "correct": "B",
      "explanation": "An article ‘an/the’ should be used before the word ‘engaged tone’."
    },
    {
      "question": "My friend has been living",
      "options": ["On", "At", "In", "Across"],
      "correct": "C",
      "explanation": "We use the preposition “in” when talking about cities, towns, and villages."
    },
    {
      "question": "Find error “Smoking is undoubtedly very injurious for health”.",
      "options": [
        "A. Smoking is undoubtedly",
        "B. Very injurious",
        "C. For health",
        "D. No error"
      ],
      "correct": "C",
      "explanation": "Replace ‘for’ with ‘to’. ‘Injurious’ is followed by preposition ‘to’."
    },
    {
      "question": "Find error “these all mangoes are ripe”: ",
      "options": ["A. These all", "B. Mangoes", "C. Areripe", "D. No error"],
      "correct": "A",
      "explanation": "The sequence of the sentence is wrong. It should be ‘all these mangoes are ripe’."
    },
    {
      "question": "Identify error “Her knowledge in English gives her great advantage over me”.",
      "options": [
        "A. Her knowledge in English",
        "B. Gives her great advantage",
        "C. Over me",
        "D. No error"
      ],
      "correct": "A",
      "explanation": "It is preposition related error. Hence, Her knowledge of English.... Should be used here. E.g He has a wide knowledge of painting and music."
    },
    {
      "question": "Trust God.",
      "options": ["A. On", "B. In", "C. To", "D. None"],
      "correct": "B",
      "explanation": "Usually in is used after trust or ‘believe’. E.g We trust in one God"
    },
    {
      "question": "NEPOTISM means",
      "options": [
        "A. Criticism",
        "B. Socialism",
        "C. Favoritism",
        "D. Monotheism"
      ],
      "correct": "C",
      "explanation": "Nepotism is the practice among those with power or influence of favoring relatives, friends, or associates, especially by giving them jobs or in simple words ‘favoritism’."
    },
    {
      "question": "Add some milk and sugar ________inyour tea.",
      "options": ["A. To", "B. In", "C. On", "D. Into"],
      "correct": "A",
      "explanation": "You should use ‘add to’ when the sentence specifies what is receiving the sugar and ‘add in’(or just ‘add’) when it doesn’t. Compare [have a glass of milk. Can I add sugar to it? Vs I have a glass of milk. Can I add in sugar?"
    },
    {
      "question": "Pakistan has to fight to win the test series from India.",
      "options": [
        "A. Dagger and Sword",
        "B. Lame and Lime",
        "C. Tooth and Nail",
        "D. Sweat and Water"
      ],
      "correct": "C",
      "explanation": "‘To fight tooth and nail’ is an idiom meaning to try hard and make effort to get something you want."
    },
    {
      "question": "The number of friends and family members at the party amazing.",
      "options": ["A. Was", "B. Were", "C. Had", "D. Have had"],
      "correct": "A",
      "explanation": "‘was’ is a singular verb used according to the single unit ‘ the number of’."
    },
    {
      "question": "When she was in the university, she wake up early in the morning.",
      "options": ["A. Can", "B. would", "C. will", "D. would have"],
      "correct": "B",
      "explanation": "When it comes to talking about repeated past actions, ‘would’ is used."
    },
    {
      "question": "Yesterday she got a call from her old friend, the friend __her the whole story.",
      "options": ["A. tell", "B. tells", "C. told", "D. Has been telling"],
      "correct": "C",
      "explanation": "The first clause of the sentence is in past tense, therefore the second clause will also use a past tense verb. Here ‘told’."
    }
  ]
  `

module.exports = { questions }
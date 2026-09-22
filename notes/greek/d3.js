const LESSON_6_VOCABULARY = [
    {
        lemma: "ἀνά", stem: "ανα", type: "preposition",
        translation: "up, going up (in compound verbs)",
        cases: {},                                       // only used in compounds
        breakdown: "PIE *an- (up, on)",
        derivative: "analysis (loosen up), anagram, analogy, anatomy",
        extra: true
    },
    {
        lemma: "παρά", stem: "παρα", type: "preposition",
        translation: "beside, alongside, from beside, with",
        cases: {
            accusative: "come beside / alongside",
            genitive: "come from beside",
            dative: "stay / remain beside (with / upon)"
        },
        breakdown: "Root *per- (forward, through) → 'alongside'",
        derivative: "parallel (alongside each other), paramedic, parasite, paradox"
    },
    {
        lemma: "ἐπί", stem: "επι", type: "preposition",
        translation: "above, movement on/ upon, in the time of/ during (time), stay on / upon",
        cases: {
            accusative: "movement on / upon",
            genitive: "in the time of / during / on",
            dative: "stay on / upon"
        },
        breakdown: "PIE *epi (at, near, on)",
        derivative: "epiphany (showing upon/revelation), epidemic, epilogue, episode"
    },
    {
        lemma: "διά", stem: "δια", type: "preposition",
        translation: "because of, through",
        cases: {
            accusative: "because of",
            genitive: "through"
        },
        breakdown: "From dís (two, split) → 'split in two, across, through'",
        derivative: "diameter (measurement across/through), diagonal, diagnosis, dialogue"
    },
    {
        lemma: "μετά", stem: "μετα", type: "preposition",
        translation: "after, with",
        cases: {
            accusative: "after",
            genitive: "with"
        },
        breakdown: "PIE *me- (in middle of) → 'among', 'beyond', 'after'",
        derivative: "metamorphosis (change beyond shape), metaphor, metaphysics"
    },
    {
        lemma: "ὑπέρ", stem: "υπερ", type: "preposition",
        translation: "above, on behalf of",
        cases: {
            accusative: "above",
            genitive: "on behalf of"
        },
        breakdown: "PIE *uper (over, above)",
        derivative: "hyperactive (over/above active), hyperbole, hyperlink",
        extra: true
    },
    {
        lemma: "ὑπό", stem: "υπο", type: "preposition",
        translation: "under, by (agent)",
        cases: {
            accusative: "under",
            genitive: "by (agent)"
        },
        breakdown: "PIE *upo (under, below)",
        derivative: "hypothermia (under normal temp), hypothesis, hypocrite"
    },
    {
        lemma: "κατά", stem: "κατα", type: "preposition",
        translation: "going down, according to, against",
        cases: {
            accusative: "according to / against",
            genitive: "against"
        },
        breakdown: "PIE *kmt- (down, along)",
        derivative: "catastrophe (overturning downward), catalogue, catapult, category"
    },
    {
        lemma: "περί", stem: "περι", type: "preposition",
        translation: "about, around, concerning",
        cases: {
            accusative: "about, around",
            genitive: "concerning"
        },
        breakdown: "PIE *per- (around, passing through)",
        derivative: "perimeter (measure around), periscope, peripheral, period"
    },
    {
        lemma: "πρός", stem: "προς", type: "preposition",
        translation: "to, towards, with",
        cases: {
            accusative: "to, towards / with"
        },
        breakdown: "Extended form of πρό (forward) → 'facing toward'",
        derivative: "prosody (sung to/with music), prosthesis (addition placed onto)"
    },
    {
        lemma: "εἰς", stem: "εις", type: "preposition",
        translation: "to, into, for",
        cases: {
            accusative: "to, into / for"
        },
        breakdown: "Proto-Greek *ens (from en + directional suffix)",
        derivative: "eisegesis (reading one's own meaning into a text)"
    },
    {
        lemma: "ἀπό", stem: "απο", type: "preposition",
        translation: "from, away from",
        cases: {
            genitive: "from, away from"
        },
        breakdown: "PIE *apo- (off, away from)",
        derivative: "apology (excuse from charge), apostle (one sent out), apocalypse, apostrophe"
    },
    {
        lemma: "ἐκ", stem: "εκ", type: "preposition",
        translation: "from, out of",
        cases: {
            genitive: "from, out of"
        },
        breakdown: "PIE *eghs (out, out of)",
        derivative: "exodus (out of), exegesis (interpretation), exorcism (casting out demons), ecstasy (taking away from oneself)"
    },
    {
        lemma: "πρό", stem: "προ", type: "preposition",
        translation: "before (time / place)",
        cases: {
            genitive: "before (of time / place)"
        },
        breakdown: "PIE *pro- (forward, before)",
        derivative: "prologue (spoken before), prognosis, program, problem"
    },
    {
        lemma: "ἐνώπιον",
        stem: "ἐνὤψ",
        type: "preposition",
        translation: "before (place) // in front of, before",
        cases: {
            genitive: "before (place) / in front of"
        },
        breakdown: "ἐν (in) + ὤψ (eye/face) → 'in the eye/sight of'",
        derivative: "enophthalmos",
        adverb: true
    },
    {
        lemma: "ἔμπροσθεν", stem: "ἐν + πρός", type: "preposition",
        translation: "before (place) // in front of, forward, before",
        cases: {
            genitive: "before (place) / in front of"
        },
        breakdown: "ἐν + πρός + -θεν → 'in front toward'",
        derivative: "empros- (anatomical/directional prefix relative to front)",
        adverb: true
    },
    {
        lemma: "ὀπίσω", stem: "οπισω", type: "preposition",
        translation: "behind, after",
        cases: {
            genitive: "behind / after"
        },
        breakdown: "Related to ὄπισθεν (behind) from PIE *opi-",
        derivative: "opisthokont (cell with flagellum at rear), opisthodomos (rear room of temple)",
        adverb: true
    },
    {
        lemma: "ἔξω", stem: "εξω", type: "preposition",
        translation: "outside, out from",
        cases: {
            genitive: "outside, out from"
        },
        breakdown: "ἐξ (out of) + adverbial suffix -ω",
        derivative: "exotic (from outside), exoskeleton, exothermic",
        adverb: true
    },
    {
        lemma: "χωρίς", stem: "χωρις", type: "preposition",
        translation: "apart from",
        cases: {
            genitive: "apart from"
        },
        breakdown: "From χώρα (open space) → 'at a separate place'",
        derivative: "chorology (study of spatial distribution)",
        adverb: true
    },
    {
        lemma: "ἄχρι", stem: "αχρι", type: "preposition",
        translation: "until, as far as",
        cases: {
            genitive: "until, as far as"
        },
        breakdown: "Root ak- (point, edge) → 'up to the sharp edge/end'",
        derivative: "achristic (functional grammatical marker)"
    },
    {
        lemma: "ἕως", stem: "εως", type: "preposition",
        translation: "until, as far as",
        cases: {
            genitive: "until, as far as"
        },
        breakdown: "Proto-Greek *yāwos (so long as, until)",
        derivative: "eos (dawn, temporal origin)"
    },
    {
        lemma: "ἐν", stem: "εν", type: "preposition",
        translation: "in, among",
        cases: {
            dative: "in, among"
        },
        breakdown: "PIE *en (in, within)",
        derivative: "energy (work in action), enthusiasm (having god inside), empathy, endemic"
    },
    {
        lemma: "σύν", stem: "συν", type: "preposition",
        translation: "with",
        cases: {
            dative: "with"
        },
        breakdown: "PIE *ksun (together with)",
        derivative: "symmetry (measuring together), synchronize (time together), synergy, synthesis"
    },

    /* ---------- nouns (unchanged) ---------- */
    {
        lemma: "ἡμέρα",
        stem: "ημερ",
        type: "noun",
        translation: "day",
        declension: 1,
        breakdown: "PIE *āmer- (day)",
        derivative: "ephemeral (lasting for a day)"
    },
    {
        lemma: "καρδία",
        stem: "καρδι",
        type: "noun",
        translation: "heart",
        declension: 1,
        breakdown: "PIE *kērd- (heart)",
        derivative: "cardiac, cardiology, electrocardiogram"
    },
    {
        lemma: "ὁδός",
        stem: "οδ",
        type: "noun",
        translation: "way, road",
        declension: 2,
        forms: [
            { word: "ὁδός", code: "NNSF" }, { word: "ὁδόν", code: "NASF" }, { word: "ὁδοῦ", code: "NGSF" }, { word: "ὁδῷ", code: "NDSF" }, { word: "ὁδοί", code: "NNPF" }, { word: "ὁδοούς", code: "NAPF" }, { word: "ὁδῶν", code: "NGPF" }, { word: "ὁδοῖς", code: "NDPF" }
        ],
        breakdown: "PIE *sedh- (go, walk, path)",
        derivative: "method (way of inquiry), exodus (way out), period, odometer"
    },
    {
        lemma: "οἶκος",
        stem: "οικ",
        type: "noun",
        translation: "house, household",
        declension: 2,
        breakdown: "PIE *weik- (house, village, dwelling)",
        derivative: "economy (house management), ecology, ecumenism"
    },
    {
        lemma: "ψυχή",
        stem: "ψυχ",
        type: "noun",
        translation: "soul, life",
        declension: 1,
        breakdown: "From ψύχω (psychō: to blow, cool, breathe)",
        derivative: "psychology, psychic, psychiatry, psychosomatic"
    }
];

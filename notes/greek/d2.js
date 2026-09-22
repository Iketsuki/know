// dictionary.js
const LESSON_2_VOCABULARY = [
    {
        lemma: "βάλλω",
        stem: "βαλλ",
        type: "omega",
        translation: "throw",
        breakdown: "PIE *gʷel- (to throw, reach)",
        derivative: "ballistics (study of thrown projectiles), symbol (throw together), parable, problem"
    },
    {
        lemma: "λέγω",
        stem: "λεγ",
        type: "omega",
        translation: "say",
        breakdown: "PIE *leǵ- (to gather, choose, speak)",
        derivative: "lexicon (word collection), dialogue, monologue, logic, dyslexia"
    },
    {
        lemma: "λύω",
        stem: "λυ",
        type: "omega",
        translation: "loosen, untie",
        breakdown: "PIE *leu- (to loosen, cut off, sever)",
        derivative: "analysis (loosen apart), catalysis, paralysis, electrolyte"
    },
    {
        lemma: "βλέπω",
        stem: "βλεπ",
        type: "omega",
        translation: "see, look at",
        breakdown: "Root blep- (gaze, look)",
        derivative: "blepharitis (inflammation of eyelid, from related βλέφαρον)"
    },
    {
        lemma: "γινώσκω",
        stem: "γινωσκ",
        type: "omega",
        translation: "know",
        breakdown: "PIE *ǵneh₃- (know) + gi- (reduplication) + -sk- (inchoative)",
        derivative: "gnosis (spiritual knowledge), diagnosis, agnostic, prognosis"
    },
    {
        lemma: "γράφω",
        stem: "γραφ",
        type: "omega",
        translation: "write",
        breakdown: "PIE *gerbʰ- (to scratch, carve)",
        derivative: "graphic, biography, autograph, telegraph, calligraphy"
    },
    {
        lemma: "ἐγείρω",
        stem: "εγειρ",
        type: "omega",
        translation: "raise up",
        breakdown: "PIE *eǵer- (to wake up, rouse)",
        derivative: "egeria (inspiring guide, from figurative awakening)"
    },
    {
        lemma: "εὑρίσκω",
        stem: "ευρισκ",
        type: "omega",
        translation: "find, discover",
        breakdown: "Root eur- (find) + -sk- (inchoative suffix)",
        derivative: "eureka ('I have found it!'), heuristic (learning through discovery)"
    },
    {
        lemma: "κρίνω",
        stem: "κριν",
        type: "omega",
        translation: "judge",
        breakdown: "PIE *krei- (to sieve, separate, decide)",
        derivative: "criterion (standard of judgment), critic, crisis, hypocrite"
    },
    {
        lemma: "λαλέω",
        stem: "λαλε",
        type: "epsilon_contract",
        translation: "speak",
        breakdown: "Onomatopoeic root lal- (chatter, babble)",
        derivative: "echolalia (repeating spoken words), glossolalia (speaking in tongues)"
    },
    {
        lemma: "λαμβάνω",
        stem: "λαμβαν",
        type: "omega",
        translation: "take, receive",
        breakdown: "Root lab- + -m- (nasal infix) + -an- (suffix)",
        derivative: "lemma (taken premise), epilepsy (seizure / taken upon), narcolepsy"
    },
    {
        lemma: "ὁράω",
        stem: "ὁρα",
        type: "alpha_contract",
        translation: "see",
        breakdown: "PIE *wer- (to watch, guard, perceive)",
        derivative: "panorama (all-seeing view), diorama"
    },
    {
        lemma: "ποιέω",
        stem: "ποιε",
        type: "epsilon_contract",
        translation: "do/make/work",
        breakdown: "PIE *kʷei- (to make, shape, create)",
        derivative: "poem (thing made), poet, poetics, hematopoiesis"
    },
    {
        lemma: "σῴζω",
        stem: "σωζ",
        type: "omega",
        translation: "save",
        breakdown: "From σῶος (swos: safe, sound) + -izo suffix",
        derivative: "Soter (savior), soteriology (study of salvation)"
    },
    {
        lemma: "καί",
        type: "conjunction",
        translation: "and, even, also",
        breakdown: "Proto-Greek connecting particle *kai",
        derivative: "hen kai pan ('one and all' philosophical formula)"
    },
    {
        lemma: "ἀλλά",
        type: "conjunction",
        translation: "but",
        breakdown: "Neuter plural of ἄλλος (allos: other) → 'otherwise'",
        derivative: "allergy, allegory, allopathy (from root allos)"
    },
    {
        lemma: "ἀλλ\'",
        type: "conjunction",
        translation: "but",
        breakdown: "Elided form of ἀλλά (from ἄλλος: other)",
        derivative: "allergy, allegory"
    },
    {
        lemma: "δέ",
        type: "conjunction",
        translation: "and, now, but",
        breakdown: "Weak adversity/continuative particle *de",
        derivative: "syndetic, asyndeton (sentence without conjunctions)"
    },
    {
        lemma: "οὐ",
        type: "adverb",
        translation: "no, not",
        breakdown: "PIE negation particle *oi-kʷid",
        derivative: "Utopia (ou 'no' + topos 'place' = no-place)"
    },
    {
        lemma: "οὐχ",
        type: "adverb",
        translation: "no, not",
        breakdown: "Variant of οὐ before rough-breathing vowels",
        derivative: "Utopia"
    },
    {
        lemma: "οὐκ",
        type: "adverb",
        translation: "no, not",
        breakdown: "Variant of οὐ before smooth-breathing vowels",
        derivative: "Utopia"
    },
    {
        lemma: "ἀγαπάω",
        stem: "αγαπα",
        type: "alpha_contract",
        translation: "love",
        extra: true,
        breakdown: "Root agap- (esteem, hold in high regard)",
        derivative: "Agape (unconditional divine love)"
    },
    {
        lemma: "ἀποστέλλω",
        stem: "αποστελλ",
        type: "omega",
        translation: "send",
        extra: true,
        breakdown: "ἀπό (apo: away from) + στέλλω (stello: send, set)",
        derivative: "apostle (one sent out), apostolic"
    },
    {
        lemma: "μαρτυρέω",
        stem: "μαρτυρε",
        type: "epsilon_contract",
        translation: "bear witness, testify",
        extra: true,
        breakdown: "From μάρτυς (martys: witness, mindful person)",
        derivative: "martyr (witness by death), martyrdom, martyrology"
    },
    {
        lemma: "γεννάω",
        stem: "γεννα",
        type: "alpha_contract",
        translation: "beget, give birth",
        extra: true,
        breakdown: "From γένος (genos: offspring, family) / PIE *genh₁-",
        derivative: "genesis, gene, genetics, generation, genealogy"
    },
    {
        lemma: "ἐσθίω",
        stem: "εσθι",
        type: "omega",
        translation: "eat",
        extra: true,
        breakdown: "PIE *ed- (eat) + present stem suffix",
        derivative: "esophagus (food-carrier), edible (via Latin cognate edere)"
    },
    {
        lemma: "ζάω",
        stem: "ζα",
        type: "alpha_contract",
        translation: "live",
        extra: true,
        breakdown: "PIE *gʷeih₃- (to live)",
        derivative: "zoo, zoology, zodiac, protozoa"
    },
    {
        lemma: "ζητέω",
        stem: "ζητε",
        type: "epsilon_contract",
        translation: "seek",
        extra: true,
        breakdown: "Root zē- (search, inquire)",
        derivative: "Zetetic (investigative procedure)"
    },
    {
        lemma: "μετανοέω",
        stem: "μετανοε",
        type: "epsilon_contract",
        translation: "repent",
        extra: true,
        breakdown: "μετά (meta: change/after) + νοέω (noeō: think, from νοῦς mind)",
        derivative: "metanoia (transformative change of heart/mind)"
    },
    {
        lemma: "παρακαλέω",
        stem: "παρακαλε",
        type: "epsilon_contract",
        translation: "comfort, encourage",
        extra: true,
        breakdown: "παρά (para: beside) + καλέω (kaleō: call)",
        derivative: "Paraclete (one called alongside to help, advocate/comforter)"
    },
    {
        lemma: "πλανάω",
        stem: "πλανα",
        type: "alpha_contract",
        translation: "cause to wander",
        extra: true,
        breakdown: "From πλάνης (planēs: wanderer)",
        derivative: "planet (wandering celestial body), planetarium"
    },
    {
        lemma: "πληρόω",
        stem: "πληρο",
        type: "omicron_contract",
        translation: "fill, fulfil",
        extra: true,
        breakdown: "From πλήρης (plērēs: full) / PIE *pleh₁- (fill)",
        derivative: "plethora (abundance/fullness), pleroma"
    },
    {
        lemma: "τηρέω",
        stem: "τηρε",
        type: "epsilon_contract",
        translation: "keep, observe",
        extra: true,
        breakdown: "From τηρός (tēros: guard, watcher)",
        derivative: "theorem (via related θεώρημα: careful observation)"
    },
    {
        lemma: "τιμάω",
        stem: "τιμα",
        type: "alpha_contract",
        translation: "honour",
        extra: true,
        breakdown: "From τιμή (timē: honor, value, worth)",
        derivative: "Timothy (honoring God), Timocracy (rule by honorable/wealthy)"
    },
    {
        lemma: "φανερόω",
        stem: "φανερο",
        type: "omicron_contract",
        translation: "reveal, show",
        extra: true,
        breakdown: "From φαίνω (phainō: bring to light, make visible)",
        derivative: "phantom, phenomenon, epiphany, diaphanous"
    },
    {
        lemma: "φιλέω",
        stem: "φιλε",
        type: "epsilon_contract",
        translation: "love, like",
        extra: true,
        breakdown: "From φίλος (philos: beloved, friend)",
        derivative: "philosophy, philanthropy, Philadelphia"
    }
];

const LESSON_3_VOCABULARY = [
    {
        lemma: "ἄγγελος",
        stem: "ἀγγελ",
        type: "noun",
        translation: "angel, messenger",
        declension: 2,
        breakdown: "Root angel- (messenger, envoy)",
        derivative: "angel, angelic, evangelist"
    },
    {
        lemma: "ἀδελφός",
        stem: "ἀδελφ",
        type: "noun",
        translation: "brother",
        declension: 2,
        breakdown: "α- (same) + δελφύς (delphys: womb) → 'from the same womb'",
        derivative: "Philadelphia (city of brotherly love)"
    },
    {
        lemma: "ἄνθρωπος",
        stem: "ἀνθρωπ",
        type: "noun",
        translation: "man, human",
        declension: 2,
        breakdown: "ἀνήρ (man) + ὤψ (face) → 'human-faced creature'",
        derivative: "anthropology, misanthrope, philanthropy"
    },
    {
        lemma: "ἀπόστολος",
        stem: "ἀποστολ",
        type: "noun",
        translation: "apostle",
        declension: 2,
        breakdown: "ἀπό (apo: away) + στέλλω (stello: send)",
        derivative: "apostle, apostolic"
    },
    {
        lemma: "θεός",
        stem: "θε",
        type: "noun",
        translation: "God",
        declension: 2,
        breakdown: "PIE *dhes- (sacred/god)",
        derivative: "theology, atheist, monotheism, polytheism, Theodore"
    },
    {
        lemma: "κόσμος",
        stem: "κοσμ",
        type: "noun",
        translation: "world",
        declension: 2,
        breakdown: "Root kosm- (order, arrangement, adornment)",
        derivative: "cosmos, cosmetic, cosmic, cosmonaut, microcosm"
    },
    {
        lemma: "κύριος",
        stem: "κυρι",
        type: "noun",
        translation: "lord, master, sir",
        declension: 2,
        breakdown: "From κῦρος (kyros: supreme power, authority)",
        derivative: "Kyrie eleison, church (via Proto-Germanic *kirika < kyriakon)"
    },
    {
        lemma: "λαός",
        stem: "λα",
        type: "noun",
        translation: "people",
        declension: 2,
        breakdown: "Proto-Greek *lawos (people, body of men)",
        derivative: "laity, layperson, liturgy (public work of the people)"
    },
    {
        lemma: "λόγος",
        stem: "λογ",
        type: "noun",
        translation: "word, message",
        declension: 2,
        breakdown: "From λέγω (legō: speak, gather)",
        derivative: "logic, biology, dialogue, theology, prologue"
    },
    {
        lemma: "νόμος",
        stem: "νομ",
        type: "noun",
        translation: "law, principle",
        declension: 2,
        breakdown: "From νέμω (nemō: distribute, assign)",
        derivative: "autonomy, economy, astronomy, taxonomy"
    },
    {
        lemma: "χριστός",
        stem: "χριστ",
        type: "noun",
        translation: "Christ",
        declension: 2,
        breakdown: "From χρίω (chriō: to anoint with oil)",
        derivative: "Christ, Christian, chrism"
    },
    {
        lemma: "δαιμόνιον",
        stem: "δαιμονι",
        type: "noun",
        translation: "demon",
        declension: 2,
        breakdown: "Diminutive of δαίμων (daimōn: divine power, spirit)",
        derivative: "demon, demonic, demonology"
    },
    {
        lemma: "ἔργον",
        stem: "ἐργ",
        type: "noun",
        translation: "work, deed",
        forms: [
            { word: "ἔργον", code: "NNSN" },
            { word: "ἔργα", code: "NNPN" },
            { word: "ἔργου", code: "NGSN" },
            { word: "ἔργῳ", code: "NDSN" }
        ],
        declension: 2,
        breakdown: "PIE *werǵ- (to work)",
        derivative: "ergonomics, energy, synergy, allergy"
    },
    {
        lemma: "εὐαγγέλιον",
        stem: "εὐαγγελι",
        type: "noun",
        translation: "gospel",
        declension: 2,
        breakdown: "εὖ (eu: good) + ἄγγελος (angelos: messenger)",
        derivative: "evangel, evangelical, evangelism"
    },
    {
        lemma: "σημεῖον",
        stem: "σημει",
        type: "noun",
        translation: "sign, miracle, omen",
        declension: 2,
        breakdown: "From σῆμα (sēma: sign, mark)",
        derivative: "semiotics, semantic"
    },
    {
        lemma: "τέκνον",
        stem: "τεκν",
        type: "noun",
        translation: "child",
        declension: 2,
        breakdown: "From τίκτω (tiktō: bring forth, bear child)",
        derivative: "technical (via related τέχνη: craft/child of mind)"
    },
    {
        lemma: "ὁ",
        stem: "ὁ",
        type: "article",
        translation: "the",
        forms: [
            { word: "ὁ", code: "DNSM" }, { word: "οἱ", code: "DNPM" }, { word: "τοῦ", code: "DGSM" }, { word: "τῶν", code: "DGPM" }, { word: "τῷ", code: "DDSM" }, { word: "τοῖς", code: "DDPM" }, { word: "τόν", code: "DASM" }, { word: "τούς", code: "DAPM" }, { word: "ἡ", code: "DNSF" }, { word: "αἱ", code: "DNPF" }, { word: "τῆς", code: "DGSF" }, { word: "τῶν", code: "DGPF" }, { word: "τῇ", code: "DDSF" }, { word: "ταῖς", code: "DDPF" }, { word: "τήν", code: "DASF" }, { word: "τάς", code: "DAPF" }, { word: "τό", code: "DNSN" }, { word: "τά", code: "DNPN" }, { word: "τοῦ", code: "DGSN" }, { word: "τῶν", code: "DGPN" }, { word: "τῷ", code: "DDSN" }, { word: "τοῖς", code: "DDPN" }, { word: "τό", code: "DASN" }, { word: "τά", code: "DAPN" }
        ],
        breakdown: "PIE demonstrative root *so- / *to-",
        derivative: "the, that (cognate via Proto-Indo-European *so/*to)"
    },
    {
        lemma: "ἀργύριον",
        stem: "αργυρι",
        type: "noun",
        translation: "silver, money",
        declension: 2,
        extra: true,
        breakdown: "From ἄργυρος (argyros: silver) / PIE *arg- (shining, white)",
        derivative: "Argentina (land of silver), Ag (chemical symbol for silver)"
    },
    {
        lemma: "βιβλίον",
        stem: "βιβλι",
        type: "noun",
        translation: "book, scroll",
        declension: 2,
        extra: true,
        breakdown: "Diminutive of βύβλος (byblos: papyrus scroll)",
        derivative: "bible, bibliography, bibliophile"
    },
    {
        lemma: "διάκονος",
        stem: "διακον",
        type: "noun",
        translation: "servant, deacon",
        declension: 2,
        extra: true,
        breakdown: "διά (dia: through) + κόνις (konis: dust) → 'one kicking up dust while serving'",
        derivative: "deacon, diaconate"
    },
    {
        lemma: "διδάσκαλος",
        stem: "διδασκαλ",
        type: "noun",
        translation: "teacher",
        declension: 2,
        extra: true,
        breakdown: "From διδάσκω (didaskō: teach) / PIE *dek- (accept, learn)",
        derivative: "didactic (instructive), didactics"
    },
    {
        lemma: "Θεός",
        stem: "θε",
        type: "noun",
        translation: "God",
        declension: 2,
        extra: true,
        breakdown: "PIE *dhes- (god/sacred)",
        derivative: "theology, pantheism"
    },
    {
        lemma: "Ἱεροσόλυμα",
        stem: "ιεροσολυμ",
        type: "noun",
        translation: "Jerusalem",
        declension: 2,
        extra: true,
        breakdown: "Hellenized Hebrew Yerushalaim + ἱερός (hieros: holy)",
        derivative: "Jerusalem"
    },
    {
        lemma: "Ἰσραήλ",
        stem: "ισραηλ",
        type: "noun",
        translation: "Israel",
        declension: 2,
        extra: true,
        breakdown: "Hebrew Yisra'el ('one who strives with God')",
        derivative: "Israel, Israelite"
    },
    {
        lemma: "λίθος",
        stem: "λιθ",
        type: "noun",
        translation: "stone",
        declension: 2,
        extra: true,
        breakdown: "Pre-Greek origin lithos (stone)",
        derivative: "lithograph, monolith, Paleolithic, megalith"
    },
    {
        lemma: "παιδίον",
        stem: "παιδι",
        type: "noun",
        translation: "child, infant",
        declension: 2,
        extra: true,
        breakdown: "Diminutive of παῖς (pais: child)",
        derivative: "pediatrics, pedagogy"
    },
    {
        lemma: "πλοῖον",
        stem: "πλοι",
        type: "noun",
        translation: "boat",
        declension: 2,
        extra: true,
        breakdown: "From πλέω (pleō: to sail, float)",
        derivative: "pleuston (organisms floating on surface of water)"
    },
    {
        lemma: "πρεσβύτερος",
        stem: "πρεσβυτερ",
        type: "noun",
        translation: "elder, old person",
        declension: 2,
        extra: true,
        breakdown: "Comparative form of πρέσβυς (presbys: old man)",
        derivative: "Presbyterian, priest (via Latin presbyter)"
    },
    {
        lemma: "πρόβατον",
        stem: "προβατ",
        type: "noun",
        translation: "sheep",
        declension: 2,
        extra: true,
        breakdown: "πρό (pro: forward) + βαίνω (bainō: walk) → 'that which walks forward / flock'",
        derivative: "probatic (pertaining to sheep)"
    },
    {
        lemma: "τόπος",
        stem: "τοπ",
        type: "noun",
        translation: "place",
        declension: 2,
        extra: true,
        breakdown: "Uncertain origin; spatial position",
        derivative: "topic, topography, Utopia, topology"
    },
    {
        lemma: "Φαρισαῖος",
        stem: "φαρισαι",
        type: "noun",
        translation: "Pharisee",
        declension: 2,
        extra: true,
        breakdown: "From Aramaic perashya / Hebrew parush ('separated one')",
        derivative: "Pharisee, Pharisaic"
    },
    {
        lemma: "φίλος",
        stem: "φιλ",
        type: "noun",
        translation: "friend",
        declension: 2,
        extra: true,
        breakdown: "Root phil- (dear, beloved, friend)",
        derivative: "philosophy, philanthropist, bibliophile"
    }
];

const LESSON_4_VOCABULARY = [
    {
        lemma: "ἀγάπη",
        stem: "ἀγαπ",
        type: "noun",
        translation: "love",
        declension: 1,
        breakdown: "From ἀγαπάω (agapaō: to love, esteem)",
        derivative: "Agape"
    },
    {
        lemma: "ἁμαρτία",
        stem: "ἁμαρτι",
        type: "noun",
        translation: "sin",
        declension: 1,
        breakdown: "a- (not) + μέρος (meros: part, share) → 'missing the mark'",
        derivative: "hamartia (tragic flaw in literature)"
    },
    {
        lemma: "ἀνήρ",
        stem: "ἀνδρ",
        type: "noun",
        translation: "man, husband",
        forms: [
            { word: "ἀνήρ", code: "NNSM" }, { word: "ἄνδρα", code: "NASM" }, { word: "ἀνδρός", code: "NGSM" }, { word: "ἀνδρί", code: "NDSM" }, { word: "ἄνδρες", code: "NNPM" }, { word: "ἄνδρας", code: "NAPM" }, { word: "ἀνδρῶν", code: "NGPM" }, { word: "ἀνδράσι", code: "NDPM" }
        ],
        declension: 3,
        breakdown: "PIE *ner- (man, vital strength)",
        derivative: "android (man-like robot), Andrew, androgen"
    },
    {
        lemma: "γυνή",
        stem: "γυναικ",
        type: "noun",
        translation: "woman, wife",
        forms: [
            { word: "γυνή", code: "NNSF" }, { word: "γυναῖκα", code: "NASF" }, { word: "γυναικός", code: "NGSF" }, { word: "γυναικί", code: "NDSF" }, { word: "γυναῖκες", code: "NNPF" }, { word: "γυναῖκας", code: "NAPF" }, { word: "γυναικῶν", code: "NGPF" }, { word: "γυναιξί", code: "NDPF" }
        ],
        declension: 3,
        breakdown: "PIE *gʷenh₂- (woman, female)",
        derivative: "gynecology, misogyny, gynoid"
    },
    {
        lemma: "δόξα",
        stem: "δοξ",
        type: "noun",
        translation: "glory",
        declension: 1,
        breakdown: "From δοκέω (dokeō: to think, seem good)",
        derivative: "doxology, orthodox, paradox, dogma"
    },
    {
        lemma: "ἐκκλησία",
        stem: "ἐκκλησι",
        type: "noun",
        translation: "church, assembly",
        declension: 1,
        breakdown: "ἐκ (ek: out) + καλέω (kaleō: call) → 'called-out assembly'",
        derivative: "ecclesiastical, Ecclesiastes"
    },
    {
        lemma: "ζωή",
        stem: "ζω",
        type: "noun",
        translation: "life",
        declension: 1,
        breakdown: "From ζάω (zaō: to live)",
        derivative: "zoology, protozoa, Zoe"
    },
    {
        lemma: "μαθητής",
        stem: "μαθητ",
        type: "noun",
        translation: "disciple",
        declension: 3,
        breakdown: "From μανθάνω (manthanō: learn, discover)",
        derivative: "mathematics, polymath"
    },
    {
        lemma: "πατήρ",
        stem: "πατρ",
        type: "noun",
        translation: "father",
        forms: [
            { word: "πατήρ", code: "NNSM" }, { word: "πατέρα", code: "NASM" }, { word: "πατρός", code: "NGSM" }, { word: "πατρί", code: "NDSM" }, { word: "πατέρες", code: "NNPM" }, { word: "πατέρας", code: "NAPM" }, { word: "πατέρων", code: "NGPM" }, { word: "πατράσι", code: "NDPM" }
        ],
        declension: 3,
        breakdown: "PIE *ph₂tḗr (father)",
        derivative: "paternal, patriarch, patron, patriot"
    },
    {
        lemma: "πίστις",
        stem: "πιστε",
        type: "noun",
        translation: "faith, faithfulness",
        forms: [
            { word: "πίστις", code: "NNSF" }, { word: "πίστιν", code: "NASF" }, { word: "πίστεως", code: "NGSF" }, { word: "πίστει", code: "NDSF" }, { word: "πίστεις", code: "NNPF" }, { word: "πίστεις", code: "NAPF" }, { word: "πίστεων", code: "NGPF" }, { word: "πίστεσι", code: "NDPF" }
        ],
        declension: 3,
        breakdown: "From πείθω (peithō: persuade, trust)",
        derivative: "epistemic (related via trust/conviction)"
    },
    {
        lemma: "πνεῦμα",
        stem: "πνευματ",
        type: "noun",
        translation: "spirit, wind",
        forms: [
            { word: "πνεῦμα", code: "NNSN" }, { word: "πνεῦμα", code: "NASN" }, { word: "πνεύματος", code: "NGSN" }, { word: "πνεύματι", code: "NDSN" }, { word: "πνεύματα", code: "NNPN" }, { word: "πνεύματα", code: "NAPN" }, { word: "πνευμάτων", code: "NGPN" }, { word: "πνεύμασι", code: "NDPN" }
        ],
        declension: 3,
        breakdown: "From πνέω (pneō: blow, breathe)",
        derivative: "pneumatic, pneumonia, pneumatology"
    },
    {
        lemma: "σάρξ",
        stem: "σαρκ",
        type: "noun",
        translation: "flesh",
        forms: [
            { word: "σάρξ", code: "NNSF" }, { word: "σάρκα", code: "NASF" }, { word: "σαρκός", code: "NGSF" }, { word: "σαρκί", code: "NDSF" }, { word: "σάρκες", code: "NNPF" }, { word: "σάρκας", code: "NAPF" }, { word: "σαρκῶν", code: "NGPF" }, { word: "σαρξί", code: "NDPF" }
        ],
        declension: 3,
        breakdown: "PIE *twek- (skin, flesh)",
        derivative: "sarcophagus (flesh-eater), sarcoma"
    },
    {
        lemma: "Ἰησοῦς",
        stem: "ἰησου",
        type: "noun",
        translation: "Jesus",
        forms: [
            { word: "Ἰησοῦς", code: "NNSM" }, { word: "Ἰησοῦν", code: "NASM" }, { word: "Ἰησοῦ", code: "NGSM" }, { word: "Ἰησοῦ", code: "NDSM" }
        ],
        breakdown: "From Hebrew Yeshua / Joshua ('Yahweh saves')",
        derivative: "Jesus, Jesuit"
    },
    {
        lemma: "ἀλήθεια",
        stem: "αληθει",
        type: "noun",
        translation: "truth",
        declension: 1,
        extra: true,
        breakdown: "a- (not) + λήθω/λανθάνω (hide) → 'unhiddenness, reality'",
        derivative: "Alethea (given name), alethic logic"
    },
    {
        lemma: "ἀρχή",
        stem: "αρχ",
        type: "noun",
        translation: "beginning",
        declension: 1,
        extra: true,
        breakdown: "From ἄρχω (archō: to begin, rule)",
        derivative: "monarchy, archaeology, architect, archetype"
    },
    {
        lemma: "γῆ",
        stem: "γη",
        type: "noun",
        translation: "earth, land",
        declension: 1,
        extra: true,
        breakdown: "Proto-Greek *gā (earth)",
        derivative: "geology, geography, geometry, Gaia"
    },
    {
        lemma: "θέλημα",
        stem: "θεληματ",
        type: "noun",
        translation: "will, desire",
        forms: [
            { "word": "θέλημα", "code": "NNSN" }, { "word": "θέλημα", "code": "NASN" }, { "word": "θελήματος", "code": "NGSN" }, { "word": "θελήματι", "code": "NDSN" }, { "word": "θελήματα", "code": "NNPN" }, { "word": "θελήματα", "code": "NAPN" }, { "word": "θελημάτων", "code": "NGPN" }, { "word": "θελήμασι", "code": "NDPN" }
        ],
        declension: 3,
        extra: true,
        breakdown: "From θέλω (thelō: to wish, will, desire)",
        derivative: "Thelema (philosophical rule/will)"
    },
    {
        lemma: "ἱερεύς",
        stem: "ιερευ",
        type: "noun",
        translation: "priest",
        forms: [
            { "word": "ἱερεύς", "code": "NNSM" }, { "word": "ἱερέα", "code": "NASM" }, { "word": "ἱερέως", "code": "NGSM" }, { "word": "ἱερεῖ", "code": "NDSM" }, { "word": "ἱερεῖς", "code": "NNPM" }, { "word": "ἱερέας", "code": "NAPM" }, { "word": "ἱερέων", "code": "NGPM" }, { "word": "ἱερεῦσι", "code": "NDPM" }
        ],
        declension: 3,
        extra: true,
        breakdown: "From ἱερός (hieros: sacred, holy)",
        derivative: "hierarchy, hieroglyph"
    },
    {
        lemma: "μήτηρ",
        stem: "μητρ",
        type: "noun",
        translation: "mother",
        forms: [
            { "word": "μήτηρ", "code": "NNSF" }, { "word": "μητέρα", "code": "NASF" }, { "word": "μητρός", "code": "NGSF" }, { "word": "μητρί", "code": "NDSF" }, { "word": "μητέρες", "code": "NNPF" }, { "word": "μητέρας", "code": "NAPF" }, { "word": "μητέρων", "code": "NGPF" }, { "word": "μητράσι", "code": "NDPF" }
        ],
        declension: 3,
        extra: true,
        breakdown: "PIE *méh₂tēr (mother)",
        derivative: "maternal, matriarch, metropolis (mother city)"
    },
    {
        lemma: "γραφή",
        stem: "γραφ",
        type: "noun",
        translation: "writing (Scripture)",
        declension: 1,
        extra: true,
        breakdown: "From γράφω (graphō: write, scratch)",
        derivative: "graphic, Scripture, paragraph"
    },
    {
        lemma: "διαθήκη",
        stem: "διαθηκ",
        type: "noun",
        translation: "covenant",
        declension: 1,
        extra: true,
        breakdown: "διά (dia: through) + τίθημι (tithēmi: place, set) → 'testament, settlement'",
        derivative: "diathesis (constitutional condition)"
    },
    {
        lemma: "διδαχή",
        stem: "διδαχ",
        type: "noun",
        translation: "teaching",
        declension: 1,
        extra: true,
        breakdown: "From διδάσκω (didaskō: teach)",
        derivative: "Didache (Teaching of the Twelve Apostles)"
    },
    {
        lemma: "δικαιοσύνη",
        stem: "δικαιοσυν",
        type: "noun",
        translation: "righteousness",
        declension: 1,
        extra: true,
        breakdown: "From δίκαιος (dikaios: righteous, right)",
        derivative: "syndic, dicast"
    },
    {
        lemma: "εἰρήνη",
        stem: "ειρην",
        type: "noun",
        translation: "peace",
        declension: 1,
        extra: true,
        breakdown: "Uncertain root; personified goddess Irene",
        derivative: "Irene, irenic (peace-promoting)"
    },
    {
        lemma: "ἐξουσία",
        stem: "εξουσια",
        type: "noun",
        translation: "authority, power",
        declension: 1,
        extra: true,
        breakdown: "ἐξ (ex: out of) + οὐσία (ousia: being, substance) → 'inner power/authority'",
        derivative: "exousia (theological term for divine power)"
    },
    {
        lemma: "πνεῦμα",
        stem: "πνευματ",
        type: "noun",
        translation: "spirit, wind",
        forms: [
            { "word": "πνεῦμα", "code": "NNSN" }, { "word": "πνεῦμα", "code": "NASN" }, { "word": "πνεύματος", "code": "NGSN" }, { "word": "πνεύματι", "code": "NDSN" }, { "word": "πνεύματα", "code": "NNPN" }, { "word": "πνεύματα", "code": "NAPN" }, { "word": "πνευμάτων", "code": "NGPN" }, { "word": "πνεύμασι", "code": "NDPN" }
        ],
        declension: 3,
        extra: true,
        breakdown: "From πνέω (pneō: blow, breathe)",
        derivative: "pneumatic, pneumonia"
    },
    {
        lemma: "προφήτης",
        stem: "προφητ",
        type: "noun",
        translation: "prophet, preacher",
        declension: 1,
        extra: true,
        breakdown: "πρό (pro: before/forth) + φημί (phēmi: speak) → 'one who speaks forth'",
        derivative: "prophet, prophetic, prophecy"
    },
    {
        lemma: "σωτηρία",
        stem: "σωτηρια",
        type: "noun",
        translation: "salvation",
        declension: 1,
        extra: true,
        breakdown: "From σωτήρ (sōtēr: savior, deliverer)",
        derivative: "soteriology (doctrine of salvation)"
    },
    {
        lemma: "φωνή",
        stem: "φων",
        type: "noun",
        translation: "voice, sound",
        declension: 1,
        extra: true,
        breakdown: "PIE *bheh₂- (to speak, sound)",
        derivative: "phonics, telephone, phonograph, symphony"
    },
    {
        lemma: "φῶς",
        stem: "φωτ",
        type: "noun",
        translation: "light",
        forms: [
            { "word": "φῶς", "code": "NNSN" }, { "word": "φῶς", "code": "NASN" }, { "word": "φωτός", "code": "NGSN" }, { "word": "φωτί", "code": "NDSN" }, { "word": "φῶτα", "code": "NNPN" }, { "word": "φῶτα", "code": "NAPN" }, { "word": "φώτων", "code": "NGPN" }, { "word": "φωσί", "code": "NDPN" }
        ],
        declension: 3,
        extra: true,
        breakdown: "PIE *bheh₂- (to shine)",
        derivative: "photograph, photon, photosynthesis"
    },
    {
        lemma: "χαρά",
        stem: "χαρ",
        type: "noun",
        translation: "joy",
        declension: 1,
        extra: true,
        breakdown: "From χαίρω (chairō: rejoice, be glad)",
        derivative: "Charis, Eucharist (thanksgiving)"
    },
    {
        lemma: "χάρις",
        stem: "χαριτ",
        type: "noun",
        translation: "grace",
        forms: [
            { "word": "χάρις", "code": "NNSF" }, { "word": "χάριν", "code": "NASF" }, { "word": "χάριτος", "code": "NGSF" }, { "word": "χάριτι", "code": "NDSF" }, { "word": "χάριτες", "code": "NNPF" }, { "word": "χάριτας", "code": "NAPF" }, { "word": "χαρίτων", "code": "NGPF" }, { "word": "χάρισι", "code": "NDPF" }
        ],
        declension: 3,
        extra: true,
        breakdown: "From χαίρω (chairō: rejoice, favor)",
        derivative: "charity, charisma, charismatic"
    }
];

const LESSON_5_VOCABULARY = [
    {
        lemma: "ἀγαθός",
        stem: "ἀγαθ",
        type: "adjective",
        translation: "good",
        declension: 2,
        breakdown: "PIE *ag- (good, noble, fitting)",
        derivative: "Agatha (good person)"
    },
    {
        lemma: "ἅγιος",
        stem: "ἁγι",
        type: "adjective",
        translation: "holy, set apart",
        declension: 2,
        breakdown: "From ἅζομαι (hazomai: revere, stand in awe)",
        derivative: "hagiography (saint biography), hagiology"
    },
    {
        lemma: "δίκαιος",
        stem: "δικαι",
        type: "adjective",
        translation: "righteous, just",
        declension: 2,
        breakdown: "From δίκη (dikē: right, custom, justice)",
        derivative: "dicast (ancient juror), syndic"
    },
    {
        lemma: "μικρός",
        stem: "μικρ",
        type: "adjective",
        translation: "small, little",
        declension: 2,
        breakdown: "Proto-Greek *smikros (small, little)",
        derivative: "microscope, microcosm, microphone, micron"
    },
    {
        lemma: "πᾶς",
        stem: "παντ",
        type: "adjective",
        translation: "every",
        declension: 3,
        forms: [
            { word: "πᾶς", code: "JNSM", declension: 3 }, { word: "πάντα", code: "JASM", declension: 3 }, { word: "παντός", code: "JGSM", declension: 3 }, { word: "παντί", code: "JDSM", declension: 3 }, { word: "πᾶσα", code: "JNSF", declension: 1 }, { word: "πᾶσαν", code: "JASF", declension: 1 }, { word: "πάσης", code: "JGSF", declension: 1 }, { word: "πάσῃ", code: "JDSF", declension: 1 }, { word: "πᾶν", code: "JNSN", declension: 3 }, { word: "πᾶν", code: "JASN", declension: 3 }, { word: "παντός", code: "JGSN", declension: 3 }, { word: "παντί", code: "JDSN", declension: 3 }
        ],
        breakdown: "PIE *pant- (all, whole)",
        derivative: "pantheism, panorama, pandemic, Pan-American"
    },
    {
        lemma: "πάντες",
        stem: "παντ",
        type: "adjective",
        translation: "all",
        declension: 3,
        forms: [
            { word: "πάντες", code: "JNPM", declension: 3 }, { word: "πάντας", code: "JAPM", declension: 3 }, { word: "πάντων", code: "JGPM", declension: 3 }, { word: "πᾶσι", code: "JDPM", declension: 3 }, { word: "πᾶσαι", code: "JNPF", declension: 1 }, { word: "πάσας", code: "JAPF", declension: 1 }, { word: "πασῶν", code: "JGPF", declension: 1 }, { word: "πάσαις", code: "JDPF", declension: 1 }, { word: "πάντα", code: "JNPN", declension: 3 }, { word: "πάντα", code: "JAPN", declension: 3 }, { word: "πάντων", code: "JGPN", declension: 3 }, { word: "πᾶσι", code: "JDPN", declension: 3 }
        ],
        breakdown: "Plural form of πᾶς (pant-)",
        derivative: "panoply, Pantheon"
    },
    {
        lemma: "ἀγαπητός",
        stem: "αγαπητ",
        type: "adjective",
        translation: "beloved",
        extra: true,
        breakdown: "Adjectival form from ἀγαπάω (love)",
        derivative: "Agape"
    },
    {
        lemma: "αἰώνιος",
        stem: "αιωνι",
        type: "adjective",
        translation: "everlasting",
        extra: true,
        breakdown: "From αἰών (aiōn: age, eternal span)",
        derivative: "aeon, eon, eonian"
    },
    {
        lemma: "ἀκάθαρτος",
        stem: "ακαθαρτ",
        type: "adjective",
        translation: "unclean",
        extra: true,
        breakdown: "α- (un-) + καθαρός (clean) → 'unclean, impure'",
        derivative: "catharsis (via catharus/pure)"
    },
    {
        lemma: "ἄξιος",
        stem: "αξι",
        type: "adjective",
        translation: "worthy",
        extra: true,
        breakdown: "From ἄγω (weigh, lead) → 'having weight, worthy'",
        derivative: "axiom, axiomatic"
    },
    {
        lemma: "δεύτερος",
        stem: "δευτερ",
        type: "adjective",
        translation: "second",
        extra: true,
        breakdown: "PIE *duwo (two) → second",
        derivative: "Deuteronomy (second law), deuteragonist"
    },
    {
        lemma: "δίκαιος",
        stem: "δικαι",
        type: "adjective",
        translation: "righteous",
        extra: true,
        breakdown: "From δίκη (justice, right)",
        derivative: "dicast, syndic"
    },
    {
        lemma: "δυνατός",
        stem: "δυνατ",
        type: "adjective",
        translation: "powerful",
        extra: true,
        breakdown: "From δύναμαι (to be able, power)",
        derivative: "dynamic, dynamite, dynasty"
    },
    {
        lemma: "ἰσχυρός",
        stem: "ισχυρ",
        type: "adjective",
        translation: "strong",
        extra: true,
        breakdown: "From ἰσχύς (ischys: strength, force)",
        derivative: "ischuria (retention/forceful holding)"
    },
    {
        lemma: "καθαρός",
        stem: "καθαρ",
        type: "adjective",
        translation: "clean",
        extra: true,
        breakdown: "Uncertain root; pure, unmixed",
        derivative: "catharsis, Cathar, cathartic"
    },
    {
        lemma: "καινός",
        stem: "καιν",
        type: "adjective",
        translation: "new",
        extra: true,
        breakdown: "PIE *ken- (fresh, new)",
        derivative: "Cenozoic (new life era), kainotype"
    },
    {
        lemma: "κακός",
        stem: "κακ",
        type: "adjective",
        translation: "bad",
        forms: [
            { word: "κακός", code: "JNSM" }, { word: "κακὴ", code: "JNSF" }, { word: "κακὸν", code: "JNSN" },
            { word: "κακὸν", code: "JASM" }, { word: "κακὴν", code: "JASF" }, { word: "κακὸν", code: "JASN" },
            { word: "κακοῦ", code: "JGSM" }, { word: "κακῆς", code: "JGSF" }, { word: "κακοῦ", code: "JGSN" },
            { word: "κακῷ", code: "JDSM" }, { word: "κακῇ", code: "JDSF" }, { word: "κακῷ", code: "JDSN" },
            { word: "κακοί", code: "JNPM" }, { word: "κακαί", code: "JNPF" }, { word: "κακά", code: "JNPN" },
            { word: "κακοὺς", code: "JAPM" }, { word: "κακαῖς", code: "JAPF" }, { word: "κακὰ", code: "JAPN" },
            { word: "κακῶν", code: "JGPM" }, { word: "κακῶν", code: "JGPF" }, { word: "κακῶν", code: "JGPN" },
            { word: "κακοῖς", code: "JDPM" }, { word: "κακαῖς", code: "JDPF" }, { word: "κακοῖς", code: "JDPN" }
        ],
        extra: true,
        breakdown: "PIE *kakka- (foul, bad)",
        derivative: "cacophony (harsh sound), kakistocracy"
    },
    {
        lemma: "μακάριος",
        stem: "μακαρι",
        type: "adjective",
        translation: "blessed, happy",
        extra: true,
        breakdown: "From μάκαρ (blessed, happy)",
        derivative: "Macarius, Macarism (pronouncing beatitudes)"
    },
    {
        lemma: "νέος",
        stem: "νε",
        type: "adjective",
        translation: "new",
        extra: true,
        breakdown: "PIE *newos (new, young)",
        derivative: "neologism, neon, neonatal, neophyte"
    },
    {
        lemma: "πιστός",
        stem: "πιστ",
        type: "adjective",
        translation: "faithful",
        extra: true,
        breakdown: "From πείθω (trust, persuade)",
        derivative: "faith (via Latin fides, cognate), epistemic"
    },
    {
        lemma: "πλούσιος",
        stem: "πλουσι",
        type: "adjective",
        translation: "rich",
        extra: true,
        breakdown: "From πλοῦτος (wealth, riches)",
        derivative: "plutocracy (rule by the wealthy), Plutus"
    },
    {
        lemma: "ἕκαστος",
        stem: "εκαστ",
        type: "adjective",
        translation: "each",
        extra: true,
        breakdown: "From ἑκάς (hekas: far off, separate)",
        derivative: "hecastotheism (worship of separate individual deities)"
    },
    {
        lemma: "ἔσχατος",
        stem: "εσχατ",
        type: "adjective",
        translation: "last",
        extra: true,
        breakdown: "Superlative from ἐξ (out) → 'outermost, last'",
        derivative: "eschatology (study of end times)"
    },
    {
        lemma: "ἕτερος",
        stem: "ετερ",
        type: "adjective",
        translation: "other, another, different",
        extra: true,
        breakdown: "PIE *soteros (the other of two)",
        derivative: "heterosexual, heterodox, heterogeneous"
    },
    {
        lemma: "πονηρός",
        stem: "πονηρ",
        type: "adjective",
        translation: "evil",
        extra: true,
        breakdown: "From πόνος (ponos: toil, pain, labor)",
        derivative: "poneros (theology: active malignancy/evil)"
    },
    {
        lemma: "πτωχός",
        stem: "πτωχ",
        type: "adjective",
        translation: "poor",
        extra: true,
        breakdown: "From πτώσσω (cower, crouch as a beggar)",
        derivative: "ptochology (study of pauperism/poverty)"
    },
    {
        lemma: "τρίτος",
        stem: "τριτ",
        type: "adjective",
        translation: "third",
        extra: true,
        breakdown: "From τρεῖς (three)",
        derivative: "tertiary, tritagonist, tritium"
    },
    {
        lemma: "τυφλός",
        stem: "τυφλ",
        type: "adjective",
        translation: "blind",
        extra: true,
        breakdown: "PIE *dheubh- (smoky, dark, blind)",
        derivative: "typhlitis, typhlops (blind snake genus)"
    },
    {
        lemma: "εμί",
        stem: "εσ",
        type: "verb",
        translation: "be, I am",
        extra: true,
        forms: [
            { word: "εἰμι", code: "VAPI1S" }, { word: "εἶ", code: "VAPI2S" }, { word: "ἐστιν", code: "VAPI3S" },
            { word: "ἐσμεν", code: "VAPI1P" }, { word: "ἐστε", code: "VAPI2P" }, { word: "εἰσιν", code: "VAPI3P" },
            { word: "ἤμην", code: "VAII1S" }, { word: "ἦς", code: "VAII2S" }, { word: "ἦσθα", code: "VAII2S" },
            { word: "ἦν", code: "VAII3S" }, { word: "ἦμεν", code: "VAII1P" }, { word: "ἤμεθα", code: "VAII1P" },
            { word: "ἦτε", code: "VAII2P" }, { word: "ἦσαν", code: "VAII3P" }
        ],
        breakdown: "PIE *es-mi (I am)",
        derivative: "essence, entity (via Latin sum / esse from same PIE root)"
    },
    {
        lemma: "πλείων",
        stem: "πλειον",
        type: "adjective",
        translation: "more",
        extra: true,
        forms: [
            { word: "πλείων", code: "NNSM" }, { word: "πλείων", code: "NNSF" }, { word: "πλεῖον", code: "NNSN" },
            { word: "πλείονα", code: "NASM" }, { word: "πλείονα", code: "NASF" }, { word: "πλεῖον", code: "NASN" },
            { word: "πλείονος", code: "NGSM" }, { word: "πλείονος", code: "NGSF" }, { word: "πλείονος", code: "NGSN" },
            { word: "πλείονι", code: "NDSM" }, { word: "πλείονι", code: "NDSF" }, { word: "πλείονι", code: "NDSN" },
            { word: "πλείονες", code: "NNPM" }, { word: "πλείονες", code: "NNPF" }, { word: "πλείονα", code: "NNPN" },
            { word: "πλείονας", code: "NAPM" }, { word: "πλείονας", code: "NAPF" }, { word: "πλείονα", code: "NAPN" },
            { word: "πλείονων", code: "NGPM" }, { word: "πλείονων", code: "NGPF" }, { word: "πλείονων", code: "NGPN" },
            { word: "πλείοσιν", code: "NDPM" }, { word: "πλείοσιν", code: "NDPF" }, { word: "πλείοσιν", code: "NDPN" }
        ],
        breakdown: "Comparative of πολύς (much) / PIE *pleh₁- (fill)",
        derivative: "Pliocene (more recent geological era), pleonasm"
    },
    {
        lemma: "ἀληθής",
        stem: "αληθεσ",
        type: "adjective",
        translation: "true",
        extra: true,
        forms: [
            { word: "ἀληθής", code: "NNSM" }, { word: "ἀληθής", code: "NNSF" }, { word: "ἀληθές", code: "NNSN" },
            { word: "ἀληθῆ", code: "NASM" }, { word: "ἀληθῆ", code: "NASF" }, { word: "ἀληθές", code: "NASN" },
            { word: "ἀληθοῦς", code: "NGSM" }, { word: "ἀληθοῦς", code: "NGSF" }, { word: "ἀληθοῦς", code: "NGSN" },
            { word: "ἀληθεῖ", code: "NDSM" }, { word: "ἀληθεῖ", code: "NDSF" }, { word: "ἀληθεῖ", code: "NDSN" },
            { word: "ἀληθεῖς", code: "NNPM" }, { word: "ἀληθεῖς", code: "NNPF" }, { word: "ἀληθῆ", code: "NNPN" },
            { word: "ἀληθεῖς", code: "NAPM" }, { word: "ἀληθεῖς", code: "NAPF" }, { word: "ἀληθῆ", code: "NAPN" },
            { word: "ἀληθῶν", code: "NGPM" }, { word: "ἀληθῶν", code: "NGPF" }, { word: "ἀληθῶν", code: "NGPN" },
            { word: "ἀληθέσιν", code: "NDPM" }, { word: "ἀληθέσιν", code: "NDPF" }, { word: "ἀληθέσιν", code: "NDPN" }
        ],
        breakdown: "α- (un-) + λήθω (hide) → 'unhidden, true'",
        derivative: "alethic, Alethea"
    }
];

const LESSON_6_VOCABULARY = [
    {
        lemma: "ἀνά",
        stem: "ανα",
        type: "preposition",
        translation: "up, going up (in compound verbs)",
        extra: true,
        breakdown: "PIE *an- (up, on)",
        derivative: "analysis (loosen up), anagram, analogy, anatomy"
    },
    {
        lemma: "παρά",
        stem: "παρα",
        type: "preposition",
        translation: "come beside/ alongside, from beside, stay/ remain beside, remain with beside",
        breakdown: "Root *per- (forward, through) → 'alongside'",
        derivative: "parallel (alongside each other), paramedic, parasite, paradox"
    },
    {
        lemma: "ἐπί",
        stem: "επι",
        type: "preposition",
        translation: "above, movement on/ upon, in the time of/ during (time), stay on / upon",
        breakdown: "PIE *epi (at, near, on)",
        derivative: "epiphany (showing upon/revelation), epidemic, epilogue, epicenter"
    },
    {
        lemma: "διά",
        stem: "δια",
        type: "preposition",
        translation: "because of, through",
        breakdown: "From dís (two, split) → 'split in two, across, through'",
        derivative: "diameter (measurement across/through), diagonal, diagnosis, dialogue"
    },
    {
        lemma: "μετά",
        stem: "μετα",
        type: "preposition",
        translation: "after, with",
        breakdown: "PIE *me- (in middle of) → 'among', 'beyond', 'after'",
        derivative: "metamorphosis (change beyond shape), metaphor, metaphysics"
    },
    {
        lemma: "ὑπέρ",
        stem: "υπερ",
        type: "preposition",
        translation: "above, on behalf of",
        extra: true,
        breakdown: "PIE *uper (over, above)",
        derivative: "hyperactive (over/above active), hyperbole, hyperlink"
    },
    {
        lemma: "ὑπό",
        stem: "υπο",
        type: "preposition",
        translation: "under, by (agent)",
        breakdown: "PIE *upo (under, below)",
        derivative: "hypothermia (under normal temp), hypothesis, hypocrite"
    },
    {
        lemma: "κατά",
        stem: "κατα",
        type: "preposition",
        translation: "going down, according to, against",
        breakdown: "PIE *kmt- (down, along)",
        derivative: "catastrophe (overturning downward), catalogue, catapult, category"
    },
    {
        lemma: "περί",
        stem: "περι",
        type: "preposition",
        translation: "about, around, concerning",
        breakdown: "PIE *per- (around, passing through)",
        derivative: "perimeter (measure around), periscope, peripheral, period"
    },
    {
        lemma: "πρός",
        stem: "προς",
        type: "preposition",
        translation: "to, towards, with",
        breakdown: "Extended form of πρό (forward) → 'facing toward'",
        derivative: "prosody (sung to/with music), prosthesis (addition placed onto)"
    },
    {
        lemma: "εἰς",
        stem: "εις",
        type: "preposition",
        translation: "to, into, for",
        breakdown: "Proto-Greek *ens (from en + directional suffix)",
        derivative: "eisegesis (reading one's own meaning into a text)"
    },
    {
        lemma: "ἀπό",
        stem: "απο",
        type: "preposition",
        translation: "from, away from",
        breakdown: "PIE *apo- (off, away from)",
        derivative: "apology (statement made away from charge), apostle, apocalypse, apostrophe"
    },
    {
        lemma: "ἐκ",
        stem: "εκ",
        type: "preposition",
        translation: "from, out of",
        breakdown: "PIE *eghs (out, out of)",
        derivative: "exodus (road out), eccentric (out of center), exorcism, ecstasy"
    },
    {
        lemma: "πρό",
        stem: "προ",
        type: "preposition",
        translation: "before (time/ place)",
        breakdown: "PIE *pro- (forward, before)",
        derivative: "prologue (spoken before), prognosis, program, problem"
    },
    {
        lemma: "ἐνώπιον",
        stem: "ἐν (en, in) + ὤψ (ōps, eye/face)",
        type: "preposition",
        translation: "before (place) // in front of, before",
        breakdown: "ἐν (en: in) + ὤψ (ōps: eye/face) → 'in the eye/sight of'",
        derivative: "enophthalmos (recession of eyeball into orbit)"
    },
    {
        lemma: "ἔμπροσθεν",
        stem: "ἐν (en, in) + πρός (pros, toward/forward)",
        type: "preposition",
        translation: "before (place) // in front of, forward, before",
        breakdown: "ἐν (en: in) + πρός (pros: toward) + -θεν (direction suffix) → 'in front toward'",
        derivative: "empros- (anatomical/directional prefix relative to front)"
    },
    {
        lemma: "ὀπίσω",
        stem: "οπισω",
        type: "preposition",
        translation: "behind, after",
        breakdown: "Related to ὄπισθεν (behind) from PIE *opi-",
        derivative: "opisthokont (cell with flagellum at rear), opisthodomos (rear room of temple)"
    },
    {
        lemma: "ἔξω",
        stem: "εξω",
        type: "preposition",
        translation: "outside, out from",
        breakdown: "ἐξ (out of) + adverbial suffix -ω",
        derivative: "exotic (from outside), exoskeleton, exothermic"
    },
    {
        lemma: "χωρις",
        stem: "χωρις",
        type: "preposition",
        translation: "apart from",
        breakdown: "From χώρα (open space, place) → 'at a separate place'",
        derivative: "chorology (study of spatial distribution)"
    },
    {
        lemma: "ἄχρι",
        stem: "αχρι",
        type: "preposition",
        translation: "until, as far as",
        breakdown: "Root ak- (point, edge) → 'up to the sharp edge/end'",
        derivative: "achristic (functional grammatical marker)"
    },
    {
        lemma: "ἕως",
        stem: "εως",
        type: "preposition",
        translation: "until, as far as",
        breakdown: "Proto-Greek *yāwos (so long as, until)",
        derivative: "eos (dawn, temporal origin)"
    },
    {
        lemma: "ἐν",
        stem: "εν",
        type: "preposition",
        translation: "in, among",
        breakdown: "PIE *en (in, within)",
        derivative: "energy (work in action), enthusiasm (having god inside), empathy, endemic"
    },
    {
        lemma: "σύν",
        stem: "συν",
        type: "preposition",
        translation: "with",
        breakdown: "PIE *ksun (together with)",
        derivative: "symmetry (measuring together), synchronize (time together), synergy, synthesis"
    },
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

const DEFAULT_DICTIONARY = [
    ...LESSON_2_VOCABULARY.map(entry => ({ ...entry, lesson: 2 })),
    ...LESSON_3_VOCABULARY.map(entry => ({ ...entry, lesson: 3, declension: entry.declension || 2 })),
    ...LESSON_4_VOCABULARY.map(entry => ({
        ...entry, lesson: 4,
        declension: entry.declension || (['πίστις', 'σάρξ', 'χάρις', 'γυνή', 'πατήρ', 'μητήρ'].includes(entry.lemma) ? 3 : 1)
    })),
    ...LESSON_5_VOCABULARY.map(entry => ({ ...entry, lesson: 5 })),
    ...LESSON_6_VOCABULARY.map(entry => ({ ...entry, lesson: 6 }))
];

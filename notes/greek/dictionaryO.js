// dictionary.js
const LESSON_2_VOCABULARY = [
    { lemma: "βάλλω", stem: "βαλλ", type: "omega", translation: "throw" },
    { lemma: "λέγω", stem: "λεγ", type: "omega", translation: "say" },
    { lemma: "λύω", stem: "λυ", type: "omega", translation: "loosen, untie" },
    { lemma: "βλέπω", stem: "βλεπ", type: "omega", translation: "see, look at" },
    { lemma: "γινώσκω", stem: "γινωσκ", type: "omega", translation: "know" },
    { lemma: "γράφω", stem: "γραφ", type: "omega", translation: "write" },
    { lemma: "ἐγείρω", stem: "εγειρ", type: "omega", translation: "raise up" },
    { lemma: "εὑρίσκω", stem: "ευρισκ", type: "omega", translation: "find, discover" },
    { lemma: "κρίνω", stem: "κριν", type: "omega", translation: "judge" },
    { lemma: "λαλέω", stem: "λαλε", type: "epsilon_contract", translation: "speak" },
    { lemma: "λαμβάνω", stem: "λαμβαν", type: "omega", translation: "take, receive" },
    { lemma: "ὁράω", stem: "ὁρα", type: "alpha_contract", translation: "see" },
    { lemma: "ποιέω", stem: "ποιε", type: "epsilon_contract", translation: "do/make/work" },
    { lemma: "σῴζω", stem: "σωζ", type: "omega", translation: "save" },
    { lemma: "καί", type: "conjunction", translation: "and, even, also" },
    { lemma: "ἀλλά", type: "conjunction", translation: "but" },
    { lemma: "ἀλλ\'", type: "conjunction", translation: "but" },
    { lemma: "δέ", type: "conjunction", translation: "and, now, but" },
    { lemma: "οὐ", type: "adverb", translation: "no, not" },
    { lemma: "οὐχ", type: "adverb", translation: "no, not" },
    { lemma: "οὐκ", type: "adverb", translation: "no, not" },
    { lemma: "ἀγαπάω", stem: "αγαπα", type: "alpha_contract", translation: "love", extra: true },
    { lemma: "ἀποστέλλω", stem: "αποστελλ", type: "omega", translation: "send", extra: true },
    { lemma: "μαρτυρέω", stem: "μαρτυρε", type: "epsilon_contract", translation: "bear witness, testify", extra: true },
    { lemma: "γεννάω", stem: "γεννα", type: "alpha_contract", translation: "beget, give birth", extra: true },
    { lemma: "ἐσθίω", stem: "εσθι", type: "omega", translation: "eat", extra: true },
    { lemma: "ζάω", stem: "ζα", type: "alpha_contract", translation: "live", extra: true },
    { lemma: "ζητέω", stem: "ζητε", type: "epsilon_contract", translation: "seek", extra: true },
    { lemma: "μετανοέω", stem: "μετανοε", type: "epsilon_contract", translation: "repent", extra: true },
    { lemma: "παρακαλέω", stem: "παρακαλε", type: "epsilon_contract", translation: "comfort, encourage", extra: true },
    { lemma: "πλανάω", stem: "πλανα", type: "alpha_contract", translation: "cause to wander", extra: true },
    { lemma: "πληρόω", stem: "πληρο", type: "omicron_contract", translation: "fill, fulfil", extra: true },
    { lemma: "τηρέω", stem: "τηρε", type: "epsilon_contract", translation: "keep, observe", extra: true },
    { lemma: "τιμάω", stem: "τιμα", type: "alpha_contract", translation: "honour", extra: true },
    { lemma: "φανερόω", stem: "φανερο", type: "omicron_contract", translation: "reveal, show", extra: true },
    { lemma: "φιλέω", stem: "φιλε", type: "epsilon_contract", translation: "love, like", extra: true }
];

const LESSON_3_VOCABULARY = [
    { lemma: "ἄγγελος", stem: "ἀγγελ", type: "noun", translation: "angel, messenger", declension: 2 },
    { lemma: "ἀδελφός", stem: "ἀδελφ", type: "noun", translation: "brother", declension: 2 },
    { lemma: "ἄνθρωπος", stem: "ἀνθρωπ", type: "noun", translation: "man, human", declension: 2 },
    { lemma: "ἀπόστολος", stem: "ἀποστολ", type: "noun", translation: "apostle", declension: 2 },
    { lemma: "θεός", stem: "θε", type: "noun", translation: "God", declension: 2 },
    { lemma: "κόσμος", stem: "κοσμ", type: "noun", translation: "world", declension: 2 },
    { lemma: "κύριος", stem: "κυρι", type: "noun", translation: "lord, master, sir", declension: 2 },
    { lemma: "λαός", stem: "λα", type: "noun", translation: "people", declension: 2 },
    { lemma: "λόγος", stem: "λογ", type: "noun", translation: "word, message", declension: 2 },
    { lemma: "νόμος", stem: "νομ", type: "noun", translation: "law, principle", declension: 2 },
    { lemma: "χριστός", stem: "χριστ", type: "noun", translation: "Christ", declension: 2 },
    { lemma: "δαιμόνιον", stem: "δαιμονι", type: "noun", translation: "demon", declension: 2 },
    {
        lemma: "ἔργον", stem: "ἐργ", type: "noun", translation: "work, deed",
        forms: [{ word: "ἔργον", code: "NNSN" }, { word: "ἔργα", code: "NNPN" }, { word: "ἔργου", code: "NGSN" }, { word: "ἔργῳ", code: "NDSN" }], declension: 2
    },
    { lemma: "εὐαγγέλιον", stem: "εὐαγγελι", type: "noun", translation: "gospel", declension: 2 },
    { lemma: "σημεῖον", stem: "σημει", type: "noun", translation: "sign, miracle, omen", declension: 2 },
    { lemma: "τέκνον", stem: "τεκν", type: "noun", translation: "child", declension: 2 },
    {
        lemma: "ὁ", stem: "ὁ", type: "article", translation: "the", forms: [
            { word: "ὁ", code: "DNSM" }, { word: "οἱ", code: "DNPM" }, { word: "τοῦ", code: "DGSM" }, { word: "τῶν", code: "DGPM" }, { word: "τῷ", code: "DDSM" }, { word: "τοῖς", code: "DDPM" }, { word: "τόν", code: "DASM" }, { word: "τούς", code: "DAPM" }, { word: "ἡ", code: "DNSF" }, { word: "αἱ", code: "DNPF" }, { word: "τῆς", code: "DGSF" }, { word: "τῶν", code: "DGPF" }, { word: "τῇ", code: "DDSF" }, { word: "ταῖς", code: "DDPF" }, { word: "τήν", code: "DASF" }, { word: "τάς", code: "DAPF" }, { word: "τό", code: "DNSN" }, { word: "τά", code: "DNPN" }, { word: "τοῦ", code: "DGSN" }, { word: "τῶν", code: "DGPN" }, { word: "τῷ", code: "DDSN" }, { word: "τοῖς", code: "DDPN" }, { word: "τό", code: "DASN" }, { word: "τά", code: "DAPN" }
        ]
    },
    { lemma: "ἀργύριον", stem: "αργυρι", type: "noun", translation: "silver, money", declension: 2, extra: true },
    { lemma: "βιβλίον", stem: "βιβλι", type: "noun", translation: "book, scroll", declension: 2, extra: true },
    { lemma: "διάκονος", stem: "διακον", type: "noun", translation: "servant, deacon", declension: 2, extra: true },
    { lemma: "διδάσκαλος", stem: "διδασκαλ", type: "noun", translation: "teacher", declension: 2, extra: true },
    { lemma: "Θεός", stem: "θε", type: "noun", translation: "God", declension: 2, extra: true },
    { lemma: "Ἱεροσόλυμα", stem: "ιεροσολυμ", type: "noun", translation: "Jerusalem", declension: 2, extra: true },
    { lemma: "Ἰσραήλ", stem: "ισραηλ", type: "noun", translation: "Israel", declension: 2, extra: true },
    { lemma: "λίθος", stem: "λιθ", type: "noun", translation: "stone", declension: 2, extra: true },
    { lemma: "παιδίον", stem: "παιδι", type: "noun", translation: "child, infant", declension: 2, extra: true },
    { lemma: "πλοῖον", stem: "πλοι", type: "noun", translation: "boat", declension: 2, extra: true },
    { lemma: "πρεσβύτερος", stem: "πρεσβυτερ", type: "noun", translation: "elder, old person", declension: 2, extra: true },
    { lemma: "πρόβατον", stem: "προβατ", type: "noun", translation: "sheep", declension: 2, extra: true },
    { lemma: "τέκνον", stem: "τεκν", type: "noun", translation: "child", declension: 2, extra: true },
    { lemma: "τόπος", stem: "τοπ", type: "noun", translation: "place", declension: 2, extra: true },
    { lemma: "Φαρισαῖος", stem: "φαρισαι", type: "noun", translation: "Pharisee", declension: 2, extra: true },
    { lemma: "φίλος", stem: "φιλ", type: "noun", translation: "friend", declension: 2, extra: true }
];

const LESSON_4_VOCABULARY = [
    { lemma: "ἀγάπη", stem: "ἀγαπ", type: "noun", translation: "love", declension: 1 },
    { lemma: "ἁμαρτία", stem: "ἁμαρτι", type: "noun", translation: "sin", declension: 1 },
    {
        lemma: "ἀνήρ", stem: "ἀνδρ", type: "noun", translation: "man, husband", forms: [
            { word: "ἀνήρ", code: "NNSM" }, { word: "ἄνδρα", code: "NASM" }, { word: "ἀνδρός", code: "NGSM" }, { word: "ἀνδρί", code: "NDSM" }, { word: "ἄνδρες", code: "NNPM" }, { word: "ἄνδρας", code: "NAPM" }, { word: "ἀνδρῶν", code: "NGPM" }, { word: "ἀνδράσι", code: "NDPM" }
        ], declension: 3
    },
    {
        lemma: "γυνή", stem: "γυναικ", type: "noun", translation: "woman, wife", forms: [
            { word: "γυνή", code: "NNSF" }, { word: "γυναῖκα", code: "NASF" }, { word: "γυναικός", code: "NGSF" }, { word: "γυναικί", code: "NDSF" }, { word: "γυναῖκες", code: "NNPF" }, { word: "γυναῖκας", code: "NAPF" }, { word: "γυναικῶν", code: "NGPF" }, { word: "γυναιξί", code: "NDPF" }
        ], declension: 3
    },
    { lemma: "δόξα", stem: "δοξ", type: "noun", translation: "glory", declension: 1 },
    { lemma: "ἐκκλησία", stem: "ἐκκλησι", type: "noun", translation: "church, assembly", declension: 1 },
    { lemma: "ζωή", stem: "ζω", type: "noun", translation: "life", declension: 1 },
    { lemma: "μαθητής", stem: "μαθητ", type: "noun", translation: "disciple", declension: 3 },
    {
        lemma: "πατήρ", stem: "πατρ", type: "noun", translation: "father", forms: [
            { word: "πατήρ", code: "NNSM" }, { word: "πατέρα", code: "NASM" }, { word: "πατρός", code: "NGSM" }, { word: "πατρί", code: "NDSM" }, { word: "πατέρες", code: "NNPM" }, { word: "πατέρας", code: "NAPM" }, { word: "πατέρων", code: "NGPM" }, { word: "πατράσι", code: "NDPM" }
        ], declension: 3
    },
    {
        lemma: "πίστις", stem: "πιστε", type: "noun", translation: "faith, faithfulness", forms: [
            { word: "πίστις", code: "NNSF" }, { word: "πίστιν", code: "NASF" }, { word: "πίστεως", code: "NGSF" }, { word: "πίστει", code: "NDSF" }, { word: "πίστεις", code: "NNPF" }, { word: "πίστεις", code: "NAPF" }, { word: "πίστεων", code: "NGPF" }, { word: "πίστεσι", code: "NDPF" }
        ], declension: 3
    },
    {
        lemma: "πνεῦμα", stem: "πνευματ", type: "noun", translation: "spirit, wind", forms: [
            { word: "πνεῦμα", code: "NNSN" }, { word: "πνεῦμα", code: "NASN" }, { word: "πνεύματος", code: "NGSN" }, { word: "πνεύματι", code: "NDSN" }, { word: "πνεύματα", code: "NNPN" }, { word: "πνεύματα", code: "NAPN" }, { word: "πνευμάτων", code: "NGPN" }, { word: "πνεύμασι", code: "NDPN" }
        ], declension: 3
    },
    {
        lemma: "σάρξ", stem: "σαρκ", type: "noun", translation: "flesh", forms: [
            { word: "σάρξ", code: "NNSF" }, { word: "σάρκα", code: "NASF" }, { word: "σαρκός", code: "NGSF" }, { word: "σαρκί", code: "NDSF" }, { word: "σάρκες", code: "NNPF" }, { word: "σάρκας", code: "NAPF" }, { word: "σαρκῶν", code: "NGPF" }, { word: "σαρξί", code: "NDPF" }
        ], declension: 3
    },
    {
        lemma: "Ἰησοῦς", stem: "ἰησου", type: "noun", translation: "Jesus", forms: [
            { word: "Ἰησοῦς", code: "NNSM" }, { word: "Ἰησοῦν", code: "NASM" }, { word: "Ἰησοῦ", code: "NGSM" }, { word: "Ἰησοῦ", code: "NDSM" }
        ]
    },
    { lemma: "ἀλήθεια", stem: "αληθει", type: "noun", translation: "truth", declension: 1, extra: true },
    { lemma: "ἀρχή", stem: "αρχ", type: "noun", translation: "beginning", declension: 1, extra: true },
    { lemma: "γῆ", stem: "γη", type: "noun", translation: "earth, land", declension: 1, extra: true },
    {
        lemma: "θέλημα", stem: "θεληματ", type: "noun", translation: "will, desire", forms: [
            { "word": "θέλημα", "code": "NNSN" }, { "word": "θέλημα", "code": "NASN" }, { "word": "θελήματος", "code": "NGSN" }, { "word": "θελήματι", "code": "NDSN" }, { "word": "θελήματα", "code": "NNPN" }, { "word": "θελήματα", "code": "NAPN" }, { "word": "θελημάτων", "code": "NGPN" }, { "word": "θελήμασι", "code": "NDPN" }
        ], declension: 3, extra: true
    },
    {
        lemma: "ἱερεύς", stem: "ιερευ", type: "noun", translation: "priest", forms: [
            { "word": "ἱερεύς", "code": "NNSM" }, { "word": "ἱερέα", "code": "NASM" }, { "word": "ἱερέως", "code": "NGSM" }, { "word": "ἱερεῖ", "code": "NDSM" }, { "word": "ἱερεῖς", "code": "NNPM" }, { "word": "ἱερέας", "code": "NAPM" }, { "word": "ἱερέων", "code": "NGPM" }, { "word": "ἱερεῦσι", "code": "NDPM" }
        ], declension: 3, extra: true
    },
    {
        lemma: "μήτηρ", stem: "μητρ", type: "noun", translation: "mother", forms: [
            { "word": "μήτηρ", "code": "NNSF" }, { "word": "μητέρα", "code": "NASF" }, { "word": "μητρός", "code": "NGSF" }, { "word": "μητρί", "code": "NDSF" }, { "word": "μητέρες", "code": "NNPF" }, { "word": "μητέρας", "code": "NAPF" }, { "word": "μητέρων", "code": "NGPF" }, { "word": "μητράσι", "code": "NDPF" }
        ], declension: 3, extra: true
    },
    { lemma: "γραφή", stem: "γραφ", type: "noun", translation: "writing (Scripture)", declension: 1, extra: true },
    { lemma: "διαθήκη", stem: "διαθηκ", type: "noun", translation: "covenant", declension: 1, extra: true },
    { lemma: "διδαχή", stem: "διδαχ", type: "noun", translation: "teaching", declension: 1, extra: true },
    { lemma: "δικαιοσύνη", stem: "δικαιοσυν", type: "noun", translation: "righteousness", declension: 1, extra: true },
    { lemma: "εἰρήνη", stem: "ειρην", type: "noun", translation: "peace", declension: 1, extra: true },
    { lemma: "ἐξουσία", stem: "εξουσια", type: "noun", translation: "authority, power", declension: 1, extra: true },
    {
        lemma: "πνεῦμα", stem: "πνευματ", type: "noun", translation: "spirit, wind", forms: [
            { "word": "πνεῦμα", "code": "NNSN" }, { "word": "πνεῦμα", "code": "NASN" }, { "word": "πνεύματος", "code": "NGSN" }, { "word": "πνεύματι", "code": "NDSN" }, { "word": "πνεύματα", "code": "NNPN" }, { "word": "πνεύματα", "code": "NAPN" }, { "word": "πνευμάτων", "code": "NGPN" }, { "word": "πνεύμασι", "code": "NDPN" }
        ], declension: 3, extra: true
    },
    { lemma: "προφήτης", stem: "προφητ", type: "noun", translation: "prophet, preacher", declension: 1, extra: true },
    { lemma: "σωτηρία", stem: "σωτηρια", type: "noun", translation: "salvation", declension: 1, extra: true },
    { lemma: "φωνή", stem: "φων", type: "noun", translation: "voice, sound", declension: 1, extra: true },
    {
        lemma: "φῶς", stem: "φωτ", type: "noun", translation: "light", forms: [
            { "word": "φῶς", "code": "NNSN" }, { "word": "φῶς", "code": "NASN" }, { "word": "φωτός", "code": "NGSN" }, { "word": "φωτί", "code": "NDSN" }, { "word": "φῶτα", "code": "NNPN" }, { "word": "φῶτα", "code": "NAPN" }, { "word": "φώτων", "code": "NGPN" }, { "word": "φωσί", "code": "NDPN" }
        ], declension: 3, extra: true
    },
    { lemma: "χαρά", stem: "χαρ", type: "noun", translation: "joy", declension: 1, extra: true },
    {
        lemma: "χάρις", stem: "χαριτ", type: "noun", translation: "grace", forms: [
            { "word": "χάρις", "code": "NNSF" }, { "word": "χάριν", "code": "NASF" }, { "word": "χάριτος", "code": "NGSF" }, { "word": "χάριτι", "code": "NDSF" }, { "word": "χάριτες", "code": "NNPF" }, { "word": "χάριτας", "code": "NAPF" }, { "word": "χαρίτων", "code": "NGPF" }, { "word": "χάρισι", "code": "NDPF" }
        ], declension: 3, extra: true
    }
];

const LESSON_5_VOCABULARY = [
    { lemma: "ἀγαθός", stem: "ἀγαθ", type: "adjective", translation: "good", declension: 2 },
    { lemma: "ἅγιος", stem: "ἁγι", type: "adjective", translation: "holy, set apart", declension: 2 },
    { lemma: "δίκαιος", stem: "δικαι", type: "adjective", translation: "righteous, just", declension: 2 },
    { lemma: "μικρός", stem: "μικρ", type: "adjective", translation: "small, little", declension: 2 },
    {
        lemma: "πᾶς", stem: "παντ", type: "adjective", translation: "every", declension: 3, forms: [
            { word: "πᾶς", code: "JNSM", declension: 3 }, { word: "πάντα", code: "JASM", declension: 3 }, { word: "παντός", code: "JGSM", declension: 3 }, { word: "παντί", code: "JDSM", declension: 3 }, { word: "πᾶσα", code: "JNSF", declension: 1 }, { word: "πᾶσαν", code: "JASF", declension: 1 }, { word: "πάσης", code: "JGSF", declension: 1 }, { word: "πάσῃ", code: "JDSF", declension: 1 }, { word: "πᾶν", code: "JNSN", declension: 3 }, { word: "πᾶν", code: "JASN", declension: 3 }, { word: "παντός", code: "JGSN", declension: 3 }, { word: "παντί", code: "JDSN", declension: 3 }
        ]
    },
    {
        lemma: "πάντες", stem: "παντ", type: "adjective", translation: "all", declension: 3, forms: [
            { word: "πάντες", code: "JNPM", declension: 3 }, { word: "πάντας", code: "JAPM", declension: 3 }, { word: "πάντων", code: "JGPM", declension: 3 }, { word: "πᾶσι", code: "JDPM", declension: 3 }, { word: "πᾶσαι", code: "JNPF", declension: 1 }, { word: "πάσας", code: "JAPF", declension: 1 }, { word: "πασῶν", code: "JGPF", declension: 1 }, { word: "πάσαις", code: "JDPF", declension: 1 }, { word: "πάντα", code: "JNPN", declension: 3 }, { word: "πάντα", code: "JAPN", declension: 3 }, { word: "πάντων", code: "JGPN", declension: 3 }, { word: "πᾶσι", code: "JDPN", declension: 3 }
        ]
    },
    { lemma: "ἀγαπητός", stem: "αγαπητ", type: "adjective", translation: "beloved", extra: true },
    { lemma: "αἰώνιος", stem: "αιωνι", type: "adjective", translation: "everlasting", extra: true },
    { lemma: "ἀκάθαρτος", stem: "ακαθαρτ", type: "adjective", translation: "unclean", extra: true },
    { lemma: "ἄξιος", stem: "αξι", type: "adjective", translation: "worthy", extra: true },
    { lemma: "δεύτερος", stem: "δευτερ", type: "adjective", translation: "second", extra: true },
    { lemma: "δίκαιος", stem: "δικαι", type: "adjective", translation: "righteous", extra: true },
    { lemma: "δυνατός", stem: "δυνατ", type: "adjective", translation: "powerful", extra: true },
    { lemma: "ἰσχυρός", stem: "ισχυρ", type: "adjective", translation: "strong", extra: true },
    { lemma: "καθαρός", stem: "καθαρ", type: "adjective", translation: "clean", extra: true },
    { lemma: "καινός", stem: "καιν", type: "adjective", translation: "new", extra: true },
    {
        lemma: "κακός", stem: "κακ", type: "adjective", translation: "bad",
        forms: [
            { word: "κακός", code: "JNSM" }, { word: "κακὴ", code: "JNSF" }, { word: "κακὸν", code: "JNSN" },
            { word: "κακὸν", code: "JASM" }, { word: "κακὴν", code: "JASF" }, { word: "κακὸν", code: "JASN" },
            { word: "κακοῦ", code: "JGSM" }, { word: "κακῆς", code: "JGSF" }, { word: "κακοῦ", code: "JGSN" },
            { word: "κακῷ", code: "JDSM" }, { word: "κακῇ", code: "JDSF" }, { word: "κακῷ", code: "JDSN" },
            { word: "κακοί", code: "JNPM" }, { word: "κακαί", code: "JNPF" }, { word: "κακά", code: "JNPN" },
            { word: "κακοὺς", code: "JAPM" }, { word: "κακαῖς", code: "JAPF" }, { word: "κακὰ", code: "JAPN" },
            { word: "κακῶν", code: "JGPM" }, { word: "κακῶν", code: "JGPF" }, { word: "κακῶν", code: "JGPN" },
            { word: "κακοῖς", code: "JDPM" }, { word: "κακαῖς", code: "JDPF" }, { word: "κακοῖς", code: "JDPN" }
        ], extra: true
    },
    { lemma: "μακάριος", stem: "μακαρι", type: "adjective", translation: "blessed, happy", extra: true },
    { lemma: "νέος", stem: "νε", type: "adjective", translation: "new", extra: true },
    { lemma: "πιστός", stem: "πιστ", type: "adjective", translation: "faithful", extra: true },
    { lemma: "πλούσιος", stem: "πλουσι", type: "adjective", translation: "rich", extra: true },
    { lemma: "ἕκαστος", stem: "εκαστ", type: "adjective", translation: "each", extra: true },
    { lemma: "ἔσχατος", stem: "εσχατ", type: "adjective", translation: "last", extra: true },
    { lemma: "ἕτερος", stem: "ετερ", type: "adjective", translation: "other, another, different", extra: true },
    { lemma: "πονηρός", stem: "πονηρ", type: "adjective", translation: "evil", extra: true },
    { lemma: "πτωχός", stem: "πτωχ", type: "adjective", translation: "poor", extra: true },
    { lemma: "τρίτος", stem: "τριτ", type: "adjective", translation: "third", extra: true },
    { lemma: "τυφλός", stem: "τυφλ", type: "adjective", translation: "blind", extra: true },
    {
        lemma: "εμί", stem: "εσ", type: "verb", translation: "be, I am", extra: true, forms: [
            { word: "εἰμι", code: "VAPI1S" }, { word: "εἶ", code: "VAPI2S" }, { word: "ἐστιν", code: "VAPI3S" },
            { word: "ἐσμεν", code: "VAPI1P" }, { word: "ἐστε", code: "VAPI2P" }, { word: "εἰσιν", code: "VAPI3P" },
            { word: "ἤμην", code: "VAII1S" }, { word: "ἦς", code: "VAII2S" }, { word: "ἦσθα", code: "VAII2S" },
            { word: "ἦν", code: "VAII3S" }, { word: "ἦμεν", code: "VAII1P" }, { word: "ἤμεθα", code: "VAII1P" },
            { word: "ἦτε", code: "VAII2P" }, { word: "ἦσαν", code: "VAII3P" }
        ]
    },
    {
        lemma: "πλείων", stem: "πλειον", type: "adjective", translation: "more", extra: true, forms: [
            { word: "πλείων", code: "NNSM" }, { word: "πλείων", code: "NNSF" }, { word: "πλεῖον", code: "NNSN" },
            { word: "πλείονα", code: "NASM" }, { word: "πλείονα", code: "NASF" }, { word: "πλεῖον", code: "NASN" },
            { word: "πλείονος", code: "NGSM" }, { word: "πλείονος", code: "NGSF" }, { word: "πλείονος", code: "NGSN" },
            { word: "πλείονι", code: "NDSM" }, { word: "πλείονι", code: "NDSF" }, { word: "πλείονι", code: "NDSN" },
            { word: "πλείονες", code: "NNPM" }, { word: "πλείονες", code: "NNPF" }, { word: "πλείονα", code: "NNPN" },
            { word: "πλείονας", code: "NAPM" }, { word: "πλείονας", code: "NAPF" }, { word: "πλείονα", code: "NAPN" },
            { word: "πλείονων", code: "NGPM" }, { word: "πλείονων", code: "NGPF" }, { word: "πλείονων", code: "NGPN" },
            { word: "πλείοσιν", code: "NDPM" }, { word: "πλείοσιν", code: "NDPF" }, { word: "πλείοσιν", code: "NDPN" }
        ]
    },
    {
        lemma: "ἀληθής", stem: "αληθεσ", type: "adjective", translation: "true", extra: true, forms: [
            { word: "ἀληθής", code: "NNSM" }, { word: "ἀληθής", code: "NNSF" }, { word: "ἀληθές", code: "NNSN" },
            { word: "ἀληθῆ", code: "NASM" }, { word: "ἀληθῆ", code: "NASF" }, { word: "ἀληθές", code: "NASN" },
            { word: "ἀληθοῦς", code: "NGSM" }, { word: "ἀληθοῦς", code: "NGSF" }, { word: "ἀληθοῦς", code: "NGSN" },
            { word: "ἀληθεῖ", code: "NDSM" }, { word: "ἀληθεῖ", code: "NDSF" }, { word: "ἀληθεῖ", code: "NDSN" },
            { word: "ἀληθεῖς", code: "NNPM" }, { word: "ἀληθεῖς", code: "NNPF" }, { word: "ἀληθῆ", code: "NNPN" },
            { word: "ἀληθεῖς", code: "NAPM" }, { word: "ἀληθεῖς", code: "NAPF" }, { word: "ἀληθῆ", code: "NAPN" },
            { word: "ἀληθῶν", code: "NGPM" }, { word: "ἀληθῶν", code: "NGPF" }, { word: "ἀληθῶν", code: "NGPN" },
            { word: "ἀληθέσιν", code: "NDPM" }, { word: "ἀληθέσιν", code: "NDPF" }, { word: "ἀληθέσιν", code: "NDPN" }
        ]
    }
];

const LESSON_6_VOCABULARY = [
    { lemma: "ἀνά", stem: "ανα", type: "preposition", translation: "up, going up (in compound verbs)", extra: true },
    { lemma: "παρά", stem: "παρα", type: "preposition", translation: "come beside/ alongside, from beside, stay/ remain beside, remain with beside" },
    { lemma: "ἐπί", stem: "επι", type: "preposition", translation: "above, movement on/ upon, in the time of/ during (time), stay on / upon" },
    { lemma: "διά", stem: "δια", type: "preposition", translation: "because of, through" },
    { lemma: "μετά", stem: "μετα", type: "preposition", translation: "after, with" },
    { lemma: "ὑπέρ", stem: "υπερ", type: "preposition", translation: "above, on behalf of", extra: true },
    { lemma: "ὑπό", stem: "υπο", type: "preposition", translation: "under, by (agent)" },
    { lemma: "κατά", stem: "κατα", type: "preposition", translation: "going down, according to, against" },
    { lemma: "περί", stem: "περι", type: "preposition", translation: "about, around, concerning" },
    { lemma: "πρός", stem: "προς", type: "preposition", translation: "to, towards, with" },
    { lemma: "εἰς", stem: "εις", type: "preposition", translation: "to, into, for" },
    { lemma: "ἀπό", stem: "απο", type: "preposition", translation: "from, away from" },
    { lemma: "ἐκ", stem: "εκ", type: "preposition", translation: "from, out of" },
    { lemma: "πρό", stem: "προ", type: "preposition", translation: "before (time/ place)" },
    { lemma: "ἐνώπιον", stem: "ἐν (en, in) + ὤψ (ōps, eye/face)", type: "preposition", translation: "before (place) // in front of, before" },
    { lemma: "ἔμπροσθεν", stem: "ἐν (en, in) + πρός (pros, toward/forward)", type: "preposition", translation: "before (place) // in front of, forward, before" },
    { lemma: "ὀπίσω", stem: "οπισω", type: "preposition", translation: "behind, after" },
    { lemma: "ἔξω", stem: "εξω", type: "preposition", translation: "outside, out from" },
    { lemma: "χωρις", stem: "χωρις", type: "preposition", translation: "apart from" },
    { lemma: "ἄχρι", stem: "αχρι", type: "preposition", translation: "until, as far as" },
    { lemma: "ἕως", stem: "εως", type: "preposition", translation: "until, as far as" },
    { lemma: "ἐν", stem: "εν", type: "preposition", translation: "in, among" },
    { lemma: "σύν", stem: "συν", type: "preposition", translation: "with" },
    { lemma: "ἡμέρα", stem: "ημερ", type: "noun", translation: "day", declension: 1 },
    { lemma: "καρδία", stem: "καρδι", type: "noun", translation: "heart", declension: 1 },
    {
        lemma: "ὁδός", stem: "οδ", type: "noun", translation: "way, road", declension: 2, forms: [
            { word: "ὁδός", code: "NNSF" }, { word: "ὁδόν", code: "NASF" }, { word: "ὁδοῦ", code: "NGSF" }, { word: "ὁδῷ", code: "NDSF" }, { word: "ὁδοί", code: "NNPF" }, { word: "ὁδούς", code: "NAPF" }, { word: "ὁδῶν", code: "NGPF" }, { word: "ὁδοῖς", code: "NDPF" }
        ]
    },
    { lemma: "οἶκος", stem: "οικ", type: "noun", translation: "house, household", declension: 2 },
    { lemma: "ψυχή", stem: "ψυχ", type: "noun", translation: "soul, life", declension: 1 }
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

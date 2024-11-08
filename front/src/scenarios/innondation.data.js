const scenario = {
    nom: "Inondation",
    description:
        "Scenario mettant en scene des inondations dans plusieurs lieux",
    objects: [
        {
            id: 1,
            label: "Bouteille d'eau",
            score: 10,
            cost: 2,
            pos: {
                x: 0,
                y: 0,
            },
            is_success: true,
        },
        {
            id: 2,
            label: "Veste",
            score: 10,
            is_success: true,
            cost: 2,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 3,
            label: "Lunette de soleil",
            score: 10,
            cost: 2,
            is_success: false,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 4,
            label: "Lunette de vue",
            score: 10,
            cost: 2,
            is_success: true,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 5,
            label: "Cle",
            score: 10,
            cost: 2,
            is_success: false,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 6,
            label: "Trousse de secourt",
            score: 10,
            cost: 2,
            is_success: true,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 7,
            label: "Lego",
            score: 10,
            cost: 2,
            is_success: false,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 8,
            label: "XBOX",
            score: 10,
            cost: 2,
            is_success: false,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 9,
            label: "Lampe torche",
            score: 10,
            cost: 2,
            is_success: true,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 10,
            label: "Ballon",
            score: 10,
            cost: 2,
            is_success: false,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 11,
            label: "Chips",
            score: 10,
            cost: 2,
            is_success: true,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 12,
            label: "Radio",
            score: 10,
            cost: 2,
            is_success: true,
            pos: {
                x: 0,
                y: 0,
            },
        },
    ],
    evenements: [
        {
            image: "innondation-1.jpg",
            context:
                'Il fait beau, je suis dehors, maman vient de recevoir une alerte sur son téléphone: Vigilance Orange "pluie-inondations"',
            text: "Vigilance Orange ? Mais il fait si beau...",
            feedback:
                "En cas de vigilance orange, il faut vite rentrer chez soi se mettre à l'abri. La météo est imprévisible, la situation peut très vite s'aggraver.",
            objectifs: [],
            actions: [
                {
                    label: "Je reste dehors, il fait beau, pas de soucis",
                    is_succes: false,
                },
                {
                    label: "Je rentre chez moi pour me mettre à l'abri",
                    is_succes: true,
                },
                {
                    label: "Je vais au cinéma, au moins je serai à l'abri",
                    is_succes: false,
                },
            ],
            avancement: {
                succes: {
                    value: 27,
                    gold: 5,
                },
                echec: {
                    value: -17,
                    gold: 0,
                },
            },
        },
        {
            image: "innondation-2.jpg",
            context:
                "Je suis chez moi, il y a de gros nuages gris dehors, et le vent commence un peu à souffler. Mais il ne pleut pas encore...",
            text: "Je m'ennuie... et si j'allais jouer au foot dehors avec les copains ?",
            feedback:
                "Même si la météo ne semble pas inquiétante, on ne prend pas de risque et on reste à l'abri chez soi. On évite de téléphoner afin de libérer les lignes pour les secours.",
            actions: [
                {
                    label: "J'appelle mon copain pour discuter et passer le temps",
                    is_succes: false,
                },
                {
                    label: "Je vais jouer dehors tant qu'il ne pleut pas encore",
                    is_succes: false,
                },
                {
                    label: "Je reste chez moi et trouve une autre occupation",
                    is_succes: true,
                },
            ],
            avancement: {
                succes: {
                    value: 16,
                    gold: 5,
                },
                echec: {
                    value: -8,
                    gold: 0,
                },
            },
        },
        {
            image: "innondation-3.jpg",
            context:
                "Il pleut très fort dehors, je décide de jouer à la console.",
            text: "Mince ! La console est restée dans la voiture au parking !",
            feedback:
                "En cas de risque d'inondations, il ne faut surtout pas descendre dans les sous-sols ou les parkings souterrains. On ferme bien les portes et fenêtres et on écoute la radio pour se tenir informé auprès des autorités.",
            actions: [
                {
                    label: "Je descend vite au parking chercher ma console",
                    is_succes: false,
                },
                {
                    label: "Je reste chez moi et j'écoute la radio",
                    is_succes: true,
                },
                {
                    label: "J'ouvre la fenêtre pour regarder la pluie",
                    is_succes: false,
                },
            ],
            avancement: {
                succes: {
                    value: 38,
                    gold: 5,
                },
                echec: {
                    value: -21,
                    gold: 0,
                },
            },
        },
        {
            image: "innondation-4.png",
            context:
                "Il y a vraiment beaucoup d'eau dehors, l'eau commence même à rentrer dans la maison !",
            text: "C'est vraiment inquiétant...",
            feedback:
                "Si l'on constate une montée des eaux, on se réfugie en étage, on ne descend pas dans les sous-sols. On évacue uniquement sur ordre des autorités avec son kit d'urgence.",
            actions: [
                {
                    label: "Je monte à l'étage",
                    is_succes: true,
                },
                {
                    label: "Je n'ai pas de soucis à me faire, je suis à l'abri chez moi",
                    is_succes: false,
                },
                {
                    label: "Je monte sur la table à manger",
                    is_succes: false,
                },
            ],
            avancement: {
                succes: {
                    value: 25,
                    gold: 8,
                },
                echec: {
                    value: -15,
                    gold: 0,
                },
            },
        },
    ],
};

export default scenario;

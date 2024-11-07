const scenario = {
    nom: "Innondation",
    description:
        "Scenario mettant en scene des innondation dans plusieurs lieux",
    objects: [
        {
            id: 1,
            label: "Bouteille d'eau",
            score: 10,
            cout: 2,
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
            cout: 2,
            pos: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 3,
            label: "Lunette de soleil",
            score: 10,
            cout: 2,
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
            cout: 2,
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
            cout: 2,
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
            cout: 2,
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
            cout: 2,
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
            cout: 2,
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
            cout: 2,
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
            cout: 2,
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
            cout: 2,
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
            cout: 2,
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
            context: "Maman m'a dit alerte orange !!",
            text: "Tu a oublié ta console dans la voiture",
            feedback:
                "Il est très risqué de se rendre dans un parking lors d'un evenement à risque",
            objectifs: [],
            actions: [
                {
                    label: "Allez la chercher",
                    is_succes: false,
                },
                {
                    label: "Demander à mes parents",
                    is_succes: true,
                },
                {
                    label: "Demander au president",
                    is_succes: false,
                },
            ],
            avancement: {
                succes: {
                    value: 12,
                    gold: 5,
                },
                echec: {
                    value: -10,
                    gold: 5,
                },
            },
        },
        {
            image: "innondation-2.jpg",
            context: "Maman m'a dit alerte orange !!",
            text: "Tu entend les fenetres claquer",
            feedback:
                "Il est très risqué de se rendre dans un parking lors d'un evenement à risque",
            actions: [
                {
                    label: "aller les fermer",
                    is_succes: true,
                },
                {
                    label: "les laisser ouvert",
                    is_succes: false,
                },
            ],
            avancement: {
                succes: {
                    value: 10,
                    gold: 5,
                },
                echec: {
                    value: -10,
                    gold: 5,
                },
            },
        },
    ],
};

export default scenario;

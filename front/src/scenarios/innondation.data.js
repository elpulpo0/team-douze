const scenario = {
    nom: "Innondation",
    description:
        "Scenario mettant en scene des innondation dans plusieurs lieux",
    duree_selection_equipement: 60,
    duree_mission: 600,
    equipements_disponibles: [
        {
            id: 1,
            label: "Bouteille d'eau",
            description: "Utile lors d'un confinement prolongé",
            score: 10,
        },
        {
            id: 1,
            label: "Chargeur",
            description: "Utile lors d'un confinement prolongé",
            score: 10,
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
                    value: 10,
                },
                echec: {
                    value: -10,
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
                },
                echec: {
                    value: -10,
                },
            },
        },
    ],
};

export default scenario;

Units = new Meteor.Collection("landUnits", {
    schema: {
        infantry: {
            type: Number,
            label: "Supplied Infantry",
            max: 200
        },
        armor: {
            type: Number,
            label: "Supplied Armor",
            max: 200
        },
        uInfantry: {
            type: Number,
            label: "Unsupplied Infantry",
            max: 200
        },
        uArmor: {
            type: Number,
            label: "Unsupplied Armor",
            max: 200
        },
    }
});
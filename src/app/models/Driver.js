import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

import conn from "../../config/dbConnection.js";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const DriverSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        cars: [{
            licensePlate: String,
            brand: String
        }],
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        deficiency: {
            type: Boolean,
            required: true
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

DriverSchema.plugin(autoIncrement.plugin, {
    model: "Driver",
    field: "id",
    startAt: 1,
    incrementBy: 1,
});

export default mongoose.model("Driver", DriverSchema);
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import ParkingSpace from "../models/ParkingSpace.js"
import Parking from "../models/Parking.js"
import conn from "../../config/dbConnection.js";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

class ParkingSpaceController {
    async index(req, res) {
        const { id } = req.params.parkingLotId
        try {
            const parkingLot = await ParkingSpace.find({ parkingLotId: id })

            return res.status(200).json(parkingLot)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }
    }

    async update(req, res) {
        if (!req.params.id) {
            return res.status(400).json({ message: "É necessário passar o ID da vaga" })
        }

        const parkingSpaceToUpdate = await ParkingSpace.findOne({
            _id: req.params.id
        })

        if (!parkingSpaceToUpdate) {
            return res.status(422).json({ message: "vaga não encontrada" })
        }

        try {
            await ParkingSpace.findOneAndUpdate({ _id: req.params.id }, { $push: { history: req.body.history[0] } }, {
                next: true
            })

        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }

        return res.status(200).json({ message: "Dados da vaga atualizados com sucesso" })

    }

    async delete(req, res) {
        if (!req.params.id) {
            return res.status(400).json({ message: "É necessário passar o ID da vaga" })
        }

        const parkingSpaceToUpdate = await ParkingSpace.findOne({
            _id: req.params.id
        })

        if (!parkingSpaceToUpdate) {
            return res.status(422).json({ message: "vaga não encontrada" })
        }

        try {
            await ParkingSpace.deleteOne({ _id: req.params.id })

        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }

        return res.status(200).json({ message: "Vaga deletada com sucesso" })
    }

    async isFreeUpdate(req, res) {
        if (!req.params.parkingSpaceId) {
            return res.status(400).json({ message: "É necessário passar o ID da vaga" })
        }

        const parkingSpaceToUpdate = await ParkingSpace.findOne({
            _id: req.params.parkingSpaceId
        })

        if (!parkingSpaceToUpdate) {
            return res.status(422).json({ message: "vaga não encontrada" })
        }

        try {
            await ParkingSpace.findOneAndUpdate({ _id: req.params.parkingSpaceId }, { isFree: false }, { new: true })

        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }

        return res.status(200).json({ message: "Vaga atualizada com sucesso" })
    }

    /*
        async storeMany(req, res) {
        console.log(req.body)
        //const { isFree } = req.body
        console.log(req.parkingLot)

        try {
            for (var i = 0; i <= req.params.numberOfSpaces; i++) {
                var parkingSpace = new ParkingSpace({
                    ...req.body,
                    parkingLot: req.parkingLot
                })
                console.log(parkingSpace)
                await ParkingSpace.create(parkingSpace)
            }
            return res.status(200).json({ message: "Vagas criadas" })
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })

        }
    }
    */

}

export default new ParkingSpaceController()
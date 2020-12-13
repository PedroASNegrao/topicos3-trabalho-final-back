import Driver from "../models/Driver.js"
import bcrypt from "bcryptjs"

const findByCredentials = async (req, res, next) => {
    const { email, password } = req.body
    const driver = await Driver.findOne({ email })
    if (!driver) {
        throw new Error("Unable to login")
    }

    const isMatch = await bcrypt.compare(password, driver.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    req.driver = driver

    next()

}

export default findByCredentials
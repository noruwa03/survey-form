import { genSalt, hash } from "bcrypt"

const hashPassword = async (password: string) => {
    const saltRounds = 10;
    const salt = await genSalt(saltRounds);
    const result = await hash(password, salt);
    return result;
}

export default hashPassword
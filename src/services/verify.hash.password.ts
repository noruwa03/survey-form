import { compare } from "bcrypt";

const verifyHash = async (unhashed: string, hash: string) => {
  const result = await compare(unhashed, hash);
  return result;
};

export default verifyHash;

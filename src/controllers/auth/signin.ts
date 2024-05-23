import { Request, Response } from "express";
import pool from "../../db";
import verifyHash from "../../services/verify.hash.password";

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const emailCheck = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (emailCheck.rows[0]) {
      const verifyPassword = await verifyHash(
        password,
        emailCheck.rows[0].password
      );

      if (verifyPassword) {
        return res.status(200).json({ data: emailCheck.rows[0] });
      } else {
        return res.status(400).json({ message: "Invalid credentials" });
      }
    } else {
      return res
        .status(404)
        .json({ message: `Email ${email} does not exists` });
    }
  } catch (error) {
    console.log(error)
  }
};

export default signIn;

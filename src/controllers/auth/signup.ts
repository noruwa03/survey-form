import { Request, Response } from "express";
import pool from "../../db";
import hashPassword from "../../services/hash.password";

const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password, created_at, updated_at } = req.body;

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be greater than 6 characters" });
    } else {
      const emailCheck = await pool.query(
        "SELECT email FROM users WHERE email = $1",
        [email]
      );
      if (emailCheck.rows[0]) {
        return res
          .status(400)
          .json({ message: `Email ${email} already exists` });
      } else {
        const hashedPassword = await hashPassword(password);
        const result = await pool.query(
          "INSERT INTO users (email, password, created_at, updated_at) VALUES($1, $2, $3, $4) RETURNING *",
          [email, hashedPassword, created_at, updated_at]
        );
        return res.status(201).json({ data: result.rows[0] });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default signUp;

import { Request, Response } from "express";
import pool from "../../db";

const createSurvey = async (req: Request, res: Response) => {
  try {
    const { title, description, expiry_date, active, questions, user_id } =
      req.body;

    const result = await pool.query(
      "INSERT INTO surveys (title, description, expiry_date, active, questions, user_id) VALUES($1, $2, $3, $4, $5::JSON[], $6) RETURNING *",
      [title, description, expiry_date, active, questions, user_id]
    );
    return res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    console.log(error);
  }
};

export default createSurvey;

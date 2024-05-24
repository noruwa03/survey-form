import { Request, Response } from "express";
import pool from "../../db";

const createSurvey = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      expiry_date,
      active,
      questions,
      user_id,
      created_at,
      updated_at,
    } = req.body;

    const result = await pool.query(
      "INSERT INTO surveys (title, description, expiry_date, active, questions, user_id, created_at, updated_at) VALUES($1, $2, $3, $4, $5::JSON[], $6, $7, $8) RETURNING *",
      [
        title,
        description,
        expiry_date,
        active,
        questions,
        user_id,
        created_at,
        updated_at,
      ]
    );
    return res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    console.log(error);
  }
};

export default createSurvey;

import { Request, Response } from "express";
import pool from "../../db";

const editSurvey = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, expiry_date, active, questions } = req.body;

    const result = await pool.query(
      "UPDATE surveys SET title = $1, description = $2, expiry_date = $3, active = $4, questions = $5::JSON[], updated_at = NOW()  WHERE survey_id = $6 RETURNING *",
      [title, description, expiry_date, active, questions, id]
    );

    return res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    console.log(error);
  }
};

export default editSurvey;

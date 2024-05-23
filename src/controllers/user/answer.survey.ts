import { Request, Response } from "express";
import pool from "../../db";

const answerSurvey = async (req: Request, res: Response) => {
  try {
    const {
      survey_id,
      title,
      description,
      expiry_date,
      active,
      questions,
      user_id,
    } = req.body;

    const result = await pool.query(
      "INSERT INTO survey_answers (survey_id, title, description, expiry_date, active, questions, user_id) VALUES($1, $2, $3, $4, $5, $6::JSON[], $7) RETURNING *",
      [survey_id, title, description, expiry_date, active, questions, user_id]
    );
    return res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    console.log(error);
  }
};

export default answerSurvey;

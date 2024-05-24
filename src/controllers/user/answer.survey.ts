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
      created_at,
      updated_at,
    } = req.body;

    const result = await pool.query(
      "INSERT INTO survey_answers (survey_id, title, description, expiry_date, active, questions, user_id, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6::JSON[], $7, $8, $9) RETURNING *",
      [
        survey_id,
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

export default answerSurvey;

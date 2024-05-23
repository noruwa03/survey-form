import { Request, Response } from "express";
import pool from "../../db";

const getMySurveyAnswers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT survey_answer_id, survey_id, title, description, TO_CHAR(expiry_date, 'Day DD Mon YYYY') as expiry_date, active, questions, TO_CHAR(created_at, 'Day DD Mon YYYY at HH:MI:SS AM') as created_at FROM survey_answers WHERE survey_id = $1 ORDER BY created_at DESC",
      [id]
    );

    return res.status(200).json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getMySurveyAnswers;

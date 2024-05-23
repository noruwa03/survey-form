import { Request, Response } from "express";
import pool from "../../db";

const getSurveyAnswer = async (req: Request, res: Response) => {
  try {
    const { survey_answer_id } = req.params;
    const result = await pool.query(
      "SELECT title, description, TO_CHAR(expiry_date, 'Day DD Mon YYYY at HH:MI:SS AM') as expiry_date, active, questions FROM survey_answers WHERE survey_answer_id = $1",
      [survey_answer_id]
    );

    if (result.rows.length == 0) {
      return res.status(404).json({
        message: `Survey answer with id ${survey_answer_id} does not exist`,
      });
    } else {
      return res.status(200).json({ data: result.rows[0] });
    }
  } catch (error) {
    console.log(error);
  }
};

export default getSurveyAnswer;

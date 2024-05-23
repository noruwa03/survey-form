import { Request, Response } from "express";
import pool from "../../db";

const surveys = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;

    const result = await pool.query(
      "SELECT survey_id, title, description, TO_CHAR(expiry_date, 'Day DD Mon YYYY at HH:MI:SS AM') as expiry_date, active, questions, TO_CHAR(updated_at, 'Day DD Mon YYYY at HH:MI:SS AM') as updated_at FROM surveys  WHERE user_id = $1 ORDER BY created_at DESC",
      [user_id]
    );

    return res.status(200).json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export default surveys;

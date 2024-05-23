import { Request, Response } from "express";
import pool from "../../db";

const getSurvey = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "SELECT title, description, TO_CHAR(expiry_date, 'YYYY-MM-DD HH:MI:SS') as expiry_date, active, questions, user_id FROM surveys WHERE survey_id = $1",
      [id]
    );
    if (result.rows.length == 0) {
      return res
        .status(404)
        .json({ message: `Survey with id ${id} does not exist` });
    } else {
      return res.status(200).json({ data: result.rows[0] });
    }
  } catch (error) {
    console.log(error);
  }
};

export default getSurvey;

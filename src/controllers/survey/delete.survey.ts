import { Request, Response } from "express";
import pool from "../../db";

const deleteSurvey = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM surveys WHERE survey_id = $1", [id]);
    res
      .status(203)
      .json({ message: `Survey with id ${id} has been deleted successfully` });
  } catch (error) {
    console.log(error);
  }
};

export default deleteSurvey;

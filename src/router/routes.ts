import express from "express";

// Auth imports
import signUp from "../controllers/auth/signup";
import signIn from "../controllers/auth/signin";

// Survey create, read, update and delete imports
import createSurvey from "../controllers/survey/create.survey";
import getSurvey from "../controllers/survey/get.survey";
import editSurvey from "../controllers/survey/edit.survey";
import deleteSurvey from "../controllers/survey/delete.survey";

// User Survey | Answer | Get survey that belongs to user imports
import surveys from "../controllers/user/surveys";
import answerSurvey from "../controllers//user/answer.survey";
import getSurveyAnswer from "../controllers//user/get.survey.answer";
import getMySurveyAnswers from "../controllers//user/get.my.survey.answers";

const routes = express.Router();

// Auth
routes.post("/signup", signUp);
routes.post("/signin", signIn);

// Survey
routes.post("/create", createSurvey);
routes.get("/survey/:id", getSurvey);
routes.put("/survey/:id", editSurvey);
routes.delete("/survey/:id", deleteSurvey);

// User
routes.get("/surveys/:user_id", surveys);
routes.post("/answer-survey", answerSurvey);
routes.get("/survey-responses/:id", getMySurveyAnswers);
routes.get("/view-survey-answer/:survey_answer_id", getSurveyAnswer);

export default routes;

import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation: yup.string().required(),
  employee_id: yup.string().nullable().required(),
  team_lead_id: yup.string().nullable().required(),
});

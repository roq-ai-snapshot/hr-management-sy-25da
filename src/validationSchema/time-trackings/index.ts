import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  hours_worked: yup.number().integer().required(),
  vacation_days: yup.number().integer().required(),
  employee_id: yup.string().nullable().required(),
});
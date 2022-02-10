import * as yup from 'yup';

const environmentSchema = yup.object({
  API1_KEY: yup.string().required(),
  API2_KEY: yup.string().required()
})

environmentSchema.validateSync(process.env, {
  abortEarly: false,
});
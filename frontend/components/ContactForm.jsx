import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Valideringsschema med Yup
const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, 'Max 50 tecken')
      .required('Namn är obligatoriskt'),
    email: Yup.string()
      .email('Ogiltig e-postadress')
      .required('E-post är obligatoriskt'),
    message: Yup.string()
      .max(500, 'Max 500 tecken')
      .required('Meddelande är obligatoriskt')
  })

function ContactForm() {
  return (
    <div>
        <h1>Kontakta oss gärna!</h1>
        <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Namn</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="email">E-post</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="message">Meddelande</label>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Skicka
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm

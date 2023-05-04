import { useFormik } from 'formik';
import * as yup from 'yup';

export default function useBooking() {
  const schema = yup.object().shape({
    res_date: yup.date().required('Required'),
    res_time: yup.string().required('Required'),
    guests: yup.number().positive().integer().required('Required'),
    occasion: yup.string().required('Required'),
    seatingOption: yup.string().required('Required'),
    firstName: yup.string().min(3).max(50).required('Required'),
    lastName: yup.string().min(3).max(50).required('Required'),
    phoneNumber: yup.number('Invalid Phone Number').required('Required'),
    email: yup.string().email('Invalid Email').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      res_date: '',
      res_time: '',
      guests: '',
      occasion: '',
      seatingOption: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      request: '',
    },
    validationSchema: schema,
  });

  return { formik };
}

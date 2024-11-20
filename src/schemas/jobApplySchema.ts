import * as Yup from 'yup';

export const applySchema = Yup.object().shape({
  fullname: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Special Characters not supported.')
    .required('Full Name is required.'),
  email: Yup.string().email().required('Email is required.'),
  number: Yup.string()
    .required('Contact Number is required.')
    .matches(/^\+?[0-9]{7,14}$/, 'Special Characters not supported.'),
  resume: Yup.mixed()
    .test('fileType', 'File type not supported. Only PDF or Word documents are allowed.', (value) => {
      if (value instanceof File) {
        const fileType = value.type;
        return (
          fileType === 'application/pdf' ||
          fileType === 'application/msword' ||
          fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );
      }
      return true; // If no file is uploaded, it's valid since it's optional
    })
    .test('fileSize', 'File size is too large. Max size is 2MB.', (value) => {
      if (value instanceof File) {
        const fileSize = value.size;
        const maxSize = 2 * 1024 * 1024; // 2 MB
        return fileSize <= maxSize;
      }
      return true; // If no file is uploaded, it's valid
    }),
  cover: Yup.mixed()
    .test('fileType', 'File type not supported. Only PDF or Word documents are allowed.', (value) => {
      if (value instanceof File) {
        const fileType = value.type;
        return (
          fileType === 'application/pdf' ||
          fileType === 'application/msword' ||
          fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );
      }
      return true; // If no file is uploaded, it's valid since it's optional
    })
    .test('fileSize', 'File size is too large. Max size is 2MB.', (value) => {
      if (value instanceof File) {
        const fileSize = value.size;
        const maxSize = 2 * 1024 * 1024; // 2 MB
        return fileSize <= maxSize;
      }
      return true; // If no file is uploaded, it's valid
    }),
});

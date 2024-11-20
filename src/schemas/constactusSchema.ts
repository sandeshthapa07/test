import * as Yup from 'yup';

// export const generalEnquirySchema = Yup.object().shape({
//   fullname: Yup.string()
//     .matches(/^[a-zA-Z\s]*$/, 'Special Characters not supported.')
//     .required('Full Name is required.'),
//   email: Yup.string().email().required('Email is required.'),

//   number: Yup.string()
//     .required('Contact Number is required.')
//     .matches(/^\+?[0-9]{7,14}$/, 'Special Characters not supported.'),
//   subject: Yup.string().trim().required('Subject  is required.'),
//   message: Yup.string().trim().required('Message is required.'),
//   document: Yup.mixed()
//     .optional()
//     .test('fileType', 'File type not supported.', (value) => {
//       if (value instanceof File) {
//         const fileType = value.type;
//         return (
//           fileType === 'application/pdf' ||
//           fileType === 'application/msword' ||
//           fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//         );
//       }
//     })
//     .test('fileSize', 'File size is too large.', (value) => {
//       // Check if the value is a File object
//       if (value instanceof File) {
//         // Get the file size in bytes
//         const fileSize = value.size;
//         // Define the maximum allowed file size (in bytes)
//         const maxSize = 2 * 1024 * 1024; // 2 MB
//         // Check if the file size is less than or equal to the maximum allowed size
//         return fileSize <= maxSize;
//       }
//       // Return true if the value is not a File object (e.g., no file selected)
//       return true;
//     }),
// });

// export const serviceSchema = Yup.object().shape({
//   fullname: Yup.string()
//     .matches(/^[a-zA-Z\s]*$/, 'Special Characters not supported.')
//     .required('Full Name is required.'),
//   email: Yup.string().email().required('Email is required.'),
//   subject: Yup.string().trim().required('Subject  is required.'),
//   serviceId: Yup.number().required('Service is required.'),
//   message: Yup.string().trim().required('Message is required.'),
//   number: Yup.string()
//     .required('Contact Number is required.')
//     .matches(/^\+?[0-9]{7,14}$/, 'Special Characters not supported.'),
//   // message: Yup.string().required("Message is Required."),
// });

// export const vacancySchema = Yup.object().shape({
//   fullname: Yup.string()
//     .matches(/^[a-zA-Z\s]*$/, 'Special Characters not supported.')
//     .required('Full Name is required.'),
//   number: Yup.string()
//     .required('Contact Number is required.')
//     .matches(/^\+?[0-9]{7,14}$/, 'Please enter valid number.'),
//   email: Yup.string().email().required('Email is required.'),
// });

// export const consulatationSchema = Yup.object().shape({
//   fullname: Yup.string()
//     .matches(/^[a-zA-Z\s]*$/, 'Special Characters not supported.')
//     .required('Full Name is required.'),
//   timeId: Yup.number().required('Please select available slot.'),
//   email: Yup.string().email().required('Email is required.'),
//   message: Yup.string().trim().required('Message is required.'),
//   number: Yup.string()
//     .required('Contact Number is required.')
//     .matches(/^\+?[0-9]{7,14}$/, 'Enter valid phone number'),
//   // consultDate: Yup.string().required("required"),
// });

const commonSchema = Yup.object().shape({
  fullname: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Special Characters not supported.')
    .required('Full Name is required.'),
  email: Yup.string().email().required('Email is required.'),
  number: Yup.string()
    .required('Contact Number is required.')
    .matches(/^\+?[0-9]{7,14}$/, 'Special Characters not supported.'),
  message: Yup.string().trim().required('Message is required.'),
});

export const generalEnquirySchema = commonSchema.shape({
  subject: Yup.string().trim().required('Subject  is required.'),
  document: Yup.mixed()
    .optional()
    .test('fileType', 'File type not supported.', (value) => {
      if (value instanceof File) {
        const fileType = value.type;
        return (
          fileType === 'application/pdf' ||
          fileType === 'application/msword' ||
          fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );
      }
    })
    .test('fileSize', 'File size is too large.', (value) => {
      // Check if the value is a File object
      if (value instanceof File) {
        // Get the file size in bytes
        const fileSize = value.size;
        // Define the maximum allowed file size (in bytes)
        const maxSize = 2 * 1024 * 1024; // 2 MB
        // Check if the file size is less than or equal to the maximum allowed size
        return fileSize <= maxSize;
      }
      // Return true if the value is not a File object (e.g., no file selected)
      return true;
    }),
});

export const serviceSchema = commonSchema.shape({
  serviceId: Yup.array().of(Yup.string().required('Service is required.')).min(1, 'At least one service is required.'),
  document: Yup.mixed()
    .optional()
    .test('fileType', 'File type not supported.', (value) => {
      if (value instanceof File) {
        const fileType = value.type;
        return (
          fileType === 'application/pdf' ||
          fileType === 'application/msword' ||
          fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );
      }
    })
    .test('fileSize', 'File size is too large.', (value) => {
      // Check if the value is a File object
      if (value instanceof File) {
        // Get the file size in bytes
        const fileSize = value.size;
        // Define the maximum allowed file size (in bytes)
        const maxSize = 2 * 1024 * 1024; // 2 MB
        // Check if the file size is less than or equal to the maximum allowed size
        return fileSize <= maxSize;
      }
      // Return true if the value is not a File object (e.g., no file selected)
      return true;
    }),
});

export const consulatationSchema = commonSchema.shape({
  timeId: Yup.number().required('Please select available slot.'),
});

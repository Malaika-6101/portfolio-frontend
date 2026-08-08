import API from './api';

export const submitContactForm = async (formData) => {
  try {
    // 1. Save data to Firestore (Matches app.use("/api/contact", contactRoutes))
    const contactResponse = await API.post('/contact', formData);
    const { contactId } = contactResponse.data;

    // 2. Send email notification via Resend (Matches app.use("/api/contact/email", emailRoutes))
    const emailResponse = await API.post('/contact/email', {
      ...formData,
      contactId,
    });

    return {
      success: true,
      contactId,
      emailData: emailResponse.data,
    };
  } catch (error) {
    console.error('Error in contact form submission sequence:', error);
    throw error.response?.data || error.message;
  }
};
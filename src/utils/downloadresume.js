// import resumePdf from "../assets/resume/malaikas-resume.pdf";

// export const downloadResume = (e) => {
//   if (e) e.preventDefault();

//   const link = document.createElement("a");
//   link.href = resumePdf;
//   link.download = "malaikas-resume.pdf";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };




import { trackDownload } from '../services/downloadService';
import resumePdf from "../assets/resume/malaikas-resume.pdf";

export const downloadResume = async (e) => {
  if (e) e.preventDefault();

  try {
    // 1. Log the download event in Firestore via your backend
    await trackDownload();
  } catch (error) {
    console.error("Failed to log download metric, proceeding with download anyway:", error);
  }

  // 2. Trigger the actual file download
  const link = document.createElement("a");
  link.href = resumePdf;
  link.download = "malaikas-resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
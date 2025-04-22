// Fetch donor's name from the backend (this assumes the backend provides it in a session)
const getDonorName = async () => {
  try {
      const response = await fetch('/get-donor-name'); // A route to get the donor name
      const data = await response.json();
      return data.name; // Assume the response is like { name: 'John Doe' }
  } catch (error) {
      console.error("Error fetching donor name:", error);
      return "Donor"; // Fallback if there's an error
  }
};

 /* fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbarContainer').innerHTML = data;

       // Attach logout logic after navbar is loaded
       const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          localStorage.clear();
          alert('Logged out successfully!');
          window.location.href = '/index.html'; // adjust if needed
        });
      }
    })
    .catch(error => console.error('Error loading navbar:', error));*/

// Set donor's name dynamically
const setDonorName = async () => {
  const donorName = await getDonorName();
  document.getElementById("donor-name").textContent = `Certificate Awarded To: ${donorName}`;
};

// Check user role and redirect if not a donor
const checkUserRole = async () => {
  try {
      const response = await fetch('/check-user-role');
      const data = await response.json();
      if (data.role !== "donor") {
          window.location.href = "index.html"; // Redirect if not a donor
      }
  } catch (error) {
      console.error("Error checking user role:", error);
      window.location.href = "index.html"; // Redirect if there's an error
  }
};

/*// Download certificate functionality
const downloadCertificate = () => {
  const certContent = document.getElementById("certificate").innerHTML;
  const blob = new Blob([certContent], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "certificate.pdf";
  link.click();
};

// Initialize the page
const initPage = async () => {
  await checkUserRole();
  await setDonorName();
  document.getElementById("download-button").addEventListener("click", downloadCertificate);
};

// Run the initialization
initPage();*/

/*//download certificate
  document.getElementById("download-button").addEventListener("click", () => {
    const certificate = document.getElementById("certificate-container");

    // PDF options
    const opt = {
      margin:       0.5,
      filename:     'Certificate_of_Appreciation.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate and save the PDF
    html2pdf().set(opt).from(certificate).save();
  });*/


  /*document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("download-button");
    downloadBtn.addEventListener("click", () => {
      const certificate = document.getElementById("certificate-container");

      const opt = {
        margin:       0.3,
        filename:     'Certificate_of_Appreciation.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(certificate).save();
    });
  });*/


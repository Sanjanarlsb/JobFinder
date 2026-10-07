const jobs = [
    {
        id: 1,
        title: "Software Developer",
        company: "Tech Solutions",
        location: "Bangalore",
        salary: "₹6 - 10 LPA",
        education: "B.Tech",
        experience: 0,
        vacancies: 5,
        skills: "Java, Python, SQL"
    },

    {
        id: 2,
        title: "Data Analyst",
        company: "Analytics Corp",
        location: "Bangalore",
        salary: "₹5 - 8 LPA",
        education: "Any Degree",
        experience: 1,
        vacancies: 3,
        skills: "Excel, SQL, Python"
    },

    {
        id: 3,
        title: "Web Developer",
        company: "WebTech",
        location: "Hyderabad",
        salary: "₹4 - 7 LPA",
        education: "BCA",
        experience: 0,
        vacancies: 4,
        skills: "HTML, CSS, JavaScript"
    },

    {
        id: 4,
        title: "Cyber Security Analyst",
        company: "SecureNet",
        location: "Pune",
        salary: "₹7 - 12 LPA",
        education: "B.Tech",
        experience: 2,
        vacancies: 2,
        skills: "Networking, Linux, Security"
    }
];
function displayJobs(jobList) {

    const container =
        document.getElementById("jobContainer");

    container.innerHTML = "";

    jobList.forEach(function(job) {

        container.innerHTML += `

            <div class="job-card">

                <h3>${job.title}</h3>

                <p>
                    <strong>Company:</strong>
                    ${job.company}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${job.location}
                </p>

                <p>
                    <strong>Salary:</strong>
                    ${job.salary}
                </p>

                <p>
                    <strong>Education:</strong>
                    ${job.education}
                </p>

                <p>
                    <strong>Experience:</strong>
                    ${job.experience} years
                </p>

                <p>
                    <strong>Vacancies:</strong>
                    ${job.vacancies}
                </p>

                <p>
                    <strong>Skills:</strong>
                    ${job.skills}
                </p>

                <button onclick="applyForJob(${job.id})">
                    Apply Now
                </button>

            </div>

        `;
    });
}
displayJobs(jobs);
let selectedJobId = null;

function applyForJob(jobId) {

    selectedJobId = jobId;

    document.getElementById("applicationForm")
        .scrollIntoView();

}
document.getElementById("application")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const application = {

            id: Date.now(),

            jobId: selectedJobId,

            name:
                document.getElementById("name").value,

            phone:
                document.getElementById("phone").value,

            email:
                document.getElementById("email").value,

            age:
                document.getElementById("age").value,

            education:
                document.getElementById("education").value,

            experience:
                document.getElementById("experience").value,

            skills:
                document.getElementById("skills").value
        };


        let applications =
            JSON.parse(
                localStorage.getItem("applications")
            ) || [];


        applications.push(application);


        localStorage.setItem(
            "applications",
            JSON.stringify(applications)
        );


        alert("Application submitted successfully!");


        document.getElementById("application").reset();
        displayApplications();

});
function searchJobs() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredJobs = jobs.filter(function(job) {

        return job.title
            .toLowerCase()
            .includes(search);

    });

    displayJobs(filteredJobs);
}
function filterJobs() {

    const education =
        document.getElementById("educationFilter")
        .value;

    if (education === "") {

        displayJobs(jobs);
        return;

    }

    const filteredJobs =
        jobs.filter(function(job) {

            return job.education === education ||
                   job.education === "Any Degree";

        });

    displayJobs(filteredJobs);
    function displayApplications() {

    const container =
        document.getElementById("applicationContainer");

    const applications =
        JSON.parse(
            localStorage.getItem("applications")
        ) || [];

    container.innerHTML = "";

    applications.forEach(function(application) {

        const job =
            jobs.find(function(job) {

                return job.id === application.jobId;

            });


        container.innerHTML += `

            <div class="job-card">

                <h3>${job.title}</h3>

                <p>
                    <strong>Name:</strong>
                    ${application.name}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${application.email}
                </p>

                <p>
                    <strong>Education:</strong>
                    ${application.education}
                </p>

                <p>
                    <strong>Experience:</strong>
                    ${application.experience} years
                </p>

                <p>
                    <strong>Skills:</strong>
                    ${application.skills}
                </p>

                <p>
                    <strong>Status:</strong>
                    Application Submitted
                </p>

            </div>

        `;
    });
}
}
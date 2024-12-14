
function generateResume() {
    // Get values from the form
    const name = document.getElementById('name').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value.split(',');
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const certifications = document.getElementById('certifications').value;
    const projects = document.getElementById('projects').value;
    const contact = document.getElementById('contact').value;

    // Update the resume output
    document.getElementById('resume-name').textContent = name;
    document.getElementById('resume-summary').textContent = summary;
    const skillsContainer = document.getElementById('resume-skills');
    skillsContainer.innerHTML = '';
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.textContent = skill.trim();
        skillsContainer.appendChild(span);
    });
    document.getElementById('resume-experience').textContent = experience;
    document.getElementById('resume-education').textContent = education;
    document.getElementById('resume-certifications').textContent = certifications;
    document.getElementById('resume-projects').textContent = projects;
    document.getElementById('resume-contact').textContent = contact;
}

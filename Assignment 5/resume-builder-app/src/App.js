import React, { useState } from 'react';
import './App.css'; // Ensure you have the necessary styles

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    professionalSummary: '',
    education: '',
    academicSkills: '',
    nonAcademicSkills: '',
    careerObjective: '',
    experience: '',
    internships: '',
    achievements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set form as submitted
  };

  return (
    <div className="resume-builder-container">
      <h1>Resume Builder</h1>
      
      {/* Conditionally render form or resume details */}
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="professionalSummary">Professional Summary:</label>
            <textarea
              id="professionalSummary"
              name="professionalSummary"
              value={formData.professionalSummary}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="education">Education Qualifications:</label>
            <textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="academicSkills">Academic Skills:</label>
            <textarea
              id="academicSkills"
              name="academicSkills"
              value={formData.academicSkills}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nonAcademicSkills">Non-Academic Skills:</label>
            <textarea
              id="nonAcademicSkills"
              name="nonAcademicSkills"
              value={formData.nonAcademicSkills}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="careerObjective">Career Objective:</label>
            <textarea
              id="careerObjective"
              name="careerObjective"
              value={formData.careerObjective}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience:</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="internships">Internships:</label>
            <textarea
              id="internships"
              name="internships"
              value={formData.internships}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="achievements">Skills and Achievements:</label>
            <textarea
              id="achievements"
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="resume-details">
          <h2>Your Resume</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Professional Summary:</strong> {formData.professionalSummary}</p>
          <p><strong>Education Qualifications:</strong> {formData.education}</p>
          <p><strong>Academic Skills:</strong> {formData.academicSkills}</p>
          <p><strong>Non-Academic Skills:</strong> {formData.nonAcademicSkills}</p>
          <p><strong>Career Objective:</strong> {formData.careerObjective}</p>
          <p><strong>Experience:</strong> {formData.experience}</p>
          <p><strong>Internships:</strong> {formData.internships}</p>
          <p><strong>Skills and Achievements:</strong> {formData.achievements}</p>
        </div>
      )}
    </div>
  );
}

export default ResumeBuilder;

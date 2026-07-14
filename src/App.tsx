import './App.css'

function App() {
  const experiences = [
    {
      role: "Frontend Architect",
      company: "Hyperscal PTE. LTD.",
      date: "03-06-2024 - Present",
      descriptions: [
        "Create UI Components based on team design",
        "Create reusable component library",
        "Create documentations for each UI Components using StorybookJS",
        "Create interaction testing using StorybookJS & necessary tests using Jest",
        "Using turbo repo as monorepo",
        "Create playwright to integrate with github action",
        "Implement atomic design & RBAC",
        "Create admin panel to control each tenants"
      ]
    },
    {
      role: "Software Engineer",
      company: "Hyperscal PTE. LTD.",
      date: "06-01-2023 - Present",
      descriptions: [
        "Enhancement to develop system improvement",
        "Maintenance Web Application using Laravel, Lumen, Go, Python, AngularJS, PostgreSQL",
        "Appointed as Front End Architect, responsible for creating UI components based on Figma"
      ]
    },
    {
      role: "Web Developer",
      company: "PT. Valuestream International",
      date: "06-10-2021 - 06-01-2023",
      descriptions: [
        "Create some plugin to develop projects",
        "Create some API to consume in jquery",
        "Build Project using PHP with framework internal based on PHP Phalcon"
      ]
    },
    {
      role: "Software Engineer",
      company: "PT. Tri-Saudara Sentosa Industri",
      date: "21-08-2020 - 06-10-2021",
      descriptions: [
        "Managing a running system",
        "Developing API using Ruby on Rails",
        "Developing Mobile Apps using React Native"
      ]
    },
    {
      role: "Backend Developer",
      company: "PT. Deva Teknologi Indonesia",
      date: "04-11-2019 - 10-04-2020",
      descriptions: [
        "Create Restful API & Build Microservices with PHP Lumen",
        "Integration with 3rd Party"
      ]
    },
    {
      role: "Technical Support",
      company: "PT. Melvar Lintasnusa",
      date: "25-02-2019 - 25-04-2019",
      descriptions: ["Installation Network"]
    }
  ];

  const skills = {
    Programming: ["PHP", "Laravel", "Ruby", "Python", "Go", "TypeScript", "React", "NextJS", "React Native", "Angular", "Storybook", "Remix"],
    Database: ["MySQL", "PostgreSQL", "Sqlite"],
    Others: ["Microservice", "MonoRepo", "Ubuntu", "English"]
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Fikri Reformasi Gunawan</h1>
        <h2>Software Engineer | Frontend Architect</h2>
        <div className="contact-info">
          <span>📍 Bandung, Indonesia</span> | 
          <span>📞 +6281324141128</span> | 
          <span>📧 fikrireformasig@gmail.com</span> |
          <span>🔗 <a href="https://www.linkedin.com/in/fikri-reformasi-gunawan/" target="_blank" rel="noreferrer">LinkedIn</a></span>
        </div>
      </header>

      {/* Profile Section */}
      <section className="section">
        <h3>Profile</h3>
        <p>
          I graduated from Politeknik Pos Indonesia (ULBI), Informatics Engineering, Diploma (D3). 
          My mission is to get better day by day, specializing in Frontend Architecture, Microservices, and scalable web applications.
        </p>
      </section>

      {/* Experience Section */}
      <section className="section">
        <h3>Experience</h3>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header">
                <h4>{exp.role}</h4>
                <span className="exp-date">{exp.date}</span>
              </div>
              <div className="exp-company">{exp.company}</div>
              <ul>
                {exp.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h3>Skills</h3>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Programming & Frameworks</h4>
            <div className="tags">
              {skills.Programming.map(skill => <span key={skill} className="tag">{skill}</span>)}
            </div>
          </div>
          <div className="skill-category">
            <h4>Database</h4>
            <div className="tags">
              {skills.Database.map(skill => <span key={skill} className="tag">{skill}</span>)}
            </div>
          </div>
          <div className="skill-category">
            <h4>Others</h4>
            <div className="tags">
              {skills.Others.map(skill => <span key={skill} className="tag">{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="section">
        <h3>Education & Certificates</h3>
        <div className="education">
          <h4>Politeknik Pos Indonesia (ULBI)</h4>
          <p>Diploma Informatics Engineering (D3) | 2016 - 2019 | GPA: 3.27</p>
          <br/>
          <h4>Certificates</h4>
          <p>IC3 Computing Fundamentals</p>
        </div>
      </section>
    </div>
  )
}

export default App
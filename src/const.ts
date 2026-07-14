export const EXPERIENCES = [
  {
    role: "FRONTEND ARCHITECT",
    company: "Hyperscal PTE. LTD.",
    date: "03-06-2024 - Present",
    descriptions: [
      "Create UI Components based on team design",
      "Create reusable component library",
      "Create documentations for each UI Components using StorybookJS",
      "Create interaction testing using StorybookJS and necessary test using Jest",
      "Using turbo repo as monorepo",
      "Create playwright to integrate with github action",
      "Implement atomic design and RBAC",
      "Create admin panel to control each tenants"
    ]
  },
  {
    role: "SOFTWARE ENGINEER",
    company: "Hyperscal PTE. LTD.",
    date: "06-01-2023 - Present",
    descriptions: [
      "Enhancement to develop system improvement",
      "Maintenance Web Application using Laravel, Lumen, Go, Python, AngularJS, PostgreSQL",
      "Appointed as Front End Architect, creating UI components based on Figma"
    ]
  },
  {
    role: "WEB DEVELOPER",
    company: "PT. Valuestream Internation",
    date: "06-10-2021 - 06-01-2023",
    descriptions: [
      "Create some plugin to develop projects",
      "Create some API to consume in jquery",
      "Build Project using PHP with framework internal based on PHP Phalcon."
    ]
  },
  {
    role: "SOFTWARE ENGINEER",
    company: "PT. Tri-Saudara Sentosa Industri",
    date: "21-08-2020 - 06-10-2021",
    descriptions: [
      "Managing a running system",
      "Developing API using Ruby on Rails",
      "Developing Mobile Apps using React Native"
    ]
  },
  {
    role: "BACKEND DEVELOPER",
    company: "PT. Deva Teknologi Indonesia",
    date: "04-11-2019 - 10-04-2020",
    descriptions: [
      "Create Restful API with PHP Lumen",
      "Build Microservices with PHP Lumen",
      "Integration with 3rd Party"
    ]
  },
];

export const SKILLS = {
  Programming: ["PHP", "Phalcon", "Codeigniter", "Laravel", "Lumen", "Ruby", "Rails", "Python", "Go", "HTML", "CSS", "jQuery", "ReactNative", "AngularJS", "Javascript", "React", "NextJS", "Typescript", "Storybook"],
  Database: ["MySQL", "PostgreSQL", "Sqlite"],
  Others: ["Microservice", "MonoRepo", "Ubuntu", "Centos", "Debian", "English"]
};

export const STATS = [
  {
    label: "Years of Experience",
    value: "7+",
    color: "var(--stat-indigo)",
  },
  {
    label: "Companies Worked With",
    value: "5",
    color: "var(--stat-emerald)",
  },
  {
    label: "Technologies Used",
    value: `${Object.values(SKILLS).flat().length}+`,
    color: "var(--stat-amber)",
  },
  {
    label: "Certifications",
    value: "1",
    color: "var(--stat-rose)",
  },
]
;
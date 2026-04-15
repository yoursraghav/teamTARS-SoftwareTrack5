const DEFAULT_DATABASE = {
  jobs: [
    {
      id: 1,
      company: "NodeWare",
      role: "Full-stack Developer",
      location: "Remote",
      salary: "₹8-12 LPA",
      openings: 50,
      deadline: "2026-04-20",
      skills: ["React", "Node.js", "MongoDB"],
      description: "Join our dynamic team to build scalable web applications using modern technologies.",
      applyLink: "https://www.linkedin.com/company/nodeware/jobs/",
      logo: "🚀"
    },
    {
      id: 2,
      company: "Finova",
      role: "Data Science Intern",
      location: "Bangalore",
      salary: "₹25k/month",
      openings: 20,
      deadline: "2026-04-27",
      skills: ["Python", "ML", "SQL"],
      description: "Work on real-world data science projects and learn from industry experts.",
      applyLink: "https://www.linkedin.com/company/finova/jobs/",
      logo: "📊"
    },
    {
      id: 3,
      company: "CloudMatrix",
      role: "DevOps Engineer",
      location: "Hyderabad",
      salary: "₹10-15 LPA",
      openings: 15,
      deadline: "2026-04-23",
      skills: ["AWS", "Docker", "Kubernetes"],
      description: "Design and maintain cloud infrastructure for high-performance applications.",
      applyLink: "https://www.linkedin.com/company/cloudmatrix/jobs/",
      logo: "☁️"
    },
    {
      id: 4,
      company: "TechNova",
      role: "Frontend Developer",
      location: "Mumbai",
      salary: "₹6-10 LPA",
      openings: 30,
      deadline: "2026-04-25",
      skills: ["React", "JavaScript", "CSS"],
      description: "Create beautiful and responsive user interfaces for our web applications.",
      applyLink: "https://www.linkedin.com/company/technova/jobs/",
      logo: "💻"
    },
    {
      id: 5,
      company: "DataFlow",
      role: "Machine Learning Engineer",
      location: "Pune",
      salary: "₹12-18 LPA",
      openings: 12,
      deadline: "2026-04-30",
      skills: ["Python", "TensorFlow", "PyTorch"],
      description: "Develop and deploy machine learning models for various business applications.",
      applyLink: "https://www.linkedin.com/company/dataflow/jobs/",
      logo: "🤖"
    }
  ],
  applications: [
    {
      id: 1,
      jobId: 1,
      userId: "asha_sharma",
      status: "Applied",
      appliedDate: "2026-04-13",
      company: "NodeWare",
      role: "Full-stack Developer"
    },
    {
      id: 2,
      jobId: 3,
      userId: "asha_sharma",
      status: "Interview",
      appliedDate: "2026-04-10",
      company: "CloudMatrix",
      role: "Data Analyst"
    }
  ],
  courseRecommendations: {
    "Web Development": ["React JS", "JavaScript"],
    "Data Structures": ["System Design", "Machine Learning"],
    "Machine Learning": ["System Design", "Data Structures"],
    JavaScript: ["React JS", "Node.js"],
    SQL: ["System Design", "Machine Learning"]
  }
};

class Database {
  constructor() {
    this.data = null;
    this.loadFromStorage();
    this.loadData();
  }

  async loadData() {
    if (this.data) {
      return;
    }

    try {
      const response = await fetch("./database.json");
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      this.data = await response.json();
      await this.saveData();
    } catch (error) {
      console.error("Failed to load database:", error);
      this.data = this.data || JSON.parse(JSON.stringify(DEFAULT_DATABASE));
    }
  }

  async getJobs() {
    await this.ensureLoaded();
    return this.data.jobs;
  }

  async getJobById(id) {
    await this.ensureLoaded();
    return this.data.jobs.find((job) => job.id === id);
  }

  async getApplications(userId = "asha_sharma") {
    await this.ensureLoaded();
    return this.data.applications.filter((app) => app.userId === userId);
  }

  async applyForJob(jobId, userId = "asha_sharma") {
    await this.ensureLoaded();
    const job = this.data.jobs.find((item) => item.id === jobId);
    if (!job) {
      return false;
    }

    const existingApplication = this.data.applications.find(
      (app) => app.jobId === jobId && app.userId === userId
    );

    if (existingApplication) {
      return false;
    }

    const newApplication = {
      id: Date.now(),
      jobId,
      userId,
      status: "Applied",
      appliedDate: new Date().toISOString().split("T")[0],
      company: job.company,
      role: job.role,
      notes: "Applied through QuestLog placement dashboard."
    };

    this.data.applications.push(newApplication);
    await this.saveData();
    return true;
  }

  async getRecommendedCourses(completedCourses) {
    await this.ensureLoaded();
    const recommendations = new Set();

    completedCourses.forEach((course) => {
      const courseRecs = this.data.courseRecommendations[course.title];
      if (courseRecs) {
        courseRecs.forEach((rec) => recommendations.add(rec));
      }
    });

    return Array.from(recommendations).slice(0, 3);
  }

  async ensureLoaded() {
    if (!this.data) {
      await this.loadData();
    }
  }

  async saveData() {
    try {
      localStorage.setItem("questlog_database", JSON.stringify(this.data));
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  }

  loadFromStorage() {
    try {
      const stored = localStorage.getItem("questlog_database");
      if (stored) {
        this.data = JSON.parse(stored);
      }
    } catch (error) {
      console.error("Failed to load from storage:", error);
    }
  }
}

const db = new Database();

class API {
  static async getJobs() {
    return new Promise((resolve) => {
      setTimeout(() => {
        db.getJobs().then(resolve);
      }, 300);
    });
  }

  static async getJobById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        db.getJobById(id).then(resolve);
      }, 200);
    });
  }

  static async getApplications(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        db.getApplications(userId).then(resolve);
      }, 250);
    });
  }

  static async applyForJob(jobId, userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        db.applyForJob(jobId, userId).then(resolve);
      }, 500);
    });
  }

  static async getRecommendedCourses(completedCourses) {
    return new Promise((resolve) => {
      setTimeout(() => {
        db.getRecommendedCourses(completedCourses).then(resolve);
      }, 200);
    });
  }
}

window.Database = Database;
window.API = API;

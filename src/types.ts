export interface WeeklyReview {
  week: number;
  review: string;
  rating: number;
}

export interface Contributor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills?: string[];
  techUsed: string[];
  bio: string;
  contributions: string;
  github?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  resumePdf?: string;
  dailyTasks: string[];
  weeklyReviews: WeeklyReview[];
  skillsLearntInInternship?: string[];
  resume: {
    education: {
      degree: string;
      school: string;
      year: string;
    }[];
    projects: {
      title: string;
      description: string;
      tech: string[];
    }[];
    achievements: string[];
  };
}

export interface Mentor {
  name: string;
  designation: string;
  organization: string;
  avatar: string;
  comment: string;
}

export interface ClientReview {
  name: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Project {
  id: string;
  name: string;
  duration: string;
  domain: string;
  description: string;
  image: string;
  tech: string[];
  contributors: Contributor[];
  mentor: Mentor;
  reviews: ClientReview[];
}

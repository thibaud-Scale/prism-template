export interface Project {
  id:              string;
  title:           string;
  description:     string;
  longDescription?: string;
  tags:            string[];
  image:           string;
  featured?:       boolean;
  color:           string;   // accent color for the project
  year?:           number;
  role?:           string;
  link?:           string;
}

export interface Service {
  id:          string;
  title:       string;
  description: string;
  icon: "design" | "code" | "strategy" | "branding" | "motion" | "analytics";
}

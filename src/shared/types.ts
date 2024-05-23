export enum SelectedPage {
  Home = "home",
  AboutMe = "aboutme",
  Experience = "experience",
  ContactUs = "contactus",
}

export interface AboutMeType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ExperienceType {
  name: string;
  description?: string;
  image: string;
}

import AboutCard from "../components/AboutCard/AboutCard";
import { useFetch } from "../hooks";

const About = ({ profile }) => {
  const data = useFetch(`${import.meta.env.VITE_GITHUB_PROFILE_API}${profile}`);

  if (profile && data) {
    return <AboutCard info={data} />;
  }
  return <span>Please Provide a profile to search for</span>;
};

export default About;

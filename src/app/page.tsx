import BackgroundStars from "@/components/animations/BackgroundStars";
import BackgroundRetro from "@/components/animations/BackgroundRetro";
import SkillsGrid from "@/components/SkillsGrid";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <BackgroundStars />
      <div id="description" className='text-center my-20'>
        <h1>
          Looking for a
          <span className="main-title-container flex flex-row justify-center gap-3 highlight">
            <span className="main-title-container__">
              <ul className="main-title-container__list">
                <li className="main-title-container__list__item">senior developer</li>
                <li className="main-title-container__list__item">lead developer</li>
                <li className="main-title-container__list__item">fullstack developer</li>
                <li className="main-title-container__list__item">frontend developer</li>
                <li className="main-title-container__list__item">backend developer</li>
              </ul>
            </span>
          </span>
          to boost your project?
        </h1>
      </div>

      <BackgroundRetro />

      <div id="skills" className='w-screen p-10'>
        <h2>
        Skills at your service
        </h2>
        <SkillsGrid />
      </div>

      <div id="experience" className='w-screen p-10'>
        <h2>
        Professional experience
        </h2>
        <Timeline />
      </div>

      <div id="projects" className='w-screen p-10'>
        <h2>
        Projects
        </h2>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Lady Raccoon - Développeuse fullstack senior",
  description: "Portfolio de Angele Henry sur le développement Frontend, JAMstack et accessibilité.",
};


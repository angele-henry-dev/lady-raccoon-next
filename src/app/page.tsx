import BackgroundStars from "@/components/animations/BackgroundStars";
import BackgroundRetro from "@/components/animations/BackgroundRetro";
import SkillsGrid from "@/components/SkillsGrid";
import Timeline from "@/components/Timeline";
import News from "@/components/News";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <BackgroundStars />

      <div className='text-center my-20 container mx-auto'>
        <div className="text-center main-title">
          Looking for a
          <div className="main-title-container flex flex-row justify-center gap-3 highlight">
            <div className="main-title-container__">
              <ul className="main-title-container__list">
                <li className="main-title-container__list__item">senior developer</li>
                <li className="main-title-container__list__item">lead developer</li>
                <li className="main-title-container__list__item">fullstack developer</li>
                <li className="main-title-container__list__item">frontend developer</li>
                <li className="main-title-container__list__item">backend developer</li>
              </ul>
            </div>
          </div>
          to boost your project?
        </div>
      </div>

      <BackgroundRetro />

      <div id="news" className='container mx-auto'>
        <News />
      </div>

      <div id="skills" className='container mx-auto'>
        <SkillsGrid />
      </div>

      <div id="experience" className='container mx-auto'>
        <Timeline />
      </div>
    </section>
  );
}

export const metadata = {
  title: "Lady Raccoon - Senior fullstack developper",
  description: "Looking for a senior developer to boost your project?",
};


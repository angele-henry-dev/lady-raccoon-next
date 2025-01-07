import BackgroundStars from "@/components/animations/BackgroundStars";
import BackgroundRetro from "@/components/animations/BackgroundRetro";
import SkillsGrid from "@/components/SkillsGrid";
import Timeline from "@/components/Timeline";
import News from "@/components/News";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <BackgroundStars />
      <div className='text-center my-20'>
        <h1 className="text-center main-title">
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

      <div className='w-screen'>
        <News />
      </div>

      <div className='w-screen'>
        <SkillsGrid />
      </div>

      <div className='w-screen'>
        <Timeline />
      </div>
    </section>
  );
}

export const metadata = {
  title: "Lady Raccoon - Senior fullstack developper",
  description: "Looking for a senior developer to boost your project?",
};


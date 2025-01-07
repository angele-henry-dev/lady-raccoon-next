import Link from "next/link";

export default function Home() {
  return (
    <section className="w-5/6 flex flex-col my-5 mx-auto">
        <h1>Legal Notice</h1>
        <div>
            <h2>Site Editor</h2>
            <p>
                Welcome to the deployment zone of the Lady Raccoon website! Here, the lead coder is Angele
                Henry, aka the &quot;Game Master&quot;.
            </p>
            <p>Contact information:</p>
            <ul className="highlightList">
                <li>Name: Angele Henry</li>
                <li>Email: angele.henry[at]ladyraccoon.com</li>
                <li>Location: Ramonville-Saint-Agne, France</li>
                <li>SIRET: 937817823 00019</li>
            </ul>
        </div>
        <div>
            <h2>Hosting</h2>
            <p>
                The site is proudly hosted by OVHcloud [<Link href="https://www.ovhcloud.com/">https://www.ovhcloud.com/</Link>], 
                ensuring the code runs smoothly, even in the middle of the night.
            </p>
        </div>
        <div>
            <h2>Intellectual Property</h2>
            <p>
                All content on this site (texts, images, illustrations, logos, etc.) is protected by the
                laws of the Copyright Kingdom 🛡️ and belongs to Angele Henry, unless otherwise stated.
                Reproducing or using these materials without permission is like trying to copy a spell
                without the required skills: it doesn’t end well 🎮. Just ask nicely, and it will go
                smoother!
            </p>
        </div>
        <div>
            <h2>Liability</h2>
            <p>
                Angele Henry strives to keep this site bug-free and up to date, but sometimes a little
                glitch can sneak into the code. If any info seems incorrect or if you encounter an
                unexpected problem, feel free to report it to angele.henry[at]ladyraccoon.com. I’ll make
                sure to fix it 🛠️.
            </p>
        </div>
        <div>
            <h2>Personal Data</h2>
            <p>
                Entrusting me with your personal data? Rest assured, I handle it with care, like a legendary
                piece of equipment 🌟. No data will be passed on to any evil third parties. If you want to
                check, modify, or delete your info from my database, just send me a message at
                angele.henry[at]ladyraccoon.com, and I’ll take care of it.
            </p>
        </div>
        <div>
            <h2>Cookies</h2>
            <p>
                This site uses cookies, but not the chocolate chip kind (unfortunately). They are here to
                enhance your user experience. By continuing to explore Lady Raccoon, you agree to these
                little digital helpers. For more details, feel free to check out our cookie policy.
            </p>
        </div>
        <div>
            <h2>Governing Law</h2>
            <p>
                Just like the legal notice, this part of the game is governed by French law. In case of a
                dispute, the battle will take place in the French courts, like a good old legal quest ⚔️.
            </p>
        </div>
    </section>
  );
}

export const metadata = {
    title: "Lady Raccoon - Senior fullstack developper",
    description: "Looking for a senior developer to boost your project?",
};


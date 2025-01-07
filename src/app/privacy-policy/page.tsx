export default function Home() {
  return (
    <section className="w-5/6 flex flex-col my-5 mx-auto">
      <h1>Privacy policy</h1>
        <p>
        Welcome to Lady Raccoon’s trust zone! Here, your data’s privacy is protected as securely as
        the final level of a video game 🎮🛡️
        </p>
        <div>
            <h2>Data Collection</h2>
            <p>
                While browsing this site or contacting me through a form, certain information may be
                collected.
            </p>
            <p>
                But don’t worry, we’re not here to steal your health points! Here’s what might be collected:
            </p>
            <ul className="highlightList">
                <li>Name and surname (if you fill out a contact form)</li>
                <li>Email address (so I can respond to you and not to spam you)</li>
                <li>Browsing data (via cookies, just to optimize your user experience)</li>
            </ul>
        </div>
        <div>
            <h2>Use of Data</h2>
            <p>
                Your data is valuable, and I treat it with the respect it deserves, like a legendary sword
                in an RPG.
            </p>
            <p>I only use it to:</p>
            <ul className="highlightList">
                <li>Respond to your inquiries if you contact me 📧</li>
                <li>Improve the website and its performance (thank you, cookies!) 🍪</li>
            </ul>
        </div>
        <div>
            <h2>Sharing Data</h2>
            <p>
                Rest assured, your info won’t be sold to dark lords or any other evil entities! Your data
                will never be shared without your consent, except if the law requires it (but let’s hope we
                never get there).
            </p>
        </div>
        <div>
            <h2>Data Security</h2>
            <p>
                I take pride in securing your data as if it were guarded by a protective dragon. Technical
                and organizational measures are in place to prevent bad hackers from getting hold of it.
            </p>
        </div>
        <div>
            <h2>Your Rights</h2>
            <p>You have control over your data! It’s your ultimate power. You can:</p>
            <ul className="highlightList">
                <li>
                Request access to your data (to see what info I have on you, but I promise, nothing
                incriminating)
                </li>
                <li>Request its modification or deletion (if you want to disappear from the radar)</li>
                <li>Limit its processing or object to certain uses.</li>
            </ul>
            <p>To exercise these rights, send me a message at angele.henry[at]ladyraccoon.com.</p>
        </div>
        <div>
            <h2>Cookies</h2>
            <p>
                As mentioned in the legal notice, this site uses cookies. These are small files placed on
                your device to make navigation smoother and enhance the user experience. If you don’t like
                cookies (the digital kind, not the chocolate ones), you can disable them in your browser
                settings.
            </p>
        </div>
        <div>
            <h2>Governing Law</h2>
            <p>
                Just like the legal notice, this Privacy Policy is governed by French law. In case of any
                dispute, the courts of France will be the game masters.
            </p>
        </div>
    </section>
  );
}

export const metadata = {
  title: "Lady Raccoon - Développeuse fullstack senior",
  description: "Portfolio de Angele Henry sur le développement Frontend, JAMstack et accessibilité.",
};


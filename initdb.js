const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: 'NextJs APP',
    slug: 'next-js',
    image: 'nextjs.jpg',
    summary:
      'Next Js a React framework.',
    instructions: `
      1.“With Next.js at the helm of our headless tech stack, our developers can create features with velocity and speed, ultimately enabling users to create whatever, whenever they want to.”

      2. “My favorite UX feedback from customers is: "How is the app so fast?" Because we’ve built on Next.js and Vercel since day one, our pages load in an instant, which is important when it comes to mission-critical software.”

      3.“Next.js has been a game-changer for our agency work and team collaboration. Its powerful features have allowed us to build high-performance websites quickly and efficiently like never before.”

     
    `,
    creator: 'Lorens Shellira',
    creator_email: 'lorensshellira@gmail.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
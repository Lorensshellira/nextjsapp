import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';


export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
        <ImageSlideshow />
        </div>
        
        <div>
       
          <div className={classes.hero}>
            <h1>NextLevel Project for NextLevel Projecties</h1>
            <p>Taste & share Project from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Projects</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
          NextLevel Projects is a platform designed for enthusiasts to share their favorite projects with the world.
          </p>
          <p>
          It is  a vibrant community where you can discover new ideas and connect with other project lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Projects?</h2>
          <p>
          NextLevel Projects offers a unique space for project enthusiasts to:

          Share their favorite projects with a global audience.<br></br>
          Discover new and exciting projects from around the world.<br></br>
          Connect with a community of like-minded individuals.
          </p>
          <p>
          Join NextLevel Projects to explore, create, and share your innovative projects with others who share your passion..
          </p>
        </section>
      </main>
    </>
  );
}
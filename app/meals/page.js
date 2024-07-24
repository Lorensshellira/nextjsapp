import { Suspense } from 'react';
import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meais-grid';
import { getMeals } from '@/lib/meals';

async function Meals(){
    const meals = await getMeals();

    return <MealsGrid meals={meals}/>
}

export default  function MealPage(){
   

    return ( 
    <>
    <header className={classes.header}>
    <h1>
        Projects created <span className={classes.highlight}>by you</span>
    </h1>
    <p>Chose your favorite. It is easy and fun!</p>
    <p className={classes.cta}>
        <Link href="/meals/share">
        Share your favorite Project
        </Link>
    </p>
    </header>
    <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Feaching ....</p>}>
        <Meals />
        </Suspense>
    </main>
    </>
  );
}
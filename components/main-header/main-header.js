
import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.jpg';
import classes from './main-header.module.css'
import MainHeaderBackground from '@/components/main-header/main-header-background';
import NavLink from "./nav-link";


export default function MainHeader () {
  
    return (
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="logo" priority/>
        All Projects
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href="/meals">Browse Projects</NavLink>
                </li>
                <li>
                <NavLink href="/community">Project Community</NavLink>
                </li>
            </ul>
        </nav>
        </header>
        </>
    );
}
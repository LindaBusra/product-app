"use client";

import Link from "next/link";
import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";

type NavLink = {
    link: string;
    title: string;
};

type NavLinks = NavLink[];

const navLinks: NavLinks = [
    { link: "/", title: "Home" },
    { link: "/products", title: "Products" },
];

export default function Header() {

    return (
        <header className="top-header">
            <nav>
                {
                    navLinks.map(navLink => {
                        return (<Link
                            key={navLink.link}
                            href={navLink.link}>
                            {navLink.title}
                        </Link>)
                    }
                    )
                }
            </nav>
            <SearchForm />
        </header>
    );
}
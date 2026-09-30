import "./SearchForm.css";
import Form from "next/form";

export default function SearchForm() {
    return (
        <Form action="/search" className="searchForm">
            <input
                type="search"
                name="q"
                required
                placeholder="Søk etter produkt"
                autoComplete="off"
            />
            <button type="submit">🔎</button>
        </Form>
    );
}
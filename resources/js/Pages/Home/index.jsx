import { Link, Head } from "@inertiajs/inertia-react";
import Header from "../Header/Index";
import Background1 from "./Background1";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Header />
            <Background1 />
        </>
    );
}

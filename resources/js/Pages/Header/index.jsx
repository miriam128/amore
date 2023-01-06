import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Header() {
    return (
        <>
            <div className="header">
                <Link href={"#"} className="text-lg logo logo-rosa">
                    AMORE
                </Link>

                <Link
                    href={route("register")}
                    className="ml-4 text-sm cadastrar-button "
                >
                    CADASTRE-SE
                </Link>
            </div>
        </>
    );
}

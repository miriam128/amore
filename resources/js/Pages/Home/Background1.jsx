import { Link, Head } from "@inertiajs/inertia-react";
export default function Background1() {
    return (
        <div className="background-home1 ">
            <div className="w-screen menu-home">
                <Link
                    href="/"
                    className="text-white text-5xl font-bold text-center logo "
                >
                    AMORE
                </Link>
                <p className="subtitle-home">
                    Diga sim com qualidade, segurança e sofisticação
                </p>
                <div className="grid grid-rows-1 grid-flow-col gap-2 justify-center">
                    <Link
                        href={route("login")}
                        className="button-home btn-primary"
                    >
                        LOGIN
                    </Link>
                    <button className="text-truncate button-home btn-transparent">
                        PRESENTEAR UM CASAL
                    </button>
                </div>
            </div>
        </div>
    );
}

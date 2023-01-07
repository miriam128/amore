import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/inertia-react";
export default function Sidebar() {
    return (
        <aside
            className="sidebar w-[240px] overflow-y-auto"
            aria-label="Sidebar"
        >
            <div className="px-3 py-4 min-h-[93vh] rounded bg-white">
                <ul className="space-y-2">
                    <li>
                        <Link
                            href={route("dashboard")}
                            className={`${
                                route().current("dashboard")
                                    ? "bg-[#FFB3E2]"
                                    : ""
                            } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border-none`}
                        >
                            <svg
                                aria-hidden="true"
                                className="mr-1 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            Dashboard
                        </Link>
                    </li>
                    <li className="separador-sidebar">Convidados</li>
                    <li>
                        <Link
                            href={route("convidados.index")}
                            className={`
                            ${
                                route().current("convidados.index")
                                    ? "bg-[#FFB3E2]"
                                    : ""
                            } 
                            flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border-none`}
                        >
                            <svg
                                aria-hidden="true"
                                className="mr-1 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Lista de convidados
                        </Link>
                    </li>
                    <li className="separador-sidebar">Presentes</li>
                    <li>
                        <Link
                            href={route("dashboard")}
                            className={`
                            ${
                                route().current("lista-de-presentes")
                                    ? "bg-[#FFB3E2]"
                                    : ""
                            } 
                            flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border-none`}
                        >
                            <svg
                                aria-hidden="true"
                                className="mr-1 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                                    clipRule="evenodd"
                                />
                                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                            </svg>
                            Lista de presentes
                        </Link>
                    </li>
                    <li className="separador-sidebar">Seu casamento</li>
                    <li>
                        <Link
                            href={route("dashboard")}
                            className={`${
                                route().current("casal-info")
                                    ? "bg-[#FFB3E2]"
                                    : ""
                            } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border-none`}
                        >
                            <svg
                                className="mr-1 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Informações do casal
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

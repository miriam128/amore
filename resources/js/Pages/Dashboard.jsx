import PainelDashboard from "@/Components/PainelDashboard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard({ auth, errors }) {
    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <Head title="Dashboard" />

            <p className="dashboard-greeting">Olá, {auth.user.name}!</p>

            <div className="mt-5 flex gap-5 justify-left">
                <PainelDashboard
                    color="bg-[#FF66C4]"
                    icon={
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                    title={"Dias restantes"}
                    value={"265"}
                    value2={"dias"}
                />
                <PainelDashboard
                    color="bg-[#FF66C4]"
                    icon={
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                    }
                    title={"RSVP"}
                    value={"0"}
                    value2={"Confirmados"}
                />
                <PainelDashboard
                    color="bg-[#FF66C4]"
                    icon={
                        <svg
                            className="w-6 h-6"
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
                    }
                    title={"Presentes"}
                    value={"R$ 0,00"}
                    value2={null}
                />
            </div>
        </AuthenticatedLayout>
    );
}

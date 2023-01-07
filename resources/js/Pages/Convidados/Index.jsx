import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function Index({ auth, convidados }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        nome: "",
        email: "",
        total_pessoas: "",
    });

    function onSubmit(event) {
        event.preventDefault();
        post(route("convidados.store"), { onSuccess: () => reset() });
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Convidados" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={onSubmit}>
                    <div>
                        <InputLabel
                            forInput="nome-convidado"
                            value="Nome do convidado"
                        />

                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            onChange={(event) =>
                                setData("nome", event.target.value)
                            }
                            value={data.nome}
                        />

                        <InputError message={errors.nome} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel
                            forInput="email-convidado"
                            value="Email do convidado"
                        />

                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            onChange={(event) =>
                                setData("email", event.target.value)
                            }
                            value={data.email}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel
                            forInput="total-pessoas-convidado"
                            value="Total de pessoas"
                        />

                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            onChange={(event) =>
                                setData("total_pessoas", event.target.value)
                            }
                            value={data.total_pessoas}
                        />

                        <InputError
                            message={errors.total_pessoas}
                            className="mt-2"
                        />
                    </div>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" processing={processing}>
                        Adicionar convidado
                    </PrimaryButton>
                </form>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Total Pessoas</th>
                    </tr>
                </thead>
                <tbody>
                    {convidados.map((convidado, index) => (
                        <tr key={index}>
                            <td>{convidado.nome}</td>
                            <td>{convidado.email}</td>
                            <td>{convidado.total_pessoas}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AuthenticatedLayout>
    );
}

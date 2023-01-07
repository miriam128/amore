export default function PainelDashboard({ color, icon, title, value, value2 }) {
    return (
        <>
            <div
                className={`${color} p-3 painel-dashboard text-white font-semibold`}
            >
                <div className=" flex gap-3 mb-5 items-center">
                    {icon} {title}
                </div>
                <div className="flex items-center gap-1 mb-5">
                    <span className="text-2xl">{value}</span> {value2}
                </div>
            </div>
        </>
    );
}

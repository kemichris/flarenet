export function ProgressCircle() {
    const percentage = 76;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative h-20 w-20 rounded-full bg-white">
            <svg
                className="h-full w-full -rotate-90"
                viewBox="0 0 100 100"
            >
                {/* Background outline */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#E5E5E5"
                    strokeWidth="8"
                />

                {/* 76% progress */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#E62058"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>

            {/* Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-semibold text-black">
                    {percentage}%
                </span>
            </div>
        </div>
    );
}
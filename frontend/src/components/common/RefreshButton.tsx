type Props = { onClick: () => void; label?: string; disabled?: boolean};

export default function RefreshButton({ onClick, label = 'Refresh', disabled }: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
            {label}
        </button>
    );
}
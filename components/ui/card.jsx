export const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow p-6 ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="text-gray-800">{children}</div>
);


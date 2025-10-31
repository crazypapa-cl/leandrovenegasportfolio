export default function Card({ children, className}: { children: React.ReactNode  , className?: string }) {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}
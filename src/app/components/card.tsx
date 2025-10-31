export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {children}
    </div>
  );
}
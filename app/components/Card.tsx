"use client";

interface CardProps {
  title: string;
  body: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, body, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border border-gray-300 rounded-md p-4 mb-4 cursor-pointer hover:bg-gray-100 transition duration-200 h-full"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{body.slice(0, 80)}...</p>
    </div>
  );
};

export default Card;

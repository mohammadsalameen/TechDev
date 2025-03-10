import { ElementType } from "react";

interface IProps{
    icon : ElementType,
    title : string,
    description : string
}
const FeatureBox = ({ icon: Icon, title, description } : IProps) => {
    return (
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <div className="w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-200 bg-opacity-20">
            <Icon className="w-6 h-6 text-orange-400" />
          </div>
          {/* Heading */}
          <h1 className="text-lg font-bold text-gray-700">{title}</h1>
        </div>
        <p className="mt-3 mb-3 text-gray-700 leading-relaxed">{description}</p>
      </div>
    );
  };
  export default FeatureBox
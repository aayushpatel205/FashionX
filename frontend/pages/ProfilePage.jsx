import { useState } from "react";
import UserDetails from "../components/UserDetails";
import UserWishlist from "../components/UserWishlist";
import MyOrderPage from "./MyOrderPage";

const ProfilePage = () => {
  const [imagePreview, setImagePreview] = useState(null);

  return (
    <div className="h-[100%] w-full flex flex-col gap-5 items-center">
      <div className="flex flex-col items-center justify-center mt-12 gap-5">
        <div className="h-32 w-32 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-center text-4xl font-medium">Aayush Patel</p>
      </div>

      <div className="w-full flex gap-5 justify-center">
        <button
          className="w-[15%] mt-5 self-end bg-black h-12 text-white text-sm hover:opacity-85 cursor-pointer uppercase"
          onClick={()=>{}}
        >
          upload image
        </button>

        <button
          className="w-[15%] mt-5 self-end bg-red-600 h-12 text-white text-sm hover:opacity-85 cursor-pointer uppercase"
          onClick={()=>{}}
        >
          remove image
        </button>
      </div>
    </div>

    // <div className="p-4 max-w-4xl mx-auto">
    //   <h2 className="text-2xl font-bold mb-4">Profile Page</h2>

    //   <div className="flex space-x-4 border-b mb-4">
    //     {tabs.map((tab) => (
    //       <button
    //         key={tab.id}
    //         className={`pb-2 px-4 border-b-2 ${
    //           activeTab === tab.id
    //             ? "border-blue-500 text-blue-600 font-semibold"
    //             : "border-transparent text-gray-500"
    //         }`}
    //         onClick={() => setActiveTab(tab.id)}
    //       >
    //         {tab.label}
    //       </button>
    //     ))}
    //   </div>

    //   <div className="mt-4">{renderTab()}</div>
    // </div>
  );
};

export default ProfilePage;

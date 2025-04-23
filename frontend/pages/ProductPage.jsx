import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import {
  deleteFromWishlist,
  getProductById,
  userUpdateDetails,
} from "../src/api/userApis";
import { useProductData } from "../src/Context/ProductDataContext";
import { ToastContainer, toast } from "react-toastify";
import saveIcon from "../src/assets/frontend_assets/save-light.png";
import { toastStyle } from "../src/toastStyle";
import { useUserData } from "../src/Context/UserDataContext";
import { getUserDetails } from "../src/api/userApis";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [productRating, setProductRating] = useState(2);
  const { userData } = useUserData();
  const [productData, setProductData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const [loading, setLoading] = useState(true);
  const { userCartData, setUserCartData } = useProductData();
  const [wishlistData, setWishlistData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const ratingChanged = (newRating) => {
    setProductRating(newRating);
  };

  const getProduct = async () => {
    const response = await getProductById(id);
    setProductData(response?.data);
    setLoading(false);
    console.log("Hiiii");
  };

  const getWishlistData = async () => {
    const category = "wishlist";
    const response = await getUserDetails(userData?.data.id, category);
    const productIDArray = response?.data.userWishlist.map((item) => item._id);
    setWishlistData(response?.data.userWishlist);
    productIDArray.includes(id) ? setIsSaved(true) : setIsSaved(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
  }, []);

  useEffect(() => {
    getWishlistData();
  }, [userData]);

  useEffect(() => {
    if (userCartData?.length > 0)
      sessionStorage.setItem("cart", JSON.stringify(userCartData));
  }, [userCartData]);

  // Render loader until data is loaded
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-black rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-[100%] flex flex-col gap-20">
      <div className="px-14 mt-10 flex gap-4 h-[550px]">
        <div className="h-[100%] w-[33%]">
          <img
            className="h-full w-full"
            src={productData?.imgUrl}
            alt="Product"
          />
        </div>
        <div className="ml-4 pt-2 flex flex-col gap-6 w-[45%]">
          <p className="text-black text-2xl font-medium">
            {productData?.productName}
          </p>
          <p className="text-black text-2xl font-medium">
            $ {productData?.price}
          </p>
          <p className="text-gray-500">{productData?.productDescription}</p>
          <p className="font-medium text-gray-500">Select Size</p>
          <div className="flex gap-4">
            {productData?.size.map((element) => (
              <div
                key={element}
                onClick={() => setSelectedSize(element)}
                className={`h-14 cursor-pointer w-14 border-2 flex justify-center items-center bg-gray-100 ${
                  selectedSize === element
                    ? "border-amber-400"
                    : "border-gray-200"
                }`}
              >
                {element}
              </div>
            ))}
          </div>

          {userData?.isVerified && (
            <div className="w-fit h-fit border-2 border-gray-200 px-3 py-2 flex items-center gap-3">
              <img
                onClick={async () => {
                  try {
                    if (isSaved) {
                      console.log("Thiss will runnn");
                      const response = await deleteFromWishlist(
                        userData?.data.id,
                        productData?._id
                      );
                      console.log("deleted: ", response);
                      toast("Removed from wishlist", toastStyle);
                    } else {
                      const response = await userUpdateDetails({
                        user_id: userData?.data.id,
                        product: productData,
                        isWishlist: true,
                      });
                      console.log(
                        "added into wishlist: ",
                        response?.data.message
                      );
                      toast("Added to wishlist", toastStyle);
                    }
                    setIsSaved(!isSaved);
                  } catch (error) {
                    console.log(error);
                  }
                }}
                src={
                  isSaved
                    ? "../src/assets/frontend_assets/save-dark.png"
                    : "../src/assets/frontend_assets/save-light.png"
                }
                className="h-5 cursor-pointer"
              />
              <p>Add to Wishlist</p>
            </div>
          )}

          <button
            className="w-[24%] cursor-pointer bg-black h-12 text-white text-sm hover:opacity-85"
            onClick={() => {
              if (
                userCartData?.some(
                  (item) =>
                    item._id === productData._id &&
                    item.selectedSize === selectedSize
                )
              ) {
                setUserCartData(
                  userCartData?.map((item) => {
                    if (
                      item._id === productData._id &&
                      item.selectedSize === selectedSize
                    ) {
                      return {
                        ...item,
                        quantity: item.quantity + 1,
                      };
                    }
                    return item;
                  })
                );
              } else {
                setUserCartData([
                  ...(userCartData || []), // Ensure it's an array before spreading
                  { ...productData, selectedSize, quantity: 1 },
                ]);
              }
            }}
          >
            ADD TO CART
          </button>

          {/* <div className="w-[70%] h-[2px] bg-gray-200 mt-1"></div> */}

          <div className="flex flex-col gap ml-2 gap-1">
            <p className="text-gray-500">100% Original Product</p>
            <p className="text-gray-500">
              Cash on delivery is available on this product.
            </p>
            <p className="text-gray-500">
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] border-gray-200 h-52 ml-14">
        <div className="flex h-12">
          <p className="h-12 border-x border-t border-gray-200 w-[12%] flex justify-center items-center font-medium text-sm text-gray-700">
            Description
          </p>
        </div>
        <div className="border border-gray-200 px-10 py-6 text-gray-700 text-sm leading-6">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer. E-commerce websites
          typically display products or services along with detailed
          descriptions, images, prices, and any available variations (e.g.,
          sizes, colors). Each product usually has its own dedicated page with
          relevant information.
        </div>
      </div>
      <div className="w-[100%] flex flex-col items-center justify-center gap-5">
        <div className="flex gap-2">
          <p className="text-gray-500 text-2xl">ALL</p>
          <p className="font-semibold text-2xl">COLLECTIONS</p>
          <div className="ml-2 w-10 h-[2px] bg-gray-700 mt-4"></div>
        </div>

        <div className="w-[75%] flex justify-around flex-wrap gap-y-5">
          {/* Additional content can be added here */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductPage;

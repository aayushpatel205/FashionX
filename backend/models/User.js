import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    minlength: 3,
    maxlength: 50,
  },
  firstName: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  public_id: {
    type: String,
    default: "",
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  preferences: {
    size: String,
    category: {
      type: String,
      enum: ["Men", "Women", "Kids"],
    },
    subCategory: {
      type: String,
      enum: ["Topwear", "Bottomwear", "Winterwear"],
    },
  },
  loyaltyPoints: {
    type: Number,
    default: 0,
  },
  purchaseHistory: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Refers to the Product model
      },
      purchasedAt: {
        type: Date,
        default: Date.now,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  wishlist: [
    {
      price: Number,
      category: String,
      imgUrl: String,
      productName: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;

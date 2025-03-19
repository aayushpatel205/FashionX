import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
    },
    profilePicture: {
        type: String,
        default: ""
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    preferences: {
        size: String,
        category: {
            type: String,
            enum: ["Men", "Women", "Kids"]
        },
        type: {
            type: String,
            enum: ["Topwear", "Bottomwear", "Winterwear"]
        }
    },
    loyaltyPoints: {
        type: Number,
        default: 0
    },
    purchaseHistory: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product" // Refers to the Product model
        },
        purchasedAt: {
            type: Date,
            default: Date.now
        },
        quantity: {
            type: Number,
            default: 1
        }
    }]
});

const User = mongoose.model("User", userSchema);
export default User;
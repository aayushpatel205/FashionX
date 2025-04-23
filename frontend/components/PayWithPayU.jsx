import { useState } from "react";
import axios from "axios";

export default function PayWithPayU() {
  const [form, setForm] = useState({
    firstname: "",
    email: "",
    phone: "",
    amount: "",
    productinfo: "Test Product",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8002/payment/api/pay", form);
    const payuData = res.data;

    const formElement = document.createElement("form");
    formElement.method = "POST";
    formElement.action = payuData.action;

    Object.entries(payuData).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      formElement.appendChild(input);
    });

    document.body.appendChild(formElement);
    formElement.submit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto mt-10">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, firstname: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Pay with PayU
      </button>
    </form>
  );
}

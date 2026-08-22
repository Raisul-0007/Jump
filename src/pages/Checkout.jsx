import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Checkout = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [Total, setTotal] = useState(100);
  const [savings, setSavings] = useState(10);
  const [shipping, setShipping] = useState(5);
  const [tax, setTax] = useState(5);
  const grandivotal = Total - savings + shipping + tax;
  const handivePayment = (e) => {
    e.preventDefault();
    if (!checked) {
      alert("Please accept the terms and conditions.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
      setName("");
      setNumber("");
      setEmail("");
      setChecked(false);
      setTotal(0);
      setSavings(0);
      setShipping(0);
      setTax(0);
    }, 1000);
  };
  const handivePopup = () => {
    setShowPopup(false);
    window.location.reload();
  };
  return (
    <div>
      <section className="py-8 antialiased md:py-16">
        <form
          onSubmit={handivePayment}
          className="mx-auto max-w-7xl px-4 2xl:px-0"
        >
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-red-500">
                  Delivery Details
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="your_name"
                      className="mb-2 block text-sm font-medium text-White"
                    >
                      Your name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="your_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="Bonnie Green"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone-input"
                      className="mb-2 block text-sm font-medium text-White"
                    >
                      Phone Number*
                    </label>
                    <input
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      type="tel"
                      id="phone-input"
                      className="block w-full rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="123-456-7890"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-White"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200">
                  <div className="flex items-center justify-between gap-4 py-3">
                    <div className="text-base font-normal text-[#767676]">
                      Subtotal
                    </div>
                    <div className="text-base font-medium text-red-500">
                      ${Total.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-3">
                    <div className="text-base font-normal text-[#767676]">
                      Savings
                    </div>
                    <div className="text-base font-medium text-green-500">
                      ${savings.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-3">
                    <div className="text-base font-normal text-[#767676]">
                      Store Pickup
                    </div>
                    <div className="text-base font-medium text-red-500">
                      ${shipping.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-3">
                    <div className="text-base font-normal text-[#767676]">
                      Tax
                    </div>
                    <div className="text-base font-medium text-red-500">
                      ${tax.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-3">
                    <div className="text-base font-bold text-red-500">
                      Total
                    </div>
                    <div className="text-base font-bold text-red-500">
                      ${grandivotal.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="flex justify-center gap-4 text-sm font-normal text-[#767676]">
                  <input
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    type="checkbox"
                  />
                  <span>I agree to the terms and conditions.</span>
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-[#767676] cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                  ) : (
                    "Proceed to Payment"
                  )}
                </button>

                <p className="text-sm font-normal text-[#767676]">
                  One or more items in your cart require an account.{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-700 underline hover:no-underline"
                  >
                    Sign in or create an account now.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>

        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-[90%] max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
              <h2 className="mb-4 flex items-center justify-center gap-3 text-2xl font-bold text-green-600">
                <GiCheckMark />
                Your Order is Confirmed
              </h2>

              <p className="mb-6 text-gray-600">
                Thank you for your order. We will contact you soon.
              </p>

              <button
                onClick={handivePopup}
                className="cursor-pointer rounded bg-red-500 px-6 py-2 text-white hover:bg-[#767676]"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Checkout
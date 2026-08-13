"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Loader2,
  LocateFixed,
  MapPin,
  PackageCheck,
  ShoppingBag,
  Truck,
  WalletCards,
} from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  weight: string;
  price: number;
  quantity: number;
};

type PaymentMethod = "upi" | "card" | "cod";

const BUSINESS_UPI_ID = "9398389387@ybl";
const BUSINESS_NAME = "Sai Durga Swagruha Food";

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Sesame Laddu",
    weight: "250g",
    price: 150,
    quantity: 2,
  },
  {
    id: 2,
    name: "Dry Fruit Laddu",
    weight: "250g",
    price: 190,
    quantity: 1,
  },
];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("upi");

  const [isGettingLocation, setIsGettingLocation] =
    useState(false);

  const [isProcessingPayment, setIsProcessingPayment] =
    useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [deliveryType, setDeliveryType] =
    useState<"delivery" | "pickup">("delivery");

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, []);

  const deliveryCharge = useMemo(() => {
    if (deliveryType === "pickup") {
      return 0;
    }

    if (totalAmount >= 2000) {
      return 0;
    }

    return 50;
  }, [deliveryType, totalAmount]);

  const grandTotal = totalAmount + deliveryCharge;

  const totalItems = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, []);

  const updateCustomer = (
    field: keyof typeof customer,
    value: string
  ) => {
    setCustomer((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const validateStepOne = () => {
    if (!customer.name.trim()) {
      alert("Please enter your full name.");
      return false;
    }

    if (!customer.phone.trim()) {
      alert("Please enter your phone number.");
      return false;
    }

    if (customer.phone.trim().length < 10) {
      alert("Please enter a valid phone number.");
      return false;
    }

    if (!customer.address.trim()) {
      alert("Please enter your delivery address.");
      return false;
    }

    if (!customer.city.trim()) {
      alert("Please enter your city.");
      return false;
    }

    if (!customer.state.trim()) {
      alert("Please enter your state.");
      return false;
    }

    if (!customer.pincode.trim()) {
      alert("Please enter your pincode.");
      return false;
    }

    return true;
  };

  const handleContinueToDelivery = () => {
    if (!validateStepOne()) {
      return;
    }

    setStep(2);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContinueToPayment = () => {
    setStep(3);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert(
        "Location is not supported by your browser."
      );
      return;
    }

    setIsGettingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setCustomer((current) => ({
          ...current,
          address: `Current location: ${latitude.toFixed(
            6
          )}, ${longitude.toFixed(6)}`,
        }));

        setIsGettingLocation(false);

        alert(
          "Your current location has been added. Please complete the remaining address details."
        );
      },
      () => {
        setIsGettingLocation(false);

        alert(
          "We could not access your location. Please allow location permission and try again."
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const createOrderReference = () => {
    const timestamp = Date.now()
      .toString()
      .slice(-8);

    const random = Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase();

    return `SD${timestamp}${random}`;
  };

  const handlePlaceOrder = () => {
    if (isProcessingPayment) {
      return;
    }

    const orderReference = createOrderReference();

    if (paymentMethod === "upi") {
      setIsProcessingPayment(true);

      const upiUrl =
        `upi://pay?pa=${encodeURIComponent(
          BUSINESS_UPI_ID
        )}` +
        `&pn=${encodeURIComponent(
          BUSINESS_NAME
        )}` +
        `&am=${grandTotal.toFixed(2)}` +
        `&cu=INR` +
        `&tn=${encodeURIComponent(
          `Order ${orderReference}`
        )}` +
        `&tr=${encodeURIComponent(orderReference)}`;

      window.location.href = upiUrl;

      setTimeout(() => {
        setIsProcessingPayment(false);
      }, 3000);

      return;
    }

    if (paymentMethod === "card") {
      alert(
        "Card payment gateway will be connected next. Please select UPI or Cash on Delivery for now."
      );

      return;
    }

    if (paymentMethod === "cod") {
      alert(
        `Order placed successfully! Your order reference is ${orderReference}.`
      );

      window.location.href =
        `/order-success?order=${encodeURIComponent(
          orderReference
        )}`;
    }
  };

  const paymentButtonText = () => {
    if (isProcessingPayment) {
      return "Opening UPI Payment...";
    }

    if (paymentMethod === "upi") {
      return `Proceed to UPI Payment ₹${grandTotal.toLocaleString(
        "en-IN"
      )}`;
    }

    if (paymentMethod === "card") {
      return `Proceed to Card Payment ₹${grandTotal.toLocaleString(
        "en-IN"
      )}`;
    }

    return `Place Order ₹${grandTotal.toLocaleString(
      "en-IN"
    )}`;
  };

  return (
    <main className="min-h-screen bg-[#FFFDF7] pb-20">
      {/* ================= HEADER ================= */}

      <section className="border-b border-[#D4A72C]/15 bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12 xl:px-20">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#687386] transition hover:text-[#123B7A]"
          >
            <ArrowLeft size={17} />

            Back to Cart
          </Link>

          <div className="mt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A67819]">
              Sai Durga Swagruha Food
            </p>

            <h1 className="mt-2 font-heading text-4xl text-[#123B7A] sm:text-5xl">
              Secure Checkout
            </h1>

            <p className="mt-2 text-sm text-[#687386]">
              Complete your order in just a few simple
              steps.
            </p>
          </div>

          {/* ================= STEPS ================= */}

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              {
                number: 1,
                title: "Customer Details",
              },
              {
                number: 2,
                title: "Delivery",
              },
              {
                number: 3,
                title: "Payment",
              },
            ].map((item) => (
              <div
                key={item.number}
                className={`flex items-center gap-3 rounded-2xl border p-4 ${
                  step === item.number
                    ? "border-[#123B7A] bg-[#F7FAFF]"
                    : step > item.number
                    ? "border-[#D4A72C]/30 bg-[#FFF8E8]"
                    : "border-[#D4A72C]/15 bg-white"
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                    step >= item.number
                      ? "bg-[#123B7A] text-white"
                      : "bg-[#F3F4F6] text-[#687386]"
                  }`}
                >
                  {step > item.number ? (
                    <Check size={17} />
                  ) : (
                    item.number
                  )}
                </div>

                <div>
                  <p className="text-xs text-[#687386]">
                    Step {item.number}
                  </p>

                  <p className="font-semibold text-[#123B7A]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <section className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_400px]">
          {/* ================= LEFT SIDE ================= */}

          <div>
            {/* ================= STEP 1 ================= */}

            {step === 1 && (
              <div className="rounded-[28px] border border-[#D4A72C]/15 bg-white p-5 shadow-[0_12px_40px_rgba(18,59,122,0.05)] sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67819]">
                  Step 1 of 3
                </p>

                <h2 className="mt-2 font-heading text-3xl text-[#123B7A]">
                  Customer Details
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#687386]">
                  Tell us where we should deliver your
                  homemade favourites.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold text-[#123B7A]">
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={customer.name}
                      onChange={(e) =>
                        updateCustomer(
                          "name",
                          e.target.value
                        )
                      }
                      placeholder="Enter your full name"
                      className="mt-2 w-full rounded-xl border border-[#D4A72C]/20 px-4 py-3.5 text-sm outline-none transition focus:border-[#123B7A]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold text-[#123B7A]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      value={customer.phone}
                      onChange={(e) =>
                        updateCustomer(
                          "phone",
                          e.target.value
                        )
                      }
                      placeholder="Enter your phone number"
                      className="mt-2 w-full rounded-xl border border-[#D4A72C]/20 px-4 py-3.5 text-sm outline-none transition focus:border-[#123B7A]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex items-center justify-between gap-4">
                      <label className="text-sm font-semibold text-[#123B7A]">
                        Delivery Address
                      </label>

                      <button
                        type="button"
                        onClick={
                          handleUseCurrentLocation
                        }
                        disabled={isGettingLocation}
                        className="flex items-center gap-2 text-xs font-semibold text-[#A67819] disabled:opacity-60"
                      >
                        {isGettingLocation ? (
                          <Loader2
                            size={15}
                            className="animate-spin"
                          />
                        ) : (
                          <LocateFixed size={15} />
                        )}

                        {isGettingLocation
                          ? "Getting location..."
                          : "Use current location"}
                      </button>
                    </div>

                    <textarea
                      rows={4}
                      value={customer.address}
                      onChange={(e) =>
                        updateCustomer(
                          "address",
                          e.target.value
                        )
                      }
                      placeholder="House number, street, area and landmark"
                      className="mt-2 w-full resize-none rounded-xl border border-[#D4A72C]/20 px-4 py-3.5 text-sm outline-none transition focus:border-[#123B7A]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#123B7A]">
                      City
                    </label>

                    <input
                      type="text"
                      value={customer.city}
                      onChange={(e) =>
                        updateCustomer(
                          "city",
                          e.target.value
                        )
                      }
                      placeholder="Enter city"
                      className="mt-2 w-full rounded-xl border border-[#D4A72C]/20 px-4 py-3.5 text-sm outline-none transition focus:border-[#123B7A]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#123B7A]">
                      State
                    </label>

                    <input
                      type="text"
                      value={customer.state}
                      onChange={(e) =>
                        updateCustomer(
                          "state",
                          e.target.value
                        )
                      }
                      placeholder="Enter state"
                      className="mt-2 w-full rounded-xl border border-[#D4A72C]/20 px-4 py-3.5 text-sm outline-none transition focus:border-[#123B7A]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#123B7A]">
                      Pincode
                    </label>

                    <input
                      type="text"
                      value={customer.pincode}
                      onChange={(e) =>
                        updateCustomer(
                          "pincode",
                          e.target.value
                        )
                      }
                      placeholder="Enter pincode"
                      className="mt-2 w-full rounded-xl border border-[#D4A72C]/20 px-4 py-3.5 text-sm outline-none transition focus:border-[#123B7A]"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleContinueToDelivery}
                  className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#123B7A] px-6 py-4 font-semibold text-white transition hover:bg-[#0D2E61]"
                >
                  Continue to Delivery

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            )}

            {/* ================= STEP 2 ================= */}

            {step === 2 && (
              <div className="rounded-[28px] border border-[#D4A72C]/15 bg-white p-5 shadow-[0_12px_40px_rgba(18,59,122,0.05)] sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67819]">
                  Step 2 of 3
                </p>

                <h2 className="mt-2 font-heading text-3xl text-[#123B7A]">
                  Delivery Preference
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#687386]">
                  Choose how you would like to receive
                  your order.
                </p>

                <div className="mt-8 grid gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setDeliveryType("delivery")
                    }
                    className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      deliveryType === "delivery"
                        ? "border-[#123B7A] bg-[#F7FAFF]"
                        : "border-[#D4A72C]/15"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#123B7A] text-white">
                      <Truck size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#123B7A]">
                        Home Delivery
                      </h3>

                      <p className="mt-1 text-sm text-[#687386]">
                        Deliver directly to your address.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setDeliveryType("pickup")
                    }
                    className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      deliveryType === "pickup"
                        ? "border-[#123B7A] bg-[#F7FAFF]"
                        : "border-[#D4A72C]/15"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8E8] text-[#A67819]">
                      <MapPin size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#123B7A]">
                        Store Pickup
                      </h3>

                      <p className="mt-1 text-sm text-[#687386]">
                        Collect your order directly from
                        us.
                      </p>
                    </div>
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#D4A72C]/20 px-6 py-4 font-semibold text-[#123B7A]"
                  >
                    <ArrowLeft size={18} />

                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleContinueToPayment}
                    className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#123B7A] px-6 py-4 font-semibold text-white transition hover:bg-[#0D2E61]"
                  >
                    Continue to Payment

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 3 ================= */}

            {step === 3 && (
              <div className="rounded-[28px] border border-[#D4A72C]/15 bg-white p-5 shadow-[0_12px_40px_rgba(18,59,122,0.05)] sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67819]">
                  Step 3 of 3
                </p>

                <h2 className="mt-2 font-heading text-3xl text-[#123B7A]">
                  Choose Payment Method
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#687386]">
                  Select your preferred payment option.
                </p>

                <div className="mt-8 space-y-4">
                  {/* UPI */}

                  <button
                    type="button"
                    onClick={() =>
                      setPaymentMethod("upi")
                    }
                    className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      paymentMethod === "upi"
                        ? "border-[#123B7A] bg-[#F7FAFF]"
                        : "border-[#D4A72C]/15"
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123B7A] text-white">
                      <WalletCards size={21} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-[#123B7A]">
                        UPI Payment
                      </h3>

                      <p className="mt-1 text-sm text-[#687386]">
                        Google Pay, PhonePe, Paytm and
                        more
                      </p>
                    </div>

                    {paymentMethod === "upi" && (
                      <Check
                        size={20}
                        className="text-[#123B7A]"
                      />
                    )}
                  </button>

                  {/* CARD */}

                  <button
                    type="button"
                    onClick={() =>
                      setPaymentMethod("card")
                    }
                    className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      paymentMethod === "card"
                        ? "border-[#123B7A] bg-[#F7FAFF]"
                        : "border-[#D4A72C]/15"
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF8E8] text-[#A67819]">
                      <CreditCard size={21} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-[#123B7A]">
                        Card Payment
                      </h3>

                      <p className="mt-1 text-sm text-[#687386]">
                        Debit or credit card
                      </p>
                    </div>

                    {paymentMethod === "card" && (
                      <Check
                        size={20}
                        className="text-[#123B7A]"
                      />
                    )}
                  </button>

                  {/* COD */}

                  <button
                    type="button"
                    onClick={() =>
                      setPaymentMethod("cod")
                    }
                    className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      paymentMethod === "cod"
                        ? "border-[#123B7A] bg-[#F7FAFF]"
                        : "border-[#D4A72C]/15"
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF8E8] text-[#A67819]">
                      <PackageCheck size={21} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-[#123B7A]">
                        Cash on Delivery
                      </h3>

                      <p className="mt-1 text-sm text-[#687386]">
                        Pay when your order arrives.
                      </p>
                    </div>

                    {paymentMethod === "cod" && (
                      <Check
                        size={20}
                        className="text-[#123B7A]"
                      />
                    )}
                  </button>
                </div>

                {/* UPI INFO */}

                {paymentMethod === "upi" && (
                  <div className="mt-6 rounded-2xl border border-[#D4A72C]/20 bg-[#FFF8E8] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A67819]">
                      UPI Payment
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#687386]">
                      After clicking the button, your UPI
                      payment app will open with the exact
                      order amount automatically added.
                    </p>

                    <p className="mt-3 text-sm font-semibold text-[#123B7A]">
                      Paying to: {BUSINESS_NAME}
                    </p>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#D4A72C]/20 px-6 py-4 font-semibold text-[#123B7A]"
                  >
                    <ArrowLeft size={18} />

                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    disabled={isProcessingPayment}
                    className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#123B7A] px-6 py-4 font-semibold text-white transition hover:bg-[#0D2E61] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isProcessingPayment ? (
                      <Loader2
                        size={19}
                        className="animate-spin"
                      />
                    ) : (
                      <WalletCards size={19} />
                    )}

                    {paymentButtonText()}

                    {!isProcessingPayment && (
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ================= ORDER SUMMARY ================= */}

          <aside className="h-fit rounded-[28px] border border-[#D4A72C]/20 bg-white p-6 shadow-[0_15px_40px_rgba(18,59,122,0.07)] xl:sticky xl:top-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF8E8] text-[#A67819]">
                <ShoppingBag size={21} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A67819]">
                  Order Details
                </p>

                <h2 className="mt-1 font-heading text-2xl text-[#123B7A]">
                  Order Summary
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-5 border-b border-[#D4A72C]/15 pb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-[#123B7A]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#687386]">
                      {item.weight} × {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold text-[#123B7A]">
                    ₹
                    {(
                      item.price * item.quantity
                    ).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 border-b border-[#D4A72C]/15 pb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#687386]">
                  Items ({totalItems})
                </span>

                <span className="font-semibold text-[#123B7A]">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-[#687386]">
                  Delivery
                </span>

                <span className="font-semibold text-[#123B7A]">
                  {deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge}`}
                </span>
              </div>

              {deliveryCharge === 0 &&
                deliveryType === "delivery" && (
                  <p className="text-xs font-medium text-[#4B8B3B]">
                    🎉 You unlocked free delivery!
                  </p>
                )}
            </div>

            <div className="flex items-end justify-between pt-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A67819]">
                  Total Amount
                </p>

                <p className="mt-1 font-heading text-4xl text-[#123B7A]">
                  ₹{grandTotal.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold text-[#123B7A]">
                🔒 Secure Checkout
              </p>

              <p className="mt-1 text-xs leading-5 text-[#687386]">
                Your order details will be used only for
                processing and delivering your order.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
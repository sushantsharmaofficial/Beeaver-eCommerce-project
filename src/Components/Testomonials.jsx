import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    feedback:
      "Your Mart has an amazing selection of products! I was able to find everything I needed and more. The service was excellent, and shipping was fast!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John Smith",
    feedback:
      "I had a great experience shopping at Your Mart. The website is easy to navigate, and the prices are unbeatable. I'll definitely be coming back for more!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Emily Johnson",
    feedback:
      "Fantastic quality products at affordable prices. Customer service was super helpful when I had questions. Highly recommend Your Mart!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-purple-900">
              {testimonial.name}
            </h3>
            <p className="mt-2 text-gray-600">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

"use client";
import React from "react";
import { Card, Carousel } from "./ui/carousal";

export function UseCasesCaraousal() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full text-center h-full mt-[12rem]">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-white bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Use cases
        </h1>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category:
      "Improve decision-making with detailed data insights. Our platform helps you identify trends, patterns, and correlations within your business data. Whether you're analysing sales figures, operational metrics, or customer behaviour, our comprehensive reports provide actionable insights to drive strategic decisions and optimise performance",
    title: "Business Analytics",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category:
      "Easily understand the outcome of surveys that you conduct. Simply export your survey results in Excel format and upload them to our platform. Our advanced algorithms will analyse the data, highlighting key findings such as response distributions, significant trends, and correlations. This enables you to make informed decisions based on user feedback and preferences.",
    title: "User Research",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category:
      "Understand customer sentiments and improve your services. By analyzing customer feedback data, our platform can identify common themes, sentiments, and areas for improvement. This helps businesses enhance customer satisfaction, tailor their services to meet customer needs, and build stronger customer relationships.",
    title: "Customer Feedback Survey Analysis",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category:
      "Gain valuable market insights from your data. Our platform can analyse large datasets to uncover market trends, consumer behaviour, and competitive analysis. This information is crucial for developing effective marketing strategies, identifying new market opportunities, and staying ahead of competitors.",
    title: "Market Research",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category:
      "Conduct thorough financial data analysis with ease. Our platform can process financial statements, transaction data, and other financial metrics to provide insights into profitability, cost management, and financial health. This helps businesses make informed financial decisions, manage risks, and improve overall financial performance.",
    title: "Financial Analysis",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category:
      "Analyse patient data to improve healthcare outcomes. Our platform can handle large volumes of healthcare data, identifying patterns and correlations that can lead to better patient care and treatment plans. Whether it's analysing patient demographics, treatment efficacy, or healthcare operations, our reports provide valuable insights to enhance healthcare delivery.",
    title: "Healthcare Analytics",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

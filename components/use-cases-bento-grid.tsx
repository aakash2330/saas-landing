"use client";
import React from "react";
import { Card, Carousel } from "./ui/carousal";
import userResearch from "../public/assets/new/Tile_User_research.png";
import marketResearch from "../public/assets/new/Tile_Market_research.png";
import customerFeedback from "../public/assets/new/Tile_Customer_feedback.png";
import businessAnalytics from "../public/assets/new/Tile_Business_analytics.png";
import financialAnalysis from "../public/assets/new/Tile_Financial_Analysis.png";
import healthcareAnalysis from "../public/assets/new/Tile_Healthcare_analysis.png";
import { HeroTitle } from "./hero-title";

export function UseCasesCaraousal() {
  const cards = data.map((card, index) => (
    //@ts-expect-error - err
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full text-center h-full mt-[7rem]">
      <div className="max-w-2xl mx-auto p-4"></div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category:
      "Improve decision-making with detailed data insights. Our platform helps you identify trends, patterns and correlations within your business data. Whether you're analysing sales figures, operational metrics, or customer behaviour, our comprehensive reports provide actionable insights to drive strategic decisions and optimise performance",
    title: "Business Analytics",
    src: businessAnalytics,
  },
  {
    category:
      "Easily understand the outcome of surveys that you conduct. Simply export your survey results in Excel format and upload them to our platform. Our advanced algorithms will analyse the data, highlighting key findings such as response distributions, significant trends and correlations. This enables you to make informed decisions based on user feedback and preferences.",
    title: "User Research",
    src: userResearch,
  },
  {
    category:
      "Understand customer sentiments and improve your services. By analyzing customer feedback data our platform can identify common themes, sentiments and areas for improvement. This helps businesses enhance customer satisfaction, tailor their services to meet customer needs and build stronger customer relationships.",
    title: "Customer Feedback Survey Analysis",
    src: customerFeedback,
  },

  {
    category:
      "Gain valuable market insights from your data. Our platform can analyse large datasets to uncover market trends, consumer behaviour and competitive analysis. This information is crucial for developing effective marketing strategies, identifying new market opportunities and staying ahead of competitors.",
    title: "Market Research",
    src: marketResearch,
  },
  {
    category:
      "Conduct thorough financial data analysis with ease. Our platform can process financial statements, transaction data and other financial metrics to provide insights into profitability, cost management, and financial health. This helps businesses make informed financial decisions, manage risks, and improve overall financial performance.",
    title: "Financial Analysis",
    src: financialAnalysis,
  },
  {
    category:
      "Analyse patient data to improve healthcare outcomes. Our platform can handle large volumes of healthcare data, identifying patterns and correlations that can lead to better patient care and treatment plans. Whether it's analysing patient demographics, treatment efficacy or healthcare operations, our reports provide valuable insights to enhance healthcare delivery.",
    title: "Healthcare Analytics",
    src: healthcareAnalysis,
  },
];

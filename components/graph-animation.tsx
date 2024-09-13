"use client";

import React, { useEffect, useRef } from "react";
import Snap from "snapsvg-cjs";
import $ from "jquery"; // You might need to install jQuery if not already installed

const LineDrawingAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const prices = [
      -100, -95, -30, -65, -35, -215, -95, -70, -115, -100, -20, -200, -170,
    ];

    const draw = () => {
      const paper = Snap(svgRef.current);
      //@ts-expect-error - ignore
      const chartH = $(svgRef.current).height();

      //@ts-expect-error - ignore
      const chartW = $(svgRef.current).width();

      // Calculate adjusted prices to align with the bottom of the SVG
      const adjustedPrices = prices.map((price) => price + chartH);
      const steps = adjustedPrices.length;

      //@ts-expect-error - ignore
      const step = (i, chartW) => (chartW / steps) * i;

      const points = [];
      const breakPointsX = [];
      const breakPointsY = [];
      const point = {};

      for (let i = 1; i < adjustedPrices.length; i++) {
        const currStep = step(i, chartW);
        const y = adjustedPrices[i];

        //@ts-expect-error - ignore
        point.x = Math.floor(currStep);

        //@ts-expect-error - ignore
        point.y = y;

        const prev = i - 1;
        const prevStep = step(prev, chartW);
        const prevY = adjustedPrices[prev];

        //@ts-expect-error - ignore
        point.prevX = Math.floor(prevStep);

        //@ts-expect-error - ignore
        point.prevY = prevY;

        //@ts-expect-error - ignore
        points[i] = `M${point.prevX},${point.prevY} L${point.x},${point.y}`;

        //@ts-expect-error - ignore
        breakPointsX[i] = point.x;

        //@ts-expect-error - ignore
        breakPointsY[i] = point.y;
      }

      // Draw lines
      for (let i = 0; i < points.length; i++) {
        const myPath = paper.path(points[i]);
        const len = myPath.getTotalLength();
        myPath.attr({
          "stroke-dasharray": len,
          "stroke-dashoffset": len,
          stroke: "white",
          "stroke-linecap": "round",
          "z-index": 0,
          "stroke-width": 1,
          opacity: 0 + 0.1 * i,
          "stroke-linejoin": "round",
          id: `myLine${i}`,
          class: "line",
        });
      }

      // Draw "X" shaped breakpoints
      for (let i = 0; i < points.length - 1; i++) {
        const size = 5; // size of the X
        const x = breakPointsX[i];
        const y = breakPointsY[i];

        // Draw two crossing lines to form an "X"
        const xShape = paper.path(
          `M${x - size},${y - size} L${x + size},${y + size} M${x + size},${y - size} L${x - size},${y + size}`,
        );

        xShape.attr({
          stroke: "white",
          "stroke-width": 2,

          opacity: 0 + 0.1 * i,
          id: `myCirc${i}`,
          class: "breakpoint",
        });
      }

      // Draw coordinate system
      const xAxis = paper.path(`M0,${chartH}L${chartW},${chartH}`);
      const yAxis = paper.path(`M0,${chartH}L0,0`);

      const xOff = xAxis.getTotalLength();
      const yOff = yAxis.getTotalLength();

      yAxis.attr({
        stroke: "white",
        "stroke-width": 1,
        "stroke-dasharray": yOff,
        "stroke-dashoffset": yOff,
        id: "yAxis",
      });

      xAxis.attr({
        stroke: "white",
        "stroke-width": 1,
        "stroke-dasharray": xOff,
        "stroke-dashoffset": xOff,
        id: "xAxis",
      });
    };

    const animate = () => {
      for (let i = 0; i < prices.length; i++) {
        const circ = $(`#myCirc${i}`);
        const line = $(`#myLine${i}`);

        circ.css({
          "-webkit-transition": "all 550ms cubic-bezier(.84,0,.2,1)",
          "-webkit-transition-delay": `${375 + i * 125}ms`,
        });

        line.css({
          "-webkit-transition": "all 250ms cubic-bezier(.84,0,.2,1)",
          "-webkit-transition-delay": `${i * 125}ms`,
        });

        line.animate({
          "stroke-dashoffset": 0,
        });

        circ.css({
          transform: "scale(1)",
        });
      }
    };
    if (window !== undefined) {
      draw();
      animate();
    }
  }, []);

  return (
    <>
      <div>
        <svg id="svg" ref={svgRef} className="min-h-[20rem]  w-[20rem] "></svg>
      </div>
    </>
  );
};

export default LineDrawingAnimation;

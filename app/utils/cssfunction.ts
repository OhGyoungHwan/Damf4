import { debounce } from "lodash";
import { useEffect, useState } from "react";

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function postionColor(postion: string, target: string) {
  const redPostion = ["ST", "LS", "RS", "RF", "CF", "LF", "LW", "RW"];
  const greenPostion = [
    "CAM",
    "RAM",
    "LAM",
    "CM",
    "LCM",
    "RCM",
    "RM",
    "LM",
    "CDM",
    "LDM",
    "RDM",
  ];

  const bluePostion = [
    "CB",
    "LCB",
    "RCB",
    "LB",
    "RB",
    "LWB",
    "RWB",
    "LB",
    "RB",
    "SW",
  ];

  const orangePostion = ["GK"];
  switch (true) {
    case redPostion.includes(postion):
      switch (target) {
        case "text":
          return "text-red-500";
        case "border":
          return "border-red-500";
        case "bg":
          return "bg-red-500";
        default:
          return "";
      }
    case greenPostion.includes(postion):
      switch (target) {
        case "text":
          return "text-green-500";
        case "border":
          return "border-green-500";
        case "bg":
          return "bg-green-500";
        default:
          return "";
      }
    case bluePostion.includes(postion):
      switch (target) {
        case "text":
          return "text-blue-500";
        case "border":
          return "border-blue-500";
        case "bg":
          return "bg-blue-500";
        default:
          return "";
      }
    case orangePostion.includes(postion):
      switch (target) {
        case "text":
          return "text-orange-500";
        case "border":
          return "border-orange-500";
        case "bg":
          return "bg-orange-500";
        default:
          return "";
      }
    default:
      return null;
  }
}

export function rankColor(rank: number) {
  switch (rank) {
    case 1:
      return "bg-yellow-500";
    case 2:
      return "bg-gray-400";
    case 3:
      return "bg-orange-500";
    default:
      return "bg-gray-700";
  }
}

export function ovrColor(ovr: number) {
  switch (true) {
    case ovr >= 140:
      return `text-yellow-500`;
    case ovr >= 130:
      return `text-red-500`;
    case ovr >= 120:
      return `text-fuchsia-500`;
    case ovr >= 110:
      return `text-purple-500`;
    case ovr >= 100:
      return `text-indigo-500`;
    case ovr >= 90:
      return `text-blue-500`;
    case ovr >= 80:
      return `text-sky-500`;
    case ovr < 80:
      return `text-gray-500`;
    default:
      return null;
  }
}

export const getWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = debounce(() => {
    setWindowWidth(window.innerWidth);
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return windowWidth;
};

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface AvailablePages {
  page: "Repositories" | "Developers";
  description:
    | "See what the GitHub community is most excited about today."
    | "These are the developers building the hot tools today.";
}

const repositories: AvailablePages = {
  page: "Repositories",
  description: "See what the GitHub community is most excited about today.",
};

const description: AvailablePages = {
  page: "Developers",
  description: "These are the developers building the hot tools today.",
};

const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState<AvailablePages>(repositories);

  const { pathname } = useLocation();

  useEffect(() => {
    const strategy: { [key: string]: AvailablePages } = {
      "/": repositories,
      "/developers": description,
    };

    setCurrentPage(strategy[pathname]);
  }, [pathname]);

  return currentPage;
};

export default useCurrentPage;

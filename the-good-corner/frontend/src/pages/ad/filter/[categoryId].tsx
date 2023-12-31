import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AdCardProps } from "@/components/AdCard";
import DisplayAds from "@/components/DisplayAds";

const SearchResults = () => {
  const [searchedAds, setSearchedAds] = useState<AdCardProps[]>([]);

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<AdCardProps[]>(
          `http://localhost:4000/ad?category=${router.query.categoryId}`
        );
        console.log(result.data);
        setSearchedAds(result.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, [router.query.categoryId]);
  return (
    <DisplayAds
      ads={searchedAds}
      title={`Displaying ads for category id: ${router.query.categoryId}`}
    />
  );
};

export default SearchResults;

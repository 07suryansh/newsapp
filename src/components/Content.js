import React, { useEffect, useState } from "react";
import axios from "axios";
import "./content.css";
import Card from "./Card";

export default function Content() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=keyword&apiKey=b4a4cbca69f342aca8cced4d07ba4ee9"
        );
        setData(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
      <div className="content">
        {data.map((e) => {
          return (
            <Card
              author={e.author}
              title={e.title}
              description={e.description}
              imgurl={e.urlToImage}
              url={e.url}
            />
          );
        })}
      </div>
  );
}

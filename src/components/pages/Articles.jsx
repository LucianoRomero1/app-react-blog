import React from "react";
import { useState, useEffect } from "react";
import { Ajax } from "../../helpers/Ajax";
import { Global } from "../../helpers/Global";
import { List } from "./List";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const { data, loading } = await Ajax(Global.url + "articles", "GET");

    if (data.status == "success") {
      setArticles(data.articles);
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        "Loading..."
      ) : articles.length >= 1 ? (
        <List articles={articles} setArticles={setArticles} />
      ) : (
        <h1>No results found</h1>
      )}
    </>
  );
};

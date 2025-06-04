import { useState } from "react";
import "./App.css";

import SearchForm from "./components/SearchForm";
import { fetchArticlesWithTopic } from "./articles-api";
import UseRef4 from "./lessons/UseRef4";
import Context from "./lessons/contecstJS/Context";
import CreateRouterApp from "./lessons/reactRouter/CreateRouterApp";
import ReduxApp from "./lessons/reduxAndReduxToolkit/old/ReduxApp";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (value) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);

      const data = await fetchArticlesWithTopic(value);
      setArticles(data);
    } catch (error) {
      console.log(error);

      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <CreateRouterApp /> */}
      <ReduxApp />
      {/* <Context /> */}
      {/* <UseRef4 /> */}
      {/* <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />

      {loading && <p>Loading data, please wait...</p>}

      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}

      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default App;

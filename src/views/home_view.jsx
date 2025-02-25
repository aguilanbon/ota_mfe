import { useState, useEffect } from "react";
import jsonData from "../data/data.json";
import LaneComponent from "../components/lane_component";

function HomeView() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Simulate network delay to show loading state
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Group products by lane
        const groupedProducts = jsonData.reduce((acc, product) => {
          const lane = product.lane;
          if (!acc[lane]) {
            acc[lane] = [];
          }
          acc[lane].push(product);
          return acc;
        }, {});

        setProducts(groupedProducts);
        setError(null);
      } catch (err) {
        setError("Failed to load products");
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView message={error} />;
  }

  const formatLabel = (label) => {
    return label
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  };

  const sortedKeys = [
    "for_you",
    "hot",
    "features",
    ...Object.keys(products).filter(
      (key) => !["for_you", "hot", "features"].includes(key)
    ),
  ];

  return (
    <div className="flex flex-col w-full h-full space-y-3">
      {sortedKeys.map(
        (lane) =>
          products[lane]?.length > 0 && (
            <LaneComponent
              key={lane}
              laneLabel={formatLabel(products[lane][0].lane || lane)}
              itemList={products[lane]}
            />
          )
      )}
      <div className="pb-6"></div>
    </div>
  );
}

const LoadingView = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const ErrorView = ({ message }) => (
  <div className="flex flex-col items-center justify-center h-full p-4">
    <p className="text-red-600 text-lg">{message}</p>
    <button
      onClick={() => window.location.reload()}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      Try Again
    </button>
  </div>
);

export default HomeView;

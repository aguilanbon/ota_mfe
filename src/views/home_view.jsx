import { useState, useEffect } from "react";
import ItemCard from "../components/item_card";
import jsonData from "../data/data.json";

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

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col space-y-6 pb-6">
        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-800">For You</h2>
          <p className="text-xs text-primary">See all</p>
        </div>
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex flex-row space-x-4 min-w-min">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 pb-6">
        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-800">Hot Products</h2>
          <p className="text-xs text-primary">See all</p>
        </div>
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex flex-row space-x-4 min-w-min">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 pb-6">
        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-xl font-bold text-gray-800">Featured</h2>
          <p className="text-xs text-primary">See all</p>
        </div>
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex flex-row space-x-4 min-w-min">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
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

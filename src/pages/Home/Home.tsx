import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Home.css";
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import Pagination from '../../components/pagination/Pagination';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}



const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    const PAGE_SIZE = 4;

    const fetchdata = async () => {
        try {
            setLoading(true);
            const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
            setProducts(response.data);
            setTotalProducts(response.data.length);
        } catch (error) {
            setError('Failed to fetch products');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE);
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentProducts = products.slice(startIndex, endIndex);

    const handleChange = (n: number): void => {
        setCurrentPage(n);
    };

    const handlePrevious = (): void => {
        setCurrentPage(prev => Math.max(0, prev - 1));
    };

    const handleNext = (): void => {
        setCurrentPage(next => 
            Math.min(numberOfPages - 1, next + 1)
        );
    };

    return (
        <div className="container">
            <Navbar />
            <div className="products-grid">
                {currentProducts.map(item => (
                    <Card 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                    />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                handleChange={handleChange}
                numberOfPages={numberOfPages}
            />
        </div>
    );
};

export default Home;
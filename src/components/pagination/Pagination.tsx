import "./pagination.css"

interface PaginationProps {
    currentPage: number;
    handlePrevious: () => void;
    handleNext: () => void;
    handleChange: (n: number) => void;
    numberOfPages: number;
}


const Pagination:React.FC<PaginationProps> = (props) => {

    const {currentPage,handlePrevious,handleNext,handleChange,numberOfPages} = props;
   
    return (
        <div className="pagination">
            <button disabled={currentPage === 0} onClick={handlePrevious}> <span>{"<"}</span></button>
            <button disabled={currentPage === 0} onClick={handlePrevious}> {currentPage - 1}</button>
            <button className="main-button" onClick={handleChange}>{currentPage}</button>
            <button disabled={currentPage === numberOfPages - 1} onClick={handleNext}>{currentPage + 1}</button>
            <button disabled={currentPage === numberOfPages - 1} onClick={handleNext}> <span>{">"}</span> </button>
        </div>
    )
}

export default Pagination
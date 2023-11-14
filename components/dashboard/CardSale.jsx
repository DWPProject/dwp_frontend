import { BsFillCartFill, BsFillPrinterFill } from "react-icons/bs";

export default function CardSale({ orderComplete, totalSales }) {
  return (
    <>
      <div className="flex gap-3 bg-[#EEEEEE] p-5 rounded-lg">
        <BsFillPrinterFill size={40} color="#FF6B6B" />
        <div>
          <h1>Orders Complete</h1>
          <p>{orderComplete}</p>
        </div>
      </div>
      <div className="flex gap-3 bg-[#EEEEEE] p-5 rounded-lg">
        <BsFillCartFill size={40} color="#5F27CD" />
        <div>
          <h1>Total Sales</h1>
          <p>Rp. {totalSales}</p>
        </div>
      </div>
    </>
  );
}

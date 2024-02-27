
import moment from "moment";
import Image from "next/image";
import { connect } from 'react-redux';


const TableTwo = ({transactions}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Your recent transactions
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Status
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Payment ID
            </h5>
          </div>
        </div>

        {transactions.map((transaction, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === transactions.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                {/* data here */}
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {moment(transaction.billing_date, "YYYY-MM-DD").format("DD MMM YYYY")}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">R{transaction.amount_gross}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{transaction.payment_status}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{transaction.pf_payment_id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps=  (state) => {
  return {
    transactions: state?.auth?.transactions
  }
}

export default connect(mapStateToProps)(TableTwo);

import moment from "moment";
import Image from "next/image";
import { connect } from 'react-redux';


const TableOne = ({subscriptions}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-gray-900">
        Your subscriptions
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Organisation
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Date Started
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Subscription Tier
            </h5>
          </div>
        </div>

        {subscriptions?.map((subscription, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === subscriptions.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                {/* data here */}
              </div>
              <p className="hidden text-black dark:text-gray-900 sm:block">
                {subscription?.partner?.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-gray-900">R{subscription.amount}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{moment(subscription.date).format("DD MMM YYYY")}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-gray-900">{subscription.subscriptionTier}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps=  (state) => {
  return {
    subscriptions: state?.auth?.subscriptions
  }
}

export default connect(mapStateToProps)(TableOne);
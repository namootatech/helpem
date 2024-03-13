import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};


const AffiliatesPage = ({user}) => {
  const [copyText, setCopyText] = useState("Copy");
  const [affiliates, setAffiliates] = useState([]);

  useEffect(() => {
    console.log('User', user?._id)
    if (user) {
      console.log('Fetching affiliates from' ,`${process.env.NEXT_PUBLIC_API_URL}/api/user/affiliates?id=${user?._id}`);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/affiliates?id=${user?._id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Affiliates', data);
          setAffiliates(data);
        });
    }
  }, [user]);

  const userLink = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?parent=${user?._id}`;

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Affiliates" />
      <div className="flex flex-col gap-10">
        <TableOne />
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <h1>Your affiliate link</h1>
          <p className="text-base my-2"> 
            <a href={userLink}>{`${userLink}`}</a>
          </p>
          <button 
           onClick={() => {
            setCopyText("Copied!")
            navigator.clipboard.writeText(userLink)
          }}
           type="button" 
           class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
           >{copyText}</button>
           <table className="table-auto w-full py-2 mt-2">
            <thead>
              <tr>
                <th className="py-2 px-2 text-left border border-gray-200">Name</th>
                <th className="py-2 px-2 text-left border border-gray-200">Email</th>
                <th className="py-2 px-2 text-left border border-gray-200">Latest Transaction</th>
              </tr>
            </thead>
            <tbody>
              {affiliates.map((affiliate) => (
                <tr >
                  <td className="py-2 px-2 border border-gray-200">{capitalize(affiliate.firstName)}{" "}{capitalize(affiliate.lastName)}</td>
                  <td className="py-2 px-2 border border-gray-200">{affiliate.email}</td>
                  <td className="py-2 px-2 border border-gray-200">
                    {affiliate.transaction &&
                    (
                      <table className="table-auto w-full">
                      <tbody>
                        <tr>
                          <td className="py-2 px-2 border border-gray-200">Date</td>
                          <td className="py-2 px-2 border border-gray-200">Amount</td>
                          <td className="py-2 px-2 border border-gray-200">status</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-2 border border-gray-200">{affiliate?.transaction?.billing_date}</td>
                            <td className="py-2 px-2 border border-gray-200">{affiliate?.transaction?.amount_gross}</td>
                            <td className="py-2 px-2 border border-gray-200">{affiliate?.transaction?.payment_status}</td>
                          </tr>
                      </tbody>
                    </table>
                    )}
                    {!affiliate.transaction && "No transaction"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

const mapStateToProps = (state) => ({
  user: state?.auth?.user,
})

export default connect(mapStateToProps)(AffiliatesPage);


const BookingDetails = () => {
  return (
    <div>
    {/* Main Content */}
    <main className="container mx-auto mt-10 pt-40 bg-white rounded-lg shadow-lg">
      {/* Booking and Payment Details Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Booking & Payment Details
        </h2>
        <p>
          Please use the following bank details to complete your booking
          payment:
        </p>
        <table className="table-auto w-full mt-5 text-left border-collapse border border-gray-300">
          <tbody>
            <tr>
              <th className="border px-4 py-2 bg-gray-100">Bank Name</th>
              <td className="border px-4 py-2">KEIYO BANK (京葉銀行)</td>
            </tr>
            <tr>
              <th className="border px-4 py-2 bg-gray-100">Bank Code</th>
              <td className="border px-4 py-2">0522</td>
            </tr>
            <tr>
              <th className="border px-4 py-2 bg-gray-100">Branch Number</th>
              <td className="border px-4 py-2">251</td>
            </tr>
            <tr>
              <th className="border px-4 py-2 bg-gray-100">Account Number</th>
              <td className="border px-4 py-2">7806251</td>
            </tr>
            <tr>
              <th className="border px-4 py-2 bg-gray-100">
                Account Holder Name
              </th>
              <td className="border px-4 py-2">
                SUMIYA ENTERPRISE COMPANY LIMITED <br />
                Representative Director: AKTER SUMIYA
                (スマイヤエンタープライズ株式会社 代表取締役 アクタスマイヤ)
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Contact Us Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions regarding your booking, feel free to reach
          out to us at:
        </p>
        <ul className="list-disc ml-5 mt-3">
          <li>
            Email:
            <a
              href="mailto:sumiyaenterprise85@gmail.com"
              className="text-blue-500"
            >
              {" "}
              sumiyaenterprise85@gmail.com
            </a>
          </li>
          <li>
            Phone:
            <a href="tel:+818041364488" className="text-blue-500">
              {" "}
              +81 80 4136 4488
            </a>
          </li>
          <li>
            <p>
              <strong>WhatsApp:</strong>
              +81 80 4136 4488
            </p>
          </li>
        </ul>
      </section>

      {/* Thank You Message */}
      <section className="text-center mt-10">
        <h3 className="text-xl font-semibold">
          Thank you for choosing JAPAN TRAVEL & TOUR!
        </h3>
        <p className="mt-3">
          We look forward to making your travel experience unforgettable.
        </p>
      </section>
    </main>
  </div>

  )
}

export default BookingDetails
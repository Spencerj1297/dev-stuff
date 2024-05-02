export const CheckoutForm = () => {
  const inputStyles = "bg-black border border-customGrey h-12 px-4 text-xl";

  return (
    <div className="h-full w-full flex justify-center items-center z-30">
      <form className="flex flex-col w-full">
        <div className="flex flex-col">
          <h2>Name</h2>
          <input className={`${inputStyles} w-4/6`} placeholder="email"></input>
        </div>
        <div className="flex flex-col ">
          <h2>Card Info</h2>
          <div className="flex flex-col">
            <input
              className={`${inputStyles} w-4/6`}
              placeholder="street address"
            ></input>
            <input className={`${inputStyles} w-4/6`} placeholder="city"></input>
            <div className="w-4/6">
              <input
                className={`${inputStyles} w-1/2`}
                placeholder="state"
              ></input>
              <input
                className={`${inputStyles} w-1/2`}
                placeholder="postal code"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Card Info</h2>
          <div className="flex flex-col">
            <input
              className={`${inputStyles} w-4/6`}
              placeholder="1234 1234 1234 1234"
            ></input>
            <div className="w-4/6">
            <input
              className={`${inputStyles} w-1/2`}
              placeholder="MM / YY"
            ></input>
            <input className={`${inputStyles} w-1/2`} placeholder="CVC"></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

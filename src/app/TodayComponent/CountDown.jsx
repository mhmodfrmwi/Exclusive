const CountDown = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex gap-7">
        <p className="text-xl text-black font-semibold">dayes</p>
        <p className="text-xl text-black font-semibold">hours</p>
        <p className="text-xl text-black font-semibold">min</p>
        <p className="text-xl text-black font-semibold">sec</p>
      </div>
      <div className="flex gap-2">
        <span className="countdown font-mono text-4xl text-black font-semibold">
          <span style={{ "--value": 15 }}></span>
        </span>
        <span className="font-mono text-4xl text-red-600">:</span>{" "}
        {/* Colon separator */}
        <span className="countdown font-mono text-4xl text-black font-semibold">
          <span style={{ "--value": 10 }}></span>
        </span>
        <span className="font-mono text-4xl text-red-600">:</span>{" "}
        {/* Colon separator */}
        <span className="countdown font-mono text-4xl text-black font-semibold">
          <span style={{ "--value": 24 }}></span>
        </span>
        <span className="font-mono text-4xl text-red-600">:</span>{" "}
        {/* Colon separator */}
        <span className="countdown font-mono text-4xl text-black font-semibold">
          <span style={{ "--value": 60 }}></span>
        </span>
      </div>
      {/* <div className="flex flex-col">hours</div>
      <div className="flex flex-col">min</div>
      <div className="flex flex-col">sec</div> */}
    </div>
  );
};
export default CountDown;

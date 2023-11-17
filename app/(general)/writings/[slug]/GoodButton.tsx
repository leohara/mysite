import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function GoodButton({
  count,
  isClicked,
  likes,
  clickHandler,
}: {
  count: number;
  isClicked: boolean;
  likes: number;
  clickHandler: () => void;
}) {
  return (
    <>
      <div className="flex justify-center">
        <button
          className={`
                ${isClicked ? "pt-[10px]" : ""}
                ${count < 19 ? "cursor-pointer" : "pointer-events-none"}
              `}
          onClick={clickHandler}
        >
          {isClicked ? (
            <>
              <FaHeart size={60} color="#e91e62" />
              <p>{likes}</p>
            </>
          ) : (
            <>
              <CiHeart size={80} />
            </>
          )}
        </button>
      </div>
      <div className="pb-[150px] text-center">
        {count < 19 ? <></> : <p className="font-semibold">Thank You!</p>}
      </div>
    </>
  );
}

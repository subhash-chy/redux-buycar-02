import styles from "../styles/Home.module.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCar, sellCar, toggleBuyable } from "../state-machines";
import { updateProfile } from "../state-machines/actions/actions";

export default function Home() {
  const dispatch = useDispatch();
  const buyCarState = useSelector((state) => state.buySellReducer);
  const isBuyableState = useSelector((state) => state.IsBuyableReducer);
  const profileState = useSelector((state) => state.profileReducer);

  // Reference objects
  const nameRef = useRef();
  const tempRef = useRef();

  // Input work
  const updateProfiles = (e) => {
    e.preventDefault();
    dispatch(updateProfile(nameRef.current.value, tempRef.current.value));
    nameRef.current.value = "";
    tempRef.current.value = "";
  };
  return (
    <div className={styles.container}>
      <h2>
        hey {profileState.name}, your temp address is{" "}
        {profileState.address.temporary}
      </h2>

      <form onSubmit={updateProfiles}>
        <input ref={nameRef} type="text" placeholder="New Name.." />
        <input ref={tempRef} type="text" placeholder="New Temp address.." />
        <button>Change</button>
      </form>

      <h1>Redux State Management</h1>
      <h2>{isBuyableState ? "You can buy car" : "You cannot buy car"}</h2>

      <h1>Total cars you have = {buyCarState}</h1>
      <button onClick={() => dispatch(toggleBuyable())}>
        {isBuyableState ? "Make Unbuyable" : "Make Buyable"}
      </button>
      <button disabled={!isBuyableState} onClick={() => dispatch(buyCar())}>
        BUY CAR
      </button>
      <button disabled={buyCarState < 1} onClick={() => dispatch(sellCar())}>
        SELL CAR
      </button>
      <p>{buyCarState < 1 && "You cannot sell any car!"}</p>
    </div>
  );
}

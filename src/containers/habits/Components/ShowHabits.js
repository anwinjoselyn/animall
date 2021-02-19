import React from "react";
import "../Habits.css";

import { useAppContext } from "../../../libs/contextLib";

const fakePost = {
  id: 99,
  userId: 1,
  title: "Haryanvi Cow",
  category: "Cows",
  type: "",
  price: "40000",
  content: "2 Years old healthy",
  datePosted: "",
  likes: 0,
  connectedHabit: 1
};

const ShowHabits = props => {
  const { sellerPosts, setSellerPosts, setHabits, habits } = useAppContext();

  return (
    <div className="ShowHabits">
      <div className="container">
        <h4>
          Active Habits{" "}
          <small>
            <sup>
              (
              {props.habits && props.habits.length > 0
                ? props.habits.length
                : 0}
              )
            </sup>
          </small>
        </h4>
        <div className="habits-list-wrapper">
          <div className="habits-list">
            {props.habits && props.habits.length > 0
              ? props.habits.map(h => (
                  <div key={h.id} className="habits-list-item">
                    <span className="title-span">
                      <u>{h.title}</u>{" "}
                      {h.used > 0 ? (
                        <span className="data-span">
                          <small>(Posted {h.used} times)</small>
                        </span>
                      ) : (
                        <small>Pending</small>
                      )}
                    </span>
                    <span className="frequency-span">
                      {h.frequency} times a week
                    </span>
                    <span
                      className="sell-btn"
                      onClick={() => {
                        setSellerPosts([...sellerPosts, fakePost]);
                        let updatedHabit = habits.filter(
                          Habit => Habit.id === h.id
                        )[0];
                        updatedHabit.used = updatedHabit.used + 1;
                        let updateHabits = habits.map(Habit => {
                          if (Habit.id === updatedHabit.id) {
                            return updatedHabit;
                          } else {
                            return Habit;
                          }
                        });
                        setHabits(updateHabits);
                      }}
                    >
                      New post
                    </span>
                  </div>
                ))
              : "No habits found"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowHabits;

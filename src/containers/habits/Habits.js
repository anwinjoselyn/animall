import React, { useState, useEffect } from "react";
import "./Habits.css";

import { useAppContext } from "../../libs/contextLib";

import AddHabit from "./Components/AddHabit";
import ShowHabits from "./Components/ShowHabits";

const Habits = () => {
  const { sellerPosts, habits, setHabits, userData } = useAppContext();

  const [showForm, setShowForm] = useState(false);
  const [achieved, setAchieved] = useState(null);
  const [newHabit, setNewHabit] = useState({
    id:
      habits.length > 0
        ? habits.sort((a, b) => a.id - b.id)[habits.length - 1].id + 1
        : 1,
    userId: userData.id,
    title: "",
    timeSlot: "",
    frequency: 1,
    used: 0
  });

  useEffect(() => {
    if (habits.length > 0 && sellerPosts.length > 0) {
      //in reality will be doing date comparison functions to find posts within this week
      //and each habit should have its own total posts for milestones and rewards calculations

      let total = sellerPosts.filter(p => p.connectedHabit === 1).length;

      setAchieved({
        hasData: true,
        data: total
      });
    }
  }, [habits, sellerPosts]);

  return (
    <div className="Habits">
      <h3>Habits</h3>
      <div className="container">
        <div className="top-div">
          <div className="total-habits">
            <p>
              You have <strong>{habits.length ? habits.length : 0}</strong>{" "}
              Habits set!
            </p>
          </div>
          <div className="add-habits">
            <span className="add-button" onClick={() => setShowForm(true)}>
              Add Habit
            </span>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="top-div">
          <div className="milestones">
            <p>
              Milestones this week{" "}
              <strong>
                {achieved && achieved.hasData ? achieved.data : 0}
              </strong>
            </p>
          </div>
          <div className="rewards">
            <p>
              <i className="fas fa-award" /> Rewards{" "}
              {userData && userData.rewards.length > 0 ? (
                <div>
                  <span className="reward-btn">
                    <strong>
                      {userData.rewards.filter(r => !r.isRealized).length}
                    </strong>{" "}
                    Claim now!
                  </span>
                </div>
              ) : (
                0
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-div">
        {!showForm ? (
          habits.length > 0 ? (
            <ShowHabits habits={habits} />
          ) : null
        ) : (
          <AddHabit
            newHabit={newHabit}
            setNewHabit={setNewHabit}
            setHabits={setHabits}
            habits={habits}
            setShowForm={setShowForm}
            userData={userData}
          />
        )}
      </div>
    </div>
  );
};

export default Habits;

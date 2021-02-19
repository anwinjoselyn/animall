import React from "react";
import "../Habits.css";

const AddHabit = props => {
  const submitNewHabit = async e => {
    e.preventDefault();

    try {
      //ideally this will POST data to server. For this e.g. just updating context
      //console.log("newHabit", props.newHabit);
      props.setHabits([...props.habits, props.newHabit]);

      props.setNewHabit({
        id:
          props.habits.length > 0
            ? props.habits.sort((a, b) => a.id - b.id)[props.habits.length - 1]
                .id + 1
            : 1,
        userId: props.userData.id,
        title: "",
        timeSlot: "",
        frequency: 0,
        used: 0
      });

      props.setShowForm(false);
    } catch (error) {
      alert("Sorry, please try again");
    }
  };

  return (
    <div className="AddHabit">
      <div className="container">
        <h4>Add New Habit</h4>
        <form className="form-wrap" onSubmit={submitNewHabit}>
          <div className="form-item">
            <label>
              Title
              <input
                type="text"
                value={props.newHabit.title}
                onChange={e =>
                  props.setNewHabit({
                    ...props.newHabit,
                    title: e.target.value
                  })
                }
              />
            </label>
          </div>
          <div className="form-item">
            <label>
              Frequency per week
              <select
                value={props.newHabit.frequency}
                onChange={e =>
                  props.setNewHabit({
                    ...props.newHabit,
                    frequency: parseInt(e.target.value)
                  })
                }
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={4}>5</option>
              </select>
            </label>
          </div>
          {/*will consider for future <div className="form-item">
            <label>
              Content
              <textarea
                value={props.newHabit.content}
                onChange={e =>
                  props.setNewHabit({
                    ...props.newHabit,
                    content: e.target.value
                  })
                }
              />
            </label>
          </div>*/}
          <div className="form-item">
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;

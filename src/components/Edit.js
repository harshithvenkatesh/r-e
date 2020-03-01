import React from "react";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "../components/ExpenseForm";

class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.dispatch(editExpense(this.props.match.params.id, expense));
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Editing</h1>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button
          onClick={() => {
            this.props.dispatch(removeExpense({ id: this.props.expense.id }));
            this.props.history.push("/");
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const expense = state.expenses.find(
    expense => expense.id == props.match.params.id
  );
  return {
    expense
  };
};

export default connect(mapStateToProps)(EditExpensePage);

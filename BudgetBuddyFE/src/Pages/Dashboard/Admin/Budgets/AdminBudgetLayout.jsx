import React from 'react';
import BudgetSummary from './BudgetSummary';
import BudgetList from './BudgetList';


const AdminBudgetLayout = () => {
  return (
    <div className="container-fluid">

     <div>
        <BudgetSummary />
     </div>

      <div className="border mt-2"></div>



      <div>
        <BudgetList />
     </div>

    </div>
  );
};

export default AdminBudgetLayout;
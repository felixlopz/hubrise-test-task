import * as React from "react"

const Table: React.FC = (tableProps) => (
  <div className="table-container">
    <table {...tableProps} />
  </div>
)

export default Table

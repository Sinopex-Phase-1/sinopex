function Table({ tableData }) {
  if (typeof tableData === "object") {
    return (
      <table className="w-full max-w-xl mx-auto my-8 text-navy">
        {tableData.map((row, i) => {
          const bold = i === 0 ? " font-medium capitalize" : "";
          return (
            <tr key={1} className={"font-medium" + bold}>
              <td key={i + "a"} className="border px-2 py-1">
                {row.property}
              </td>
              <td key={i + "a"} className="border px-2 py-1">
                {row.value}
              </td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Table;

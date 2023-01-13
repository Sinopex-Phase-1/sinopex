function Table({ tableData }) {
  if (typeof tableData === "object") {
    return (
      <table className="w-full max-w-xl mx-auto my-8 text-navy">
        {tableData.map((row, i) => {
          const bold = i === 0 ? " font-medium capitalize" : "";
          return (
            <tr key={1} className={"font-medium" + bold}>
              {row.map((e, i) => (
                <td key={i + e} className="border px-2 py-1">
                  {e}
                </td>
              ))}
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Table;

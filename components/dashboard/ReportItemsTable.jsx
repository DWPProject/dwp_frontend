import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import ReportTableHeader from "./ReportTableHeader";
import ReportTableRow from "./ReportTableRow";
import ReportTableFooter from "./ReportTableFooter";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
});

const ReportItemsTable = ({ report }) => (
  <View style={styles.tableContainer}>
    <ReportTableHeader />
    <ReportTableRow items={report?.payload} />
    <ReportTableFooter items={report} />
  </View>
);

export default ReportItemsTable;

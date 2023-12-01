import React from "react";
import { Page, Document, Image, StyleSheet } from "@react-pdf/renderer";
import ReportTitle from "./ReportTitle";
import ReportItemsTable from "./ReportItemsTable";
import ReportThankYouMsg from "./ReportThankYouMsg";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Report = ({ report }) => (
  console.log(report),
  (
    <Document>
      <Page size="A1" style={styles.page}>
        <Image style={styles.logo} src="/images/logo_itera.png" alt="Logo" />
        <ReportTitle title="Laporan Penjualan" />
        <ReportItemsTable report={report} />
        <ReportThankYouMsg />
      </Page>
    </Document>
  )
);

export default Report;

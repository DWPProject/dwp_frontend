import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import { rupiah } from "@/utils/rupiah";

const borderColor = "#fde9cc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontSize: 12,
    fontStyle: "bold",
  },
  description: {
    width: "70%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
  },
  total: {
    width: "10%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
  },
  dwpTotal: {
    width: "10%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
  },
  penjualTotal: {
    width: "10%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableFooter = ({ items }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.description}>TOTAL</Text>
      <Text style={styles.total}>{rupiah(items?.pendapatan)}</Text>
      <Text style={styles.dwpTotal}>{rupiah(items?.cash_dwp_total)}</Text>
      <Text style={styles.penjualTotal}>
        {rupiah(items?.cash_seller_total)}
      </Text>
    </View>
  );
};

export default InvoiceTableFooter;

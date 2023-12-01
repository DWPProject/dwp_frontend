import React, { Fragment } from "react";
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
    fontStyle: "bold",
  },
  idTransaksi: {
    width: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  tanggal: {
    width: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  namaProduk: {
    width: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  namaToko: {
    width: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  tipePenjual: {
    width: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  jumlahPesanan: {
    width: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  harga: {
    width: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  total: {
    width: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  dwpTotal: {
    width: "10%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  penjualTotal: {
    width: "10%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableRow = ({ items }) => {
  const rows = items?.map((item, index) => (
    <View style={styles.row} key={index}>
      <Text style={styles.idTransaksi}>{item.id_order}</Text>
      <Text style={styles.tanggal}>{item.order_date}</Text>
      <Text style={styles.namaProduk}>{item.nama}</Text>
      <Text style={styles.namaToko}>{item.nama_toko}</Text>
      <Text style={styles.tipePenjual}>
        {item.type_seller === 0 ? "Dalam DWP" : "Luar DWP"}
      </Text>
      <Text style={styles.jumlahPesanan}>{item.quantity}</Text>
      <Text style={styles.harga}>{rupiah(item.harga)}</Text>
      <Text style={styles.total}>{rupiah(item.total_harga)}</Text>
      <Text style={styles.dwpTotal}>{rupiah(item.dwp_cash)}</Text>
      <Text style={styles.penjualTotal}>{rupiah(item.seller_cash)}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;

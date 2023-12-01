import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#fde9cc";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    backgroundColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  idTransaksi: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  tanggal: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  namaProduk: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  namaToko: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  tipePenjual: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  jumlahPesanan: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  harga: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  total: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  dwpTotal: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  penjualTotal: {
    width: "10%",
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.idTransaksi}>ID Transaksi</Text>
    <Text style={styles.tanggal}>Tanggal</Text>
    <Text style={styles.namaProduk}>Nama Produk</Text>
    <Text style={styles.namaToko}>Nama Toko</Text>
    <Text style={styles.tipePenjual}>Tipe Penjual</Text>
    <Text style={styles.jumlahPesanan}>Jumlah Pesanan</Text>
    <Text style={styles.harga}>Harga</Text>
    <Text style={styles.total}>Total</Text>
    <Text style={styles.dwpTotal}>Pendapatan (DWP)</Text>
    <Text style={styles.penjualTotal}>Pendapatan (Penjual)</Text>
  </View>
);

export default InvoiceTableHeader;

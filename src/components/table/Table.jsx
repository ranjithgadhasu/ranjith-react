

import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const List = () => {

   const rows = [

    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvU7T_cDRDr2wj17Emfk307nf6DVSREy5U_Q&usqp=CAU",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved"
    },

    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://www.reliancedigital.in/medias/Sony-Playstation5-Gaming-Consoles-491936180-23?context=bWFzdGVyfGltYWdlc3w5NDM4fGltYWdlL2pwZWd8aW1hZ2VzL2hmMC9oNWIvOTQ1NDMwNzgzNTkzNC5qcGd8YmU1NWE0Zjg1MjdkZGQ3MDQ3MzU4MzMwZWZkNzMzMzJkODViYzQ1MGRkODk3YWM4MGYwNWRhYjEyMTljNjhmZQ",
      customer: "Michael  Doe",
      date: "1 March",
      amount: 700,
      method: "Online Payment",
      status: "Pending"
    },
    {
      id: 2245255,
      product: "Playstation 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH3joao4nTJvVh6HLid3bYi1jJg0y6MXEGQ&usqp=CAU",
      customer: "Raju King",
      date: "1 March",
      amount: 950,
      method: "Cash on Delivery",
      status: "Pending"
    },
    {
      id: 3235534,
      product: "Playstation 5",
      img: "https://rukminim1.flixcart.com/image/832/832/l0sgyvk0/computer/n/n/1/14alc05-thin-and-light-laptop-lenovo-original-imagchxwvqxpfxrh.jpeg?q=70",
      customer: "Ranjith Gadhasu",
      date: "1 March",
      amount: 800,
      method: "Online",
      status: "Approved"
    },
    {
      id: 4235145,
      product: "Playstation 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNCWgffTjaQRjzQ0xkQXVEjfUxvDKbsHNAQ&usqp=CAU",
      customer: "Virat Kohli",
      date: "1 March",
      amount: 1000,
      method: "Online",
      status: "Pending"
    },

   ]

  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Paymethod Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow >
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}
          >
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

  );
};

export default List;
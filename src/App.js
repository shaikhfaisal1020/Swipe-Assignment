import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import Invoice from "./pages/Invoice";
import InvoiceList from "./pages/InvoiceList";
import BulkEdit from "./pages/bulkEdit";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <InvoiceList />
            </Container>
          }
        />
        <Route
          path="/create"
          element={
            <Container>
              <Invoice />
            </Container>
          }
        />
        <Route
          path="/create/:id"
          element={
            <Container>
              <Invoice />
            </Container>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Container>
              <Invoice />
            </Container>
          }
        />
        <Route
          path="/bulkedit"
          element={
            <Container>
              <BulkEdit />
            </Container>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

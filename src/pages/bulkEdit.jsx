"use client";
import React, { useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { useInvoiceListData } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { addInvoice, updateInvoice } from "../redux/invoicesSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  BiArrowBack,
  BiSolidChevronLeftSquare,
  BiSolidPencil,
} from "react-icons/bi";
const BulkEdit = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  //   const [id, setIdEdit] = useState(null);
  const [currentDateEdit, setCurrentDateEdit] = useState(null);
  const [invoiceNumberEdit, setInvoiceNumberEdit] = useState(null);
  const [dateOfIssueEdit, setDateOfIssueEdit] = useState(null);
  const [billToEdit, setBillToEdit] = useState(null);
  const [billToEmailEdit, setBillToEmailEdit] = useState(null);
  const [billToAddressEdit, setBillToAddressEdit] = useState(null);
  const [billFromEdit, setBillFromEdit] = useState(null);
  const [billFromEmailEdit, setBillFromEmailEdit] = useState(null);
  const [billFromAddressEdit, setBillFromAddressEdit] = useState(null);
  const [notesEdit, setNotesEdit] = useState(null);
  const [totalEdit, setTotalEdit] = useState(null);
  const [subTotalEdit, setSubTotalEdit] = useState(null);
  const [taxRateEdit, setTaxRateEdit] = useState(null);
  const [taxAmountEdit, setTaxAmountEdit] = useState(null);
  const [discountRateEdit, setDiscountRateEdit] = useState(null);
  const [discountAmountEdit, setDiscountAmountEdit] = useState(null);
  const [currencyEdit, setCurrencyEdit] = useState(null);
  const [itemsEdit, setItemsEdit] = useState(null);
  const dispatch = useDispatch();

  const { invoiceList, getOneInvoice } = useInvoiceListData();
  const tableRows = [
    "Select Edit",
    "Unique ID",
    "Current Date",
    "Invoice Number",
    "Issue Date",
    "Bill To",
    "Bill To Email",
    "Bill To Address",
    "Bill From",
    "Bill From Email",
    "Bill From Address",
    "Notes",
    "Total",
    "Sub Total",
    "Tax Rate",
    "Tax Amount",
    "Discount Rate",
    "Discount Amount",
    "Currency",
    "Items",
    "Update",
  ];

  const handleEdit = (currentId) => {
    const currentFormData = invoiceList.find((data) => data.id == currentId);
    const newFormData = {
      ...currentFormData,
      currentDate: currentDateEdit,
      invoiceNumber: invoiceNumberEdit,
      dateOfIssue: dateOfIssueEdit,
      billTo: billToEdit,
      billToEmail: billToEmailEdit,
      billToAddress: billToAddressEdit,
      billFrom: billFromEdit,
      billFromEmail: billFromEmailEdit,
      billFromAddress: billFromAddressEdit,
      notes: notesEdit,
      total: totalEdit,
      subTotal: subTotalEdit,
      taxRate: taxRateEdit,
      taxAmount: taxAmountEdit,
      discountRate: discountRateEdit,
      discountAmount: discountAmountEdit,
      currency: currencyEdit,
    };
    dispatch(updateInvoice({ id: selectedId, updatedInvoice: newFormData }));
    alert("Invoice updated successfuly 🥳");
    navigate("/");
  };

  const handleChangeId = (currentId) => {
    const currentFormData = invoiceList.find((data) => data.id == currentId);
    // console.log("data", currentFormData);
    const {
      id,
      currentDate,
      invoiceNumber,
      dateOfIssue,
      billTo,
      billToEmail,
      billToAddress,
      billFrom,
      billFromEmail,
      billFromAddress,
      notes,
      total,
      subTotal,
      taxRate,
      taxAmount,
      discountRate,
      discountAmount,
      currency,
      items,
    } = currentFormData;

    // setIdEdit(id);
    setCurrentDateEdit(currentDate);
    setInvoiceNumberEdit(invoiceNumber);
    setDateOfIssueEdit(dateOfIssue);
    setBillToEdit(billTo);
    setBillToEmailEdit(billToEmail);
    setBillToAddressEdit(billToAddress);
    setBillFromEdit(billFrom);
    setBillFromEmailEdit(billFromEmail);
    setBillFromAddressEdit(billFromAddress);
    setNotesEdit(notes);
    setTotalEdit(total);
    setSubTotalEdit(subTotal);
    setTaxRateEdit(taxRate);
    setTaxAmountEdit(taxAmount);
    setDiscountRateEdit(discountRate);
    setDiscountAmountEdit(discountAmount);
    setCurrencyEdit(currency);
    setItemsEdit(items);
  };

  return (
    <div className="table-container">
      <h3 className="fw-bold header-bulk">Swipe Bulk Edit</h3>
      {invoiceList.length === 0 ? (
        <div className="d-flex flex-column align-items-center">
          <h3 className="fw-bold pb-2 pb-md-4">No invoices present</h3>
          <Link to="/create">
            <Button variant="primary">Create Invoice</Button>
          </Link>
        </div>
      ) : (
        <Card className="d-flex p-3 p-md-4 my-3 my-md-4 ">
          <div className="table-container">
            {selectedId && (
              <p style={{ fontStyle: "italic", color: "darkblue" }}>
                *you are now editing the row with unique id {selectedId}, scroll
                right to see the full view*
              </p>
            )}
            <Table responsive>
              <thead>
                <tr>
                  {tableRows.map((row, index) => {
                    return <th key={index}>{row}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {invoiceList.map((row) => {
                  const {
                    id,
                    currentDate,
                    invoiceNumber,
                    dateOfIssue,
                    billTo,
                    billToEmail,
                    billToAddress,
                    billFrom,
                    billFromEmail,
                    billFromAddress,
                    notes,
                    total,
                    subTotal,
                    taxRate,
                    taxAmount,
                    discountRate,
                    discountAmount,
                    currency,
                    items,
                  } = row;
                  return (
                    <tr key={id} style={{ backgroundColor: "red" }}>
                      <td>
                        <Button
                          variant="outline-primary"
                          onClick={() => {
                            if (selectedId === id) {
                              setSelectedId(null);
                              return;
                            }
                            setSelectedId(id);
                            handleChangeId(id);
                          }}
                        >
                          <div className="d-flex align-items-center justify-content-center gap-2">
                            {selectedId !== id ? (
                              <BiSolidPencil />
                            ) : (
                              <BiArrowBack />
                            )}
                          </div>
                        </Button>
                      </td>
                      <td>{id}</td>
                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setCurrentDateEdit(e.currentTarget.textContent)
                        }
                      >
                        {currentDate}
                      </td>

                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setInvoiceNumberEdit(e.currentTarget.textContent)
                        }
                      >
                        {invoiceNumber}
                      </td>

                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setDateOfIssueEdit(e.currentTarget.textContent)
                        }
                      >
                        {dateOfIssue}
                      </td>
                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setBillToEdit(e.currentTarget.textContent)
                        }
                      >
                        {billTo}
                      </td>
                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setBillToEmailEdit(e.currentTarget.textContent)
                        }
                      >
                        {billToEmail}
                      </td>
                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setBillToAddressEdit(e.currentTarget.textContent)
                        }
                      >
                        {billToAddress}
                      </td>

                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setBillFromEdit(e.currentTarget.textContent)
                        }
                      >
                        {billFrom}
                      </td>
                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setBillFromEmailEdit(e.currentTarget.textContent)
                        }
                      >
                        {billFromEmail}
                      </td>
                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setBillFromAddressEdit(e.currentTarget.textContent)
                        }
                      >
                        {billFromAddress}
                      </td>

                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setNotesEdit(e.currentTarget.textContent)
                        }
                      >
                        {notes}
                      </td>
                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setTotalEdit(e.currentTarget.textContent)
                        }
                      >
                        {total}
                      </td>

                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setSubTotalEdit(e.currentTarget.textContent)
                        }
                      >
                        {subTotal}
                      </td>

                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setTaxRateEdit(e.currentTarget.textContent)
                        }
                      >
                        {taxRate}
                      </td>
                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setTaxAmountEdit(e.currentTarget.textContent)
                        }
                      >
                        {taxAmount}
                      </td>

                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setDiscountRateEdit(e.currentTarget.textContent)
                        }
                      >
                        {discountRate}
                      </td>

                      <td
                        contentEditable={selectedId === id}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          setDiscountAmountEdit(e.currentTarget.textContent)
                        }
                      >
                        {discountAmount}
                      </td>
                      <td>
                        {/* {currency} */}
                        <select
                          onChange={(event) =>
                            setCurrencyEdit(event.target.value)
                          }
                          className="btn btn-light my-1"
                          aria-label="Change Currency"
                          disabled={selectedId !== id}
                        >
                          <option selected={currency === "$"} value="$">
                            USD (United States Dollar)
                          </option>
                          <option selected={currency === "£"} value="£">
                            GBP (British Pound Sterling)
                          </option>
                          <option selected={currency === "¥"} value="¥">
                            JPY (Japanese Yen)
                          </option>
                          {/* <option selected={currency === "$"} value="$">
                          CAD (Canadian Dollar)
                        </option>
                        <option selected={currency === "$"} value="$">
                          AUD (Australian Dollar)
                        </option>
                        <option selected={currency === "$"} value="$">
                          SGD (Singapore Dollar)
                        </option> */}
                          {/* <option selected={currency === "¥"} value="¥">
                          CNY (Chinese Renminbi)
                        </option> */}
                          <option selected={currency === "₿"} value="₿">
                            BTC (Bitcoin)
                          </option>
                        </select>
                      </td>
                      <td>
                        <Table>
                          <thead>
                            <tr>
                              <th>Item Name</th>
                              <th>Item Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {items.map((item) => {
                              const { itemName, itemDescription } = item;
                              return (
                                <tr>
                                  <td>{itemName}</td>
                                  <td>{itemDescription}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </td>
                      <td>
                        <Button
                          variant="primary mb-2 mb-2"
                          onClick={() => {
                            if (selectedId !== id) return;
                            handleEdit(id);
                          }}
                        >
                          Save
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Card>
      )}
    </div>
  );
};

export default BulkEdit;

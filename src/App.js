import React, { useState } from "react"

import Mail from "./icons/mail.png"

export default function App() {
    const [invoices, setInvoices] = useState([])

    function addInvoice(invoice, price) {
        setInvoices()
    }

    return (
        <main>
            <header>
                <h1 className="title">Invoice creator</h1>
                <h3 className="subtitle">Thanks for choosing GoodCorp, LLC!</h3>
            </header>
            <div className="invoices">
                <button className="invocie-btn">Wash car: $10</button>
                <button className="invocie-btn">Mow Lawn: $20</button>
                <button className="invocie-btn">Pull Weeds: $30</button>
            </div>
            <div className="tasks">
                <div className="labels">
                    <p>Task</p>
                    <p>Total</p>
                </div>
                <div className="invoices-list"></div>
                <hr />
                <div className="labels">
                    <p>Notes</p>
                    <p>Total amount</p>
                </div>
                <p className="total">0$</p>
                <div className="btn">
                    <button className="sendinvoice-btn"><img src={Mail} />Send invoice</button>
                </div>
            </div>
        </main>
    )
}
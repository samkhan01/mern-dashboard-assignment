import express from "express";
import { salesData } from "../../../data/sales";
import { Request, Response } from 'express';
import moment from "moment";

/** Class to initiat the controller for app routers */
class AppController {
    /** method fro Extracting unique states from the sales data */
    async getStates(req: Request, res: Response) {
        try {
            const uniqueStates = await Array.from(new Set(salesData.map(item => item.State)));

            res.json({ states: uniqueStates });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    /** Method for return data based on the user input */
    async getSalesData(req: Request, res: Response) {
        try {
            const { state, selectedTimeFrom, selectedTimeTo } = req.body;

            /** Parse selectedTimeFrom and selectedTimeTo */
            const dateObjectFrom = selectedTimeFrom && moment(selectedTimeFrom);
            const formattedDateFrom = dateObjectFrom?.isValid() ? dateObjectFrom.format('YYYY-MM-DD') : null;

            const dateObjectTo = selectedTimeTo && moment(selectedTimeTo);
            const formattedDateTo = dateObjectTo?.isValid() ? dateObjectTo.format('YYYY-MM-DD') : null;

            if (!state) {
                return res.status(400).json({ error: "State is required in the request body." });
            }
            const stateSales = salesData.filter((item) => item.State === state);

            /** Filter sales data for the specified state and date range */
            const filteredSales = salesData.filter((item) => {
                const orderDate = moment(item["Order Date"]).format('YYYY-MM-DD');
                return item.State === state && (!formattedDateFrom || orderDate >= formattedDateFrom) && (!formattedDateTo || orderDate <= formattedDateTo);
            });

            if (filteredSales.length === 0) {
                return res.status(404).json({ message: `No data found for the state: ${state}` });
            }

            /* Extract dates from the filtered sales data for min & max date. */
            const dates = stateSales.map((item) => new Date(item["Order Date"]).getTime());

            if (dates.length === 0) {
                return res.status(404).json({ message: `No valid dates found for the state: ${state}` });
            }

            /** Calculate minimum and maximum dates */
            const minDate = new Date(Math.min(...dates)).toISOString().split("T")[0];
            const maxDate = new Date(Math.max(...dates)).toISOString().split("T")[0];

            res.json({
                state,
                minDate,
                maxDate,
                stateSales: filteredSales,
            });
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).json({ error: "Internal server error." });
        }
    }

}

const AppControllerInstance = new AppController()
export default AppControllerInstance
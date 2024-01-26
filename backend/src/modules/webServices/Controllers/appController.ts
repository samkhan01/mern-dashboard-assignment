import express from "express";
import { salesData } from "../../../data/sales";
import { Request, Response } from 'express';

class AppController {
    async getStates(req: Request, res: Response) {
        try {


            // Extracting unique states from the sales data
            const uniqueStates = await Array.from(new Set(salesData.map(item => item.State)));

            res.json({ states: uniqueStates });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getOrderDate(req: Request, res: Response) {
        const { state } = req.body;

        if (!state) {
            return res.status(400).json({ error: "State is required in the request body." });
        }

        // Filter sales data for the specified state
        const stateSales = salesData.filter((item) => item.State === state);

        console.log(stateSales, "stateSales");
        

        if (stateSales.length === 0) {
            return res.status(404).json({ error: `No data found for the state: ${state}` });
        }

        // Extract dates from the filtered sales data
        const dates = stateSales.map((item) => new Date(item["Order Date"]).getTime());

        if (dates.length === 0) {
            return res.status(404).json({ error: `No valid dates found for the state: ${state}` });
        }

        // Calculate minimum and maximum dates
        const minDate = new Date(Math.min(...dates)).toISOString().split("T")[0];
        const maxDate = new Date(Math.max(...dates)).toISOString().split("T")[0];

        // Send the result as JSON
        res.json({
            state,
            minDate,
            maxDate,
            stateSales,
        });


    }
}

const AppControllerInstance = new AppController()
export default AppControllerInstance
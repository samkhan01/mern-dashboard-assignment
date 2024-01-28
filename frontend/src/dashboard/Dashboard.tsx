import React, { useContext } from 'react'
import PageLayout from '../layouts/PageLayout'
import TopHeader from '../layouts/TopHeader'
import SalesInformation from '../components/SalesInformation'
import SalesByProductsChart from '../components/charts/SalesByProductsChart'
import SalesByCitiesChart from '../components/charts/SalesByCities'
import SalesByCategoryPieChart from '../components/charts/SalesByCategoryChart'
import SalesBySubCategoryChart from '../components/charts/SalesBySubCategoryChart'
import SalesBySegmentChart from '../components/charts/SalesBySegment'
import { DataContext } from '../components/FilterComponent'

/** Parent component of the dashboard  */
const Dashboard = () => {
    const { darkTheme } = useContext(DataContext);
    return (
        <>

            <PageLayout>
                <SalesInformation />
                <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 mt-4">
                    <div
                        className={darkTheme ? "mr-4 block chart-container" : "mr-4 block chart-container-light" }>
                        <SalesByCitiesChart />
                    </div>
                    <div
                        className={darkTheme ? "mr-4 block chart-container" : "mr-4 block chart-container-light" }>
                        <SalesByProductsChart />
                    </div>

                </div>

                <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                    <div
                        className={darkTheme ? "mx-3 mt-6 flex flex-col sm:shrink-0 sm:grow sm:basis-0 chart-container" : "mx-3 mt-6 flex flex-col sm:shrink-0 sm:grow sm:basis-0 chart-container-light"}>
                        <SalesByCategoryPieChart />
                    </div>
                    <div
                       className={darkTheme ? "mx-3 mt-6 flex flex-col sm:shrink-0 sm:grow sm:basis-0 chart-container" : "mx-3 mt-6 flex flex-col sm:shrink-0 sm:grow sm:basis-0 chart-container-light"}>
                        <SalesBySubCategoryChart />
                    </div>
                    <div
                        className={darkTheme ? "mx-3 mt-6 flex flex-col sm:shrink-0 sm:grow sm:basis-0 chart-container" : "mx-3 mt-6 flex flex-col sm:shrink-0 sm:grow sm:basis-0 chart-container-light"}>
                        <SalesBySegmentChart />
                    </div>
                </div>



            </PageLayout>
        </>


    )
}

export default Dashboard
import React from 'react'
import PageLayout from '../layouts/PageLayout'
import TopHeader from '../layouts/TopHeader'
import SalesInformation from '../components/SalesInformation'
import SalesByProductsChart from '../components/charts/SalesByProductsChart'
import SalesByCitiesChart from '../components/charts/SalesByCities'
import SalesByCategoryPieChart from '../components/charts/SalesByCategoryChart'
import SalesBySubCategoryChart from '../components/charts/SalesBySubCategoryChart'
import SalesBySegmentChart from '../components/charts/SalesBySegment'

/** Parent component of the dashboard  */
const Dashboard = () => {
    return (
        <>

            <PageLayout>
                <SalesInformation />
                <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 mt-4">
                    <div
                        className="mr-4 block chart-container">
                        <SalesByCitiesChart />
                    </div>
                    <div
                        className="mr-4 block chart-container">
                        <SalesByProductsChart />
                    </div>

                </div>

                <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
                    <div
                        className="mx-3 mt-6 flex flex-col sm:shrink-0 sm:grow sm:basis-0 chart-container">
                        <SalesByCategoryPieChart />
                    </div>
                    <div
                        className="mx-3 mt-6 flex flex-col  sm:shrink-0 sm:grow sm:basis-0 chart-container">
                        <SalesBySubCategoryChart />
                    </div>
                    <div
                        className="mx-3 mt-6 flex flex-col  sm:shrink-0 sm:grow sm:basis-0 chart-container">
                        <SalesBySegmentChart />
                    </div>
                </div>



            </PageLayout>
        </>


    )
}

export default Dashboard
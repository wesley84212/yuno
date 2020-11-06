import React, { useState, useEffect } from 'react'
import { GetSaleListFromServer, GetDataFromServer } from '../action/index';
import Dialog from '../components/ProductDialog';

function Inventory() {

    const [productList, setProductList] = useState({ purchase: [] })
    const [saleList, setSaleList] = useState({ sales: [] })

    useEffect(() => {
        const fetchData = async () => {
            setSaleList(await GetSaleListFromServer())
            setProductList(await GetDataFromServer())
        }
        fetchData();
    }, [])

    let incomes = 0;
    let costs = 0;
    let saleCharges = 0;
    let saleAmounts = 0;

    const products = (<>
        {
            productList.purchase && productList.purchase.map((value, index) => {
                let targetSale = []
                let saleDate = []
                if (saleList.sales) {
                    targetSale = saleList.sales.filter((sales) => {
                        return sales.product.id === value.product.id
                    }, [])
                }
                if (targetSale.length > 0) {
                    saleDate = targetSale[0].saleDate === "0000-00-00" ? "" : targetSale[0].saleDate;
                    saleCharges += targetSale[0].saleCharge
                    saleAmounts += targetSale[0].saleAmount
                }
                incomes += value.income
                costs += value.cost
                return (
                    <tbody key={value.product.id}>
                        <tr>
                            <td className="products-table w-10p">{value.product.id}</td>
                            <td className="products-table">{value.product.name}</td>
                            <td className="products-table w-10p">{value.cost}</td>
                            <td className="products-table w-15p">{value.purchaseDate}</td>
                            <td className="products-table w-15p">{saleDate}</td>
                            <Dialog productId={value.product.id} productName={value.product.name} productCost={value.cost} purchaseDate={value.purchaseDate} />
                        </tr>
                    </tbody>
                )
            })}
    </>)

    return (<>
        <div className="m-0auto">
            <h3 className="mt-2 mb-2">存貨列表</h3>
            <span>總銷售額{saleAmounts}</span>/
            <span>總淨利{incomes}</span>/
            <span>總交易費用{saleCharges}</span>/
            <span>總進貨成本{costs}</span>
            <table>
                <tbody>
                    <tr>
                        <th className="products-table w-10p">商品編號</th>
                        <th className="products-table">商品名稱</th>
                        <th className="products-table w-10p">商品成本</th>
                        <th className="products-table w-15p">進貨日期</th>
                        <th className="products-table w-15p">售出日期</th>
                    </tr>
                </tbody>
                {products}
            </table>
        </div>
    </>)

}

export default Inventory
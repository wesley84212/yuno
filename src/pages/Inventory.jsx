import React, { useState, useEffect } from 'react'
import { GetSaleListFromServer, GetDataFromServer } from '../action/index';

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
    let sales = saleList;
    let products = (<>
        {productList.purchase && productList.purchase.map((value, index) => {
            incomes += value.income;
            costs += value.cost;
            const saleDate = value.saleDate === "0000-00-00" ? "" : value.saleDate;
            return (
                <tr>
                    <td className="products-table w-10p">{value.id}</td>
                    <td className="products-table">{value.product.name}</td>
                    <td className="products-table w-10p">{value.cost}</td>
                    <td className="products-table w-15p">{value.purchaseDate}</td>
                    <td className="products-table w-15p">{saleDate}</td>
                </tr>
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
                <tr>
                    <th className="products-table w-10p">商品編號</th>
                    <th className="products-table">商品名稱</th>
                    <th className="products-table w-10p">商品成本</th>
                    <th className="products-table w-15p">進貨日期</th>
                    <th className="products-table w-15p">售出日期</th>
                </tr>
                {products}
            </table>



        </div>


    </>)

}

export default Inventory
import React, { useState, useEffect } from 'react'


function Inventory() {

    const [productList, setProductList] = useState({ purchase: [] })

    async function getDataFromServer() {
        const request = new Request(
            'http://localhost:3000/purchase',
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'appliaction/json',
                }),
            }
        )

        const response = await fetch(request)
        const data = await response.json()
        setProductList(data)
    }

    useEffect(() => {
        getDataFromServer()
    }, [])
    let incomes = 0;
    let costs = 0;
    let saleCharges = 0;
    let saleAmounts = 0;
    let products = (<>
        {productList && productList.purchase.map((value, index) => {
            incomes += value.income;
            costs += value.cost;
            saleCharges += value.saleCharge;
            saleAmounts += value.saleAmount;
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
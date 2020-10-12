import React, { useState, useEffect } from 'react'


function inventory() {

    // const [productList, setProductList] = useState([])

    // async function getDataFromServer() {
    //     const request = new Request(
    //         'http://192.168.1.106:3000/purchase',
    //         {
    //             method: 'GET',
    //             mode: 'cors',
    //             credentials: 'include',
    //             headers: new Headers({
    //                 Accept: 'application/json',
    //                 'Content-Type': 'appliaction/json',
    //             }),
    //         }
    //     )

    //     const response = await fetch(request)
    //     const data = await response.json()
    //     setProductList(data)

    // }

    // useEffect(() => {
    //     getDataFromServer()
    // }, [])
    // console.log('productlist', productlist)



    // const products = (<>
    //     {productlist.purchase.map((value, index) => {
    //         return (
    //             <tr>
    //                 <td className="products-table w-10p">{value.id}</td>
    //                 <td className="products-table">{value.product.name}</td>
    //                 <td className="products-table w-10p">{value.cost}</td>
    //                 <td className="products-table w-15p">{value.purchaseDate}</td>
    //                 <td className="products-table w-15p"></td>
    //             </tr>
    //         )
    //     })}
    // </>)


    return (<>
        <div className="m-0auto">
            <h3 className="mt-2 mb-2">存貨列表</h3>
            <table>
                <tr>
                    <th className="products-table w-10p">商品編號</th>
                    <th className="products-table">商品名稱</th>
                    <th className="products-table w-10p">商品成本</th>
                    <th className="products-table w-15p">進貨日期</th>
                    <th className="products-table w-15p">售出日期</th>
                </tr>

            </table>



        </div>


    </>)

}

export default inventory
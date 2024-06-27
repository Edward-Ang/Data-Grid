import React, { useState } from 'react';
import data from '../assets/data.json';

const Table: React.FC = () => {
    const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>({});

    const handleRowClick = (productId: number) => {
        setExpandedRows(prevState => ({
            ...prevState,
            [productId]: !prevState[productId]
        }));
    };

    return (
        <>
            <div className='w-full h-full p-12'>
                <div className="overflow-x-auto h-[300px] w-full max-w-[750px] flex justify-center top-0">
                    <table className="w-full bg-white border border-gray-300 relative">
                        <thead className="sticky top-0 z-10 bg-gray-100 border border-gray-300">
                            <tr>
                                <th className="px-2 py-2 border border-gray-300 text-left text-sm font-semibold text-gray-600">
                                </th>
                                <th className="px-2 py-2 border border-gray-300 text-left text-sm font-semibold text-gray-600">
                                    Product
                                </th>
                                <th className="px-2 py-2 border border-gray-300 text-left text-sm font-semibold text-gray-600">
                                    ID
                                </th>
                                <th className="px-2 py-2 border border-gray-300 text-left text-sm font-semibold text-gray-600">
                                    Unit Price
                                </th>
                                <th className="px-2 py-2 border border-gray-300 text-left text-sm font-semibold text-gray-600">
                                    Qty Per Unit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.products.map((product) => (
                                <React.Fragment key={product.ID}>
                                    <tr className={`${product.ID % 2 === 0 && 'bg-gray-100'} hover:bg-gray-100 cursor-pointer border-l border-r border-gray-300`} onClick={() => handleRowClick(product.ID)}>
                                        <td className="px-2 py-2 border border-gray-300 text-sm font-semibold text-gray-600">
                                            {expandedRows[product.ID] ? (
                                                <svg width={15} height={15} aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M96 224v64h320v-64z"></path>
                                                </svg>
                                            ) : (
                                                <svg width={15} height={15} aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M288 224V96h-64v128H96v64h128v128h64V288h128v-64z"></path>
                                                </svg>
                                            )}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-300 text-sm font-semibold text-gray-600">
                                            {product.Product}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-300 text-sm font-semibold text-gray-600">
                                            {product.ID}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-300 text-sm font-semibold text-gray-600">
                                            {product['Unit Price']}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-300 text-sm font-semibold text-gray-600">
                                            {product['Qty Per Unit']}
                                        </td>
                                    </tr>
                                    {expandedRows[product.ID] && (
                                        <tr>
                                            <td className={`${product.ID % 2 === 0 && 'bg-gray-100'}`}></td>
                                            <td colSpan={4} className={`${product.ID % 2 === 0 && 'bg-gray-100'}`}>
                                                <section className="p-2 text-sm">
                                                    <p className='mb-3.5'><strong>In Stock:</strong> {product['In Stock']} units</p>
                                                    <p className='mb-3.5'><strong>On Order:</strong> {product['On Order']} units</p>
                                                    <p className='mb-3.5'><strong>Reorder Level:</strong> {product['Reorder Level']} units</p>
                                                    <p className='mb-3.5'><strong>Discontinued:</strong> {product.Discontinued}</p>
                                                    <p className=''><strong>Category:</strong> {product.Category}</p>
                                                </section>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table;
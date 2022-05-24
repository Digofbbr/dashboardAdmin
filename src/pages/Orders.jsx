import React from 'react'
import { GridComponent, ContextMenu, ColumnsDirective, ColumnDirective,Filter,Inject, Sort, Page, ExcelExport, PdfExport, Edit, Resize  } from '@syncfusion/ej2-react-grids';
import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy'
import { Header} from '../components'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"  />

      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging={true} allowSorting={true}>
        <ColumnsDirective>
          {ordersGrid.map((order, index) => (
            <ColumnDirective key={index} {...order}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, ExcelExport, Edit, PdfExport, ContextMenu]}/>
      </GridComponent>
    </div>
  )
}

export default Orders
import React from 'react'

import TableItem from './TableItem.jsx'

export default class BuyTable extends React.Component{

	render(){

        let item = [
            ["5","无限容量","2G","32G","5G","750元"],
            ["5","无限容量","2G","32G","5G","750元"],
            ["5","无限容量","2G","32G","5G","750元"],
            ["5","无限容量","2G","32G","5G","750元"],
            ["5","无限容量","2G","32G","5G","750元"],
            ["5","无限容量","2G","32G","5G","750元"]
        ]

		return (
			<div className="comWidth">
				<span className="buy-tit">腾讯企业邮箱价格一览表</span>
                <table className="buy-table">
                    <thead>
                        <tr>
                            <th>用户数</th>
                            <th>邮箱容量</th>
                            <th>附件大小</th>
                            <th>个人中转站</th>
                            <th>企业网盘</th>
                            <th>参考价/年</th>
                        </tr>
                    </thead>
                    <TableItem item={item} />
                </table>
			</div>
		)
	}
}
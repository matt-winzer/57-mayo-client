import React, { Fragment } from 'react'
import { Table } from 'semantic-ui-react'

const ReviewTable = ({ market }) => {
  const {
    ratio,
    prices,
    rents
  } = market

  return (
    <Fragment>
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Prices</Table.HeaderCell>
            <Table.HeaderCell>Rents</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Market:</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US Average:</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Fragment>
  )
}
export default ReviewTable

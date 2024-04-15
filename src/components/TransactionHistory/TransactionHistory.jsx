import { Table, Td, Th } from './TransactionHistory.styled';

const TransactionHistory = items => {
  return (
    <Table class="transaction-history">
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;

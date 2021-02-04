import react from 'react';

const EmptyCart = () => {
  return (
    <div>
      <h1>Cart</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td> Jersey </td>
              <td> </td>
              <td>
                {' '}
                <input type="number" />{' '}
              </td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3>Cart total</h3>
        <p>Total: </p>
        <button>Proceed To checkout</button>
      </div>
    </div>
  );
};

export default EmptyCart;

import Payment from "./Partials/Payment";
export default function Orders({ user, orders }) {
    return (
        <div>
            <h1>Welcome back {user.name}!</h1>
            {orders.map((order) => {
                if (order.state == "OPEN") {
                    return (
                        <div key={order.id}>
                            <h2>{JSON.parse(order.items_names)}</h2>
                            <p>{order.order_total}</p>
                            <p>{order.state}</p>
                            <Payment id={order.id} amount={order.order_total} />
                        </div>
                    );
                }
            })}
        </div>
    );
}

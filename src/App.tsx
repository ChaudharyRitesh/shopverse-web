import CustomRoutes from "./routes/Rotues";
// import { gql, useQuery } from "@apollo/client";
// import UserRegisterForm from "./components/form";

// interface User {
//   _id: string;
//   username: string;
//   email: string;
//   cartId: string;
// }

function App() {
  // const GET_USERS = gql`
  //   query ExampleQuery {
  //     getAllUsers {
  //       _id
  //       username
  //       email
  //       cartId
  //     }
  //   }
  // `;

  // const { loading, error, data, refetch } = useQuery(GET_USERS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {/* <div>
        <h1>User List</h1>
        {data.getAllUsers.map((user: User) => (
          <div key={user._id}>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p>{user.cartId}</p>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "50px",
        }}
      >
        <UserRegisterForm refetchUsers={refetch} />
      </div> */}
      <CustomRoutes />
    </>
  );
}

export default App;

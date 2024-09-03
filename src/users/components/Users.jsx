import React, { useState, useEffect } from 'react';
import { UserService } from '../services/UserService';

const Users = () => {
  const [state, setState] = useState({
    users: [],
    loading: false,
    error: '',
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        setState({
          ...state,
          loading: true,
        });

        let response = await UserService.getUsers();
        let { data } = response;

        setState({
          ...state,
          loading: false,
          users: data,
        });
      } catch (error) {
        setState({
          ...state,
          error: error.message,
        });
      }
    };

    getUsers();
  }, []);

  let { loading, error, users } = state;

  return (
    <>
      {loading && <>Loading...</>}

      {error && <>Something went wrong ... {error}</>}

      <pre>{JSON.stringify(users)}</pre>

      {users &&
        users.map((user) => {
          return (
            <div
              className="card m-3 shadow-lg"
              style={{ width: '18rem' }}
              key={user.id}
            >
              <img className="card-img-top" src="cxvc" alt="" />
              <div className="card-body">
                <h5 className="card-title text-success">{user.name}</h5>
                <p className="card-text text-secondary">
                  {user.company.catchPhrase}
                </p>
                <h6 className="card-title text-primary mb-3">{user.email}</h6>
                <a href="#g" className="btn btn-success">
                  {user.username}
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Users;

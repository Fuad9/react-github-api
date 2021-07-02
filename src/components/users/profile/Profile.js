import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGithubUsers } from "../../../store/actions/devActions";
import { getGithubUserRepos } from "../../../store/actions/repoActions";
import Repos from "../repos/Repos";

export default function Profile() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const devs = useSelector((state) => state.devs);
  const repos = useSelector((state) => state.repos);

  useEffect(() => {
    dispatch(getGithubUsers(search));
    dispatch(getGithubUserRepos(search));
  }, [dispatch, search]);

  return (
    <>
      <div>
        <h1 className="my-3">Search GitHub Users</h1>
        <div className="mx-auto d-flex justify-content-center my-5">
          <input
            type="text"
            className="form-control w-50"
            onBlur={(e) => setSearch(e.target.value)}
            placeholder="search user"
          />

          <button className="btn btn-primary">Search</button>
        </div>

        <div className="d-flex border border-success">
          <div className="d-flex justify-content-center">
            {devs && (
              <div>
                <div className="">
                  <img className="w-50" src={devs.avatar_url} alt="" />
                </div>

                <h1>
                  <a href={devs.html_url}>{devs.name}</a>
                </h1>

                <h6>{devs.bio}</h6>

                <div className="text-left">
                  <h5>
                    <span>Location:</span> {devs.location}
                  </h5>

                  <h5>
                    <span>Public Repos:</span>
                    {devs.public_repos}
                  </h5>

                  <h5>
                    <span>Created:</span>
                    {devs.created_at}
                  </h5>

                  <h5>
                    <span>Updated:</span>
                    {devs.updated_at}
                  </h5>

                  <h5>
                    <span>Followers:</span>
                    {devs.followers}
                  </h5>

                  <h5>
                    <span>Following:</span>
                    {devs.following}
                  </h5>
                </div>
              </div>
            )}
          </div>

          <div>
            <table className="table table-borderless text-white">
              <thead>
                <tr>
                  <td className="text-left">Repo Name</td>
                  <td>Forks</td>
                  <td>Open Issues</td>
                  <td>Language</td>
                </tr>
              </thead>
              <tbody>
                <Repos repos={repos} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

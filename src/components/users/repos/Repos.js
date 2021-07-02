export default function Repos({ repos }) {
  return (
    <>
      {repos?.map((repo) => (
        <tr>
          <td className="text-left">
            <a href={repo.html_url} alt="">
              {repo.name}
            </a>
          </td>
          <td>{repo.forks}</td>
          <td>{repo.open_issues}</td>
          <td>{repo.language}</td>
        </tr>
      ))}
    </>
  );
}

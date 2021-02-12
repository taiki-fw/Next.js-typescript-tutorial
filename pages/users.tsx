import { NextPage } from "next";
import useSwr from "swr";
import {
  Decoder,
  array,
  object,
  number,
  string,
} from "@mojotech/json-type-validation";
import type { User } from "./api/users";

const userDecoder: Decoder<User[]> = array(
  object({
    id: number(),
    firstName: string(),
    familyName: string(),
  })
);

const fetcher: (url: string) => Promise<User[]> = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then(userDecoder.runPromise);

const Users: NextPage = () => {
  const { data, error } = useSwr<User[]>("/api/users", fetcher);

  if (error) {
    console.log({ error });
    return <p>error</p>;
  }

  if (data === undefined) {
    return <p>loading ...</p>;
  }

  return (
    <ul>
      {data.map((d, idx) => (
        <li key={idx}>
          <span>{d.id}</span>: {d.firstName} {d.familyName}
        </li>
      ))}
    </ul>
  );
};

export default Users;

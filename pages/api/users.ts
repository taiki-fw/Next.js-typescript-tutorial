import type { NextApiRequest, NextApiResponse } from "next";

export type User = {
  id: number;
  name: string;
};

const users = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<User>>
) {
  res.status(200).json(users);
}

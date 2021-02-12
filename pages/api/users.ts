import type { NextApiRequest, NextApiResponse } from "next";

export type User = {
  id: number;
  firstName: string;
  familyName: string;
};

const users = [
  { id: 1, firstName: "a", familyName: "A" },
  { id: 2, firstName: "b", familyName: "B" },
  { id: 3, firstName: "c", familyName: "C" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<User>>
) {
  res.status(200).json(users);
}

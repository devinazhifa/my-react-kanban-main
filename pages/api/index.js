import listData from "../../list";

export default function handler(req, res) {
  res.status(200).json(listData);
}
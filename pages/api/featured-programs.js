import { useProgramStore } from "@/store/programStore";

export default function handler(
  req,
  res,
) {
  const programs = useProgramStore((state) => state.programs);
  const activePrograms = Object.values(programs).find((program) => program.active);

  var response = [];
  activePrograms.array.forEach(element => {
    response.push(element);
  });
  res.status(200).json({hello: "test"});
}
import { execSync } from "child_process";
import path from "path";

const execute = (command: string): void => {
  execSync(command, { stdio: "inherit" });
};

const executeAndRetrieveStdout = (command: string): string => {
  return execSync(command).toString().trim();
};

const imageTag = "batch:latest";
const rootDir = path.resolve(__dirname, "../../");
const scriptDir = path.resolve(__dirname);

execute(`docker build -t ${imageTag} -f ${scriptDir}/Dockerfile ${rootDir}`);
const containerId = executeAndRetrieveStdout(`docker create ${imageTag}`);
execute(`docker cp ${containerId}:/work/package.zip ${scriptDir}/package.zip`);
execute(`docker rm ${containerId}`);

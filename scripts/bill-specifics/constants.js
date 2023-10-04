import path from "path";
import os from "os";

export const desktopPath = path.join(os.homedir(), "Desktop");
export const jsonPath = path.resolve("../../preview-gui");

export const exists = (i) => i;

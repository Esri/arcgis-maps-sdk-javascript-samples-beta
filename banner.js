/* Copyright 2023 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require("fs");
const path = require("path");

const directoryPath = "."; // Replace with the directory path you want to process

const banner = `/* Copyright 2023 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */`;

function addBannerToFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${filePath}`);
      return;
    }

    if (!data.startsWith(banner)) {
      fs.writeFile(filePath, banner + "\n\n" + data, "utf8", (err) => {
        if (err) {
          console.error(`Error writing file: ${filePath}`);
        } else {
          console.log(`Added banner to: ${filePath}`);
        }
      });
    } else {
      console.log(`Banner already exists in: ${filePath}`);
    }
  });
}

function processFilesInDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${directoryPath}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error getting file stats: ${filePath}`);
          return;
        }

        if (stats.isDirectory()) {
          // Skip the 'node_modules' directory
          if (file !== "node_modules") {
            processFilesInDirectory(filePath);
          }
        } else if ([".js", ".ts", ".tsx"].includes(path.extname(file))) {
          addBannerToFile(filePath);
        }
      });
    });
  });
}

processFilesInDirectory(directoryPath);

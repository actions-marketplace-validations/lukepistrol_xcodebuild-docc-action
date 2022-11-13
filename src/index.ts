import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function main() {
  const scheme = core.getInput('scheme');
  const platform = core.getInput('platform');
  const outputPath = core.getInput('output-path');
  const clean = core.getInput('clean');

  // execute xcodebuild docbuild
  await exec.exec('xcodebuild', [
    'clean',
    'docbuild',
    `-scheme ${scheme}`,
    `-destination generic/platform=${platform}`,
    'OTHER_DOCC_FLAGS="--transform-for-static-hosting',
    `--hosting-base-path ${scheme}`,
    `--output-path ${outputPath}"`
  ]);  
}

(async () => {
  try {
    await main();
  } catch (error: any) {
    core.setFailed(error);
  }
})();

import * as core from '@actions/core';

export function getVsTestPath(): string {
  
  core.info("\"C:/Program\ Files/Microsoft\ Visual\ Studio/2022/Enterprise/Common7/IDE/CommonExtensions/Microsoft/TestWindow/vstest.console.exe\"")
  return "\"C:/Program\ Files/Microsoft\ Visual\ Studio/2022/Enterprise/Common7/IDE/CommonExtensions/Microsoft/TestWindow/vstest.console.exe\""
  
  // let vstestLocationMethod = core.getInput('vstestLocationMethod')
  // if(vstestLocationMethod && vstestLocationMethod.toUpperCase() === "LOCATION") {
  //   return core.getInput('vstestLocation')
  // }

  // let vsTestVersion = core.getInput('vsTestVersion')
  // if(vsTestVersion && vsTestVersion === "14.0") {
  //   return path.join(__dirname, 'win-x64/VsTest/v140/vstest.console.exe')
  // }

  // if(vsTestVersion && vsTestVersion === "15.0") {
  //   return path.join(__dirname, 'win-x64/VsTest/v150/Common7/IDE/Extensions/TestPlatform/vstest.console.exe')
  // }

  // return path.join(__dirname, 'win-x64/VsTest/v160/Common7/IDE/Extensions/TestPlatform/vstest.console.exe')
}

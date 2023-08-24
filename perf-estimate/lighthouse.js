import lighthouse from 'lighthouse'
import { launch } from 'chrome-launcher'
import { writeFile } from 'fs'

async function runLighthouse() {
  const chrome = await launch()
  const options = {
    logLevel: 'info',
    output: 'html', // 'json', 'html', or 'csv'
    onlyCategories: ['performance'], // List of audit categories
    port: chrome.port
  }

  const runnerResult = await lighthouse('http://localhost:5173', options)
  //   const runnerResult = await lighthouse('https://amisapp.misa.vn/review/target', options)
  await chrome.kill()

  const reportHtml = runnerResult.report
  writeFile('lighthouse-report.html', reportHtml, (err) => {
    if (err) console.error('Error writing report', err)
    else console.log('Report saved')
  })
}

runLighthouse()

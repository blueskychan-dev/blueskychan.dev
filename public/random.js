console.log("What are you doing here? ;-;")
console.log(
  "Tips: If you add stright=true to the URL, the font will change to Roboto, easier to read :3",
)
console.log("Sometimes this world is great, but sometimes it sucks.... :c")
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
sleep(2500).then(() => {
  console.log(
    "%c Something went wrong... :c",
    "color: #FF69B4; font-size: 20px; font-weight: bold;",
  )
  console.log(
    "%cAlso check out my gallery too! :3 (/gallery)",
    "color: #FF69B4; font-size: 20px; font-weight: bold;",
  )
})


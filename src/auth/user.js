import { dateTimeNow, dateTimeNowFormatted, delay } from "../util/util"

export async function getUserToken(username, password){
  console.info(`[${dateTimeNowFormatted()}] "${username}" attempting login`)
  //  should get user profile from db, and handle bad login
  await delay(2000)
  console.info(`[${dateTimeNowFormatted()}] "${username}" logged in successfully`)
  let minutes_until_expire = 5;  //should be configurable from app settings
  token = {
    "username": username, 
    "expiry": new Date(dateTimeNow().getTime() + minutes_until_expire*60000)
  }
  return token
}


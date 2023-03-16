import React, { useEffect, useState } from "react"
import axios from "axios"
import { riot_token } from "../../token"

export const Player = ({ query, method }) => {
  const [player, setPlayer] = useState("")

  useEffect(() => {
    if (!query) return
    axios
      .get(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-${method}/${query}?api_key=${riot_token}`
      )
      .then((res) => {
        setPlayer(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [query])

  return (
    <>
      {player && (
        <div>
          <table className="m-8 border-separate border-spacing-5 border-none">
            <thead>
              <tr>
                <th className="border-none text-gray-900 dark:text-white">
                  Pseudo
                </th>
                <th className="border-none text-gray-900 dark:text-white">
                  Level
                </th>
                <th className="border-none text-gray-900 dark:text-white">
                  Puuid
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-none text-gray-900 dark:text-white hover:border-indigo-500">
                  {player.name}
                </td>
                <td className="border-none text-gray-900 dark:text-white hover:border-indigo-500 text-center">
                  {player.summonerLevel}
                </td>
                <td className="border-none text-gray-900 dark:text-white hover:border-indigo-500">
                  {player.puuid}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

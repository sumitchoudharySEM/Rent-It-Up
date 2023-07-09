import { Button } from "@chakra-ui/react"
import React from "react"
import { useAuthContext } from "../hooks/useAuthContext"
export function Logout() {
  const { signOut } = useAuthContext()

  return (
    <Button
      p="6"
      textColor="white"
      backgroundColor="#1da1f2"
      fontSize="md"
      onClick={() => {
        signOut()
      }}
    >
      Log Out
    </Button>
  )
}

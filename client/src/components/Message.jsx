import { Alert } from "@mui/material"

const Message = ({ variant, children }) => {
  return (
    <Alert severity={variant}>{children}</Alert>
  )
}

export default Message
import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
const AuthPage = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' height='100vh'>
      <Box component='form' display='flex' flexDirection='column' width='250px' gap={5}>
        <FormControl>
          <InputLabel htmlFor='id'>아이디</InputLabel>
          <Input id='id' aria-describedby='id-helper-text' />
          <FormHelperText id='id-helper-text'>아이디 입력해주세요.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='password'>비밀번호</InputLabel>
          <Input type='password' id='password' aria-describedby='password-helper-text' />
          <FormHelperText id='password-helper-text'>비밀번호를 입력해주세요.</FormHelperText>
        </FormControl>
        <Button type='submit'>로그인</Button>
      </Box>
    </Box>
  )
}

export default AuthPage

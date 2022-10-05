import { useContext } from 'react'
import { Menu, MenuItem, ListItemIcon } from '@mui/material'
import { Settings, Logout } from '@mui/icons-material'
import { Context } from '../../context/contextprovider.context'

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  const { setCurrentUser } = useContext(Context)
  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null)
  }
  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onClick={handleCloseUserMenu}
    >
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize='small' />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={() => setCurrentUser(null)}>
        <ListItemIcon>
          <Logout fontSize='small' />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  )
}

export default UserMenu

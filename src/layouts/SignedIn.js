import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item >
        <Image avatar spaced="right" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-nzdgg&psig=AOvVaw3r_gdaJuaM5cwsP3Wy8xIr&ust=1704310478149000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjehsO5v4MDFQAAAAAdAAAAABAD"/>
        <Dropdown pointing="top left" text="Rukiye">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim"  icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çıkış Yap"  icon="sign-out"/>
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}

import React from 'react'

function FooterWpp() {
  return (
    <div className="flex justify-center w-100 flex-row bg-action-secondary pt5">
      <div className="flex flex-column items-center mh6 white-50">
        <a
          href="
          https://api.whatsapp.com/send?phone=5521996091095&text=Ol%C3%A1%2C%20gostaria%20de%20um%20suporte"
          className="grow-large"
        >
          <img
            width="24px"
            src="https://image.flaticon.com/icons/png/512/1384/1384162.png"
          />
        </a>
        <p>SUPORTE</p>
      </div>
    </div>
  )
}

export default FooterWpp

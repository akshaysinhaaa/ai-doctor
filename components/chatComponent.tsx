import React from 'react'

type Props = {
    reportData: string
}

const ChatComponent = ({ reportData }: Props) => {
  return (
    <div className='h-full bg-muted/50 relative flex flex-col min-h-[50vh] rounded-xl p-4 gap-4'>ChatComponent</div>
  )
}

export default ChatComponent
import React from 'react'
import { Badge } from "@/components/ui/badge"

type Props = {
    reportData: string
}

const ChatComponent = ({ reportData }: Props) => {
  return (
    <div className='h-full bg-muted/50 relative flex flex-col min-h-[50vh] rounded-xl p-4 gap-4'>
        <Badge className='absolute right-3 top-1.5' variant={'outline'}>{reportData ? 'Report Added' : 'No Report Added'}</Badge>
    </div>
  )
}

export default ChatComponent
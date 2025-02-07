import React from 'react'

import { useChat } from 'ai/react';
import { Badge } from "@/components/ui/badge"
import MessageBox from './messageBox';

type Props = {
    reportData: string
}

const ChatComponent = ({ reportData }: Props) => {
    const { messages, input, handleInputChange, handleSubmit, isLoading, data } = useChat();

  return (
    <div className='h-full bg-muted/50 relative flex flex-col min-h-[50vh] rounded-xl p-4 gap-4'>
        <Badge className={`absolute right-3 top-1.5 ${reportData && 'bg-[#00B612]'}`} 
        variant={'outline'}>{reportData ? 'Report Added' : 'No Report Added'}</Badge>
        <div className='flex-1'></div>
        <div className='flex flex-col gap-4'>
            {
                messages.map((m, idx)=>{
                    return <MessageBox key={idx} role={m.role} content={m.content} />
                })
            }
        </div>

    </div>
  )
}

export default ChatComponent